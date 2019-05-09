function main() {
    renameArtboards ([
      'apple',
      'banana',
      'orange'
    ]);
}


main();


// renames artboards to provided array of names
function renameArtboards (names) {
    var idoc = app.activeDocument;

    for (i=0; i<names.length; i++) {
        ab = idoc.artboards[i];
        ab.name = names[i];
    }
}
