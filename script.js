const button = document.getElementById("click");
const range = document.getElementById("interest");
range.addEventListener('change', (event) => {
    document.getElementById('output').innerHTML = `Interest is ${event.target.value}%`;
})
button.addEventListener('click', ()=> {
    const amount = document.getElementById("amount").value;
    document.getElementById('result').innerHTML =`The monthly rate is = ${(((range.value/100) * amount) / 12).toFixed(2)} $`;
    document.getElementById('output').innerHTML = `Interest is ${range.value}%`;
    console.log(amount);
})