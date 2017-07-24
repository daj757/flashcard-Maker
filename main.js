var inquirer = require("inquirer");
var NewCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var input = process.argv;
var cardArray = [];
var numberOfCards = 0;

//takes answers from terminal 

// for (let i = 2; i < input.length; i++){
//  questionArray.push(input[i]);

// }
// console.log(questionArray);
// var v = questionArray.indexOf(',');
// if(v === -1){
// 	console.log("Please seperate your question from your answer with a space followed by a comma... Ex. Who is the first president , George Washington");
// }
// var answerArray = questionArray.splice(v);
// answerArray.splice(0, 1);
// var questionString = questionArray.join(' ');
// var answerString = answerArray.join(' ');

//takes answers from inquirer

var questions = function(){
		console.log("new question");
		inquirer.prompt([{
			type: "input",
			name: "number",
			message: "How many flashcards would you like to create?",
			validate: function(input){
				if(isNaN(input) === true){
					console.log("\r\n Please enter a number");
					return false
				}
				else{
					return true
				}
			}}
			]).then(function (answers) {
				console.log(answers.number);
				numberOfCards = answers.number;
				createCards();
				});
		}
	
questions();

var createCards = function(){
	if(numberOfCards !== 0){
		cardMaker(); 
		}
		else{
		 trivia();
		}
	}
function cardMaker(){
	inquirer.prompt([{
			type: 'list',
	      	choices: ['Basic Card', 'Cloze Card'],
	     	name: 'cardChoice',
	      	message: 'What kind of card would you like to create?\r\n Basic Card: Will be in a simple question/answer format. \r\n Cloze Card: Will use a sentence that has its answer removed.\r\n'
			}
			]).then(function (answers) {
				console.log(answers.cardChoice)
				if(answers.cardChoice === 'Basic Card'){
					console.log('You chose to create a basic card.');
					basic()
				}
				else if(answers.cardChoice === 'Cloze Card'){
					console.log('You chose to create a close card.');
					cloze()
				}
});
		}

function basic(){
          inquirer.prompt([
          {
          	  type: 'input',
              name: 'front',
              message: 'Please enter your question.'
          },
          {
          	  type: 'input',
              name: 'back',
              message: 'Please enter your answer.'
          }

            ]).then(function(secondAnswers){
            	var newCard = new NewCard(secondAnswers.front, secondAnswers.back);
            	console.log(newCard);
            	cardArray.push(newCard);
            	console.log(cardArray);
            	createCards();
				});
				numberOfCards--;
}

		
		function cloze(){
          inquirer.prompt([
          {
          	  type: 'input',
              name: 'front',
              message: 'Please enter a full sentence that includes answer and question.\r\n Ex. George Washington was the first president.\r\n',
        
          },
          {
          	  type: 'input',
              name: 'back',
              message: 'Please enter your cloze answer portion.\r\n Ex. George Washington.\r\n',

          }

            ]).then(function(clozeAnswers){
            	var clozeCard = new ClozeCard(clozeAnswers.front, clozeAnswers.back);
            	clozeCard.partial = clozeAnswers.front.replace(clozeAnswers.back, " ... ");
            	console.log(clozeCard.partial);
            	console.log(clozeCard);
            	cardArray.push(clozeCard);
            	console.log(cardArray);
            	createCards();
				});
				numberOfCards--;
				
			}
	

function trivia(){
	console.log("triva begins")
}
