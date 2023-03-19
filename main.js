let star = document.getElementById("stars")
let moon2 = document.getElementById("moon2")
let mountains = document.getElementById("mountains")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let nouvil = document.querySelector(".nouvil")
window.onscroll = function(){
    let value = scrollY;
    console.log(value)
    star.style.left = value + "px";
    moon2.style.top = value * 3 + "px";
    mountains.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5+ "px";
    river.style.top = value + "px";
    boat.style.top = value + "px"
    boat.style.left = value * 3 + "px"
    nouvil.style.fontSize = value  +"px"
    if(scrollY >= 171){
        nouvil.style.fontSize= 171 +"px"
         }
         if(scrollY >= 214){
            document.querySelector('.main').style.background = "linear-gradient(#457bba , #20052e)"
         }else{
            document.querySelector('.main').style.background = "linear-gradient(#1e0218 , #20052e)"
         }
}
