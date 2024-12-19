function submitAnswer(questionNumber, correctAnswer) {
  const input = document.getElementById(`answer${questionNumber}`);
  const userAnswer = input.value.toLowerCase().trim();

  if (userAnswer === correctAnswer.toLowerCase()) {
    alert('Correct!');

    // Reveal the next question
    const nextQuestion = document.getElementById(`q${questionNumber + 1}`);
    if (nextQuestion) {
      nextQuestion.classList.remove('hidden');
    }
  } else {
    alert('Try again!');
  }
}
