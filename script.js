const url = `https://api.adviceslip.com/advice`;

fetch(url)
.then((response) => {
  return response.json();
})
.then((data) => {
    advices = data; /* receive all the data */
    console.log(advices)
    
    document.querySelector("#advice-id").textContent = advices.slip.id;
    document.querySelector("#advice").textContent = '"' + `${advices.slip.advice}` + '"';
})
.catch(function(error) {
   console.log(error);
});