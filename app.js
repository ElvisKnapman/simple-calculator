const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', function() {
    if(num1.value.trim() === '' || num2.value.trim() === '') {
        result.classList.add('error');
        result.textContent = `One or more of your numbers are invalid. Please check your input.`;
    } else {
        result.classList.remove('error');
        let total = Number(num1.value) + Number(num2.value);
        result.textContent = `${num1.value} + ${num2.value} = ${total}`;
        num1.value = '';
        num2.value = '';
    }
})