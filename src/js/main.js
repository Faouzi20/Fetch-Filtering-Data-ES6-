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


function __init(){
    topPage();
}
window.onscroll = onscroll;
window.topPage = topPage;
__init();