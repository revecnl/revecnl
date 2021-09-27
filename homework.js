const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function windowresize(){
    if(innerWidth>=800){
    document.body.style.backgroundColor ="#1abc9c";}
    else if(innerWidth<800 && innerWidth>500)
        document.body.style.backgroundColor ="#3498db";
        else if(innerWidth<=500)
        document.body.style.backgroundColor ="#9b59b6";
}

window.addEventListener("resize",windowresize);
window.addEventListener("innerWidth",windowresize);