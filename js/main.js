let click1 = document.querySelector(".click1");
let click2 = document.querySelector(".click2");
let click3 = document.querySelector(".click3");

let border1 = document.querySelector(".border1");
let border2 = document.querySelector(".border2");
let border3 = document.querySelector(".border3");
let border4 = document.querySelector(".border4");


border1.addEventListener('click',function(){
    border1.classList.add("action");
    border2.classList.remove("action");
    border3.classList.remove("action");
    border4.classList.remove("action");
}
)
border2.addEventListener('click',function(){
    border1.classList.remove("action");
    border2.classList.add("action");
    border3.classList.remove("action");
    border4.classList.remove("action");
}
)
border3.addEventListener('click',function(){
    border1.classList.remove("action");
    border2.classList.remove("action");
    border3.classList.add("action");
    border4.classList.remove("action");
}
)
border4.addEventListener('click',function(){
    border1.classList.remove("action");
    border2.classList.remove("action");
    border3.classList.remove("action");
    border4.classList.add("action");
}
)


border1.addEventListener('click',function(){
    click1.classList.add("active");
    click2.classList.remove("active");
    click3.classList.remove("active");
}
)
border2.addEventListener('click',function(){
    click1.classList.remove("active");
    click2.classList.add("active");
    click3.classList.remove("active");
}
)
border3.addEventListener('click',function(){
    click1.classList.remove("active");
    click2.classList.remove("active");
    click3.classList.add("active");
}
)

