var body = document.body;
var table = document.createElement('table');
var rows = [];
var cells = [];
var player = 'X';
var resultConfirm;
var result;

resultConfirm = function(rowNum, columnNum, player) {
    console.log('rowNum', rowNum, 'columnNum', columnNum, 'player', player);

    var victory = false;

    if(cells[rowNum][0].textContent === player && cells[rowNum][1].textContent === player && cells[rowNum][2].textContent === player) {
        victory = true;
    }

    if(cells[0][columnNum].textContent === player && cells[1][columnNum].textContent === player && cells[2][columnNum].textContent === player) {
        victory = true;
    }        

    if(cells[0][0].textContent === player && cells[1][1].textContent === player && cells[2][2].textContent === player) {
        victory = true;
    }

    if(cells[2][0].textContent === player && cells[1][1].textContent === player && cells[0][2].textContent === player) {
        victory = true;
    }


    if(victory) {
        setTimeout(() => {
            reset();    
        }, 1000);
    }

    return victory;

};

var reset = function() {
    cells.forEach(function (row) {
        row.forEach(function (cell) {
            cell.textContent = '';
        });
    });    
};


var callBack = function(event) {
    var rowNum = rows.indexOf(event.target.parentNode);
    var columnNum = cells[rowNum].indexOf(event.target);

    if(cells[rowNum][columnNum].textContent === '') {
        cells[rowNum][columnNum].textContent = player;

        result = resultConfirm(rowNum, columnNum, player);

        var candidateCell = [];

        cells.forEach(function (row) {
            row.forEach(function (cell) {
                candidateCell.push(cell);
            });
        });

        candidateCell = candidateCell.filter(function(cell) {
                                   return !cell.textContent
                              });     

        if(result) {
            alert('You win!');
            player = 'X';

        } else if(candidateCell.length === 0) {
            alert('DRAW');
            reset();
        } else {


            setTimeout(function() {
                                    
              chosencell = candidateCell[Math.floor(Math.random() * candidateCell.length)];

              chosencell.textContent = 'O';

              var rowNum = rows.indexOf(chosencell.parentNode);
              var columnNum = cells[rowNum].indexOf(chosencell);

              // console.log('rowNum', rowNum, 'columnNum', columnNum, 'player', player);

              result = resultConfirm(rowNum, columnNum, 'O');

              if(result) {
                alert('I win :D');
              }
              player = 'X';

            }, 1000);
        }

    } else { 
        alert('Not an empty cell');
    }

};

for(var i=1; i<=3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);

    for(var j=1; j<=3; j++) {
        var cell = document.createElement('td');
        cells[i - 1].push(cell);
        cell.addEventListener('click', callBack);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

body.appendChild(table);
