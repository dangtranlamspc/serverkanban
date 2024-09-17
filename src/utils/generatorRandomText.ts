export const generatorRandomText = (num : number ) => {
    const charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';

    for (let index = 0; index < charaters.length;index++) {
        if (text.length <= (num ? num : 10)) {
            const str = charaters[(Math.random() * charaters.length)];
            text += str;
        }
    }
    return text.toLocaleUpperCase();
};