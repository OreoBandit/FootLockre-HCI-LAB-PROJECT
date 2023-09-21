let btnNavM = document.getElementById("btn-nav-mobile");
let navM = document.getElementById("navbar-mobile");

let i = 1;

function navMshow(){
    navM.style.display="block";
    i=i*-1;
}

function navMhide(){
    navM.style.display="none";
    i=i*-1;
}

btnNavM.addEventListener("click",(e)=>{
    if(i==1){
        navMshow();
        return;
    }
    navMhide();
})