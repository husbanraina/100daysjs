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

// EVENT DELEGATION
let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("subtract"))
    {
        count.innerHTML-- ;
        setColor();

    }
    else if(e.target.classList.contains("reset"))
    {
        count.innerHTML= 0 ;
        setColor();
    }
    else if(e.target.classList.contains("add"))
    {
        count.innerHTML++ ;
        setColor();
    }


})
function setColor()
{
    if(count.innerHTML<0)
 {                   count.style.color = "red";
}               
else if(count.innerHTML>0)
              {
                   count.style.color = "green"
              }              
               else    {               count.style.color ="white"
                }
};


           


  
    
