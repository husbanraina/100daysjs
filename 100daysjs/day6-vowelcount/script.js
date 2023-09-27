const btn= document.querySelector(".btn"),
      result= document.querySelector(".result") ;
      btn.addEventListener("click",vowel);
      function vowel()
      {
        const rWord = document.querySelector(".input-text").value ;
        let len = rWord.length ;
        let words = rWord.toLowerCase();
        let count = 0 ;
        for(let i = 0 ; i< len ; i++)
        {


             if(words[i].match(/[a,e,i,o,u]/))
        // if(words[i]=='a' || words[i] == 'e'|| words[i]=='i' || words[i]=='o'|| words[i]=='u')
        {
            count++ ;

        }
      }
       
      result.innerHTML=count ;
        
        


      }
