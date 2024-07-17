let string = "";
let buttons = document.querySelectorAll('#button');
let changer = document.querySelector('.changer')
// changer.addEventListener('click', ()=>{
//     alert('Hello')
// })

changer.addEventListener('click', (e)=>{

        if(e.target > 1){
            string = eval(string)
            document.querySelector('input').value = '-' + string;
        }
        else
        {
            string = eval(string)
            document.querySelector('input').value = string;
        }
})
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string;
        }
        
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;  //concatenate the clicked element'
            document.querySelector('input').value = string;   /*display it in the input field*/
        }
    })
})

