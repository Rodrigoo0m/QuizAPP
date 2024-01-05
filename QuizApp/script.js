const quizData = [
    {
      question: "Qual é a capital de Portugal?",
      a: "Porto",
      b: "Lisboa",
      c: "Coimbra",
      d: "Faro",
      correct: "b",
    },
    // Adicione mais perguntas aqui
  ];
  
  const quiz = document.getElementById('quiz');
  const answersEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
  
    answersEls.forEach((answerEl) => {
      if(answerEl.checked){
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  
  function deselectAnswers() {
    answersEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
  
    if(answer){
      if(answer === quizData[currentQuiz].correct){
        score++;
      }
  
      currentQuiz++;
      if(currentQuiz < quizData.length){
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>Você acertou ${score}/${quizData.length} perguntas.</h2> <button onclick="location.reload()">Jogar Novamente</button>`;
      }
    }
  });
  