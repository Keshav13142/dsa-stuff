export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const m = Math.floor((low + high) / 2);
        const curr = haystack[m];

        if (curr === needle) return true;
        else if (curr > needle) high = m - 1;
        else low = m + 1;
    }

    return false;
}
