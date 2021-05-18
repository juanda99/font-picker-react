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
import "./picker-styles/styles.scss";
import getFontList from "./google-fonts/fontList";
import { loadActiveFont, loadFontPreviews } from "./loadFonts";
import { FONT_FAMILY_DEFAULT, OPTIONS_DEFAULTS } from "./types";
import { getFontId, validatePickerId } from "./utils/ids";
var FontManager = (function () {
    function FontManager(apiKey, defaultFamily, _a, onChange) {
        if (defaultFamily === void 0) { defaultFamily = FONT_FAMILY_DEFAULT; }
        var _b = _a.pickerId, pickerId = _b === void 0 ? OPTIONS_DEFAULTS.pickerId : _b, _c = _a.families, families = _c === void 0 ? OPTIONS_DEFAULTS.families : _c, _d = _a.categories, categories = _d === void 0 ? OPTIONS_DEFAULTS.categories : _d, _e = _a.scripts, scripts = _e === void 0 ? OPTIONS_DEFAULTS.scripts : _e, _f = _a.variants, variants = _f === void 0 ? OPTIONS_DEFAULTS.variants : _f, _g = _a.filter, filter = _g === void 0 ? OPTIONS_DEFAULTS.filter : _g, _h = _a.limit, limit = _h === void 0 ? OPTIONS_DEFAULTS.limit : _h, _j = _a.sort, sort = _j === void 0 ? OPTIONS_DEFAULTS.sort : _j;
        if (onChange === void 0) { onChange = function () { }; }
        this.fonts = new Map();
        validatePickerId(pickerId);
        this.selectorSuffix = pickerId ? "-" + pickerId : "";
        this.apiKey = apiKey;
        this.options = {
            pickerId: pickerId,
            families: families,
            categories: categories,
            scripts: scripts,
            variants: variants,
            filter: filter,
            limit: limit,
            sort: sort
        };
        this.onChange = onChange;
        this.addFont(defaultFamily, false);
        this.setActiveFont(defaultFamily, false);
    }
    FontManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fonts, _loop_1, this_1, i, state_1, fontsToLoad;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getFontList(this.apiKey)];
                    case 1:
                        fonts = _a.sent();
                        _loop_1 = function (i) {
                            var font = fonts[i];
                            if (this_1.fonts.size >= this_1.options.limit) {
                                return "break";
                            }
                            if (!this_1.fonts.has(font.family) &&
                                (this_1.options.families.length === 0 || this_1.options.families.includes(font.family)) &&
                                (this_1.options.categories.length === 0 || this_1.options.categories.includes(font.category)) &&
                                this_1.options.scripts.every(function (script) { return font.scripts.includes(script); }) &&
                                this_1.options.variants.every(function (variant) { return font.variants.includes(variant); }) &&
                                this_1.options.filter(font) === true) {
                                this_1.fonts.set(font.family, font);
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < fonts.length; i += 1) {
                            state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                        fontsToLoad = new Map(this.fonts);
                        fontsToLoad["delete"](this.activeFontFamily);
                        loadFontPreviews(fontsToLoad, this.options.scripts, this.options.variants, this.selectorSuffix);
                        return [2, this.fonts];
                }
            });
        });
    };
    FontManager.prototype.getFonts = function () {
        console.log(this.fonts);
        console.log('kkkkkkkk');
        return this.fonts;
    };
    FontManager.prototype.addFont = function (fontFamily, downloadPreview) {
        if (downloadPreview === void 0) { downloadPreview = true; }
        var font = {
            family: fontFamily,
            id: getFontId(fontFamily)
        };
        this.fonts.set(fontFamily, font);
        if (downloadPreview) {
            var fontMap = new Map();
            fontMap.set(fontFamily, font);
            loadFontPreviews(fontMap, this.options.scripts, this.options.variants, this.selectorSuffix);
        }
    };
    FontManager.prototype.removeFont = function (fontFamily) {
        this.fonts["delete"](fontFamily);
    };
    FontManager.prototype.getActiveFont = function () {
        var activeFont = this.fonts.get(this.activeFontFamily);
        if (!activeFont) {
            throw Error("Cannot get active font: \"" + this.activeFontFamily + "\" is not in the font list");
        }
        else {
            return activeFont;
        }
    };
    FontManager.prototype.setActiveFont = function (fontFamily, runOnChange) {
        var _this = this;
        if (runOnChange === void 0) { runOnChange = true; }
        var previousFontFamily = this.activeFontFamily;
        var activeFont = this.fonts.get(fontFamily);
        if (!activeFont) {
            throw Error("Cannot update active font: \"" + fontFamily + "\" is not in the font list");
        }
        this.activeFontFamily = fontFamily;
        loadActiveFont(activeFont, previousFontFamily, this.options.scripts, this.options.variants, this.selectorSuffix).then(function () {
            if (runOnChange) {
                _this.onChange(activeFont);
            }
        });
    };
    FontManager.prototype.setOnChange = function (onChange) {
        this.onChange = onChange;
    };
    return FontManager;
}());
export default FontManager;
//# sourceMappingURL=FontManager.js.map