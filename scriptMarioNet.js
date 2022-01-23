const allBP = document.querySelectorAll(".BP");
const LowBody = document.getElementById("LowBody");
const TopBody = document.getElementById("TopBody");
const Head = document.getElementById("Head");
const TopArmLeft = document.getElementById("TopArmLeft");
const LowArmLeft = document.getElementById("LowArmLeft");
const HandLeft = document.getElementById("HandLeft");
const TopArmRight = document.getElementById("TopArmRight");
const LowArmRight = document.getElementById("LowArmRight");
const HandRight = document.getElementById("HandRight");
const TopLegLeft = document.getElementById("TopLegLeft");
const LowLegLeft = document.getElementById("LowLegLeft");
const FootLeft = document.getElementById("FootLeft");
const TopLegRight = document.getElementById("TopLegRight");
const LowLegRight = document.getElementById("LowLegRight");
const FootRight = document.getElementById("FootRight");

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const speedUp = document.getElementById('speedUp');
const speedDown = document.getElementById('speedDown');

const selectDeg = document.getElementById("degrees");
const selectSpeed = document.getElementById("speed");
const jump = document.getElementById("jump");
const reset = document.getElementById("reset");
const createPose = document.getElementById("createPose");
const replay = document.getElementById("replay");
const AutoPlayBtn = document.getElementById('autoPlay');
const Poses = document.querySelectorAll(".Pose");

let poseString = "resetAll();";
let replayPose = "resetAll();";
let PoseObj = {};
let degrees = 45;
let transformTimer = 700;
let DanceInterval;
let arrayIndex = 0;
let lastRandom = 0;
let autoPlay = false;
AutoPlayBtn.style.backgroundColor = 'green';
const music = new Audio('./music/dm.mp3');
music.loop =true;
music.playbackRate = transformTimer/1000;

// music.play();
// music.pause();

bodyParts1 = [LowBody.id, TopBody.id, Head.id];
bodyParts2 = [
   TopArmLeft.id,
   LowArmLeft.id,
   HandLeft.id,
   TopArmRight.id,
   LowArmRight.id,
   HandRight.id,
   TopLegLeft.id,
   LowLegLeft.id,
   FootLeft.id,
   TopLegRight.id,
   LowLegRight.id,
   FootRight.id,
];

speedDown.addEventListener('click',()=>{
    selectSpeed.value = +selectSpeed.value - 100;
    transformTimer = selectSpeed.value;
    changeSpeed();
})
speedUp.addEventListener('click',()=>{
    selectSpeed.value = +selectSpeed.value + 100;
    transformTimer = selectSpeed.value;
    changeSpeed();
})

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

selectDeg.addEventListener("change", (e) => {
   degrees = e.target.value;
});

selectSpeed.addEventListener("change", (e) => {
   transformTimer = e.target.value;
   changeSpeed();
});

jump.addEventListener("click", () => {
   jumpFn();
   jump.disabled = true;
   setTimeout(() => {
      jump.disabled = false;
   }, 2 * transformTimer);
});

LowBody.addEventListener("click", (e) => {
   if (bodyParts2.includes(e.target.id)) {
      rotateR(e.target);
   } else if (bodyParts1.includes(e.target.id)) {
      rotateL(e.target);
   }
});

LowBody.addEventListener("contextmenu", (e) => {
   e.preventDefault();
   if (bodyParts2.includes(e.target.id)) {
      rotateL(e.target);
   } else if (bodyParts1.includes(e.target.id)) {
      rotateR(e.target);
   }
});

function changeSpeed() {
    music.playbackRate = 700/transformTimer;
   allBP.forEach((element) => {
      element.style.transition = `all ${transformTimer}ms ease-in-out`;
   });
   clearInterval(DanceInterval);
   if (autoPlay) {
      DanceInterval = setInterval(() => {
          randomDance();
          // => Random dance code


        //  let random = Math.floor(Math.random()*arr.length);
        //  while (random === lastRandom) {
        //  random = Math.floor(Math.random()*arr.length);
        //  } 
        //  arr[random]();
        //  lastRandom = random;


         // arr[arrayIndex]();
         // arrayIndex++;
         // if (arrayIndex == arr.length) {
         //    arrayIndex = 0;
         // }
      }, transformTimer);
   }
}

function rotateR(elem) {
   elem.style.transform = elem.style.transform + `rotate(${degrees}deg)`;
   if (!PoseObj[elem.id]) {
      PoseObj[elem.id] = +degrees;
   } else {
      PoseObj[elem.id] = PoseObj[elem.id] + +degrees;
   }
}

function rotateL(elem) {
   elem.style.transform = elem.style.transform + `rotate(-${degrees}deg)`;
   if (!PoseObj[elem.id]) {
      PoseObj[elem.id] = -degrees;
   } else {
      PoseObj[elem.id] = PoseObj[elem.id] - degrees;
   }
}

function jumpFn() {
   LowBody.style.transform = "translateY(-120%)";
   setTimeout(() => {
      LowBody.style.transform = "translateY(0px)";
   }, transformTimer);
}

/////////////// AUTO MOVE ////////////

function Ro(elm, deg) {
   elm.style.transform = `rotate(${deg}deg)`;
}

function CreatePose() {
   poseString = "resetAll();"
   for (const key in PoseObj) {
      poseString = poseString + `Ro(${key}, ${PoseObj[key]});`;
   }
   replayPose = poseString;
}

function resetAll() {
   allBP.forEach((elem) => {
      Ro(elem, 0);
      PoseObj = {};
   });
   poseString = "resetAll();";
}

reset.addEventListener("click", () => {
   resetAll();
});

createPose.addEventListener("click", () => {
   CreatePose();
});

replay.addEventListener("click", () => {
   PlayLastPose();
});

AutoPlayBtn.addEventListener('click', () => {
   if (autoPlay) {
      autoPlay = false;
      music.pause();
      AutoPlayBtn.innerText = 'Start';
      AutoPlayBtn.style.backgroundColor = 'green';
   } else {
      autoPlay = true;
      music.play();
      AutoPlayBtn.innerText = 'Stop';
      AutoPlayBtn.style.backgroundColor = 'red';
   }
   changeSpeed();
})


///////////// Pose-Move - Dance /////////////////
Poses.forEach((pose, i) => {
    pose.addEventListener("click", () => {
       arr[i]();
    });
 });

const arr = [Post1, Post2,Post3, Post4,Post5, Post6,Post7, Post8,Post9, Post10];

function PlayLastPose() {
   Function(replayPose)();
}

function Post1() {
   resetAll();Ro(TopLegLeft, -45);Ro(LowLegLeft, 45);Ro(LowArmLeft, 90);Ro(HandLeft, 45);Ro(LowArmRight, -90);Ro(HandRight, -45);Ro(TopArmRight, -45);Ro(TopArmLeft, 45); 
}

function Post2() {
   resetAll();Ro(TopLegRight, 45);Ro(TopArmLeft, -45);Ro(TopArmRight, -45);Ro(Head, -45);
}
function Post3() {
   resetAll();Ro(TopArmLeft, 135);Ro(TopArmRight, 225);Ro(LowBody, 0);Ro(TopLegRight, 135);
}

function Post4() {
   resetAll();Ro(TopArmLeft, 135);Ro(TopArmRight, 225);Ro(LowBody, 0);Ro(TopLegRight, 135);Ro(LowLegRight, -90);Ro(LowArmLeft, 45);Ro(LowArmRight, -45);
}
function Post5() {
   resetAll();Ro(TopLegLeft, 90);Ro(TopLegRight, -135);Ro(LowLegLeft, 45);Ro(TopArmRight, 180);Ro(TopBody, 0);Ro(LowArmRight, 45);Ro(TopArmLeft, -180);Ro(LowArmLeft, 45);
}

function Post6() {
   resetAll();Ro(TopBody, -90);Ro(TopArmRight, 90);Ro(TopArmLeft, 90);Ro(LowArmRight, -45);Ro(LowArmLeft, 45);Ro(TopLegRight, 180);
}
function Post7() {
   resetAll();Ro(LowBody, -45);Ro(TopLegRight, 45);Ro(TopLegLeft, -45);Ro(TopArmRight, -45);Ro(TopArmLeft, 45);Ro(TopBody, -45);Ro(LowArmLeft, 45);Ro(LowArmRight, -45);
}

function Post8() {
   resetAll();Ro(LowBody, 180);Ro(TopArmLeft, -180);Ro(TopBody, 0);Ro(TopArmRight, -90);Ro(TopLegLeft, 90);
}
function Post9() {
   resetAll();Ro(TopLegLeft, 90);Ro(LowLegLeft, -135);Ro(FootLeft, -45);Ro(TopLegRight, -90);Ro(LowLegRight, 135);Ro(FootRight, 45);Ro(LowArmRight, 135);Ro(LowArmLeft, -135);Ro(Head, -360);
}

function Post10() {
   resetAll();Ro(TopBody, -360);Ro(TopArmLeft, 405);Ro(TopArmRight, -495);Ro(LowArmRight, -90);Ro(LowArmLeft, -90);Ro(TopLegLeft, 45);Ro(TopLegRight, -45);Ro(LowLegRight, 45);
}


changeSpeed();

// /////////////////////////// Random Dance ////////////////////////////////
function randomDance() {
    resetAll();
    Ro(RandomBP(), RandomDegree());
    Ro(RandomBP(), RandomDegree());
    Ro(RandomBP(), RandomDegree());
    Ro(RandomBP(), RandomDegree());
    Ro(RandomBP(), RandomDegree());
}

function RandomBP() {
    const randBP = allBP[Math.floor(Math.random()*allBP.length)];
    console.log(randBP.id);
    return randBP;
}

function RandomDegree() {
    const randDeg =   Math.floor(Math.random()*720 - 360);
    console.log(randDeg);
    return randDeg;

}

