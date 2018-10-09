function viewTitle(){
    alert("Page Loaded !!");
}

function MyAlert() {
    alert("It's OK!");
}

function __init(){
    viewTitle();
}
window.MyAlert = MyAlert;
__init();