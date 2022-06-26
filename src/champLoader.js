import jsonData from "../testData.json" assert { type: "json" }

function mainPageLoader(){
    let i;
    let champName = '';
    for (i = 0; i < Object.keys(jsonData).length; i++) {
        champName = Object.keys(jsonData)[i];
        if (jsonData.hasOwnProperty(champName)) {
            document.getElementById('champ' + i).innerHTML = jsonData[champName].html;
        }
    }
}

mainPageLoader();
