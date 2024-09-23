export function splitText(text: string): string[] {
    return text.split(/\b|\n|\s/).filter((v) => v !== " ");
}

export function isPunctuation(text: string): boolean {
    return !/[a-zA-Z]/.test(text);
}

export function endsSpace(text: string) {
    
}