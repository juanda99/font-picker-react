var PREVIEW_ATTRIBUTE_NAME = "data-is-preview";
function getStylesheetId(fontId) {
    return "font-" + fontId;
}
export function stylesheetExists(fontId, isPreview) {
    var stylesheetNode = document.getElementById(getStylesheetId(fontId));
    if (isPreview === null || isPreview === undefined) {
        return stylesheetNode !== null;
    }
    return (stylesheetNode !== null &&
        stylesheetNode.getAttribute(PREVIEW_ATTRIBUTE_NAME) === isPreview.toString());
}
export function createStylesheet(fontId, isPreview) {
    var stylesheetNode = document.createElement("style");
    stylesheetNode.id = getStylesheetId(fontId);
    stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    document.head.appendChild(stylesheetNode);
}
export function fillStylesheet(fontId, styles) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.textContent = styles;
    }
    else {
        console.error("Could not fill stylesheet: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}
export function setStylesheetType(fontId, isPreview) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    }
    else {
        console.error("Could not change stylesheet type: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}
//# sourceMappingURL=stylesheets.js.map