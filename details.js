 function getDetails () {
    const urlparam = new URLSearchParams(window.location.search);
    const id = urlparam.get('pizza_id');

    axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    .then(function (response) {
        const details = response.data.recipe;
        const ingredients = details.ingredients;
        document.querySelector(".title").textContent = details.publisher;
        document.querySelector("img").src = details.image_url;
        const results =   ingredients.map(function(rec){

            return `
                <li>${rec}</li>
            
            
            `;
            
            
            })
            document.querySelector(".list").innerHTML=results.join(' ');

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  

}

getDetails();




