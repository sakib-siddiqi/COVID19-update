let D_C_W = document.querySelector('.D_C_W');
let A_C_W = document.querySelector('.A_C_W');
let R_W = document.querySelector('.R_W');
let D_D_W = document.querySelector('.D_D_W');
let T_D_W = document.querySelector('.T_D_W');

let D_C_BD = document.querySelector('.D_C_BD');
let A_C_BD = document.querySelector('.A_C_BD');
let R_BD = document.querySelector('.R_BD');
let D_D_BD = document.querySelector('.D_D_BD');
let T_D_BD = document.querySelector('.T_D_BD');

const calculatetor = (w, bd) => {
    D_C_W.innerText=w.todayCases;
    A_C_W.innerText=w.active;
    R_W.innerText=w.recovered;
    D_D_W.innerText=w.todayDeaths;
    T_D_W.innerText=w.deaths;

    D_C_BD.innerText=bd.todayCases;
    A_C_BD.innerText=bd.active;
    R_BD.innerText=bd.recovered;
    D_D_BD.innerText=bd.todayDeaths;
    T_D_BD.innerText=bd.deaths;
}
async function covidUpdate() {
    let fetching = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
    let convertToJson = fetching.json();
    let response = await convertToJson;
    console.log(response)
    let bdResult = response[27];
    let worldResult = response[0];
    calculatetor(worldResult, bdResult);
}
covidUpdate();