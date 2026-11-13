// AI Literacy 101
// All lesson and quiz content lives in the COURSE list below.
// To change a lesson or a quiz question, edit the text here; the pages rebuild themselves.

const COURSE = [
  {
    title: "How LLMs Generate Answers",
    goal: "Course goal: explain how LLMs generate their answers.",
    sections: [
      {
        heading: "What is an LLM?",
        paragraphs: [
          "LLM stands for large language model. It is the kind of AI behind chatbots such as ChatGPT, Claude, and Gemini. An LLM is a computer program that has been trained on an enormous amount of written text so that it can produce new text that sounds natural."
        ]
      },
      {
        heading: "Step 1: Your words become tokens",
        paragraphs: [
          "Before the model ever sees your question, your text is split into tokens. A token is a small chunk of text. It is often a whole word, but it can also be part of a word or a punctuation mark. A word like &ldquo;Generating&rdquo; may be a single token, while an unusual word may be split into several tokens (Joseph).",
          "Each token is mapped to a number, and each number is mapped to a long list of values called an embedding. The embedding captures the meaning of the token and how it relates to other tokens. Tokens are the unit the model actually works with, which is why AI pricing and usage limits are measured in tokens and not in words (Joseph)."
        ]
      },
      {
        heading: "Step 2: Predicting the next token",
        paragraphs: [
          "This step is the heart of the process. Given the tokens so far, the model calculates a probability for every possible next token in its vocabulary. For example, when continuing &ldquo;The capital of the Netherlands is,&rdquo; the model gives a very high probability to &ldquo;Amsterdam&rdquo; and tiny probabilities to thousands of other tokens (Joseph).",
          "The model picks one token from those probabilities, adds it to the text, and then runs the whole calculation again with the new token included. Generating an answer is this loop repeated token by token until the model predicts a natural stopping point. In the article&rsquo;s words, &ldquo;The model never sees the finished answer in advance; it writes its way there one step at a time&rdquo; (Joseph).",
          "A setting called temperature controls how adventurous each pick is. A low temperature almost always takes the most likely token, which gives consistent and predictable output. A higher temperature lets less likely tokens through, which gives more varied and creative output that is also more prone to errors. This is also why the same prompt can produce slightly different answers on different runs, unless the settings force the model to always take the top choice (Joseph)."
        ]
      },
      {
        heading: "Step 3: How the model learned to be helpful",
        paragraphs: [
          "Learning to predict the next token is called pretraining. Pretraining alone produces a model that can continue text, but not necessarily one that answers the way you want. A second stage of training addresses this (Joseph).",
          "One part of that stage is instruction tuning: the model is trained on examples of questions paired with good answers, so it learns to respond helpfully instead of just continuing the text. Another part is reinforcement learning from human feedback (RLHF): people rate the model&rsquo;s responses, and the model is nudged toward the kinds of answers people prefer, which are clearer, safer, and more useful (Joseph).",
          "After this stage the model still works by predicting the next token. It has simply learned that, after a question, the most plausible continuation is a helpful answer. As the article puts it, a model &ldquo;predicts plausible text rather than retrieving exact facts &mdash; which is why it is fluent, fast, and occasionally confidently wrong&rdquo; (Joseph)."
        ]
      }
    ],
    takeaways: [
      "Your text is split into tokens, the small chunks a model actually works with.",
      "An LLM writes an answer by predicting one token at a time, over and over.",
      "Extra training taught the model to give helpful answers, but it still predicts plausible text and can be confidently wrong."
    ],
    quiz: [
      {
        q: "What is a token?",
        options: [
          "A password needed to use AI",
          "A fact the model looks up in a database",
          "A rating a person gives to an AI answer",
          "A small chunk of text, such as a word, part of a word, or a punctuation mark"
        ],
        answer: 3,
        why: "Before the model sees your question, the text is split into tokens. A token is often a whole word, but it can also be part of a word or a punctuation mark."
      },
      {
        q: "How does an LLM produce an answer?",
        options: [
          "It writes the whole answer at once and then checks it",
          "It predicts one token, adds it to the text, and repeats until it reaches a natural stopping point",
          "It searches for a finished answer and copies it",
          "It asks a person to rate several answers and sends the best one"
        ],
        answer: 1,
        why: "The model calculates a probability for every possible next token, picks one, adds it, and runs the calculation again. It never sees the finished answer in advance."
      },
      {
        q: "What does a higher temperature setting do?",
        options: [
          "It lets less likely tokens through, making output more varied and creative but more prone to errors",
          "It makes the model always pick the most likely token",
          "It makes the model answer faster",
          "It raises the price of each token"
        ],
        answer: 0,
        why: "A low temperature gives consistent, predictable output. A higher temperature gives more varied and creative output that is also more error-prone."
      },
      {
        q: "What happens in reinforcement learning from human feedback (RLHF)?",
        options: [
          "People type the answers for the model",
          "The model's text is split into tokens",
          "People rate the model's responses, and the model is nudged toward the kinds of answers people prefer",
          "The model stops predicting the next token"
        ],
        answer: 2,
        why: "RLHF nudges the model toward clearer, safer, and more useful answers. Afterward the model still works by predicting the next token."
      }
    ]
  },
  {
    title: "Recognizing Common Mistakes",
    goal: "Course goal: recognize common mistakes.",
    sections: [
      {
        heading: "Over relying on AI",
        paragraphs: [
          "AI can feel like the go-to solution for any challenge: you are stuck on an assignment, you do not know how to start a paper, or you need help editing and revising. Leaning on it too often, however, can hurt you and your ability to think for yourself (Schleter).",
          "Many people use AI for cognitive offloading, which means reducing mental effort by handing a task to a tool. Writing a grocery list instead of remembering it, setting an alarm so you do not forget a meeting, and using a GPS to get somewhere are all examples. This is helpful in daily life, but in educational settings AI and cognitive offloading can negatively affect critical thinking skills. Students who often turn to AI this way may be less likely to engage deeply with their coursework or build their own problem-solving abilities (Schleter).",
          "The article&rsquo;s advice: &ldquo;Use AI in a way that supports critical thinking, not replaces it&rdquo; (Schleter)."
        ]
      },
      {
        heading: "Weak prompting",
        paragraphs: [
          "The quality of what AI gives you depends on the quality of what you give it. A vague or overly simple prompt is likely to produce a vague or unhelpful response. The article sums this up as &ldquo;garbage in, garbage out&rdquo; (Schleter).",
          "A strong prompt includes the intended audience for the output; what the output should look like, such as bullet points, an outline, or a paragraph; the tone or voice, such as formal, conversational, or persuasive; and any key points or requirements to include (Schleter).",
          "Writing effective prompts is a skill that takes practice. Do not expect perfect results right away, and do not expect the tool to do your work for you (Schleter)."
        ]
      },
      {
        heading: "A funny example: prescribing a rock per day",
        paragraphs: [
          "AI makes mistakes of its own, too. Google&rsquo;s AI Overviews search feature produced bizarre and misleading advice. It urged users to eat rocks, describing them as a vital source of minerals and vitamins. When asked about cheese sliding off pizza, it suggested mixing non-toxic glue into the sauce (Maliugina).",
          "These hallucinations most likely came from the AI misreading jokes or content taken from forums and satirical sources (Maliugina)."
        ]
      },
      {
        heading: "Spotting AI-generated content",
        paragraphs: [
          "Pew Research Center found that 76% of Americans say it is extremely important to be able to tell whether pictures, videos, or text were made by AI, yet 53% are not confident they can do it (Kennedy et al.). That worry is reasonable, because AI-generated content keeps getting harder to spot.",
          "Clues that can help: text that is polished but vague or repetitive, quotes and sources you cannot find anywhere else, and images with odd hands, garbled lettering, or backgrounds that do not make sense. None of these clues is reliable on its own, and AI detector tools make mistakes too. The better habit is to ask where the content came from and whether a trusted source confirms it."
        ]
      },
      {
        heading: "A simple checking routine",
        paragraphs: [
          "Before you rely on an AI answer: (1) ask yourself how much it matters if the answer is wrong, (2) ask the AI where the information comes from, (3) confirm the key facts with a source you already trust, and (4) be extra careful with names, numbers, dates, quotes, and citations, since those are where made-up details show up most."
        ]
      }
    ],
    takeaways: [
      "Use AI to support your critical thinking, not to replace it.",
      "Vague prompts get vague answers: garbage in, garbage out.",
      "AI can give confident advice that is flat-out wrong, so verify the facts that matter with a source you trust."
    ],
    quiz: [
      {
        q: "What is cognitive offloading?",
        options: [
          "Turning an AI tool off to save energy",
          "Reducing mental effort by handing a task to a tool",
          "Memorizing information instead of writing it down",
          "Checking an AI answer against a trusted source"
        ],
        answer: 1,
        why: "Writing a grocery list or using a GPS are everyday examples. In educational settings, offloading to AI can negatively affect critical thinking skills."
      },
      {
        q: "Which of these belongs in a strong prompt?",
        options: [
          "As few words as possible",
          "A promise to give the AI a good rating",
          "The intended audience, the format, the tone, and any key points to include",
          "A request to finish the whole assignment for you"
        ],
        answer: 2,
        why: "A vague prompt is likely to produce a vague response (&ldquo;garbage in, garbage out&rdquo;). Details about audience, format, tone, and requirements make a prompt stronger."
      },
      {
        q: "Google's AI Overviews told users to eat rocks and to mix glue into pizza sauce. What most likely caused these mistakes?",
        options: [
          "The AI misread jokes or content from forums and satirical sources",
          "Users typed their questions incorrectly",
          "Doctors had recommended eating rocks",
          "The AI was switched to a low temperature setting"
        ],
        answer: 0,
        why: "The hallucinations most likely came from the AI misreading jokes or content taken from forums and satirical sources."
      },
      {
        q: "According to Pew Research Center, what share of Americans are not confident they can tell whether content is AI generated?",
        options: ["5%", "26%", "76%", "53%"],
        answer: 3,
        why: "53% say they are not confident, even though 76% say the skill is extremely important."
      }
    ]
  },
  {
    title: "Realistic Concerns vs. Myths",
    goal: "Course goal: separate realistic concerns about AI from the myths.",
    sections: [
      {
        heading: "Two extremes",
        paragraphs: [
          "People who do not understand AI tend to land on one of two sides: avoiding it out of fear, or trusting everything it produces. Pew Research Center found that 50% of Americans are more concerned than excited about the growing use of AI (Kennedy et al.). Some of that concern is well founded and some of it comes from myths. This module helps you sort one from the other."
        ]
      },
      {
        heading: "Myth 1: &ldquo;AI is on the verge of automating all jobs.&rdquo;",
        paragraphs: [
          "Fact: AI tends to partially automate certain jobs instead of eliminating entire roles, and it is poised to shift the nature of human work. AI is most likely to automate specific tasks within a role, which lets workers move their time to the responsibilities AI cannot automate (&ldquo;AI: Facts and Myths&rdquo;).",
          "AI is changing how work is done, but how far and how fast that change will go is actively debated. Even in the occupations with the greatest AI adoption, such as coding and customer service, experts are still debating the effects on employment. Earlier technological transitions created new occupations alongside the disruption, and new roles for building, managing, using, and overseeing AI have begun to emerge, but their scale, speed, and distribution remain open questions (&ldquo;AI: Facts and Myths&rdquo;).",
          "Bottom line: the net effect of AI on jobs, and how those effects are distributed, is one of the most central questions in AI policy today (&ldquo;AI: Facts and Myths&rdquo;)."
        ]
      },
      {
        heading: "Myth 2: &ldquo;AI is inherently bias free, since computers are not biased.&rdquo;",
        paragraphs: [
          "Fact: AI can inherit and amplify the human biases present in its training data, its algorithmic assumptions, and the feedback used to refine it. If a system is trained on data that reflects historical inequities, such as biased hiring or credit approval decisions, it is likely to replicate those patterns in its output (&ldquo;AI: Facts and Myths&rdquo;).",
          "If unaddressed, AI bias can perpetuate or worsen existing inequities and disproportionately harm vulnerable individuals and populations. Bias can be reduced through rigorous testing, better data quality, and a diversity of perspectives across design, evaluation, and deployment (&ldquo;AI: Facts and Myths&rdquo;)."
        ]
      },
      {
        heading: "Myth 3: &ldquo;AI can think creatively, almost better than humans.&rdquo;",
        paragraphs: [
          "Fact: AI &ldquo;creativity&rdquo; comes from advanced pattern recognition, which is fundamentally different from human consciousness. AI recognizes and recombines patterns from its vast training data. Its output does not come from an internal spark or a specific human purpose (&ldquo;AI: Facts and Myths&rdquo;).",
          "When given clear instructions, AI today can often outperform humans in the speed and volume of &ldquo;good&rdquo; ideas it generates. True creativity, however, remains uniquely human. It draws on curiosity, personal history, embodied experience, and subjective feeling, which today&rsquo;s AI lacks (&ldquo;AI: Facts and Myths&rdquo;)."
        ]
      },
      {
        heading: "Myth 4: &ldquo;AI doesn&rsquo;t need human oversight to operate.&rdquo;",
        paragraphs: [
          "Fact: human oversight is essential to building and deploying AI responsibly, from system design through real-world monitoring. Humans curate the training data, design policies and intentions, monitor operations for errors and risks, and manage deployment, adoption, and oversight. Developing and managing AI fairly and safely requires active human involvement at every critical stage (&ldquo;AI: Facts and Myths&rdquo;).",
          "Agentic AI systems that can carry out complex multi-step tasks on their own are now emerging. As they do, direct human intervention may become more limited, which may make proactive oversight and clear human controls even more critical to prevent unintended outcomes (&ldquo;AI: Facts and Myths&rdquo;)."
        ]
      },
      {
        heading: "Myth 5: &ldquo;AI can predict the future with certainty.&rdquo;",
        paragraphs: [
          "Fact: AI is a powerful tool for forecasting and simulating scenarios, but it remains an imperfect and uncertain probabilistic system. AI can run and analyze millions of &ldquo;what-if&rdquo; scenarios at a rate far beyond what humans can do alone. Despite that speed, it is less reliable at anticipating &ldquo;black swan&rdquo; events or structural shifts that fall outside the patterns in its historical data (&ldquo;AI: Facts and Myths&rdquo;).",
          "Predictive capabilities are improving fast, but human intervention and judgment remain essential in high-stakes contexts, where a false sense of certainty from AI could have real-world impacts (&ldquo;AI: Facts and Myths&rdquo;)."
        ]
      },
      {
        heading: "How to judge a claim about AI",
        paragraphs: [
          "When you see a dramatic claim about AI, ask three questions. Who is making the claim, and do they benefit from fear or hype? What evidence do they give? Is the claim about what AI does today, or a guess about the future?"
        ]
      }
    ],
    takeaways: [
      "Fear and blind trust both come from not understanding AI.",
      "AI changes tasks within jobs, can inherit human bias, and recombines patterns instead of creating the way people do.",
      "AI still needs human oversight, and its predictions are never certain.",
      "Judge AI claims by their source and their evidence."
    ],
    quiz: [
      {
        q: "\"AI is on the verge of automating all jobs.\" What does the Bipartisan Policy Center say is more accurate?",
        options: [
          "AI will have no effect on how people work",
          "AI is most likely to automate specific tasks within a role, not eliminate entire roles",
          "AI has already replaced all coding and customer service jobs",
          "Experts agree on exactly how many jobs AI will eliminate"
        ],
        answer: 1,
        why: "AI tends to partially automate certain jobs and shift the nature of work. The extent and pace of that change are still actively debated."
      },
      {
        q: "\"AI is inherently bias free, since computers are not biased.\" This statement is:",
        options: [
          "True, because computers cannot be biased",
          "True, but only for systems used in hiring",
          "A myth, because bias in AI can never be reduced",
          "A myth, because AI can inherit and amplify human biases in its training data"
        ],
        answer: 3,
        why: "A system trained on data reflecting historical inequities is likely to replicate those patterns. Bias can be reduced through rigorous testing, better data quality, and a diversity of perspectives."
      },
      {
        q: "Where does AI \"creativity\" come from?",
        options: [
          "Recognizing and recombining patterns from its training data",
          "Curiosity and personal history",
          "Embodied experience and subjective feeling",
          "An internal spark of consciousness"
        ],
        answer: 0,
        why: "AI can often beat humans on the speed and volume of ideas, but curiosity, personal history, embodied experience, and subjective feeling remain uniquely human."
      },
      {
        q: "As agentic AI systems begin carrying out multi-step tasks on their own, what happens to the need for human oversight?",
        options: [
          "It disappears, because the systems run themselves",
          "It only matters while the training data is being chosen",
          "Proactive oversight and clear human controls may become even more critical",
          "It becomes the job of the AI system"
        ],
        answer: 2,
        why: "Human involvement is needed at every critical stage. With agentic AI, direct intervention may be more limited, so proactive oversight may matter even more."
      },
      {
        q: "Why can't AI predict the future with certainty?",
        options: [
          "It can only analyze one scenario at a time",
          "It is a probabilistic system that is less reliable for events outside the patterns in its historical data",
          "It refuses to make forecasts",
          "Its predictive capabilities are getting worse"
        ],
        answer: 1,
        why: "AI can analyze millions of what-if scenarios, but it remains imperfect and uncertain, especially for &ldquo;black swan&rdquo; events. Human judgment stays essential when the stakes are high."
      }
    ]
  },
  {
    title: "Using AI Responsibly at Work and School",
    goal: "Course goal: use AI responsibly in your line of profession or academia.",
    sections: [
      {
        heading: "Know the rules first",
        paragraphs: [
          "Rules about AI are different in every classroom and workplace. One instructor may welcome AI for brainstorming while another bans it entirely. Check the syllabus or company policy before you start, and ask when it is unclear. \"I didn't know\" rarely works as a defense."
        ]
      },
      {
        heading: "Protect private information",
        paragraphs: [
          "Treat a public AI tool like a public space. Do not paste in passwords, medical or financial details, other people's personal information, or confidential work documents unless your school or employer has approved that tool for that purpose."
        ]
      },
      {
        heading: "Be honest about your use",
        paragraphs: [
          "If AI helped with your work, say so in the way your instructor or employer expects. Style guides such as MLA and APA now include formats for citing AI tools. Turning in AI-written work as entirely your own is a form of academic dishonesty in most classes."
        ]
      },
      {
        heading: "You are still responsible",
        paragraphs: [
          "Whatever you submit has your name on it. If an AI-written section contains an error, a made-up source, or copied wording, the consequences fall on you. Read, check, and revise everything before it leaves your hands.",
          "A good rule: use AI to support your thinking, such as brainstorming, outlining, getting feedback, or having a hard concept explained. Do not use it to skip the thinking the assignment or job is asking of you."
        ]
      }
    ],
    takeaways: [
      "Check the AI policy for each class or job.",
      "Keep private and confidential information out of public AI tools.",
      "Disclose AI help, and verify everything you submit."
    ],
    quiz: [
      {
        q: "What should you do first before using AI on a class assignment?",
        options: [
          "Check the instructor's or school's policy on AI use",
          "Ask the AI whether it is allowed",
          "Use it and mention it only if asked",
          "Assume the rules are the same as in your other classes"
        ],
        answer: 0,
        why: "AI rules differ from class to class, so check the policy that applies to this assignment."
      },
      {
        q: "Which of these is the safest thing to paste into a public AI chatbot?",
        options: [
          "A coworker's home address and phone number",
          "Your bank login details",
          "A confidential company report",
          "A general question about how photosynthesis works"
        ],
        answer: 3,
        why: "General questions carry no private information. Personal, financial, and confidential material should stay out."
      },
      {
        q: "An AI-written paragraph in your report includes a made-up statistic. Who is responsible?",
        options: [
          "The AI company",
          "You, because you submitted the work",
          "No one, because it was an honest mistake",
          "Your instructor or manager"
        ],
        answer: 1,
        why: "Anything you turn in is your responsibility, which is why checking AI output matters."
      },
      {
        q: "Which is the best example of using AI to support your own thinking?",
        options: [
          "Having AI write your essay and submitting it unchanged",
          "Using AI to answer take-home exam questions",
          "Asking AI to explain a confusing concept, then writing the assignment yourself",
          "Having AI rewrite a classmate's paper so it looks like yours"
        ],
        answer: 2,
        why: "Using AI to understand something, then doing the work yourself, keeps the learning and the work your own."
      }
    ]
  },
  {
    title: "Deciding When to Use AI",
    goal: "Course goal: make informed decisions about when to use AI.",
    sections: [
      {
        heading: "Three questions to ask",
        paragraphs: [
          "1. What happens if the answer is wrong? A weak idea for a birthday party costs nothing. A wrong medication dose or legal deadline can cause real harm. The higher the stakes, the more you need a qualified person or an official source.",
          "2. Can I check the result? AI is most useful when you can easily tell whether the output is good, either because you know the subject or because you can verify it.",
          "3. Am I supposed to be learning this? If the point of a task is to build a skill, letting AI do it means the skill never gets built."
        ]
      },
      {
        heading: "Where AI tends to help",
        paragraphs: [
          "Brainstorming ideas, summarizing long material you can spot-check, explaining a concept in simpler words, drafting and editing routine writing, practicing for a test or interview, and getting unstuck on a problem you will finish yourself."
        ]
      },
      {
        heading: "Where to be careful",
        paragraphs: [
          "Medical, legal, and financial decisions; anything involving private information; facts you have no way to verify; and personal messages where people expect your own words. AI can still help you prepare questions for a doctor, lawyer, or advisor, but the decision should rest on expert advice."
        ]
      },
      {
        heading: "Your decision",
        paragraphs: [
          "Being AI literate does not mean using AI for everything, and it does not mean refusing to use it. It means you understand the tool well enough to decide for yourself, case by case, based on knowledge instead of fear or hype."
        ]
      }
    ],
    takeaways: [
      "Weigh the stakes, your ability to check the result, and whether you need to learn the skill.",
      "AI fits best on low-stakes tasks you can verify.",
      "The informed choice is yours to make."
    ],
    quiz: [
      {
        q: "Which task is the best fit for AI?",
        options: [
          "Deciding how much of a prescription medicine to take",
          "Brainstorming title ideas for a presentation",
          "Getting a final answer on a legal dispute",
          "Writing the essay your class assigned to practice writing"
        ],
        answer: 1,
        why: "Brainstorming is low stakes and you can easily judge the results yourself."
      },
      {
        q: "Why does it matter whether you can check an AI's output?",
        options: [
          "Checking makes the AI faster",
          "AI only works when someone is watching",
          "AI can be wrong, so you need a way to catch errors",
          "It does not matter as long as the answer is long"
        ],
        answer: 2,
        why: "Since AI can make confident mistakes, it is most useful when you can verify what it gives you."
      },
      {
        q: "The purpose of an assignment is to learn how to solve a type of math problem. What is the main risk of having AI solve it?",
        options: [
          "You will not build the skill the assignment is meant to teach",
          "The AI will become worse at math",
          "The problem will take longer",
          "There is no risk"
        ],
        answer: 0,
        why: "When the goal is learning, skipping the work means skipping the learning."
      },
      {
        q: "According to this course, what does being AI literate mean?",
        options: [
          "Using AI for every task",
          "Never using AI",
          "Knowing how to code an AI model",
          "Understanding AI well enough to make your own informed decisions"
        ],
        answer: 3,
        why: "The goal is informed choice, made from understanding instead of fear or hype."
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

  let html = "<h2>Module " + number + ": " + module.title + "</h2>";
  html += '<p class="goal">' + module.goal + "</p>";

  module.sections.forEach(function (section) {
    html += "<h3>" + section.heading + "</h3>";
    section.paragraphs.forEach(function (text) {
      html += "<p>" + text + "</p>";
    });
  });

  html += '<div class="takeaways"><h3>Key takeaways</h3><ul>';
  module.takeaways.forEach(function (item) {
    html += "<li>" + item + "</li>";
  });
  html += "</ul></div>";

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

if (document.getElementById("quiz-panel")) {
  showQuiz(indexFromHash("quiz"));
  window.addEventListener("hashchange", function () {
    showQuiz(indexFromHash("quiz"));
  });
}
