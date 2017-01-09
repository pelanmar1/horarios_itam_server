/**
 * Created by Pedro Lanzagorta M on 12/24/2016.
 */
var Fuse = require('../../libs/fuse/fuse.min.js');

var searchForTeacher = function (text, list) {
    var options = {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        tokenize:true,
        matchAllTokens:false,
        keys: [
            "name"
        ]
    };
    var fuse = new Fuse(list, options);
    var result = fuse.search(text);

    return result;

};


module.exports.searchForTeacher = searchForTeacher;
