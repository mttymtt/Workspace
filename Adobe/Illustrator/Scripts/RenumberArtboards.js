var aDoc = app.activeDocument;
var aB = aDoc.artboards;

function renameArtboards() {
    for( i=0; i<aB.length; i++) {
        var curAB = aB[i];
        curAB.name = "Artboard " + (i+1).toString().replace(/^.$/, "0" + (i+1));
        }
    }

renameArtboards();  
