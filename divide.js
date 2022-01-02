const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");

var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 11);
    var dummyAnswer1 = Math.floor(Math.random() * 600);
    var dummyAnswer2 = Math.floor(Math.random() * 600);

    let allAnswers = [];
    let switchAnswers = [];

    answer = num1 / num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i= allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
};

const answerAction = (e) => {
    e.target.innerHTML == answer ? generate_equation() : audio.play()
}

option1.addEventListener("click", answerAction);
option2.addEventListener("click", answerAction);
option3.addEventListener("click", answerAction);

generate_equation();