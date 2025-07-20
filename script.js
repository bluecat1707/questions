// ----------------- DATA: SUBJECTS, UNITS, QUESTIONS -----------------
const unitsData = {
  Mathematics: [
    {
      unitName: "Algebra",
      questions: [
        {
          questionText: "What is 2x + 3 = 7, x = ?",
          options: ["1", "2", "3", "4"],
          correctAnswer: "2"
        },
        {
          questionText: "Simplify: 2(3x + 1)",
          options: ["6x + 1", "3x + 2", "6x + 2", "5x + 1"],
          correctAnswer: "6x + 2"
        }
      ]
    },
    {
      unitName: "Geometry",
      questions: [
        {
          questionText: "Sum of angles in a triangle?",
          options: ["90°", "180°", "270°", "360°"],
          correctAnswer: "180°"
        }
      ]
    }
  ],
  Science: [
    {
      unitName: "Physics",
      questions: [
        {
          questionText: "Speed formula?",
          options: ["Distance/Time", "Time*Distance", "Mass*Acceleration", "Force/Area"],
          correctAnswer: "Distance/Time"
        }
      ]
    },
    {
      unitName: "Biology",
      questions: [
        {
          questionText: "Basic unit of life?",
          options: ["Cell", "Atom", "Organ", "Organism"],
          correctAnswer: "Cell"
        }
      ]
    }
  ]
};

// ----------------- APP STATE -----------------
let currentSubject = null;
let currentUnitIdx = null;
let currentQuestionIdx = 0;
let score = 0;

// ----------------- MAIN APP LOGIC -----------------
function showSubjects() {
  const app = document.getElementById('app');
  app.innerHTML = '<h2>Select a Subject</h2><ul id="subject-list"></ul>';
  const list = document.getElementById('subject-list');
  Object.keys(unitsData).forEach(sub => {
    const li = document.createElement('li');
    li.className = "subject";
    li.textContent = sub;
    li.onclick = () => showUnits(sub);
    list.appendChild(li);
  });
}

function showUnits(subject) {
  currentSubject = subject;
  const app = document.getElementById('app');
  app.innerHTML = `<h2>${subject} Units</h2><ul id="unit-list"></ul>
    <button class="back-btn" onclick="showSubjects()">⬅ Back to Subjects</button>`;
  const list = document.getElementById('unit-list');
  unitsData[subject].forEach((unit, idx) => {
    const li = document.createElement('li');
    li.className = "unit";
    li.textContent = unit.unitName;
    li.onclick = () => startQuiz(idx);
    list.appendChild(li);
  });
}

function startQuiz(unitIdx) {
  currentUnitIdx = unitIdx;
  currentQuestionIdx = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const unit = unitsData[currentSubject][currentUnitIdx];
  const question = unit.questions[currentQuestionIdx];
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>${unit.unitName} Quiz</h2>
    <div class="progress">Q${currentQuestionIdx + 1} of ${unit.questions.length}</div>
    <div class="question">${question.questionText}</div>
    <div class="options" id="options"></div>
    <button class="back-btn" onclick="showUnits('${currentSubject}')">⬅ Back to Units</button>
  `;
  question.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => submitAnswer(opt);
    document.getElementById('options').appendChild(btn);
  });
}

function submitAnswer(selected) {
  const unit = unitsData[currentSubject][currentUnitIdx];
  const question = unit.questions[currentQuestionIdx];
  if (selected === question.correctAnswer) score++;
  currentQuestionIdx++;
  if (currentQuestionIdx < unit.questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const unit = unitsData[currentSubject][currentUnitIdx];
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>${unit.unitName} Quiz Result</h2>
    <div class="score">Your Score: ${score}/${unit.questions.length}</div>
    <button class="retry-btn" onclick="startQuiz(${currentUnitIdx})">Try Again</button>
    <button class="back-btn" onclick="showUnits('${currentSubject}')">⬅ Back to Units</button>
  `;
}

// For button onclicks to work even in string HTML:
window.showSubjects = showSubjects;
window.showUnits = showUnits;
window.startQuiz = startQuiz;

// --------- INITIALIZE APP ON LOAD ----------
document.addEventListener("DOMContentLoaded", showSubjects);
