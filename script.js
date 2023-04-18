// Divisions/sections/parts/divs.
let optionOne = document.querySelector('#optionOne');
let optionTwo = document.querySelector('#optionTwo');
let optionThree = document.querySelector('#optionThree');
let optionFour = document.querySelector('#optionFour');
let resultContainer = document.querySelector('#resultContainer');
let suggestion = document.querySelector('#suggestion');
let totalPoints = document.querySelector('#totalPoints');
// Images.
let imageOne = document.querySelector('#imageOne');
let imageTwo = document.querySelector('#imageTwo');
let imageThree = document.querySelector('#imageThree');
let imageFour = document.querySelector('#imageFour');
let resultImage = document.querySelector('#resultImage');
// Paragraphs. 
let instructions = document.querySelector('#instructions');
let nameOne = document.querySelector('#nameOne');
let nameTwo = document.querySelector('#nameTwo');
let nameThree = document.querySelector('#nameThree');
let nameFour = document.querySelector('#nameFour');
// Videos.
let videoOne = document.querySelector('#videoOne');
let videoTwo = document.querySelector('#videoTwo');
let videoThree = document.querySelector('#videoThree');
let videoFour = document.querySelector('#videoFour');
// Input and button.
let input = document.querySelector('input');
let button = document.querySelector('button');

// Lists.
let optionList = [optionOne, optionTwo, optionThree, optionFour];
let nameList = [nameOne, nameTwo, nameThree, nameFour];
let imageList = [imageOne, imageTwo, imageThree, imageFour];
let videoList = [videoOne, videoTwo, videoThree, videoFour];

let stageTwoNames = ['Performances', 'Hobby', 'School', 'New skill'];
let stageTwoImages = ['images/performance.jpg', 'images/hobby.jpg', 'images/school.webp', 'images/newskill.jpeg'];
let stageThreeNames = ['Vivaldi-Summer', 'Libertango', 'Pink Panther', 'Van Halen-Jump'];

// Stage.
let stage = 1;

// Points.
let violenPoints = 0;
let trumpetPoints = 0;
let clarinetPoints = 0;
let drumPoints = 0;
let loopNumber = 0;


optionOne.onclick = function() {
  loopNumber = 0;
  if (stage === 1) {
    stage = 2;
    violenPoints = violenPoints + 10;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageTwoNames[loopNumber];
      imageList[loopNumber].src = stageTwoImages[loopNumber];
      instructions.innerHTML = 'Why do you want to play an instrument?';
    }
  }
  else if (stage === 2) {
    stage = 3;
    violenPoints = violenPoints + 10;
    trumpetPoints = trumpetPoints + 6;
    clarinetPoints = clarinetPoints + 4;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageThreeNames[loopNumber];
      imageList[loopNumber].style.display = 'none';
      videoList[loopNumber].style.display = 'block';
      instructions.innerHTML = 'Which song do you like best?';
    }
  }
  else if (stage === 3) {
    stage = 4;
    violenPoints = violenPoints + 10;
    trumpetPoints = trumpetPoints + 1;
    if (violenPoints > trumpetPoints && violenPoints > clarinetPoints && violenPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/violin.jpg';
        suggestion.innerHTML = 'Violin';
        totalPoints.innerHTML = 'Total points: ' + violenPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (trumpetPoints > violenPoints && trumpetPoints > clarinetPoints && trumpetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/trumpet.jpg';
        suggestion.innerHTML = 'Trumpet';
        totalPoints.innerHTML = 'Total points: ' + trumpetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (clarinetPoints > violenPoints && clarinetPoints > trumpetPoints && clarinetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/clarinet.jpg';
        suggestion.innerHTML = 'Clarinet';
        totalPoints.innerHTML = 'Total points: ' + clarinetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (drumPoints > violenPoints && drumPoints > trumpetPoints && drumPoints > clarinetPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/drum.webp';
        suggestion.innerHTML = 'Drums';
        totalPoints.innerHTML = 'Total points: ' + drumPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
  }
};

optionTwo.onclick = function() {
  loopNumber = 0;
  if (stage === 1) {
    stage = 2;
    trumpetPoints = trumpetPoints + 10;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageTwoNames[loopNumber];
      imageList[loopNumber].src = stageTwoImages[loopNumber];
      instructions.innerHTML = 'Why do you want to play an instrument?';
    }
  }
  else if (stage === 2) {
    stage = 3;
    trumpetPoints = trumpetPoints + 10;
    drumPoints = drumPoints + 8;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageThreeNames[loopNumber];
      imageList[loopNumber].style.display = 'none';
      videoList[loopNumber].style.display = 'block';
      instructions.innerHTML = 'Which song do you like best?';
    }
  }
  else if (stage === 3) {
    stage = 4;
    trumpetPoints = trumpetPoints + 10;
    if (violenPoints > trumpetPoints && violenPoints > clarinetPoints && violenPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/violin.jpg';
        suggestion.innerHTML = 'Violin';
        totalPoints.innerHTML = 'Total points: ' + violenPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (trumpetPoints > violenPoints && trumpetPoints > clarinetPoints && trumpetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/trumpet.jpg';
        suggestion.innerHTML = 'Trumpet';
        totalPoints.innerHTML = 'Total points: ' + trumpetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (clarinetPoints > violenPoints && clarinetPoints > trumpetPoints && clarinetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/clarinet.jpg';
        suggestion.innerHTML = 'Clarinet';
        totalPoints.innerHTML = 'Total points: ' + clarinetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (drumPoints > violenPoints && drumPoints > trumpetPoints && drumPoints > clarinetPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/drum.webp';
        suggestion.innerHTML = 'Drums';
        totalPoints.innerHTML = 'Total points: ' + drumPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
  }
};

optionThree.onclick = function() {
  loopNumber = 0;
  if (stage === 1) {
    stage = 2;
    clarinetPoints = clarinetPoints + 10;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageTwoNames[loopNumber];
      imageList[loopNumber].src = stageTwoImages[loopNumber];
      instructions.innerHTML = 'Why do you want to play an instrument?';
    }
  }
  else if (stage === 2) {
    stage = 3;
    clarinetPoints = clarinetPoints + 10;
    violenPoints = violenPoints + 5;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageThreeNames[loopNumber];
      imageList[loopNumber].style.display = 'none';
      videoList[loopNumber].style.display = 'block';
      instructions.innerHTML = 'Which song do you like best?';
    }
  }
  else if (stage === 3) {
    stage = 4;
    clarinetPoints = clarinetPoints + 10;
    if (violenPoints > trumpetPoints && violenPoints > clarinetPoints && violenPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/violin.jpg';
        suggestion.innerHTML = 'Violin';
        totalPoints.innerHTML = 'Total points: ' + violenPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (trumpetPoints > violenPoints && trumpetPoints > clarinetPoints && trumpetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/trumpet.jpg';
        suggestion.innerHTML = 'Trumpet';
        totalPoints.innerHTML = 'Total points: ' + trumpetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (clarinetPoints > violenPoints && clarinetPoints > trumpetPoints && clarinetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/clarinet.jpg';
        suggestion.innerHTML = 'Clarinet';
        totalPoints.innerHTML = 'Total points: ' + clarinetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (drumPoints > violenPoints && drumPoints > trumpetPoints && drumPoints > clarinetPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/drum.webp';
        suggestion.innerHTML = 'Drums';
        totalPoints.innerHTML = 'Total points: ' + drumPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
  }
};

optionFour.onclick = function() {
  loopNumber = 0;
  if (stage === 1) {
    stage = 2;
    drumPoints = drumPoints + 10;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageTwoNames[loopNumber];
      imageList[loopNumber].src = stageTwoImages[loopNumber];
      instructions.innerHTML = 'Why do you want to play an instrument?';
    }
  }
  else if (stage === 2) {
    stage = 3;
    drumPoints = drumPoints + 10;
    violenPoints = violenPoints + 2;
    trumpetPoints = trumpetPoints + 6;
    clarinetPoints = clarinetPoints + 4;
    for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
      nameList[loopNumber].innerHTML = stageThreeNames[loopNumber];
      imageList[loopNumber].style.display = 'none';
      videoList[loopNumber].style.display = 'block';
      instructions.innerHTML = 'Which song do you like best?';
    }
  }
  else if (stage === 3) {
    stage = 4;
    drumPoints = drumPoints + 10;
    if (violenPoints > trumpetPoints && violenPoints > clarinetPoints && violenPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/violin.jpg';
        suggestion.innerHTML = 'Violin';
        totalPoints.innerHTML = 'Total points: ' + violenPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (trumpetPoints > violenPoints && trumpetPoints > clarinetPoints && trumpetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/trumpet.jpg';
        suggestion.innerHTML = 'Trumpet';
        totalPoints.innerHTML = 'Total points: ' + trumpetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (clarinetPoints > violenPoints && clarinetPoints > trumpetPoints && clarinetPoints > drumPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/clarinet.jpg';
        suggestion.innerHTML = 'Clarinet';
        totalPoints.innerHTML = 'Total points: ' + clarinetPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
    else if (drumPoints > violenPoints && drumPoints > trumpetPoints && drumPoints > clarinetPoints) {
      for (loopNumber; loopNumber <= 4; loopNumber = loopNumber + 1) {
        optionList[loopNumber].style.display = 'none';
        resultContainer.style.display = 'block';
        resultImage.src = 'images/drum.webp';
        suggestion.innerHTML = 'Drums';
        totalPoints.innerHTML = 'Total points: ' + drumPoints;
        instructions.innerHTML = 'You finished! You should give this instrument a try.';
        button.style.display = 'inline';
        input.style.display = 'inline';
      }
    }
  }
};

button.onclick = function() {
  let userInput = input.value;
  input.value = '';
  input.placeholder = 'Thanks for the feedback!';
  input.setAttribute('readonly', true);
  button.style.display = 'none';
}