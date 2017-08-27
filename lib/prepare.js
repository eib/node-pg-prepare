module.exports = function (pieces) {
    let text = '';
    const values = [];
    for (let ii = 1; ii < arguments.length; ii++) {
        text += pieces[ii-1] + '$' + ii;
        values.push(arguments[ii]);
    }
    text += pieces[arguments.length - 1];

    return { text, values };
};

