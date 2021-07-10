"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.us = exports.pt = exports.pl = exports.id = void 0;
const baseError_1 = __importDefault(require("../../baseError"));
const petitio_1 = __importDefault(require("petitio"));
async function id(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await petitio_1.default('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/id/' + query).json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.id = id;
async function pl(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await petitio_1.default('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pl/' + query).json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pl = pl;
async function pt(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await petitio_1.default('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pt/' + query).json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.pt = pt;
async function us(query) {
    if (!query)
        throw new baseError_1.default('Input query to search.');
    try {
        return await petitio_1.default('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/us/' + query).json();
    }
    catch (e) {
        throw new baseError_1.default(`An error occured when fetching: ` + e);
    }
}
exports.us = us;
exports.info = { id: "indonesia", pt: "portuguese", pl: "poland", us: "united states" };
//# sourceMappingURL=search.js.map