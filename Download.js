var data = [
   ['test1', 'test2', 'test3', 'test5', 'test6', 'test7','test8', 'test9', 'test10', 'test11', 'test12', 'test13',]
];
 
 
function download_csv() {
    var csv = 'Datum, Zeit,Raum, Ort, Dozent, FS, Studiengang, Abschluss, Vorlesung, Anmerkung, Reguläre Teilnehmer, Wiederholer, Teilnehmer Gesammt \n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'raumplanung.csv';
    hiddenElement.click();
}

 


