function show(num) {
    document.getElementById("output").value += num;
}

function calculate() {
    let x = eval(document.getElementById("output").value);
    document.getElementById("output").value = x;
}

function clr() {
    document.getElementById("output").value = "";
}