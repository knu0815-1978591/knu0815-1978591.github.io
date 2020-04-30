
let compPlay = 0;

const imageCoordinates = {
    rock : '0',
    scissor : '-142',
    paper : '-284'
}

let compChoice = function(compPlay) {
    return Object.entries(imageCoordinates).find(function(v) {
        return v[1] === compPlay;
    })[0];
};

const game = setInterval(function() {
    if(compPlay === imageCoordinates.rock) {
        compPlay = imageCoordinates.scissor;
    } else if(compPlay === imageCoordinates.scissor) {
        compPlay = imageCoordinates.paper;
    } else {
        compPlay = imageCoordinates.rock;
    }

    document.querySelector('#computer').style.background = 
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + compPlay + 'px, 0';
}, 25);


const gameResult = {
    scissor : 1,
    rock : 0,
    paper : -1
}

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let myPlay = this.textContent;
     
        if([2, -1].includes(gameResult[myPlay] - gameResult[compChoice(compPlay)])) {
            alert('VICTORY!!!');
        } else if([1, -2].includes(gameResult[myPlay] - gameResult[compChoice(compPlay)])) { 
            alert('YOU LOSE!!!!!');
        } else if(gameResult[myPlay] - gameResult[compChoice (compPlay)] === 0) {
            alert('DRAW!!');
        }

    });
});



document.querySelector('#stop').addEventListener('click', function() {
    // console.log('123123');
    clearInterval(game);
});


document.querySelector('#replay').addEventListener('click', function() {
    // console.log('123123');
    window.location.reload();
});