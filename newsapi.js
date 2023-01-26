// const options = {
	// method: 'GET',
	// headers: {
	// 	'X-BingApis-SDK': 'true',
	// 	'X-RapidAPI-Key': '3f6982505bmsh18186590f075ea4p14ad49jsn20118d20f7fc',
	// 	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	// }
    // Headers:{
    //     'news':'latest News'
    // }
// };
// carousel-inner
// carousel-item active
// carousel-item

// const { get } = require(".mashape.com/");

// const { get } = require("jquery");

let carouselInner=document.querySelector('.carousel-inner');



// fetch(`https://newsapi.org/v2/everything?q=country=India&sortBy=publishedAt&apiKey=8eca2f831cdb410480475e65794fabeb`, options)


const options = {
	method: 'GET',
};

// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8eca2f831cdb410480475e65794fabeb`)
	.then((response)=> response.json())
    .then((response)=>{
        const articles=response.articles;
        for(let i=0; i<10; i++){
console.log(articles[i])
            if(i===0){
    let titleImage=document.createElement('img');
                let carouselItemActive=document.createElement('div');
                carouselItemActive.classList.add('carousel-item')
                carouselItemActive.classList.add('active')
                let activetitleEle=document.createElement('div');
                let activedescriptionEle=document.createElement('div');
                let activeurlEle=document.createElement('a')
    titleImage.src=`${articles[i].urlToImage}`

                // carouselItemActive.style.background=`url(${articles[i].urlToImage})`;
                // carouselItemActive.style.backgroundRepeat="no-repeat"
                // carouselItemActive.style.backgroundPosition="center"
                // carouselItemActive.style.backgroundSize="cover";

                activetitleEle.classList.add('newsTitle')
                activedescriptionEle.classList.add('newsHeadline')
                activetitleEle.innerText=articles[i].title;
                activedescriptionEle.innerText=articles[i].description;
                activeurlEle.innerText="Read More";
                activeurlEle.href=articles[i].url;

carouselItemActive.append(titleImage);
carouselItemActive.append(activeurlEle)
carouselItemActive.append(activetitleEle)
carouselItemActive.append(activedescriptionEle)
carouselInner.append(carouselItemActive)
            }

if(i>0){
    let carouselItem=document.createElement('div');
    carouselItem.classList.add('carousel-item');

// carouselItem.style.background=`url(${articles[i].urlToImage})`;
// carouselItem.style.backgroundRepeat="no-repeat"
// carouselItem.style.backgroundPosition="center"
// carouselItem.style.backgroundSize="cover";

    let titleImage=document.createElement('img');
    let titleEle=document.createElement('div');
    let descriptionEle=document.createElement('div');
    let urlEle=document.createElement('a')
 

    titleEle.innerText =articles[i].title
    descriptionEle.innerText=articles[i].description
    urlEle.innerHTML="Read More"
    urlEle.href=articles[i].url;
    titleImage.src=`${articles[i].urlToImage}`

    carouselItem.append(titleImage);
    carouselItem.append(urlEle)
carouselItem.append(titleEle)
carouselItem.append(descriptionEle)
carouselInner.append(carouselItem)

titleEle.classList.add('newsTitle')
descriptionEle.classList.add('newsHeadline')

}

        }
    })
	.catch(err => console.error(err));



    // 8eca2f831cdb410480475e65794fabeb

