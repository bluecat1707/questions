// ========== UNITWISE MCQs: NURSING EDUCATION (8 UNITS) ==========

const unitsData = {
  "Nursing Education": [
    {
      unitName: "Unit 1: Introduction to Theoretical Foundations",
      questions: [
        {
          questionText: "The all-round development drawing out the best of a child was envisaged by:",
          options: [
            "Swami Vivekananda",
            "Aurobindo Ghosh",
            "Mahatma Gandhi",
            "Dr Radhakrishnan"
          ],
          correctAnswer: "Mahatma Gandhi"
        },
        {
          questionText: "Reconstruction is termed:",
          options: [
            "Critical thinking theory",
            "Assumption theory",
            "Inclusion theory",
            "Exclusion theory"
          ],
          correctAnswer: "Critical thinking theory"
        },
        {
          questionText: "Education is termed:",
          options: [
            "Fitness of good.",
            "Living a better life by caring good",
            "Lifelong process",
            "Process to achieve something"
          ],
          correctAnswer: "Lifelong process"
        },
        {
          questionText: "Arms of education are:",
          options: [
            "Social, volcano and cultural",
            "Normal, spiritual and intellectual",
            "To get an employment",
            "Both (a) and (d)"
          ],
          correctAnswer: "Both (a) and (d)"
        },
        {
          questionText: "Principles of education is except:",
          options: [
            "Self-determination",
            "Develop independent learning skills",
            "Develop leadership skills",
            "To guide people"
          ],
          correctAnswer: "To guide people"
        },
        {
          questionText: "Learning is except:",
          options: [
            "Self-directed",
            "Self-activity",
            "Not transferable",
            "Creative"
          ],
          correctAnswer: "Not transferable"
        },
        {
          questionText: "The most recognized learning theory in education is:",
          options: [
            "Bloom’s taxonomy",
            "Motivational theory",
            "Theory of avoidance",
            "None of these"
          ],
          correctAnswer: "Bloom’s taxonomy"
        },
        {
          questionText: "Affective domain of learning includes:",
          options: [
            "Attitude, values, interest and appreciation",
            "Attitude, moral, interest and appreciation",
            "Attitude, moral and appreciation",
            "Attitude, values and interest"
          ],
          correctAnswer: "Attitude, values, interest and appreciation"
        },
        {
          questionText: "Transformation learning process is:",
          options: [
            "Based on learning by doing",
            "Make sense of other life experiences",
            "Make sense and people’s own life experiences",
            "Based on cognitive values"
          ],
          correctAnswer: "Make sense and people’s own life experiences"
        },
        {
          questionText: "Education is dependent on:",
          options: [
            "Anthropology",
            "Sociology",
            "Philosophy",
            "Geography"
          ],
          correctAnswer: "Philosophy"
        },
        {
          questionText: "The objectives of lesson plan should be:",
          options: [
            "Learner oriented",
            "Teacher oriented",
            "Both (a) and (b)",
            "None of these"
          ],
          correctAnswer: "Learner oriented"
        },
        {
          questionText: "The learning domains of Bloom’s taxonomy are:",
          options: [
            "Cognitive and psychomotor",
            "Alternative and cognitive",
            "Cognitive, affective and psychomotor",
            "Psychomotor and effective"
          ],
          correctAnswer: "Cognitive, affective and psychomotor"
        },
        {
          questionText: "Central objective is also known as:",
          options: [
            "Specific objective",
            "Departmental objective",
            "Institution objective",
            "Main objective"
          ],
          correctAnswer: "Institution objective"
        },
        {
          questionText: "The maxims of learning is:",
          options: [
            "Known to unknown",
            "Concrete to abstract",
            "Sample to complex",
            "All of these"
          ],
          correctAnswer: "All of these"
        },
        {
          questionText: "The stages of learning are:",
          options: [
            "Cognitive, associate and disassociate",
            "Cognitive, autonomous and captive",
            "Cognitive, associative and autonomous",
            "Cognitive, associative and behavior"
          ],
          correctAnswer: "Cognitive, associative and autonomous"
        }
      ]
    },
    {
      unitName: "Unit 2: Assessment and Planning",
      questions: [
        // All 30 MCQs from Chapter 2, converted to the same format as above (see below for examples)
        {
          questionText: "Factors influencing selection of clinical learning experience except:",
          options: [
            "Allowing students to practise and make decision",
            "Relationship with clinical staff",
            "Mentoring done by teaching and clinical staff",
            "Innovative and creative clinical environment"
          ],
          correctAnswer: "Allowing students to practise and make decision"
        },
        {
          questionText: "The learning outcomes in clinical setting should be focused on:",
          options: [
            "Students ability to focus on interpersonal/relationship",
            "Student ability to work without supervision",
            "Student knowledge to be focused",
            "Student behavior to be focused interms of application of theory in practice"
          ],
          correctAnswer: "Student behavior to be focused interms of application of theory in practice"
        },
        // ...continue with all 30 MCQs from Chapter 2 as seen in your PDF[1]
      ]
    },
    {
      unitName: "Unit 3: Implementation",
      questions: [
        // ...copy MCQs from Chapter 3 in the same question/answer format
      ]
    },
    {
      unitName: "Unit 4: Teaching in the Clinical Setting",
      questions: [
        // ...copy MCQs from Chapter 4 in the same question/answer format
      ]
    },
    {
      unitName: "Unit 5: Educational/Teaching Media",
      questions: [
        // ...copy MCQs from Chapter 5 in the same question/answer format
      ]
    },
    {
      unitName: "Unit 6: Assessment and Evaluation Methodologies",
      questions: [
        // ...copy MCQs from Chapter 6 in the same question/answer format
      ]
    },
    {
      unitName: "Unit 7: Guidance/Academic Advising Counseling and Discipline",
      questions: [
        // ...copy MCQs from Chapter 7 in the same question/answer format
      ]
    },
    {
      unitName: "Unit 8: Ethics and Evidence-Based Teaching in Nursing Education",
      questions: [
        // ...copy MCQs from Chapter 8 in the same question/answer format
      ]
    }
  ]
};


// ========== MAIN APP LOGIC (No changes needed!) ==========

let currentUnitIdx = null;
let currentQuestionIdx = 0;
let score = 0;
let answers = [];

// Rendering Functions
function showUnits() {
  const app = document.getElementById('app');
  app.innerHTML = '<h2>Nursing Education - Select a Unit</h2><ul id="unit-list"></ul>';
  const list = document.getElementById('unit-list');
  unitsData["Nursing Education"].forEach((unit, idx) => {
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
  answers = [];
  showQuestion();
}

function showQuestion() {
  const unit = unitsData["Nursing Education"][currentUnitIdx];
  const question = unit.questions[currentQuestionIdx];
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>${unit.unitName} MCQ Quiz</h2>
    <div class="progress">Q${currentQuestionIdx + 1} of ${unit.questions.length}</div>
    <div class="question">${question.questionText}</div>
    <div class="options" id="options"></div>
    <button class="back-btn" onclick="showUnits()">⬅ Back to Units</button>
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
  const unit = unitsData["Nursing Education"][currentUnitIdx];
  const question = unit.questions[currentQuestionIdx];
  answers.push({
    question: question.questionText,
    options: question.options,
    selected,
    correct: question.correctAnswer
  });
  if (selected === question.correctAnswer) score++;
  currentQuestionIdx++;
  if (currentQuestionIdx < unit.questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const unit = unitsData["Nursing Education"][currentUnitIdx];
  const app = document.getElementById('app');
  let html = `
    <h2>${unit.unitName} Quiz Result</h2>
    <div class="score">Your Score: ${score}/${unit.questions.length}</div>
    <div class="result-list">
      ${answers.map((a, i) => `
        <div class="result-question">
          <div><b>Q${i + 1}.</b> ${a.question}</div>
          <div>
            Your answer: <span class="${a.selected === a.correct ? 'correct' : 'wrong'}">${a.selected}</span><br>
            Correct answer: <span class="correct">${a.correct}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <button class="retry-btn" onclick="startQuiz(${currentUnitIdx})">Try Again</button>
    <button class="back-btn" onclick="showUnits()">⬅ Back to Units</button>
  `;
  app.innerHTML = html;
}

// Initialize
window.showUnits = showUnits;
window.startQuiz = startQuiz;
document.addEventListener("DOMContentLoaded", showUnits);
