var MovesCount = 0

if (sessionStorage.getItem("image")) {

    const blobDataUrl = sessionStorage.getItem("image");
    const tile = document.getElementsByClassName("tile");

    // Create an image element and set its source to the data URL
    const img = new Image();
    img.src = blobDataUrl;

    // img is loaded in img var
    
    img.onload = function () {
        for (let i = 0; i < tile.length; i++) {
            tile[i].style.backgroundImage = `url(${img.src})`;
        }
    };

    sessionStorage.clear();
}

function playAgain() {
    sessionStorage.clear();
    window.location.href = "game.html";
}

// Generate random positions for puzzle
function randomPos() {
    var arr = [];
    while (arr.length < 9) {
        var r = ((Math.floor(Math.random() * 3) + 1).toString()) +
            ((Math.floor(Math.random() * 3) + 1).toString());
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

var RandomPos = randomPos();

// Placing All pieces at random positions 
for (let i = 0; i < document.getElementsByClassName("tile").length; i++) {
    document.getElementsByClassName("tile")[i].style.gridArea = RandomPos[i][0] + "/" + RandomPos[i][1]
}


// Checking all the possible 4 direction, 
function MoveMe(tile) {
    var EmptyTile = document.querySelector(".emtile")
    var Possibilties = [
        parseInt(RandomPos[tile][0]) + 1 == parseInt(RandomPos[8][0]) && parseInt(RandomPos[tile][1]) == parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][0]) - 1 == parseInt(RandomPos[8][0]) && parseInt(RandomPos[tile][1]) == parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][1]) + 1 == parseInt(RandomPos[8][1]) && parseInt(RandomPos[tile][0]) == parseInt(RandomPos[8][0]),
        parseInt(RandomPos[tile][1]) - 1 == parseInt(RandomPos[8][1]) && parseInt(RandomPos[tile][0]) == parseInt(RandomPos[8][0]),
    ]

    // if in any direction it finds empty move the tile to that direcgtion
    if (Possibilties[0] || Possibilties[1] || Possibilties[2] || Possibilties[3]) {
        MovesCount++;
        EmptyTile.style.gridArea = RandomPos[tile][0] + "/" + RandomPos[tile][1];
        document.querySelectorAll(".tile")[tile].style.gridArea = RandomPos[8][0] + "/" + RandomPos[8][1];

        var CurrentTile = RandomPos[tile]
        RandomPos[tile] = RandomPos[8]
        RandomPos[8] = CurrentTile;
        NeededPos = ["11", "12", "13", "21", "22", "23", "31", "32", "33"]
        if (RandomPos.join(".") == NeededPos.join(".")) {
            console.log("Game Beated");
            document.querySelector(".blscreen").style.display = 'flex';
            document.querySelector(".MovesCount").innerHTML = MovesCount;
        }
    }
}