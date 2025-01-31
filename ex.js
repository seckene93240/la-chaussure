const un = document.querySelector(".un");
const deux = document.querySelector(".deux");
const troi = document.querySelector(".troi");
const quatre = document.querySelector(".quatre");
const img1 = document.querySelector("img");
const img2= document .querySelector("#momo")
const img3 = document.querySelector('#momo1')
const img4 = document.querySelector('#momo2')
un.addEventListener("click",()=>{
    img1.style.display="flex"
      img2.style.display="none"
      img3.style.display="none";
      img4.style.display="none";
});

deux.addEventListener("click",()=>{
    
       img1.style.display="none";
       img2.style.display="flex"
       img3.style.display="none";
       img4.style.display="none";
});

troi.addEventListener("click",()=>{
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="flex";
    img4.style.display="none";
});

quatre.addEventListener("click",()=>{
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="none";
    img4.style.display="flex";
});

