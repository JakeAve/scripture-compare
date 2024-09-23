import { splitText } from "./textHelpers.ts";

export function diff(oldText: string, newText: string) {
    const oldTokens = splitText(oldText);
    const newTokens = splitText(newText);

    const changes = [];
    const matrix = Array(oldTokens.length + 1).fill(null).map(() =>
        Array(newTokens.length + 1).fill(0)
    );

    for (let i = 0; i <= oldTokens.length; i++) {
        for (let j = 0; j <= newTokens.length; j++) {
            if (i === 0) {
                matrix[i][j] = j;
            } else if (j === 0) {
                matrix[i][j] = i;
            } else if (oldTokens[i - 1] === newTokens[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }

    let i = oldTokens.length;
    let j = newTokens.length;
    while (i > 0 && j > 0) {
        if (oldTokens[i - 1] === newTokens[j - 1]) {
            changes.unshift({
                value: oldTokens[i - 1],
                added: false,
                removed: false,
            });
            i--;
            j--;
        } else if (matrix[i - 1][j] < matrix[i][j - 1]) {
            changes.unshift({ value: oldTokens[i - 1], removed: true });
            i--;
        } else {
            changes.unshift({ value: newTokens[j - 1], added: true });
            j--;
        }
    }

    while (i > 0) {
        changes.unshift({ value: oldTokens[i - 1], removed: true });
        i--;
    }

    while (j > 0) {
        changes.unshift({ value: newTokens[j - 1], added: true });
        j--;
    }

    return changes;
}
