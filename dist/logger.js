"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
function print(...args) {
    let str = "";
    for (let i = 0; i < args.length; i++) {
        if (args[i] instanceof Error) {
            str += args[i].stack;
        }
        else if (typeof args[i] === "object") {
            str += JSON.stringify(args[i], null, 2);
        }
        else {
            str += args[i];
        }
        if (i !== args.length - 1) {
            str += " ";
        }
        else {
            str += colors_1.Colors.reset;
        }
    }
    console.log(str);
}
function getTimestamp() {
    return new Date().toDateString();
}
function error(...args) {
    print(getTimestamp(), colors_1.Colors.fgRed, "[ERROR]", colors_1.Colors.reset, ...args);
}
exports.error = error;
function warn(...args) {
    print(getTimestamp(), colors_1.Colors.fgYellow, "[WARN]", colors_1.Colors.reset, ...args);
}
exports.warn = warn;
function info(...args) {
    print(getTimestamp(), colors_1.Colors.fgGreen, "[INFO]", colors_1.Colors.reset, ...args);
}
exports.info = info;
function debug(...args) {
    print(getTimestamp(), colors_1.Colors.fgBlue, "[DEBUG]", colors_1.Colors.reset, ...args);
}
exports.debug = debug;
exports.logger = {
    error,
    warn,
    info,
    debug
};
//# sourceMappingURL=logger.js.map