let nandani_row = 4;
let nandani_col = 4;
let nandani_opacity = 0.1;

function createTable() {   
    let nandani_id = 1;
    document.getElementById("table").innerHTML = " ";

    const nandani_randomColor = Math.floor(Math.random() * 16777215).toString(16)
    for (var i = 1; i <= nandani_row; i++) {
        var nandani_tr = document.createElement('tr');

        for (var j = 1; j <= nandani_col; j++) {

            var nandani_td = document.createElement('td');
            
            nandani_td.id = `${nandani_id++}`;

            nandani_tr.appendChild(nandani_td);

            nandani_td.style.backgroundColor = "#" + nandani_randomColor;

        }

        document.getElementById("table").appendChild(nandani_tr);
    }

    document.getElementById("table").setAttribute("border", "1");
    document.getElementById("table").setAttribute("width", "1200");
    document.getElementById("table").setAttribute("height", "400");
  
    let nandani_randomtd = parseInt(Math.random() * (nandani_col*nandani_row)+1);
console.log(nandani_randomtd);
    let nandani_x = document.getElementById(`${nandani_randomtd}`);
console.log(nandani_x);
    nandani_x.style.opacity =nandani_opacity;
    nandani_opacity = nandani_opacity + 0.1;
    if (nandani_opacity >= 0.9) {
        nandani_opacity = 0.9;
    }

    nandani_x.onclick = function () {
        nandani_col = nandani_col + 1;
        nandani_row = nandani_row + 1;
        createTable();
    }
}

let seconds = 10;

const makeIteration = () => {
    let score = nandani_row - 3;
    if (seconds > 0) {
        document.getElementById("timer").innerText = "Timer : " + seconds + " secs";
        document.getElementById("score").innerText = "score : " + score;
        setTimeout(makeIteration, 1000);
    }
    else {
        alert("Game Over!!! \n\nYour score is " + score);
        location.reload();
    }
    seconds -= 1;
}
setTimeout(makeIteration, 1000);

function resetFun() {
    if (confirm("Do you want to reset the game?") == true)
        location.reload();
    else
        return false;
}




