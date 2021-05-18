import { getFontId } from "../utils/ids";
import getMatches from "../utils/regex";
var FONT_FACE_REGEX = /@font-face {([\s\S]*?)}/gm;
var FONT_FAMILY_REGEX = /font-family: ['"](.*?)['"]/gm;
export default function extractFontStyles(allFontStyles) {
    var rules = getMatches(FONT_FACE_REGEX, allFontStyles);
    var fontStyles = {};
    rules.forEach(function (rule) {
        var fontFamily = getMatches(FONT_FAMILY_REGEX, rule)[0];
        var fontId = getFontId(fontFamily);
        if (!(fontId in fontStyles)) {
            fontStyles[fontId] = "";
        }
        fontStyles[fontId] += "@font-face {\n" + rule + "\n}\n\n";
    });
    return fontStyles;
}
//# sourceMappingURL=extractFontStyles.js.map