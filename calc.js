let outputText = document.getElementById("output-text");
let previousText = document.getElementById("prevous-text");

document.getElementById("clear").addEventListener("click", () => {
    outputText.innerHTML = "";
});

document.getElementById("multiply").addEventListener("click", () => {
    outputText.innerHTML += "*";
});

document.getElementById("divide").addEventListener("click", () => {
    outputText.innerHTML += "/";
});

document.getElementById("minus").addEventListener("click", () => {
    outputText.innerHTML += "-";
});

document.getElementById("plus").addEventListener("click", () => {
    outputText.innerHTML += "+";
});

document.getElementById("equals").addEventListener("click", () => {
    
});

document.getElementById("seven").addEventListener("click", () => {
    outputText.innerHTML += "7";
});

document.getElementById("eight").addEventListener("click", () => {
    outputText.innerHTML += "8";
});

document.getElementById("nine").addEventListener("click", () => {
    outputText.innerHTML += "9";
});

document.getElementById("four").addEventListener("click", () => {
    outputText.innerHTML += "4";
});

document.getElementById("five").addEventListener("click", () => {
    outputText.innerHTML += "5";
});

document.getElementById("six").addEventListener("click", () => {
    outputText.innerHTML += "6";
});

document.getElementById("one").addEventListener("click", () => {
    outputText.innerHTML += "1";
});

document.getElementById("two").addEventListener("click", () => {
    outputText.innerHTML += "2";
});

document.getElementById("three").addEventListener("click", () => {
    outputText.innerHTML += "3";
});

document.getElementById("zero").addEventListener("click", () => {
    outputText.innerHTML += "0";
});

document.getElementById("point").addEventListener("click", () => {
    if (outputText.innerHTML.includes(".")) return;
    outputText.innerHTML += ".";
});

