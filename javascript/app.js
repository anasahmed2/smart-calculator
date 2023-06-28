var input = document.getElementById("input")
var ongoing = document.getElementById("ongoing")

var tempStorage = "";
function click_0() {
    input.value += "0"
    tempStorage = input.value
}

function click_1() {
    input.value += "1"
    tempStorage = input.value

}

function click_2() {
    input.value += "2"
    tempStorage = input.value

}

function click_3() {
    input.value += "3"
    tempStorage = input.value
}

function click_4() {
    input.value += "4"
    tempStorage = input.value
}

function click_5() {
    input.value += "5"
    tempStorage = input.value
}

function click_6() {
    input.value += "6"
    tempStorage = input.value
}

function click_7() {
    input.value += "7"
    tempStorage = input.value
}

function click_8() {
    input.value += "8"
    tempStorage = input.value
}

function click_9() {
    input.value += "9"
    tempStorage = input.value
}

function click_add() {
    input.value += "+"
    tempStorage = input.value
}


function click_sub() {
    input.value += "-"
    tempStorage = input.value
}

function click_multi() {
    input.value += "x"
    tempStorage = input.value
}

function click_divid() {
    input.value += "/"
    tempStorage = input.value
}

function click_modules() {
    input.value += "%"
    tempStorage = input.value
}

function click_point() {
    input.value += "."
    tempStorage = input.value
}
function click_c() {
    if (input.value === "Infinity" || input.value === "Syntax Error") {
        input.value = ""
    }
    input.value = input.value.slice(0, input.value.length - 1)
    ongoing.value = "";
    tempStorage = input.value
}

function click_ac() {
    input.value = "";
    ongoing.value = "";
    tempStorage = input.value
}


function click_equal() {
    if (input.value == "") {
        input.value = "";
    }
    if (tempStorage.indexOf("x") !== -1) {
        tempStorage = tempStorage.replaceAll("x", "*")
    }
    if (input.value.charAt(input.value.indexOf("+")) == input.value.charAt(input.value.indexOf("+") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    } else if (input.value.charAt(input.value.indexOf("-")) == input.value.charAt(input.value.indexOf("-") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    } else if (input.value.charAt(input.value.indexOf("x")) == input.value.charAt(input.value.indexOf("x") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    } else if (input.value.charAt(input.value.indexOf("/")) == input.value.charAt(input.value.indexOf("/") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    } else if (input.value.charAt(input.value.indexOf("%")) == input.value.charAt(input.value.indexOf("%") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    } else if (input.value.charAt(input.value.indexOf(".")) == input.value.charAt(input.value.indexOf(".") + 1)) {
        input.value = "Syntax Error"
        ongoing.value = "";

    }
    else {
        input.value = eval(tempStorage)
    }
    ongoing.value = tempStorage;
    console.log(tempStorage)
    console.log(input.value)
}
