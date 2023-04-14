const eleGrid = document.querySelector('.container');


for (let i = 1; i <= 100; i++){
if (i % 5 == 0 && i % 3 == 0){
        console.log(i);
        eleGrid.innerHTML = eleGrid.innerHTML + '<div class="fizzbuzz">fizzbuzz</div>'
    }
else if (i % 3 == 0){
    console.log(i);
    eleGrid.innerHTML = eleGrid.innerHTML + '<div class="fizz">fizz</div>'
}

else if (i % 5 == 0){
    console.log(i);
    eleGrid.innerHTML = eleGrid.innerHTML + '<div class="buzz">buzz</div>'
}



else {
    console.log(i);
eleGrid.innerHTML = eleGrid.innerHTML + `<div class="card">${i}</div>`
}
}

