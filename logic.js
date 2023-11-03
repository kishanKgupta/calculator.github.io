//let num1=0, num2=0, num=0;
document.querySelector('.input').value = 0;
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=')
        {
            string = eval(string);
             document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'C')
        {
            string = "";
            document.querySelector('.input').value = string;
            document.querySelector('.input').value = 0;        
        }
        else
        {
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('.input').value = string;
            }
        
    })
})






