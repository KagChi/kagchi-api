"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brainly = void 0;
__exportStar(require("./endpoints/anime"), exports);
__exportStar(require("./endpoints/waifu"), exports);
const search_1 = require("./endpoints/brainly/search");
exports.brainly = { us: search_1.us, pl: search_1.pl, pt: search_1.pt, id: search_1.id, info: search_1.info };
//# sourceMappingURL=index.js.map