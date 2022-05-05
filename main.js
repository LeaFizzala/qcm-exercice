
// ----- DECLARE AN ARRAY OF QUESTIONS AND CORRESPONDING ANSWERS ----- //

const quizz = [
    ['Comment se nomme le cheval de Link ?',['Epona', true], ['Ponita', false], ['Galopin', false]],
    ['Quel est l\'élément des Gorons ?', ['Eau', false], ['Terre',true], ['Feu', false]],
    ['Comment s\appelle la fée dans OOT ?', ['Navi', true], ['Alix', false], ['Clochette', false]],
    ['Quel est le monstre le plus dangereux dans Zelda ?', ['Ganondorf', false],['les poules', true], ['Navi', false]],
    ['Quel est le nom de la tribu des enfants de la forêt ?', ['Kirikou', false],['Kokiri', true], ['Navi', false]],
    ['Quel est le défaut du bouclier Kokiri ?', ['Il prend feu', true],['Il est moche', false], ['Il est lourd', false]],
    ['Les fées des fontaines secrètes :', ['Sont à poil', true],['Sont folles', true], ['Sont belles', false]],
    ['Qui est Sheik  ?', ['Mido', false],['Zelda', true], ['Navi', false]],
    ['Qu\'est-on obligé de faire, avant le temple de l\'Esprit ?', ['Dormir', false],['Pêcher un gros poisson', false], ['La forteresse Gerudo', true]]
]
//Define the elements that will change with every turn of the game

// ----- THE QUESTION ---- //
let question = document.getElementById('question');

// ----- GENERATE RANDOM NUMBER ----- //

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomNum = getRandomInt(8);

//---- QUESTION NUMBER ---- //

question.textContent = quizz[randomNum][0];


// ----- ANSWERS ---- //
const li = document.querySelectorAll(".answer-choice");//select all the li elements
let box1 = document.getElementById('answer1');
let box2 = document.getElementById("answer2");
let box3 = document.getElementById('answer3')



box1.textContent = quizz[randomNum][1][0];
box2.textContent = quizz[randomNum][2][0];
box3.textContent = quizz[randomNum][3][0];

let valueBox1 = quizz[randomNum][1][1];
let valueBox2 = quizz[randomNum][2][1];
let valueBox3 = quizz[randomNum][3][1];

// ------ SCORE ----- //
let score = document.getElementById('score');
let initialScore = 0;
score.textContent+= initialScore;

// Asking nextQuestion : we change the question number
function nextQuestion(){

randomNum = getRandomInt(8);
console.log(randomNum);

question.textContent = quizz[randomNum][0];
box1.textContent = quizz[randomNum][1][0];
box2.textContent = quizz[randomNum][2][0];
box3.textContent = quizz[randomNum][3][0];

valueBox1 = quizz[randomNum][1][1];
valueBox2 = quizz[randomNum][2][1];
valueBox3 = quizz[randomNum][3][1];

box1.style.backgroundColor = "rgb(160, 168, 167)";
box2.style.backgroundColor = "rgb(160, 168, 167)";
box3.style.backgroundColor = "rgb(160, 168, 167)";

}

// We store the elements we can click in variables

function selectAnswer(){
    // adding the event listener by looping 
    li.forEach(li => li.addEventListener("click", verifyAnswer) );
   
  }

// We loop through the array and change the turns of the game
function verifyAnswer(e){
    let target = e.target;
	
    
    if(target == box1 ){ // if the answer clicked is equal to the correct answer
        if(valueBox1 == true) {
            box1.style.backgroundColor = "green";
            initialScore+=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }
        else{
        box1.style.backgroundColor = "red";
            initialScore-=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }

    }
    else if(target == box2 ){ // if the answer clicked is equal to this ID
        
        if(valueBox2 == true) {
            box2.style.backgroundColor = "green";
            initialScore+=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }
         else{
        box2.style.backgroundColor = "red";
            initialScore-=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }
        
    }
    else if(target == box3 ){ // if the answer clicked is equal to this ID
        if(valueBox3 == true) {
            box3.style.backgroundColor = "green";
            initialScore+=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }
         else{
        box3.style.backgroundColor = "red";
            initialScore+=10;
            score.textContent= "SCORE : " + initialScore;
            setTimeout(() => { nextQuestion()  }, 500);
        }
       
        
    }
}

selectAnswer();