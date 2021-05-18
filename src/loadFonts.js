var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { applyActiveFont, applyFontPreview } from "./font-styles/declarations";
import { createStylesheet, fillStylesheet, setStylesheetType, stylesheetExists, } from "./font-styles/stylesheets";
import extractFontStyles from "./google-fonts/extractFontStyles";
import getStylesheet from "./google-fonts/fontStylesheet";
export function loadFontPreviews(fonts, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontsArray, fontsToFetch, response, fontStyles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fontsArray = Array.from(fonts.values());
                    fontsToFetch = fontsArray
                        .map(function (font) { return font.id; })
                        .filter(function (fontId) { return !stylesheetExists(fontId); });
                    fontsToFetch.forEach(function (fontId) { return createStylesheet(fontId, true); });
                    return [4, getStylesheet(fontsArray, scripts, variants, true)];
                case 1:
                    response = _a.sent();
                    fontStyles = extractFontStyles(response);
                    fontsArray.forEach(function (font) {
                        applyFontPreview(font, selectorSuffix);
                        if (fontsToFetch.includes(font.id)) {
                            if (!(font.id in fontStyles)) {
                                console.error("Missing styles for font \"" + font.family + "\" (fontId \"" + font.id + "\") in Google Fonts response");
                                return;
                            }
                            fillStylesheet(font.id, fontStyles[font.id]);
                        }
                    });
                    return [2];
            }
        });
    });
}
export function loadActiveFont(font, previousFontFamily, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontStyle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!stylesheetExists(font.id, false)) return [3, 1];
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    return [3, 3];
                case 1:
                    if (stylesheetExists(font.id, true)) {
                        setStylesheetType(font.id, false);
                    }
                    else {
                        createStylesheet(font.id, false);
                    }
                    return [4, getStylesheet([font], scripts, variants, false)];
                case 2:
                    fontStyle = _a.sent();
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    fillStylesheet(font.id, fontStyle);
                    _a.label = 3;
                case 3: return [2];
            }
        });
    });
}
//# sourceMappingURL=loadFonts.js.map