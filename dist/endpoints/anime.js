"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.smug = exports.slap = exports.hug = exports.cuddle = exports.kiss = exports.poke = exports.trap = exports.feed = exports.pat = exports.baka = void 0;
const petitio_1 = __importDefault(require("petitio"));
const baseError_1 = __importDefault(require("../baseError"));
const nekosLifeBaseURI = 'https://nekos.life/api/v2/img';
async function baka() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/baka').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.baka = baka;
async function pat() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/pat').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pat = pat;
async function feed() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/feed').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.feed = feed;
async function trap() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/feed').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.trap = trap;
async function poke() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/poke').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.poke = poke;
async function kiss() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/kiss').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.kiss = kiss;
async function cuddle() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/cuddle').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.cuddle = cuddle;
async function hug() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/hug').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.hug = hug;
async function slap() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/slap').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.slap = slap;
async function smug() {
    try {
        return await petitio_1.default(nekosLifeBaseURI + '/smug').json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.smug = smug;
async function search(name) {
    try {
        return await petitio_1.default('https://api.jikan.moe/v3/search/anime').query('q', name).json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.search = search;
//# sourceMappingURL=anime.js.map