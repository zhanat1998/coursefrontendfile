const firstValue = document.getElementById('first_value')
const secondValue = document.getElementById('second_value')
const result = document.getElementById('result')
const errorMessage = document.getElementById('error')
const ok_Btn = document.getElementById('ok')
function generalValue(operator) {
    if (operator === '+' && firstValue.value !== '' && secondValue.value !== '') {
        const res = +firstValue.value + +secondValue.value
        result.value = res
    } else if (operator === '-' && firstValue.value && secondValue.value) {
        const res = firstValue.value - secondValue.value
        result.value = res
    } else if (operator === '/' && firstValue.value && secondValue.value) {
        const res = firstValue.value / secondValue.value
        result.value = res
        if (secondValue.value == 0) {
            errorMessage.innerText = 'на ноль делить нельзя!'
            ok_Btn.style.display = 'flex'
            errorMessage.style.display = 'flex'
        }
    } else if (operator === '*' && firstValue.value && secondValue.value) {
        const res = firstValue.value * secondValue.value
        result.value = res
    } else {
        errorMessage.innerText = 'Введите числа'
        ok_Btn.style.display = 'flex'
        errorMessage.style.display = 'flex'
    }
}
ok_Btn.addEventListener('click', () => {
    errorMessage.style.display = 'none'
    ok_Btn.style.display = 'none'
})
const clearInputs = () => {
    firstValue.value = ''
    secondValue.value = ''
    result.value = ''
}
const calculator12 = document.querySelector('.calculator');
const root = document.querySelector('.root');
const modalName = document.querySelector('.modalName');
console.log('calculator', calculator12)
calculator12.addEventListener('click', () => {
    root.style.display = 'block'
    calculator12.style.display = 'none'
})
modalName.addEventListener('click', () => {
    root.style.display = 'none'
    calculator12.style.display = 'block'

})
