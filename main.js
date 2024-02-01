

 function getdata () {
    axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
  .then(function (response) {
    let result = response.data.recipes; 
     console.log(result);
     const images =  result.map(function(recipe){

        console.log(recipe.image_url);
    
    return `
    <h3>${recipe.title}</h3>
     <img src = "${recipe.image_url}" > 
     <a class= "link-details" href = "details.html?pizza_id=${recipe.recipe_id}"> Details </a> 
    `;
    
    })
    document.querySelector(".pizza_section").innerHTML=images.join(' ');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


  
}

getdata();


  