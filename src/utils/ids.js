export function getFontId(fontFamily) {
    return fontFamily.replace(/\s+/g, "-").toLowerCase();
}
export function validatePickerId(pickerId) {
    if (pickerId.match(/[^0-9a-z]/i)) {
        throw Error("The `pickerId` parameter may only contain letters and digits");
    }
}
//# sourceMappingURL=ids.js.map