"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.megumin = exports.random = exports.nezuko = void 0;
const petitio_1 = __importDefault(require("petitio"));
const baseError_1 = __importDefault(require("../baseError"));
async function nezuko() {
    try {
        return await petitio_1.default('https://kagchi-api.glitch.me/waifu/nezuko').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.nezuko = nezuko;
async function random() {
    try {
        return await petitio_1.default('https://nekos.life/api/v2/img/waifu').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.random = random;
async function megumin() {
    try {
        return await petitio_1.default('https://kagchi-api.glitch.me/waifu/megumin').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.megumin = megumin;
//# sourceMappingURL=waifu.js.map