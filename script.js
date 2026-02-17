let input = document.querySelector(".input");
let button = document.querySelector(".generate");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("number");
let specialSymbols = document.getElementById("specialsymbol");
let Length = document.querySelector(".length");
let range = document.querySelector(".range");
let generate = document.querySelector(".generate");
let copy = document.querySelector(".copy");
Length.innerHTML = range.value;

range.addEventListener("input", () => {
    Length.innerHTML = range.value
})

function generatingPass() {
    const Lower = 'abcdefghijklmnopqrstuvwxyz';
    const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '0123456789';
    const SpecialSymbols = '~!@#$%^&*()_+-{}[];:><,.?/€|';
    let RandomPassword = '';
    while (RandomPassword.length < Number(Length.innerHTML)) {
        if (lowercase.checked && RandomPassword.length < Number(Length.innerHTML)) {
            RandomPassword += Lower[Math.floor(Math.random() * Lower.length)]
        }
        if (uppercase.checked && RandomPassword.length < Number(Length.innerHTML)) {
            RandomPassword += Upper[Math.floor(Math.random() * Upper.length)]
        }
        if (numbers.checked && RandomPassword.length < Number(Length.innerHTML)) {
            RandomPassword += Numbers[Math.floor(Math.random() * Numbers.length)]
        }
        if (specialSymbols.checked && RandomPassword.length < Number(Length.innerHTML)) {
            RandomPassword += SpecialSymbols[Math.floor(Math.random() * SpecialSymbols.length)]
        }
    }
    return RandomPassword;
}

generate.addEventListener("click", () => {
    if (input.value == "" && !lowercase.checked && !uppercase.checked && !numbers.checked && !specialSymbols.checked) {
        input.value = "Please select password type"
    }
    else if (input.value != "" && (!lowercase.checked && !uppercase.checked && !numbers.checked && !specialSymbols.checked)) {
        input.value = "Please select password type"
    }
    else {
        input.value = "";
        input.value = generatingPass();
    }
})

copy.addEventListener("click", () => {
    if (input.value != "" || input.value.length >= 4) {
        navigator.clipboard.writeText(input.value)
        copy.title = "Password copied"
        copy.src = "assets/check.png"
        setTimeout(() => {
            copy.src = "assets/copy-icon.png"
        }, 2000)
    }
})