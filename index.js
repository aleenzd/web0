function test(){
    fetch('https://shielded-atoll-75054.herokuapp.com/data')
    .then(response => response.json())
    .then(json =>console.log(json))
}