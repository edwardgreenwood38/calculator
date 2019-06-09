// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
//(function () {
//    "use strict";

//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//        var parentElement = document.getElementById('deviceready');
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//    };

//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//} )();

let a = 0;
let math = "";
let total = 0;
let m = 0;


document.getElementById("btn9").addEventListener("click", addDisplay9);
document.getElementById("btn8").addEventListener("click", addDisplay8);
document.getElementById("btn7").addEventListener("click", addDisplay7);
document.getElementById("btn6").addEventListener("click", addDisplay6);
document.getElementById("btn5").addEventListener("click", addDisplay5);
document.getElementById("btn4").addEventListener("click", addDisplay4);
document.getElementById("btn3").addEventListener("click", addDisplay3);
document.getElementById("btn2").addEventListener("click", addDisplay2);
document.getElementById("btn1").addEventListener("click", addDisplay1);
document.getElementById("btn0").addEventListener("click", addDisplay0);

document.getElementById("btnC").addEventListener("click", clearDisplay);
document.getElementById("btnPlus").addEventListener("click", Fplus);
document.getElementById("btnMinus").addEventListener("click", Fminus);
document.getElementById("btnMultiply").addEventListener("click", Fmultiply);
document.getElementById("btnDivide").addEventListener("click", Fdivide);
document.getElementById("btnTotal").addEventListener("click", calculate);

document.getElementById("btnPeriod").addEventListener("click", period);
document.getElementById("btnM").addEventListener("click", M);
document.getElementById("btnMR").addEventListener("click", MR);
document.getElementById("btnNeg").addEventListener("click", neg);


function addDisplay9() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn9").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn9").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay8() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn8").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn8").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay7() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn7").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn7").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay6() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn6").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn6").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay5() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn5").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn5").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay4() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn4").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn4").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay3() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn3").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn3").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay2() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn2").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn2").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay1() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn1").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn1").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function addDisplay0() {
    let check = document.getElementById("display").innerHTML;
    if (check == "0" || math == "complete") {
        let number = document.getElementById("btn0").innerHTML;
        document.getElementById("display").innerHTML = number;
        if (math == "complete") {
            math = "";
        }
    }
    else {
        let number = document.getElementById("btn0").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function period() {
    let check = document.getElementById("display").innerHTML;

    if (check.indexOf(".") == -1) {
        let number = document.getElementById("btnPeriod").innerHTML;
        document.getElementById("display").innerHTML = check + number;
    }
}
function M() {
    m = document.getElementById("display").innerHTML;
}
function MR() {
    document.getElementById("display").innerHTML = m;
}
function neg() {
    let n = document.getElementById("display").innerHTML;
    if (n > 0) {
        document.getElementById("display").innerHTML = -Math.abs(n);
    }
    else {
        document.getElementById("display").innerHTML = Math.abs(n);
    }
}


function clearDisplay() {
    document.getElementById("display").innerHTML = 0;
}
function Fplus() {
    a = document.getElementById("display").innerHTML;
    math = "plus";
    document.getElementById("display").innerHTML = 0;
}
function Fminus() {
    a = document.getElementById("display").innerHTML;
    math = "minus";
    document.getElementById("display").innerHTML = 0;
}
function Fmultiply() {
    a = document.getElementById("display").innerHTML;
    math = "multiply";
    document.getElementById("display").innerHTML = 0;
}
function Fdivide() {
    a = document.getElementById("display").innerHTML;
    math = "divide";
    document.getElementById("display").innerHTML = 0;
}


function calculate() {
    if (math != "") {
        let b = document.getElementById("display").innerHTML;

        if (math == "plus") {
            total = Number(a) + Number(b);
        }
        if (math == "minus") {
            total = Number(a) - Number(b);
        }
        if (math == "multiply") {
            total = Number(a) * Number(b);
        }
        if (math == "divide") {
            total = Number(a) / Number(b);
        }



        document.getElementById("display").innerHTML = Math.round(total * 1000000000) / 1000000000;
        math = "complete";
        total = 0;
    }
    
}
