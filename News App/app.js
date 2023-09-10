const API_KEY = 'a322237ae6e24160b5506c04d09e0b51';
let url = 'https://newsapi.org/v2/everything?q='

window.addEventListener("load", getNews("india"));
let brand = document.querySelector(".nav-brand");

brand.addEventListener("click", ()=>{
    location.reload();
})
async function getNews(query) {
    let res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    let data = await res.json();
    makeCard(data.articles);
}

function makeCard(articles) {
    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = '';
    let template = document.querySelector("template");
    articles.forEach((article) => {
        if (!article.urlToImage) {
            return;
        }
        let card = template.content.cloneNode(true);
        fillData(card, article);
        cardContainer.appendChild(card);
    }); 
}

function fillData(card, article){
    let newsImg = card.querySelector("#news-img");
    let newsSource = card.querySelector("#card-source");
    let newsTitle = card.querySelector("#card-title");
    let newsText = card.querySelector("#card-text");

    newsTitle.innerText = article.title
    newsImg.setAttribute("src", article.urlToImage);
    newsText.innerText = article.description
    
    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    })

    newsSource.innerText = `${article.author}~${date}`;
    card.firstElementChild.addEventListener("click", ()=>{
        window.open(article.url, "_blank")
    })
}

let inpSearch = document.querySelector("#search");
let searchBtn = document.querySelector("#news-search");

searchBtn.addEventListener("click", ()=>{
    let query = inpSearch.value;
    if(!query)return;   
    getNews(query);
    currItem?.classList.remove("active-btn");
    currItem = null
})
let currItem = null;
function navItemClick(id){
    getNews(id);
    const navItem = document.getElementById(id);
    currItem?.classList.remove("active-btn");
    currItem = navItem;
    currItem.classList.add("active-btn");
}