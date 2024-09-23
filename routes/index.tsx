export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <h1 class="text-3xl text-center">Scripture Comparison</h1>
      <div class="mt-4 max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <ul>
          <li>
            <a class="underline" href="/joseph-smith-matthew">
              Joseph Smith Matthew
            </a>
          </li>
          <li>
            <a class="underline" href="/isaiah-50-52">
              Isaiah 50 - 52
            </a>
          </li>
          <li>
            <a class="underline" href="/isaiah-2-14">
              Isaiah 2 - 14
            </a>
          </li>
          <li>
            <a class="underline" href="/sermon-on-the-mount">
              Sermon on the Mount
            </a>
          </li>
          <li>
            <a class="underline" href="/malachi-3-4">
              Malachi 3 - 4
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
