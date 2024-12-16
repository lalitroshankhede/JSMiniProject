let stringVal="";
let buttons=document.querySelectorAll('input');
Array.from(buttons).forEach((btn)=>{
   
    btn.addEventListener('click',(e)=>{

    
        if(e.target.value =='='  )
        {
        
                stringVal=eval(stringVal);
                document.querySelector(".output").value=stringVal;
            
        }

        else if(e.target.value== '%')
            {
              
                let temp2=eval(stringVal);
                stringVal=eval(temp2/100);

                document.querySelector(".output").value=stringVal;
            }

        else if(e.target.value== 'AC')
        { 
            stringVal=' ';
            document.querySelector(".output").value=stringVal;
        }
      
        else if(e.target.value== 'Del')
        {
            document.querySelector(".output").value=stringVal.toString().slice(0,-1);
            stringVal=document.querySelector(".output").value;
        }


        else{
            stringVal=stringVal+e.target.value;
            document.querySelector(".output").value=stringVal;
        }

    })
    

})


