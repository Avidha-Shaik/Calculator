
let buttons=document.querySelectorAll('.button')
let input=document.querySelector('.input-box')
let s='';
console.log(input)
Array.from(buttons).forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',(e)=>{
        if(e.target.textContent=='='){
            s=eval(s)
            input.value=s
            

        }
        else if(e.target.textContent=='C'){
            s='';
            input.value=s;
        }
        else{
        s+= e.target.textContent
        input.value=s;
    }
        
    })
})