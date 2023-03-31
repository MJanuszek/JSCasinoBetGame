const squares = document.querySelectorAll("div.square");
const play = document.querySelector(".play");
const betResult = document.querySelector(".bet-result");
const money = document.querySelector(".money");
let amount = document.getElementById("amount");

let bet = 0;

amount.addEventListener("change", () => {
    bet = amount.value;
});
let number = 200;
let won = 0;
let colorsDrawn = [];
money.textContent = `Twoje środki: ${number}`

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
        number -= bet;
        betResult.textContent = `Przegrałeś ${bet} `;
        money.textContent = `Twoje środki: ${number}`
    } else if(result.length === 2){
        betResult.textContent = `Ani straty ani zysku `;
    } else if(result.length === 1){
        number += bet;
        betResult.textContent = `Wygrałeś ${bet} `;
        money.textContent = `Twoje środki: ${number}`
    }
    colorsDrawn = [];
    
}

 const checkAllNumbers = () => {
    if(amount.value === "") {
        betResult.textContent = "Postaw zakład"
        return
    }
    if(number <=0){
        console.log("Masz za mało środków")
    }
 }

const startGame = () => {
    checkAllNumbers()
    betResult.textContent = `Wynik: `
    amount.value = "";
    changeColors();
    compareColorResult();
}

play.addEventListener("click", startGame);