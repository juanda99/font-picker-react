import { getFontId } from "../utils/ids";
var previewFontsStylesheet = document.createElement("style");
document.head.appendChild(previewFontsStylesheet);
export function applyFontPreview(previewFont, selectorSuffix) {
    var fontId = getFontId(previewFont.family);
    var style = "\n\t\t\t#font-button-" + fontId + selectorSuffix + " {\n\t\t\t\tfont-family: \"" + previewFont.family + "\";\n\t\t\t}\n\t\t";
    previewFontsStylesheet.appendChild(document.createTextNode(style));
}
function getActiveFontStylesheet(selectorSuffix) {
    var stylesheetId = "active-font-" + selectorSuffix;
    var activeFontStylesheet = document.getElementById(stylesheetId);
    if (!activeFontStylesheet) {
        activeFontStylesheet = document.createElement("style");
        activeFontStylesheet.id = stylesheetId;
        document.head.appendChild(activeFontStylesheet);
    }
    return activeFontStylesheet;
}
export function applyActiveFont(activeFont, previousFontFamily, selectorSuffix) {
    var style = "\n\t\t.apply-font" + selectorSuffix + " {\n\t\t\tfont-family: \"" + activeFont.family + "\"" + (previousFontFamily ? ", \"" + previousFontFamily + "\"" : "") + ";\n\t\t}\n\t";
    var activeFontStylesheet = getActiveFontStylesheet(selectorSuffix);
    activeFontStylesheet.innerHTML = style;
}
//# sourceMappingURL=declarations.js.map