const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const clipboardEl = document.getElementById('clipboard')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+=`~;:'

// Generate random elements

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function symbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const length = lengthEl.value;
    let password = '';
    if (!length) {
        alert('Please provide a length')
    } else {
        for (let i = 0; i < length; i++) {
            const x = generateX();

            password += x
            console.log(x)
        }
        pwEl.innerText = password
    }

}


generateEl.addEventListener('click', generatePassword)


function generateX() {
    const xs = [];

    if (upperEl.checked) {
        xs.push(getUpperCase())
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase())
    }
    if (numberEl.checked) {
        xs.push(getNumber())
    }
    if (symbolEl.checked) {
        xs.push(symbol())
    }
    console.log(xs)
    return xs[Math.floor(Math.random() * xs.length)];
}

// Clip board

copyEl.addEventListener('click', () => {
    navigator.clipboard.writeText(pwEl.innerText);

    clipboardEl.innerText = 'Password has been copied'
    clipboardEl.classList.add('clipboard')


    setTimeout(function removeText() {
        clipboardEl.innerHTML = '';
        clipboardEl.classList.remove('clipboard')
    }, 1000)
})


