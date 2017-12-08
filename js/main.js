let fs = require('fs');

function gbi(id) {
    return document.getElementById(id);
}

function addMovie() {
    let jsonfile = require('./data/movies.json');

    let movie = {
        tapeName: "TITLE",
        format: "FORMAT",
        isHorror: false,
        isXmas: false,
        played: false
    };

    let tapeName = gbi('tapeName');
    let format = gbi('format');
    let isHorror = gbi('isHorror');
    let isXmas = gbi('isXmas');

    movie.tapeName = tapeName.value;
    movie.format = format.value;
    movie.isHorror = isHorror.checked;
    movie.isXmas = isXmas.checked;
    
    jsonfile[movie.tapeName] = movie;
    stringy = JSON.stringify(jsonfile); 

    fs.writeFile('./data/movies.json', stringy, function(err) {
        if(err) { console.log(err); }
    });
}