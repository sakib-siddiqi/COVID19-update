async function covidUpdate() {
    let fetching = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
    let convertToJson = fetching.json();
    let response = await convertToJson;
    let bdResult = response[27];
    let worldResult = response[0];
    console.log(bdResult,worldResult)
}
covidUpdate();