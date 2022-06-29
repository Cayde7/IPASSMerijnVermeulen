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

function champLoaderInformation(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const champNameURL = urlParams.get('champion');
    let i;
    for (i = 0; i < 1; i++) {
        // document.getElementById('champ' + i).innerHTML = jsonData.champNameURL.information;
        // for(let j = 0; j < Object.keys(jsonData[champNameURL].information.LevelUp).length; j++){
        //     // console.log(jsonData[champNameURL].information.LevelUp);
        // }

        for(let j = 0; j < Object.keys(jsonData[champNameURL].information.Runes_main).length; j++){
            let champRunes = jsonData[champNameURL].information.Runes_main[j];
            if(champRunes.includes("Resolve")){
                document.getElementById('main' + [j]).style.color = 'lightgreen';
            }else if (champRunes.includes("Inspiration")){
                document.getElementById('main' + [j]).style.color = 'lightblue';
            }else if (champRunes.includes("Precision")){
                document.getElementById('main' + [j]).style.color = 'yellow';
            }else if (champRunes.includes("Domination")){
                document.getElementById('main' + [j]).style.color = 'red';
            }else if (champRunes.includes("Sorcery")){
                document.getElementById('main' + [j]).style.color = 'blue';
            }
            document.getElementById('main' + [j]).innerHTML = champRunes;
        }

        for(let j = 0; j < Object.keys(jsonData[champNameURL].information.Runes_second).length; j++){
            let champRunes = jsonData[champNameURL].information.Runes_second[j];
            if(champRunes.includes("Resolve")){
                document.getElementById('second' + [j]).style.color = 'lightgreen';
            }else if (champRunes.includes("Inspiration")){
                document.getElementById('second' + [j]).style.color = 'lightblue';
            }else if (champRunes.includes("Precision")){
                document.getElementById('second' + [j]).style.color = 'yellow';
            }else if (champRunes.includes("Domination")){
                document.getElementById('second' + [j]).style.color = 'red';
            }else if (champRunes.includes("Sorcery")){
                document.getElementById('second' + [j]).style.color = 'blue';
            }
            document.getElementById('second' + [j]).innerHTML = champRunes;
        }

        document.getElementById('ChampName').innerHTML = champNameURL;
        document.getElementById('imageChamp').src = './images/' + champNameURL + '.jpg';
        document.getElementById('itemContent').innerHTML = jsonData[champNameURL].information.Items;
        if(jsonData[champNameURL].information.Difficulty == 'Hard'){
            document.getElementById('difficultyMeter').style.color = 'darkred';
        }else if(jsonData[champNameURL].information.Difficulty == 'Medium'){
            document.getElementById('difficultyMeter').style.color = 'orange';
        }else{
            document.getElementById('difficultyMeter').style.color = 'green';
        }
        document.getElementById('difficultyMeter').innerHTML = jsonData[champNameURL].information.Difficulty;
        document.getElementById('tipText').innerHTML = jsonData[champNameURL].information.Tips;

    }
}

if(!window.location.href.includes("champMatchUp")){
    mainPageLoader();
}else{
    champLoaderInformation();
}
