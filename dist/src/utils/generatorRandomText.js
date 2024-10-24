"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorRandomText = void 0;
const generatorRandomText = (num) => {
    const charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let index = 0; index < charaters.length; index++) {
        if (text.length <= (num ? num : 10)) {
            const str = charaters[(Math.random() * charaters.length)];
            text += str;
        }
    }
    return text.toLocaleUpperCase();
};
exports.generatorRandomText = generatorRandomText;
//# sourceMappingURL=generatorRandomText.js.map