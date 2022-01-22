const allBP = document.querySelectorAll(".BP");
const e_artBody = document.getElementById("artBody");
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
const selectDeg = document.getElementById("degrees");
const selectSpeed = document.getElementById("speed");
const jump = document.getElementById("jump");

console.log(speed.value);
let degrees = 45;
let transformTimer = 500;
bodyParts1 = [e_LB.id, e_TB.id, e_H.id];
bodyParts2 = [
   e_TAL.id,
   e_LAL.id,
   e_HL.id,
   e_TAR.id,
   e_LAR.id,
   e_HR.id,
   e_TLL.id,
   e_LLL.id,
   e_FL.id,
   e_TLR.id,
   e_LLR.id,
   e_FR.id,
];


selectDeg.addEventListener("change", (e) => {
   degrees = e.target.value;
});

selectSpeed.addEventListener("change", (e) => {
   transformTimer = e.target.value;
   changeSpeed();
   console.log(transformTimer);
});

jump.addEventListener("click", () => {
   jumpFn();
   jump.disabled = true;
   setTimeout(() => {
      jump.disabled = false;
   }, 2 * transformTimer);
});

e_LB.addEventListener("click", (e) => {
   if (bodyParts2.includes(e.target.id)) {
      rotateR(e.target);
      // console.log('2');
   } else if (bodyParts1.includes(e.target.id)) {
      rotateL(e.target);
      // console.log('1');
   }
   console.log(e.target.id);
});

e_LB.addEventListener("contextmenu", (e) => {
   e.preventDefault();
   if (bodyParts2.includes(e.target.id)) {
      rotateL(e.target);
      // console.log('2');
   } else if (bodyParts1.includes(e.target.id)) {
      rotateR(e.target);
      // console.log('1');
   }
   console.log(e.target.id);
});


function changeSpeed() {
   allBP.forEach((element) => {
      element.style.transition = `all ${transformTimer}ms ease-in-out`;
   });
}

function rotateR() {
   const elementArr = [...arguments];
   elementArr.forEach((arg) => {
      arg.style.transform = arg.style.transform + `rotate(${degrees}deg)`;
   });
}

function rotateL() {
   const elementArr = [...arguments];
   elementArr.forEach((arg) => {
      arg.style.transform = arg.style.transform + `rotate(-${degrees}deg)`;
   });
}

function jumpFn() {
   // e_artBody.style.transform = "translateY(-200px)";
   e_LB.style.transform = "translateY(-120%)";
   setTimeout(() => {
      console.log("work");
      // e_artBody.style.transform = "translateY(0px)";
      e_LB.style.transform = "translateY(0px)";
   }, transformTimer);
}

changeSpeed();