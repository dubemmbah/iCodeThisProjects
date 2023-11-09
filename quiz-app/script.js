const quizData = [
  {
    question: "Who is the current president of the US?",
    a: "Barack Obama",
    b: "Donald Trump",
    c: "Bill Clinton",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What is the official Nigerian monetary currency?",
    a: "Naira",
    b: "Dollar",
    c: "Yen",
    d: "Pound",
    correct: "a",
  },
  {
    question: "Who is the richest man in the world?",
    a: "Bill Gates",
    b: "Warren Buffett",
    c: "Jeff Bezos",
    d: "Elon Musk",
    correct: "d",
  },
  {
    question: "How many planets make up the solar system?",
    a: 6,
    b: 8,
    c: 7,
    d: 9,
    correct: "c",
  },
  {
    question: "What country won the 2018 FIFA World Cup?",
    a: "Argentina",
    b: "France",
    c: "Spain",
    d: "Croatia",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnSubmit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btnSubmit.addEventListener("click", () => {
  // check to see if we have an answer (truthy value)
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You got ${score} / ${quizData.length} questions correctly</h2>
      
      <button onclick=location.reload()>Reload</button>
      `;
    }
  }
});
