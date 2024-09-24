import "$std/dotenv/load.ts";

const dirs = ["./static/imgs"];

const exts = [".png", ".jpeg", ".jpg"];

const imagePaths = (await Promise.all(dirs.map(findFiles))).flat();

async function exists(filename: string): Promise<boolean> {
  try {
    await Deno.stat(filename);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw error;
    }
  }
}

async function findFiles(dir: string) {
  const files = [];
  const entries = Deno.readDir(dir);
  for await (const entry of entries) {
    if (entry.isFile && exts.some((ext) => entry.name.endsWith(ext))) {
      const webpEquivelant = entry.name.replace(/\.\w+$/, "-lg.webp");
      const alreadyExists = await exists(`${dir}/${webpEquivelant}`);
      if (!alreadyExists) {
        files.push(`${dir}/${entry.name}`);
      }
    }
  }
  return files;
}

const CWEBP_PATH = Deno.env.get("CWEBP_PATH") as string;

interface Conversion {
  originalImg: string;
  pathXl: string;
  pathLg: string;
  pathMd: string;
  pathSm: string;
}

async function convertAndSaveImg(originalFilePath: string) {
  const filePath = originalFilePath.substring(
    0,
    originalFilePath.lastIndexOf("."),
  );
  const pathXl = `${filePath}-xl.webp`;
  const pathLg = `${filePath}-lg.webp`;
  const pathMd = `${filePath}-md.webp`;
  const pathSm = `${filePath}-sm.webp`;
  const pathXs = `${filePath}-xs.webp`;

  const cmdXl = new Deno.Command(CWEBP_PATH, {
    args: [
      "-q",
      "95",
      "-resize",
      "1800",
      "0",
      originalFilePath,
      "-o",
      `${Deno.cwd()}/${pathXl}`,
    ],
  });

  const cmdLg = new Deno.Command(CWEBP_PATH, {
    args: [
      "-q",
      "90",
      "-resize",
      "800",
      "0",
      originalFilePath,
      "-o",
      `${Deno.cwd()}/${pathLg}`,
    ],
  });
  const cmdMd = new Deno.Command(CWEBP_PATH, {
    args: [
      "-q",
      "90",
      "-resize",
      "350",
      "0",
      originalFilePath,
      "-o",
      `${Deno.cwd()}/${pathMd}`,
    ],
  });
  const cmdSm = new Deno.Command(CWEBP_PATH, {
    args: [
      "-q",
      "90",
      "-resize",
      "100",
      "0",
      originalFilePath,
      "-o",
      `${Deno.cwd()}/${pathSm}`,
    ],
  });
  const cmdXs = new Deno.Command(CWEBP_PATH, {
    args: [
      "-q",
      "80",
      "-resize",
      "20",
      "0",
      originalFilePath,
      "-o",
      `${Deno.cwd()}/${pathXs}`,
    ],
  });
  const results = await Promise.all([
    cmdXl.output(),
    cmdLg.output(),
    cmdMd.output(),
    cmdSm.output(),
    cmdXs.output(),
  ]);
  results.forEach(({ code, stderr }) => {
    if (code !== 0) {
      const error = new TextDecoder().decode(stderr);
      console.error(error);
      throw new Error(error);
    }
  });
  return {
    originalImg: originalFilePath,
    pathXl,
    pathLg,
    pathMd,
    pathSm,
  } as Conversion;
}

const conversions = await Promise.allSettled(imagePaths.map(convertAndSaveImg));

const fulfilled: Conversion[] = conversions
  .filter((result) => result.status === "fulfilled")
  .map((result) => (result as PromiseFulfilledResult<Conversion>).value);

conversions
  .filter((result) => result.status === "rejected")
  .map((result) => {
    result = result as PromiseRejectedResult;
    console.error(result.reason);
    return result.reason;
  });

if (!fulfilled.length) {
  console.log("No new image files found");
} else {
  console.log("Please check the new .webp files in your directories.");
  console.log(
    "If you are satisfied with them, enter 'yes' to delete the old files.",
  );
  console.log("If not, enter anything else to keep them.");

  const input = prompt(":");

  if (input?.trim()?.toLocaleLowerCase() === "yes") {
    const removedFiles = await Promise.all(
      fulfilled.map(async ({ originalImg }) => {
        await Deno.remove(originalImg);
        return originalImg;
      }),
    );
    console.log(`The following files were removed: ${removedFiles}`);
  } else {
    const keptFiles = fulfilled.map(({ originalImg }) => originalImg);
    console.log(`The following files were kept: ${keptFiles}`);
  }
}
