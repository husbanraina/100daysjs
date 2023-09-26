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
buttons.addEventListener("click",colorGenerate) ;
   
   

colorGenerate();

function colorGenerate()
{
   let color = Math.random().toString(16).substring(2,8) ;
   count.innerHTML = "#"+color ;
   count.style.backgroundColor = "#"+color ;

}



           


  
    
