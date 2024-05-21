//  لما بعمل سكرول بتطلع صورة
// let imgs= document.getElementsByClassName("img")[0];


// window.onscroll = ()=>{
//   if (document.documentElement.scrollTop > 1000) {
//   imgs.style.marginLeft="400px";
//     console.log("hi");
// }}








let div4=document.getElementsByClassName("div4")[0];
let div1=document.getElementsByClassName("div1")[0];
let div2=document.getElementsByClassName("div2")[0];
let div3=document.getElementsByClassName("div3")[0];

let cont=0;

let counter= setInterval(function num(){
    
  div4.innerText++;

  if(div4.innerHTML==="60"){
      div4.innerText=0;
      cont++;
      div3.innerText++;
    
    }

    if(div3.innerHTML==="60"){
      div3.innerText=0;
      cont++;
      div2.innerText++;

    }


    if(div2.innerHTML==="24"){
      div2.innerText=0;
      cont++;
      div1.innerText++;

    }


  if(cont===10){
      clearInterval(counter);
  }
},500);