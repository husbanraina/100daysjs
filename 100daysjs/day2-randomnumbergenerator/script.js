// let count = document.querySelector(".count");
// let subtract = document.querySelector(".subtract") ;
// let reset = document.querySelector(".reset")
// let add = document.querySelector(".add")

// let x = parseInt(count.innerHTML);


// subtract.addEventListener("click",(e)=>{
//     e.preventDefault() ;
    
//     x= x-1 ;
    
//      count.innerHTML=x;
//      colors(x);
//     })
//     reset.addEventListener("click",(e)=>{
//         e.preventDefault() ;
       
//         x= 0 ;
//          count.innerHTML=x;
//         colors(x);

//         })
//         add.addEventListener("click",(e)=>{
//             e.preventDefault() ;
            
//             x= x+1 ;
//              count.innerHTML=x;
//             colors(x);


//             })


//             function colors(x)
//             {
//                 if(x<0)
//                 {
//                     count.style.color = "red";
//                 }
//                 else if(x>0)
//                 {
//                     count.style.color = "green"
//                 }
//                 else{
//                     count.style.color ="white"
//                 }
    
//             }

let count = document.querySelector(".count");
let buttons = document.querySelector(".reset");
buttons.addEventListener("click",(e)=>{
   let x = Math.floor(Math.random()*6 + 1) ;
   count.innerHTML = x ;
   


})



           


  
    
