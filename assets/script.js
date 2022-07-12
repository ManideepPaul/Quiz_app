const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const displayBox = document.querySelector(".displayBox")

start.addEventListener('click', () => {

  // ************** Timer ************** //
  let totalTime = 50;
  let counter = setInterval(() => {
    totalTime--
    timer.innerText = totalTime;
    if(totalTime <= 0){
      clearInterval(counter);
    }
  }, 1000)
  setTimeout(() => { clearInterval(counter) }, 50000);
  // ************** Timer ************** //

  // ************** Questions ************** //
  let index = 0;
  displayBox.innerHTML = '';
  const header = document.createElement('h1')
  const option1 = document.createElement('button')
  const option2 = document.createElement('button')
  const option3 = document.createElement('button')
  const option4 = document.createElement('button')
  const line = document.createElement('div')
  const para = document.createElement('p')

  header.classList.add('header')
  option1.classList.add('optionBtn')
  option2.classList.add('optionBtn')
  option3.classList.add('optionBtn')
  option4.classList.add('optionBtn')
  line.classList.add('line')
  para.classList.add('para')

  header.innerHTML = questions[index].questionText;
  option1.innerText = questions[index].options[0]
  option2.innerText = questions[index].options[1]
  option3.innerText = questions[index].options[2]
  option4.innerText = questions[index].options[3]

  displayBox.appendChild(header)
  displayBox.appendChild(option1)
  displayBox.appendChild(option2)
  displayBox.appendChild(option3)
  displayBox.appendChild(option4)
  displayBox.appendChild(line)
  displayBox.appendChild(para)
  // ************** Questions ************** //

  // ************** Questions Change & Check ************** //
  const checkAns = (value) => {
    if (value === questions[index].answer) para.innerText = "Correct!";
    else{
      para.innerText = "Incorrect!";
      totalTime -= 10;
    } 
    if(index < 4){
      index++;
    } 
    console.log(index)
      
    header.innerHTML = questions[index].questionText;
    option1.innerText = questions[index].options[0]
    option2.innerText = questions[index].options[1]
    option3.innerText = questions[index].options[2]
    option4.innerText = questions[index].options[3]
  }

  option1.addEventListener('click', () => { checkAns(option1.innerText) })
  option2.addEventListener('click', () => { checkAns(option2.innerText) })
  option3.addEventListener('click', () => { checkAns(option3.innerText) })
  option4.addEventListener('click', () => { checkAns(option4.innerText) })
  // ************** Questions Change & Check ************** //

})


