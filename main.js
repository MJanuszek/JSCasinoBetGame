const squares = document.querySelectorAll("div.square");
const cash = document.querySelector(".cash");
const play = document.querySelector(".play");


let number = 200;
let won = 0;
let colorsDrawn = [];

const changeColors = () => {
    const colors = [{name: "red", id:1},{name: "green", id:2}, {name: "blue", id:3}];
    // squares.forEach(item => (
    //     item.style.backgroundColor = colors[Math.floor(Math.random()* colors.length)].name)
    // )

    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[Math.floor(Math.random()* colors.length)].name;
        colorsDrawn.push(squares[i].style.backgroundColor)  
    }
}

const compareColorResult = () => {
    let result = [...new Set(colorsDrawn)]
    console.log(result);
    if(result.length === 3){
        console.log("Przegrałeś 10$");
    } else if(result.length === 2) {
        console.log("Wygrałeś 1$");
    } else if(result.length === 1){
        console.log("Wygrałeś 100$");
    }
    colorsDrawn = [];
}

const startGame = () => {
    changeColors();
    compareColorResult();
}

cash.textContent = `${number} $`;
play.addEventListener("click", startGame);