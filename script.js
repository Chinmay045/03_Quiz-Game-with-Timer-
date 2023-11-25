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
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 2}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const ans = getAnswer();
    let data = questions[index];
    if (ans === data.checked) {
        right++;
    } else {
        wrong++;
    }
    index++;
    laodQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach(
        (inputs) => {
            if (inputs.checked) {
                return inputs.value;
            }
        }
    )
}
laodQuestion();
