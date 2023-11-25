const questions = [

    {
        'que': "Which of the following is a markup language",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "Php",
        "correct": "a",
    },

    {
        'que': "What year was javascript was launched",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "None of these",
        "correct": "b",
    },

    {
        'que': "What does CSS stand for",
        "a": "Hypertext MarkUp Language",
        "b": "Cascading Style Sheet",
        "c": "Json Object notation",
        "d": "Helicopter teminals",
        "correct": "b",
    }
]


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesbox");
const optionInputs = document.querySelectorAll('.options');
const laodQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const ans = getAnswer();
    let data = questions[index];
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    laodQuestion();
    return;
}

const getAnswer = () => {
    let answer ;
    optionInputs.forEach(
        (inputs) => {
            if (inputs.checked) {
                // return inputs.value;
                answer = inputs.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3>Thank you for playing</h3> 
    <h2>${right} / ${total} are correct</h2>`

}
laodQuestion();
