const elements = document.querySelectorAll(".BP");

elements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        rotateRightFn(e.target);
    });

    elem.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        rotateLeftFn(e.target);
    });
});

function rotateLeftFn() {
    const elementArr = [...arguments];
    elementArr.forEach((arg) => {
        arg.style.transform = arg.style.transform + "rotate(45deg)";
    });
}

function rotateRightFn() {
    const elementArr = [...arguments];
    elementArr.forEach((arg) => {
        arg.style.transform = arg.style.transform + "rotate(-45deg)";
    });
}

function rotate180() {
    const elementArr = [...arguments];
    elementArr.forEach((arg) => {
        arg.style.transform = arg.style.transform + "rotate(180deg)";
    });
}

console.log(elements);

// rotateRightFn(
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[]
// );
// rotateLeftFn(
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[],
//     elements[]
// );

//  Elements:
// 2: head
// 3: neck
// 1: topBody
// 0: lowerBody
// 4: topArm.TAL  LEFT
// 7: topArm.TAR   RIGHT
// 5: lowerArm.LAL  LEFT
// 8: lowerArm.LAR   RIGHT
// 6: hands.leftHand   LEFT
// 9: hands.rightHand   RIGHT
// 10: topLeg.TLL    LEFT
// 13: topLeg.TLR    RIGHT
// 11: lowerLeg.LLL   LEFT
// 14: lowerLeg.LLR    RIGHT
// 12: foots.leftFoot   LEFT
// 15: foots.rightFoot   RIGHT

rotateLeftFn(
    elements[10],
    elements[14],
    elements[4],
    elements[4],
    elements[6],
    elements[6]
);
rotateRightFn(
    elements[13],
    elements[11],
    elements[7],
    elements[7],
    elements[9],
    elements[9]
    // elements[]
);

setTimeout(
    () =>
        rotateLeftFn(
            elements[1],
            elements[12],
            elements[11],
            elements[4],
            elements[4],
            elements[8],
            elements[8],
            elements[2]
        ),
    2000
);
setTimeout(
    () =>
        rotateRightFn(
            elements[1],
            elements[12],
            elements[11],
            elements[4],
            elements[4],
            elements[8],
            elements[8],
            elements[2]
        ),
    4000
);
setTimeout(
    () =>
        rotateRightFn(
            elements[1],
            elements[15],
            elements[14],
            elements[7],
            elements[7],
            elements[5],
            elements[5],
            elements[2]
        ),
    6000
);

setTimeout(
    () =>
        rotateLeftFn(
            elements[1],
            elements[15],
            elements[14],
            elements[7],
            elements[7],
            elements[5],
            elements[5],
            elements[2]
        ),
    8000
);
setTimeout(() => {
    rotateRightFn(
        elements[10],
        elements[14],
        elements[4],
        elements[4],
        elements[6],
        elements[6]
    );
    rotateLeftFn(
        elements[13],
        elements[11],
        elements[7],
        elements[7],
        elements[9],
        elements[9]
    );
    rotate180(elements[0], elements[0]);
}, 10000);
