module.exports = function (pieces) {
    var query = '',
        params = [],
        substitutions = Array.prototype.slice.call(arguments, 1),
        ii;
    for (ii = 0; ii < substitutions.length; ii++) {
        query += pieces[ii] + '$' + (ii+1);
        params.push(substitutions[ii]);
    }
    query += pieces[substitutions.length];

    return {
        query: query,
        params: params
    };
};

