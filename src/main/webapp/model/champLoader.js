import jsonData from "../testData.json" assert { type: "json" }

function mainPageLoader(){
    let jsonDataSort = Object.keys(jsonData).sort();
    let i;
    let champName = '';
    for (i = 0; i < jsonDataSort.length; i++) {
        champName = jsonDataSort[i];
        if (jsonData.hasOwnProperty(champName)) {
            document.getElementById('champ' + i).innerHTML = jsonData[champName].html;
        }
    }
}

// This function is here for to display the champion Information
function champLoaderInformation(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const champNameURL = urlParams.get('champion');
    let i;
    // The first for loop is so that i can use the json data
    for (i = 0; i < 1; i++) {

        // This loop is here for at which level you have to level up which skill
        for(let j = 0; j < Object.keys(jsonData[champNameURL].information.LevelUp).length; j++){
            let levelUpData = jsonData[champNameURL].information.LevelUp[j];
            if(levelUpData.includes('Q')){
                document.getElementById('lvlQ' + [j]).innerHTML = [j + 1];
            } else if(levelUpData.includes('W')){
                document.getElementById('lvlW' + [j]).innerHTML = [j + 1];
            }  else if(levelUpData.includes('E')){
                document.getElementById('lvlE' + [j]).innerHTML = [j + 1];
            }  else if(levelUpData.includes('R')){
                document.getElementById('lvlR' + [j]).innerHTML = [j + 1];
            }
        }

        // This loop is here to make sure that you get to see the Main runes
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

        // This loop is here to make sure that you get to see the Secondairy runes
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
        document.getElementById('difficultyMeter').innerHTML = jsonData[champNameURL].information.Difficulty;
        document.getElementById('tipText').innerHTML = jsonData[champNameURL].information.Tips;


        if(jsonData[champNameURL].information.Difficulty == 'Hard'){

            document.getElementById('difficultyMeter').style.color = 'darkred';

        }else if(jsonData[champNameURL].information.Difficulty == 'Medium'){

            document.getElementById('difficultyMeter').style.color = 'orange';

        }else{

            document.getElementById('difficultyMeter').style.color = 'green';

        }
    }
}

// This if statement is to make sure that there are no errors when loading
if(!window.location.href.includes("champMatchUp") && !window.location.href.includes("personalMatchUps")){
    mainPageLoader();
}else if(window.location.href.includes("champMatchUp")){
    champLoaderInformation();
}
