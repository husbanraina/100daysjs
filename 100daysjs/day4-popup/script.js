let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn") ;
let close = document.querySelector(".close") ;
let modalContent = document.querySelector(".modal-content") ;

btn.addEventListener("click",openModal);
close.addEventListener("click",closeModal);



function openModal(e)
{
    e.preventDefault();
    modal.style.display = "block"
     close.style.display= "block" ;
}

function closeModal()
{
    modalContent.classList.add("slide-up");
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("slide-up");


        
    }, 500);
    
   
}


