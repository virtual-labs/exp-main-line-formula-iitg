 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1.What are the interdigital intervals ?", ///// Write the question inside double quotes
            answers: {
                a: "The clefts between the digits", ///// Write the option 1 inside double quotes
                b: "The clefts between the ulnar", ///// Write the option 2 inside double quotes
                c: "The clefts between the distal",
                d: "None of above",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

//     {
//       question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detector",  ///// Write the question inside double quotes
//       answers: {
//         a: "<img src='images/1b.png'>",                  ///// Write the option 1 inside double quotes
//         b: "<img src='images/1a.png'>",                  ///// Write the option 2 inside double quotes
//         c: "<img src='images/1c.PNG'>",      },
//       correctAnswer: "c"                ///// Write the correct option inside double quotes
//     },
         {	
         question: "2. What is hypothenar eminence?", ///// Write the question inside double quotes
            answers: {
                a: "Lying on the proximal direction there is an elongated eminence", ///// Write the option 1 inside double quotes
                b: "Lying on the ulnar direction there is an elongated eminence", ///// Write the option 2 inside double quotes
                c: "Lying on the direction there is an elongated eminence",
                d: "It is fifth triradius",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        {	
         question: "3. How many astronomical divisions are there in a palm?", ///// Write the question inside double quotes
            answers: {
                a: "9", ///// Write the option 1 inside double quotes
                b: "5", ///// Write the option 2 inside double quotes
                c: "4",
                d: "2",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },
        {	
         question: "4. How many elevations are there in a palmar surface?", ///// Write the question inside double quotes
            answers: {
                a: "8", ///// Write the option 1 inside double quotes
                b: "6", ///// Write the option 2 inside double quotes
                c: "4",
                d: "2",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },
        {	
         question: "5. How many astronomical divisions are there in a palm?", ///// Write the question inside double quotes
            answers: {
                a: "9", ///// Write the option 1 inside double quotes
                b: "5", ///// Write the option 2 inside double quotes
                c: "4",
                d: "2",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },
       {	
         question: "6. How many elevations are there in a palmar surface?", ///// Write the question inside double quotes
            answers: {
                a: "8", ///// Write the option 1 inside double quotes
                b: "6", ///// Write the option 2 inside double quotes
                c: "4",
                d: "2",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        {	
         question: "7. The triradius designated by the letter ‘t’ is", ///// Write the question inside double quotes
            answers: {
                a: "Arial triradius", ///// Write the option 1 inside double quotes
                b: "Axial Triradius", ///// Write the option 2 inside double quotes
                c: "Proximal Triradius",
                d: "Digital Triradius",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        {	
         question: "8. The periphery of the palm is divided into how many intervals and points", ///// Write the question inside double quotes
            answers: {
                a: "20", ///// Write the option 1 inside double quotes
                b: "30", ///// Write the option 2 inside double quotes
                c: "14",
                d: "15",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
       },
	    	{	
         question: "9. The main line formula is", ///// Write the question inside double quotes
            answers: {
                a: "DCBA", ///// Write the option 1 inside double quotes
                b: "ABCD", ///// Write the option 2 inside double quotes
                c: "BCDA",
                d: "CDAB",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
      		{	
         question: "10. There are how many main lines in a palm", ///// Write the question inside double quotes
            answers: {
                a: "6", ///// Write the option 1 inside double quotes
                b: "3", ///// Write the option 2 inside double quotes
                c: "2",
                d: "1",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        }
     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
