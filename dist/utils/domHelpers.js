// Nullkontroll
export function elementNullCheck(selector, searchStart) {
    const el = (searchStart || document).querySelector(selector);
    if (!el)
        throw new Error(`${selector} not found.`);
    return el;
}
//# sourceMappingURL=domHelpers.js.map