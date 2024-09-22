export function splitText(text: string): string[] {
    return text.split(/\b|\n/).filter((v) => v !== " ");
}

export function isPunctuation(text: string): boolean {
    return !/[a-zA-Z]/.test(text);
}
