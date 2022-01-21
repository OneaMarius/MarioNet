const e_LB = document.getElementById("LowBody");
const e_TB = document.getElementById("TopBody");
const e_H = document.getElementById("Head");
const e_TAL = document.getElementById("TopArmLeft");
const e_LAL = document.getElementById("LowArmLeft");
const e_HL = document.getElementById("HandLeft");
const e_TAR = document.getElementById("TopArmRight");
const e_LAR = document.getElementById("LowArmRight");
const e_HR = document.getElementById("HandRight");
const e_TLL = document.getElementById("TopLegLeft");
const e_LLL = document.getElementById("LowLegLeft");
const e_FL = document.getElementById("FootLeft");
const e_TLR = document.getElementById("TopLegRight");
const e_LLR = document.getElementById("LowLegRight");
const e_FR = document.getElementById("FootRight");

e_LB.addEventListener("click", (e) => {
   rotateL45(e.target);
   console.log(e.target);
});

e_LB.addEventListener("contextmenu", (e) => {
   e.preventDefault();
   rotateR45(e.target);
});

function rotateR45() {
    const elementArr = [...arguments];
    elementArr.forEach((arg) => {
       arg.style.transform = arg.style.transform + "rotate(45deg)";
    });
 }
 
 function rotateL45() {
    const elementArr = [...arguments];
    elementArr.forEach((arg) => {
       arg.style.transform = arg.style.transform + "rotate(-45deg)";
    });
 }
 