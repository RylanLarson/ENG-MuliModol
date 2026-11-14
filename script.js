// AI Literacy 101
// All lesson and quiz content lives in the COURSE list below.
// To change a lesson or a quiz question, edit the text here; the pages rebuild themselves.

const COURSE = [
  {
    title: "How LLMs Generate Answers",
    goal: "Course Goal: explain how LLMs generate their answers",
    sections: [
      {
        heading: "What is a LLM?",
        bullets: [
          "A LLM, by definition, is a type of artificial intelligence program trained on a massive amount of text data to recognize, summarize, translate, and generate human-like language.",
          "The term &ldquo;Artificial Intelligence&rdquo; was created by the computer scientist John McCarthy in the 1950&rsquo;s. In the late 50&rsquo;s there was a program that was created to learn and improve its chess playing capabilities.",
          "It isn&rsquo;t its own brain. Artificial neural networks are loosely inspired by human anatomy but run statistical calculations on physical computer hardware."
        ]
      },
      {
        heading: "Step 1: Your Words Are Generated",
        bullets: [
          "Your words are broken into tokens",
          "Each of those tokens are assigned to maps and assigned a statistical number of importance. That importance value is how the AI figures out its relation and what the possible meaning of the data is"
        ]
      },
      {
        heading: "Step 2: Predicting the Next Token",
        bullets: [
          "Given each token, the model calculates a probability for every possible next token. For example if you were to ask a model &ldquo;What is the capitol of Iowa?&rdquo; It processes every token within the prompt and will assign probability to every possible answer, with the highest probability being the output &ldquo;Des Moines.&rdquo;"
        ]
      },
      {
        heading: "Step 3: How LLM&rsquo;s actually became helpful",
        bullets: [
          "LLM&rsquo;s have been trained on large amounts of data, being provided with examples of good questions and answers. The LLM then learns to answer questions with similar responses.",
          "There is also reinforced learning from humans. Humans give their input as to whether or not a response was helpful or not. This allows the AI to curate its answer to users and make its responses clearer, safer, and more useful."
        ]
      }
    ],
    takeaways: [
      "LLM&rsquo;s process tokens and those tokens are used to predict answers which aren&rsquo;t always correct. Large data sets and human interaction helps train these models and can help create more accurate and useful answers."
    ],
    quiz: [
      {
        q: "What is a Large Language Model?",
        options: [
          "A database that looks up that correct answer for each question the user asks",
          "A program trained on large amounts of data to recognize, summarize, and generate human like text",
          "A program that is designed and functions like a human brain to think about and respond with the correct answers",
          "A new state of the art search engine that looks up the correct answer on the internet"
        ],
        answer: 1,
        why: "A LLM is a type of artificial intelligence program trained on a massive amount of text data to recognize, summarize, translate, and generate human-like language."
      },
      {
        q: "Which statement about AI and the human brain are correct?",
        options: [
          "It has its own brain just like ours and it thinks for itself",
          "AI neural networks are designed exactly like human brains",
          "AI neural networks are loosely designed around the human brain but use statistical calculations on physical computer hardware",
          "AI and the human brain have absolutely nothing to do with each other"
        ],
        answer: 2,
        why: "It isn’t its own brain. Artificial neural networks are loosely inspired by human anatomy but run statistical calculations on physical computer hardware."
      },
      {
        q: "What happens to your words before the model works with them?",
        options: [
          "They are broken up into what is called tokens",
          "They are translated to computer language",
          "They are used to search the internet",
          "They are saved as an answer to a different question"
        ],
        answer: 0,
        why: "Your words are broken into tokens, and each token is assigned a statistical number of importance."
      },
      {
        q: "You ask an LLM, “What is the capitol of Iowa?” Why does it answer “Des Moines”?",
        options: [
          "It looked at a map to figure out the correct answer",
          "It used google to figure it out",
          "It used the tokens that it generated to pay for an answer",
          "“Des Moines” had the highest probability of every possible token"
        ],
        answer: 3,
        why: "The model processes every token within the prompt and assigns a probability to every possible answer, with the highest probability being the output."
      },
      {
        q: "How does learning from human feedback make an LLM more helpful?",
        options: [
          "Humans delete the wrong answers that it gives so that it never provides that same answer again",
          "Humans rate how helpful a response was so that the model can provide more answers like it",
          "It lets the model stop predicting tokens",
          "So it doesn’t look that question up on the internet again"
        ],
        answer: 1,
        why: "Humans give their input as to whether or not a response was helpful, which makes the AI’s responses clearer, safer, and more useful."
      }
    ]
  },
  {
    title: "Recognizing Common Mistakes",
    goal: "Course Goal: recognize common mistakes while using AI",
    sections: [
      {
        heading: "Over relying on AI",
        bullets: [
          "Leaning on AI too much can hurt your ability to think. People often use AI as cognitive offloading, doing this too often can negatively affect critical thinking skills which are critical to develop while in school."
        ]
      },
      {
        heading: "Weak Prompting",
        bullets: [
          "The quality of your AI output depends on the description and complexity of the user's input. The more detail that you go into while prompting the AI helps you create a better and more concise output.",
          "Strong prompts may include but are not limited to: Specific design choices, the intended audience, key details or features that need to be included, and any key requirements that need to be met.",
          "The better that you are able to describe what you want, the better response that you will get. Learning how to prompt AI properly can seriously help you get the desired output, project design, or feature implementation."
        ]
      },
      {
        heading: "Funny Example of False Outputs",
        bullets: [
          "Google's AI overview provided factually incorrect information to a user urging that eating rocks are vital sources of minerals and vitamins.",
          "New York City created an AI chatbot to help small businesses navigate the laws of the city. This chatbot advised a small restaurant to break the law. It stated that the restaurant could serve cheese that was eaten by a rodent that was in the kitchen. Obviously this is incorrect and the city's AI chatbot hallucinated and provided a completely wrong answer."
        ]
      },
      {
        heading: "A Simple Checking Routine",
        bullets: [
          "Before you rely on an AI answer: (1) ask yourself how much it matter if the answer is wrong, (2) ask the AI where the information comes from, (3) confirm the key facts with a source you already trust, and (4) be extra careful with names, numbers, dates, quotes, and citations, since those are where made up details show up the most."
        ]
      }
    ],
    takeaways: [
      "Use AI to aid your academic progress, not hinder it",
      "Be as precise as you possibly can so that you can get the most accurate response",
      "Verify answers is critical because AI can confidently give you the wrong answers"
    ],
    quiz: [
      {
        q: "What is the main risk of using AI for cognitive offloading?",
        options: [
          "nothing",
          "A better overall course grade",
          "Weakened critical thinking skills",
          "It makes AI slower"
        ],
        answer: 2,
        why: "Using AI as cognitive offloading too often can negatively affect critical thinking skills, which are critical to develop while in school."
      },
      {
        q: "Which prompt will give the best output?",
        options: [
          "Create me a personal website that displays all of my positive attributes and make no mistakes",
          "Make a picture of a dog",
          "Write a 2 paragraph article for first time pet owners in a polite manner that tells them the basics of feeding, exercising, and socializing them",
          "Make a cool looking document that includes everything that I need to know about software engineering"
        ],
        answer: 2,
        why: "This prompt names the intended audience, the key details that need to be included, and the requirements that need to be met. The better that you are able to describe what you want, the better response that you will get."
      },
      {
        q: "What did New York City’s chatbot get wrong?",
        options: [
          "They should be providing their customers with rocks because of their important minerals",
          "They should not file taxes so that they can save money",
          "Fire all of their employees to keep their small business small",
          "It is acceptable to sell cheese that was eaten by a rodent"
        ],
        answer: 3,
        why: "The city’s AI chatbot hallucinated and stated that a restaurant could serve cheese that was eaten by a rodent that was in the kitchen."
      },
      {
        q: "Which details deserve the most attention in an AI answer?",
        options: [
          "Grammar",
          "Spelling",
          "Names, numbers, dates, quotes, and data",
          "The specific font that the AI gives to you"
        ],
        answer: 2,
        why: "Be extra careful with names, numbers, dates, quotes, and citations, since those are where made up details show up the most."
      },
      {
        q: "What should you do before relying on AI’s answers?",
        options: [
          "Ask yourself how much it matters if the answer is wrong",
          "Refer a friend to make sure the answer is correct",
          "Ask AI to make it longer",
          "Ask AI if it made any mistakes"
        ],
        answer: 0,
        why: "This is step (1) of the checking routine, followed by asking the AI where the information comes from and confirming the key facts with a source you already trust."
      }
    ]
  },
  {
    title: "Realistic Concerns vs. Myths",
    goal: "Course Goal: separate realistic concerns from myths",
    sections: [
      {
        heading: "Two Extremes",
        bullets: [
          "No matter the topic, people will take extreme positions and AI is not an exception. There are people that completely avoid AI out of fear and feel as if there are no benefits to it, while the other side swears by the tool and uses AI in every aspect of their life. The Pew Research Center found that 50% of Americans are more concerned than excited about the growing use of AI (Kennedy et al.). Some of those concerns can be understandable while some stem from myths surrounding AI."
        ]
      },
      {
        heading: "Myth 1: &ldquo;AI is on the verge of automating all jobs.&rdquo;",
        bullets: [
          "AI is starting to automate certain jobs rather than completely automating entire positions. Those jobs that are starting to be automated are low level jobs and their roles were already bound to change as we made technological changes.",
          "AI is changing how work is done. It is allowing people to automate the simple tasks that are considered time wasters, now allocating more time to the task that AI can not complete.",
          "With prior technological advances, jobs are bound to be disrupted as well as creating new occupations."
        ]
      },
      {
        heading: "Myth 2: &ldquo;AI is inherently bias free, since computers are not biased&rdquo;",
        bullets: [
          "Since AI is being trained on data created by humans, it can inherit and amplify the biases that we have.",
          "AI can be given a specific data set to be trained on and it can create a biased opinion on that data without having access to outside factors that could have potentially affected that data."
        ]
      },
      {
        heading: "Myth 3: &ldquo;AI can think creatively, almost better than humans.&rdquo;",
        bullets: [
          "AI&rsquo;s &ldquo;creativity&rdquo; is just a by-product of its advanced pattern recognition which is completely different from a human's natural creativity.",
          "AI creativity comes from its vast amount of training data, allowing it to pick up on common patterns but it doesn&rsquo;t have its own spark of creativity.",
          "When prompted with clear creative goals it can often create &ldquo;creative&rdquo; ideas quicker than humans can but because those ideas were generated quickly doesn&rsquo;t mean that they are good.",
          "Creativity will also be a uniquely human trait and that will never go away."
        ]
      },
      {
        heading: "Myth 4: &ldquo;AI doesn&rsquo;t need human oversight to operate&rdquo;",
        bullets: [
          "Human oversight is necessary to build and deploy AI created software and real world monitoring",
          "Humans are responsible for creating the data that it trains on, the design, monitoring errors, and managing the adoption/deployment of AI systems.",
          "Ensuring AI is developed and managed properly will be a human task for many years to come. This ranges from the data that it trains on to how AI is deployed for others to use.",
          "Humans also have to be able to double check the outputs that it is given as shown in module 2 where AI can give completely wrong and sometimes harmful answers."
        ]
      }
    ],
    takeaways: [],
    quiz: [
      {
        q: "What does Pew Research Center’s data show about Americans feelings towards AI?",
        options: [
          "nothing",
          "90% of Americans are excited",
          "Half of Americans are more concerned than excited",
          "Everyone uses AI in their daily life"
        ],
        answer: 2,
        why: "The Pew Research Center found that 50% of Americans are more concerned than excited about the growing use of AI (Kennedy et al.)."
      },
      {
        q: "“AI is on the verge of automating all jobs.” What is a more accurate statement?",
        options: [
          "AI is automating simple tasks, freeing people to do what is more important",
          "It hasn’t affected anyone's jobs yet",
          "This statement is correct",
          "AI is only creating new jobs and not disrupting already existing jobs"
        ],
        answer: 0,
        why: "AI is allowing people to automate the simple tasks that are considered time wasters, allocating more time to the task that AI can not complete."
      },
      {
        q: "Why can AI be biased?",
        options: [
          "Computers are never biased because they can’t think for themselves",
          "It is trained on data created by humans, who inherently are biased",
          "Bias only happens when tokens aren’t calculated properly",
          "There is no bias"
        ],
        answer: 1,
        why: "Since AI is being trained on data created by humans, it can inherit and amplify the biases that we have."
      },
      {
        q: "Where does AI’s “creativity” come from?",
        options: [
          "It has its own imagination",
          "Its own personal experience from other users",
          "From the internet",
          "Pattern recognition from its training data set"
        ],
        answer: 3,
        why: "AI’s “creativity” is a by-product of its advanced pattern recognition. It doesn’t have its own spark of creativity."
      },
      {
        q: "Which is NOT a job humans do while overseeing AI?",
        options: [
          "Create new data for AI to train on",
          "Monitor AI for errors",
          "Let AI run without checking its outputs",
          "Managing how AI is deployed"
        ],
        answer: 2,
        why: "Humans have to be able to double check the outputs, since AI can give completely wrong and sometimes harmful answers."
      }
    ]
  }
];

// ---------- Helpers ----------

// Which module or quiz does the URL ask for? (e.g. modules.html#module-3)
function indexFromHash(prefix) {
  const match = location.hash.match(new RegExp("^#" + prefix + "-(\\d+)$"));
  const index = match ? Number(match[1]) - 1 : 0;
  return index >= 0 && index < COURSE.length ? index : 0;
}

// Best quiz scores are remembered in this browser only.
function loadScores() {
  try {
    return JSON.parse(localStorage.getItem("aiLiteracyScores")) || {};
  } catch (error) {
    return {};
  }
}

function saveScore(index, score) {
  const scores = loadScores();
  if (!(index in scores) || score > scores[index]) {
    scores[index] = score;
    try {
      localStorage.setItem("aiLiteracyScores", JSON.stringify(scores));
    } catch (error) {
      // Storage is unavailable; the quiz still works without it.
    }
  }
}

function buildTabs(container, prefix, label, current, onSelect) {
  const scores = loadScores();
  container.innerHTML = "";
  COURSE.forEach(function (module, index) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "tab";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index === current ? "true" : "false");
    tab.title = module.title;
    tab.textContent = label + " " + (index + 1);
    if (scores[index] === module.quiz.length) {
      const check = document.createElement("span");
      check.className = "check";
      check.textContent = "✓";
      check.title = "Quiz passed with a perfect score";
      tab.appendChild(check);
    }
    tab.addEventListener("click", function () {
      history.replaceState(null, "", "#" + prefix + "-" + (index + 1));
      onSelect(index);
    });
    container.appendChild(tab);
  });
}

// ---------- Modules page ----------

function showModule(index) {
  const tabs = document.getElementById("module-tabs");
  const panel = document.getElementById("module-panel");
  const module = COURSE[index];
  const number = index + 1;

  buildTabs(tabs, "module", "Module", index, showModule);

  let html = "<h2>Module " + number + "</h2>";
  html += '<p class="goal">' + module.goal + "</p>";

  module.sections.forEach(function (section) {
    html += "<h3>" + section.heading + "</h3><ul>";
    section.bullets.forEach(function (text) {
      html += "<li>" + text + "</li>";
    });
    html += "</ul>";
  });

  if (module.takeaways.length) {
    html += '<div class="takeaways"><h3>Key Take Aways</h3><ul>';
    module.takeaways.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";
  }

  html += '<div class="module-nav">';
  html += '<a class="button" href="quizzes.html#quiz-' + number + '">Take Quiz ' + number + "</a>";
  if (index < COURSE.length - 1) {
    html += '<button type="button" class="button secondary" id="next-module">Next: Module ' + (number + 1) + " &rarr;</button>";
  }
  html += "</div>";

  panel.innerHTML = html;

  const next = document.getElementById("next-module");
  if (next) {
    next.addEventListener("click", function () {
      history.replaceState(null, "", "#module-" + (number + 1));
      showModule(index + 1);
      window.scrollTo({ top: 0 });
    });
  }
}

// ---------- Quizzes page ----------

function showQuiz(index) {
  const tabs = document.getElementById("quiz-tabs");
  const panel = document.getElementById("quiz-panel");
  const module = COURSE[index];
  const number = index + 1;
  const best = loadScores()[index];

  buildTabs(tabs, "quiz", "Quiz", index, showQuiz);

  let html = "<h2>Quiz " + number + ": " + module.title + "</h2>";
  html += '<p class="best">Covers <a href="modules.html#module-' + number + '">Module ' + number + "</a>.";
  if (best !== undefined) {
    html += " Your best score: " + best + " / " + module.quiz.length + ".";
  }
  html += "</p>";

  module.quiz.forEach(function (item, q) {
    html += '<fieldset class="question"><legend>' + (q + 1) + ". " + item.q + "</legend>";
    item.options.forEach(function (option, o) {
      html += '<label><input type="radio" name="q' + q + '" value="' + o + '"><span>' + option + "</span></label>";
    });
    html += '<p class="explain" hidden></p></fieldset>';
  });

  html += '<div class="quiz-actions">';
  html += '<button type="submit" class="button">Check answers</button>';
  html += '<button type="button" class="button secondary" id="retry" hidden>Try again</button>';
  html += '<p id="quiz-result" aria-live="polite"></p>';
  html += "</div>";

  panel.innerHTML = html;

  panel.onsubmit = function (event) {
    event.preventDefault();
    gradeQuiz(index);
  };

  document.getElementById("retry").addEventListener("click", function () {
    showQuiz(index);
  });
}

function gradeQuiz(index) {
  const panel = document.getElementById("quiz-panel");
  const result = document.getElementById("quiz-result");
  const questions = COURSE[index].quiz;
  const fieldsets = panel.querySelectorAll(".question");

  // Make sure every question has an answer before grading.
  const chosen = questions.map(function (item, q) {
    const picked = panel.querySelector('input[name="q' + q + '"]:checked');
    return picked ? Number(picked.value) : null;
  });

  if (chosen.includes(null)) {
    result.className = "warn";
    result.textContent = "Please answer every question first.";
    return;
  }

  let score = 0;

  questions.forEach(function (item, q) {
    const labels = fieldsets[q].querySelectorAll("label");
    const explain = fieldsets[q].querySelector(".explain");
    const isRight = chosen[q] === item.answer;

    if (isRight) {
      score += 1;
    } else {
      labels[chosen[q]].classList.add("incorrect");
    }
    labels[item.answer].classList.add("correct");

    explain.innerHTML =
      (isRight ? '<strong class="right">Correct.</strong> ' : '<strong class="wrong">Not quite.</strong> ') + item.why;
    explain.hidden = false;

    fieldsets[q].querySelectorAll("input").forEach(function (input) {
      input.disabled = true;
    });
  });

  saveScore(index, score);

  result.className = "score";
  result.textContent = "You scored " + score + " out of " + questions.length + ".";
  panel.querySelector('button[type="submit"]').hidden = true;
  document.getElementById("retry").hidden = false;

  // Refresh the tabs so a perfect score shows its check mark.
  buildTabs(document.getElementById("quiz-tabs"), "quiz", "Quiz", index, showQuiz);
}

// ---------- Grades page ----------

// Standard college plus/minus scale: the lowest percent that earns each letter.
const GRADE_SCALE = [
  [93, "A"], [90, "A-"],
  [87, "B+"], [83, "B"], [80, "B-"],
  [77, "C+"], [73, "C"], [70, "C-"],
  [67, "D+"], [63, "D"], [60, "D-"],
  [0, "F"]
];

function letterGrade(percent) {
  return GRADE_SCALE.find(function (row) {
    return percent >= row[0];
  })[1];
}

function showGrades() {
  const panel = document.getElementById("grades-panel");
  const scores = loadScores();
  let earned = 0;
  let possible = 0;
  let taken = 0;
  let rows = "";

  COURSE.forEach(function (module, index) {
    const number = index + 1;
    const total = module.quiz.length;
    const link = '<a href="quizzes.html#quiz-' + number + '">Quiz ' + number + "</a>: " + module.title;

    if (typeof scores[index] !== "number") {
      rows += "<tr><td>" + link + '</td><td class="pending">Not taken</td><td>&ndash;</td><td>&ndash;</td></tr>';
      return;
    }

    const score = Math.min(scores[index], total);
    const percent = Math.round((score / total) * 100);
    earned += score;
    possible += total;
    taken += 1;
    rows += "<tr><td>" + link + "</td><td>" + score + " / " + total + "</td><td>" + percent + "%</td><td><strong>" + letterGrade(percent) + "</strong></td></tr>";
  });

  let html = '<div class="grade-summary">';
  if (taken === 0) {
    html += '<span class="grade-letter">&ndash;</span>';
    html += "<div><h2>No grade yet</h2><p>Take a quiz and your grade will show up here.</p></div>";
  } else {
    const overall = Math.round((earned / possible) * 100);
    html += '<span class="grade-letter">' + letterGrade(overall) + "</span>";
    html += "<div><h2>Course grade: " + overall + "%</h2>";
    html += "<p>" + earned + " of " + possible + " points, based on " + taken + " of " + COURSE.length + " quizzes taken.</p></div>";
  }
  html += "</div>";

  html += '<table class="grade-table"><thead><tr><th>Quiz</th><th>Best score</th><th>Percent</th><th>Grade</th></tr></thead>';
  html += "<tbody>" + rows + "</tbody></table>";

  if (taken > 0) {
    html += '<button type="button" class="button secondary" id="reset-grades">Reset grades</button>';
  }

  panel.innerHTML = html;

  const reset = document.getElementById("reset-grades");
  if (reset) {
    reset.addEventListener("click", function () {
      if (reset.dataset.armed) {
        try {
          localStorage.removeItem("aiLiteracyScores");
        } catch (error) {
          // Storage is unavailable; there is nothing to clear.
        }
        showGrades();
      } else {
        // Ask for a second click before erasing anything.
        reset.dataset.armed = "1";
        reset.textContent = "Click again to erase all quiz scores";
      }
    });
  }
}

// ---------- Page-flip animation for the sidebar tabs ----------

// The file name of a page, e.g. "syllabus.html" ("" or "/" counts as the home page).
function pageName(path) {
  return path.split("/").pop() || "index.html";
}

// Play the flip-in only when this page was reached by clicking a sidebar tab
// (not on a first visit, a refresh, or the Back button).
try {
  if (sessionStorage.getItem("flipIn")) {
    sessionStorage.removeItem("flipIn");
    document.documentElement.classList.add("flip-in");
  }
} catch (error) {
  // Storage is unavailable; the page simply appears without the flip-in.
}

document.querySelectorAll(".sidebar a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Leave new-tab clicks (Ctrl/Cmd/Shift/middle click) alone.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    // Clicking the tab for the page you are already on does nothing.
    if (pageName(link.pathname) === pageName(location.pathname)) {
      event.preventDefault();
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Turn the current page, then load the next one (which flips in via CSS).
    event.preventDefault();
    try {
      sessionStorage.setItem("flipIn", "1");
    } catch (error) {
      // Ignore; see above.
    }
    document.body.classList.add("turning");
    setTimeout(function () {
      location.href = link.href;
    }, 380);
  });
});

// If the visitor comes back with the browser's Back button, un-turn the page.
window.addEventListener("pageshow", function () {
  document.body.classList.remove("turning");
});

// ---------- Start up ----------

if (document.getElementById("module-panel")) {
  showModule(indexFromHash("module"));
  window.addEventListener("hashchange", function () {
    showModule(indexFromHash("module"));
  });
}

if (document.getElementById("grades-panel")) {
  showGrades();
}

if (document.getElementById("quiz-panel")) {
  showQuiz(indexFromHash("quiz"));
  window.addEventListener("hashchange", function () {
    showQuiz(indexFromHash("quiz"));
  });
}
