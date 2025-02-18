const apiKey="pub_69544cf9c0168e8ec7b9e0b3ab53a66e86986"

const blogContainer=document.getElementById("blog-container");

// search news



// fetch random news function

async function fetchRandomNews(){

try{

const apiUrl=`https://newsdata.io/api/1/latest?country=in&language=en,hi&Size=10&apikey=${apiKey}&q=All`;

const response =await fetch(apiUrl);

const data=await response.json();

return data.results;

}

catch(error) {

console.error("Error fetching random news", error);

return [];
}
}

// fetch news by search query function

// searchButton.addEventListener("click", async()=>{

// const searchQuery=searchfield.value.trim();

// if (searchQuery!=="") {

// try{

// const article=await fetchNewsBySearchQuery (searchQuery);

// displayBlogs (article);

// }
// catch(error){

// console. Fetching

// }

// }
// })

// async function fetchNewsBySearchQuery(searchQuery) {

//     try {
    
    // const apiUrl='https://newsdata.io/api/1/latest?country=in&language=en&Size=8&apikey=${apiKey}&q=${searchQuery}';
    
    // const response = await fetch (apiUrl);
    
    // const data = await response.json();
    
    // return data.results;
    
    // } catch (error) {
    
    // console.log("error fetching news by search query", error);
    
    // return [];
    // }
    
    // }
    
    // fetch news function
    
    function displayBlogs (results) {
    
    // blogContainer.innerHTML = "";
    
    results.forEach((article) => {
    
    if (!article) return; // skip null or undefined articles
    
    const blogCard = document.createElement("div");
    
    blogCard.classList.add("card");
    

    const img = document.createElement("img");

    img.src = article.image_url;

    img.alt =article.title;
    const txtDiv=document.createElement("div");
    txtDiv.classList.add("txt");

    const title = document.createElement("h2");


    const truncatedTitle = article.title.length > 30? article.title.slice(0, 30) + "....." :article.title;

    title.textContent = truncatedTitle;

    const description = document.createElement("p");

    const truncatedDescription = article.description.length > 130 ? article.description.slice(0, 130) +".....": article.description;

    description.textContent = truncatedDescription;

blogContainer.appendChild(blogCard);
blogCard.appendChild(img);
blogCard.appendChild(txtDiv);
txtDiv.appendChild(title);
txtDiv.appendChild(description);
blogCard.addEventListener('click', ()=>{

window.open(article.link,'_blank');

// console.log(win);

});

});
``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
}
(async ()=>{

    try{
    
    const article= await fetchRandomNews();
    
    console.log(article);
    
    displayBlogs(article);
    
    }
    
    catch(error) {
    
    console.log("Error fetching random news", error);
    
    }
    
    })();