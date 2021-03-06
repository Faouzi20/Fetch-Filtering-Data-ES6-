import { data } from '../js/data';

let placeHolder = document.querySelector(".js-placeholder");

// When the user scrolls down 20px from the top of the Page, show the button
function onscroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("js-top-btn").style.display = "block";
    } else {
        document.getElementById("js-top-btn").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the Page
function topPage(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function mapData(listData){
    return listData.map(key => {
        return `<div class="card">
                    <a href="${key.link}"><img src="${key.pictures.sizes[0].link}" alt="profile" class="card__img"></a>
                    <div class="card__content">
                        <h2 class="card__title"><a href="${key.link}">${key.name}</a></h2>
                        <p class="card__description">${key.description && key.description.substr(0, 150)}${key.description && key.description.length > 150 ? '...' : ''}</p>
                        <ul class="card__metadata">
                            <li><i class="fas fa-play"></i>  ${key.stats.plays}</li>
                            <li><i class="fas fa-comment"></i>  ${key.metadata.connections.comments.total}</li>
                            <li><i class="fas fa-heart"></i>  ${key.metadata.connections.likes.total}</li>
                        </ul>
                    </div>
                </div>`
    }).join("");
}

function viewData(){
    placeHolder.innerHTML = mapData(data);
}

function filterData(){
    let inputfilter = document.querySelector(".js_input_filter").value;
    let res1;
    if(inputfilter || inputfilter.trim() != null || inputfilter.trim().length != 0){
        return res1 = data.filter(item => {
            return (item.description) ? item.description.includes(inputfilter) : null;
        });
    }
}

function viewDataFiltering(){
    placeHolder.innerHTML = mapData(filterData());
}

function maxLikesFiltred(){
    let res2;
    return res2 = data.filter(item => {
        return item.metadata.connections.likes.total > 4000;
    });
}

function maxLikesSearch(){
    let maxLikesChecked = document.querySelector(".js-more-than");
    return (maxLikesChecked.checked) ? placeHolder.innerHTML = mapData(maxLikesFiltred()) : viewDataFiltering();
}


function __init(){
    viewData();
    topPage();
}
window.onscroll = onscroll;
window.viewDataFiltering = viewDataFiltering;
window.maxLikesSearch = maxLikesSearch;
window.topPage = topPage;
__init();