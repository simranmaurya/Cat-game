const cat = document.getElementById("cat");
const mouse = document.getElementById("mouse");
const mouse2 = document.getElementById("mouse2");


function jump(){
    if(cat.classList != "jump"){
    cat.classList.add("jump");
    console.log("Printing here");

    setTimeout(function(){
        cat.classList.remove("jump");
    },500);
}
}

let isAlive = setInterval(function(){

    let catTop =parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    console.log(catTop);

    let mouseLeft = parseInt(window.getComputedStyle(mouse).getPropertyValue("left"));
    console.log(mouseLeft);

    let mouse2Left = parseInt(window.getComputedStyle(mouse2).getPropertyValue("left"));
    console.log(mouse2Left);

    if(catTop>=300 && mouseLeft<140 && mouseLeft>30){
        alert("Game over");
    }

    if(catTop>=300 && mouse2Left<140 && mouse2Left>30){
        alert("Game over");
    }
},80);


document.addEventListener("keypress",function(event){
    jump();
});

