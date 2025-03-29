// // **************************
// // DOM element stor in object
let Dom = {
    minut: ".time p .minut",
    second: ".time p .second",
    greenLight: ".green",
    redLight: ".red",
    userValue: ".value1",
    error: ".error",
    button: ".button",
    failPage: ".fail",
    congratulation: ".congratulation",
    userTime: ".congrat-detail p .userTime",
    userLife: ".congrat-detail p .userLife",
    correct: ".congrat-detail p .correct",
    wrong: ".congrat-detail p .wrong",
    percentage: ".congrat-detail p .percentage",
  };
  // get DOM element using querySelector
  let minut = document.querySelector(Dom.minut);
  let second = document.querySelector(Dom.second);
  let greenLight = document.querySelector(Dom.greenLight);
  let redLight = document.querySelector(Dom.redLight);
  let userValue = document.querySelector(Dom.userValue);
  let error = document.querySelector(Dom.error);
  let button = document.querySelector(Dom.button);
  let failPage = document.querySelector(Dom.failPage);
  let congratulation = document.querySelector(Dom.congratulation);
  let userTime = document.querySelector(Dom.userTime);
  let userLife = document.querySelector(Dom.userLife);
  let correct = document.querySelector(Dom.correct);
  let wrong = document.querySelector(Dom.wrong);
  let percentage = document.querySelector(Dom.percentage);
  
  // question set
  function questionSet(ques) {
    return (document.querySelector(".question").innerHTML = ques);
  }
  // green light update
  function greenUpdate(correct) {
    return (greenLight.innerHTML = correct);
  }
  // red light update
  function redUpdate(wrong) {
    return (redLight.innerHTML = wrong);
  }
  // error set
  function errorSet(error1) {
    return (error.innerHTML = error1);
  }
  // life set value
  function lifeSet(life) {
    return (document.querySelector(".life").innerHTML = life);
  }
  //   question data
  var question = [
    `1. Urdu was declared national language of Pakistan in:
      <br>
      (a) April 1950
      <br>
      (b) April 1955
      <br>
      (c) April 1954
      <br>
      (d) April 1952`,
    `2. Word Urdu means:
      <br>
      (a) Believers
      <br>
      (b) A group of students
      <br>
      (c) Army
      <br>
      (d) None of these
      `,
    `3. How many letters are there in Urdu alphabets:
      <br>
      (a) 35
      <br>
      (b) 36
      <br>
      (c) 37
      <br>
      (d) 39
      `,
    `4. Who composed the verses of Pakistan national Anthem?
      <br>
      (a) Hafeez Jallandri
      <br>
      (b) Nasir Kazmi
      <br>
      (c) Allama Iqbal
      <br>
      (d) Faiz Ahmed Faiz
      `,
    `5. “Heer Ranjha” is a love story of:
      <br>
      (a) Punjabi
      <br>
      (b) Sindhi
      <br>
      (c) Pushto
      <br>
      (d) Siraiki
      `,
    `6. Which Urdu has been taken from the following language:
      <br>
      (a) Persian
      <br>
      (b) Arabic
      <br>
      (c) Turkish
      <br>
      (d) None of these
      `,
    `7. Name the musician who composed the national anthem?
      <br>
      (a) Abdul Karim Chagla
      <br>
      (b) A.Rehman
      <br>
      (c) A.R. Bakshi
      <br>
      (d) Ustad Allah Bux
      `,
    `8. When was the national anthem of Pakistan first played?
      <br>
      (a) 14th August 1948
      <br>
      (b) 13th August 1954
      <br>
      (c) 14th August 1950
      <br>
      (d) 23rd March 1949
      `,
    `9. How many words are in national anthem?
      <br>
      (a) 16
      <br>
      (b) 50
      <br>
      (c) 37
      <br>
      (d) 67
      `,
    `10. How many lines are in national anthem?
      <br>
      (a) 15
      <br>
      (b) 14
      <br>
      (c) 13
      <br>
      (d) 11
      `,
  ];
  // answer data
  var answer = [
    "APRIL 1954",
    "ARMY",
    "37",
    "HAFEEZ JALLANDRI",
    "PUNJABI",
    "TURKISH",
    "ABDUL KARIM CHAGLA",
    "13TH AUGUST 1954",
    "50",
    "15",
  ];
  
  // global varaible
  var num = 0;
  var life = 15;
  var lightNum = 0;
  
  // clean all data
  function reset() {
    minut.innerHTML = "00";
    second.innerHTML = "00";
    userValue.innerHTML = "";
    life = 15;
    greenUpdate("00");
    redUpdate("00");
    lifeSet(life);
    questionSet(question[0]);
  }
  reset();
  
  // percentage funciton
  function userPercentage(obtaine) {
    let percentage1 = Math.floor((obtaine * 100) / 10);
    if (percentage1 > 100) {
      return (percentage.innerHTML = 100 + "%");
    } else {
      return (percentage.innerHTML = percentage1 + "%");
    }
  }
  
  // congratulation popup value set
  function congrat(time1, life1, correct1, wrong1) {
    userTime.innerHTML = time1;
    userLife.innerHTML = life1;
    correct.innerHTML = correct1;
    wrong.innerHTML = wrong1;
  }
  
  // this fucntion check second and minut if second and minut is greater than 10 so value is store in "a" variable if less than add 0 before value and store it "a" variable
  function userExpendTime() {
    let a, checkSec, checkMinut;
    if (MinutTime < 10 || secondTime < 10) {
      checkMinut = MinutTime > 10 ? MinutTime : "0" + MinutTime;
      checkSec = secondTime > 10 ? secondTime : "0" + secondTime;
    }
    a = checkMinut + ":" + checkSec;
    return a;
  }
  
  // for timing working is start
  // ****************************
  
  // global variable
  var secondTime = 0;
  var MinutTime = 0;
  var interval;
  
  // second time condition
  function condition() {
    if (secondTime < 10) {
      second.innerHTML = "0" + secondTime;
    } else {
      second.innerHTML = secondTime;
    }
  }
  // minut time function
  function condition1() {
    if (MinutTime < 10) {
      minut.innerHTML = "0" + MinutTime;
    } else {
      minut.innerHTML = MinutTime;
    }
  }
  
  // window load then function call
  window.onload = function () {
    interval = setInterval(() => {
      // second is incremend
      secondTime++;
      // then condition function is call
      condition();
      // if second time is greater than 59 mean 60 and above so second value is zero and minut is update
      if (secondTime > 59) {
        // minut is update
        MinutTime++;
        // second value is zero
        secondTime = 0;
        // set second value 00
        second.innerHTML = "00";
        // call minut function
        condition1();
      }
      // if second is less than 59 so second function call here and check if second value is greater than 10 so before value 0 is add otherwise value is return
      if (secondTime < 59) {
        condition();
      }
      // here we set 3 minut for quize if 3 is equal for minut so lost popup is display
      if (MinutTime === 5) {
        // condition true set interval is stop
        clearInterval(interval);
        // and failpage is display
        failPage.style.transform = "translateY(0px)";
        // popup message is display for user
        alert("The time is up you lost the game");
      }
    }, 1000);
  };
  // Complete timing work
  // ********************
  
  // when button is click so this function is run
  button.addEventListener("click", check);
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      check();
    }
  });
  
  // in this function life is decrement and error is increment
  function Life_And_Red_Light() {
    // incremend and decrement
    life--;
    lightNum++;
    // check if life is less than and equal to 0 you lost the game your life is finished
    if (life <= 0) {
      // fail page is enabled
      failPage.style.transform = "translateY(0px)";
      // message is display
      alert("Life is over");
      // stop set interval
      clearInterval(interval);
    } else {
      if (lightNum > 0 && lightNum < 10) {
        redUpdate("0" + lightNum);
      }
      // set value in life set
      lifeSet(life);
    }
  }
  
  // main function
  function check() {
    // stor user value in interArea vaiable
    let interArea = userValue.value;
    // if user value is equal to answer
    if (interArea.toUpperCase() === answer[num]) {
      //corret is increment
      num++;
      // if num is greater than answer length so sum action is perform
      if (num > answer.length - 1) {
        // congratulation page is dispplay
        congratulation.style.transform = "translateY(0px)";
        // set value in congrate page
        congrat(userExpendTime(), life, num, lightNum);
        // give argument in user percentage
        userPercentage(life);
        // stop set interval
        clearInterval(interval);
      }
      // if user enter value and click button so input area is empty
      userValue.value = "";
      // if num if greater than 10 so correct is update before value so is add
      if (num > 0 && num < 10) {
        greenUpdate("0" + num);
      }
      // update question
      questionSet(question[num]);
      // if question is update error is hide
      error.classList.remove("error-display");
    } else {
      // error value is update
      errorSet("Please try again");
      // error is display
      error.classList.add("error-display");
      // this function is call
      Life_And_Red_Light();
    }
  }