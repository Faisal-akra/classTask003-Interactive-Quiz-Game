var questionsObject = [
    {
        question: 'What does css stand for',

        answer: [
        'Cascading style sheet',
        'Central processing unit',
        'Hyper text markup language',
        'Data object Model',

    ],
    correct: 'Cascading style sheet',
    },




    {
        question: 'What does DOM stand for',
        
        answer: [
        'Cascading style sheet',
        'Central processing unit',
        'Hyper text markup language',
        'Data object Model',

    ],

    correct: 'Data object Model',
},




    {
        question: 'What does HTML stand for',
        
        answer: [
        'Cascading style sheet',
        'Central processing unit',
        'Hyper text markup language',
        'Data object Model',

    ],

    correct: 'Hyper text markup language',
},




    {
        question: 'What does CPU stand for',
        
        answer: [
        'Cascading style sheet',
        'Central processing unit',
        'Hyper text markup language',
        'Data object Model',
    ],
    
        correct: 'Central processing unit',
        
}
];


var questionIndex = 0; // is ki madad say ham index 0 say start laingay:

var questionArea = document.querySelector('.questionsArea h3');
var optionsArea = document.querySelectorAll('.btn');

//Question or options ko adjust kar liya buttons main
function initializeQuiz() {
    questionArea.textContent = questionsObject[questionIndex].question;
    for (var i = 0; i < optionsArea.length; i++) {
        optionsArea[i].textContent = questionsObject[questionIndex].answer[i]
    }
    
}

initializeQuiz();

// var marks = 0;


// //Ab ham jo option correct hoga uspe color lagana chahtay hay
// for (var i = 0; i < optionsArea.length; i++) {
//     optionsArea[i].addEventListener('click', checkedOption);
// }

// var obj = this; // is ko hum nay idhar declare kiya

// function checkedOption() {
//     var correctAnswer = questionsObject[questionIndex].correct;
//     var selectedAnswer = this.textContent; // user jis option pe click karayga osko ham nay pakra



//     if (correctAnswer === selectedAnswer) {
//         marks++;

//         this.style.backgroundColor = "green";
//         this.style.color = "white";
//         this.textContent += '🎊'+'👏'
//     }else{
//         this.style.backgroundColor = "red";
//         this.style.color = "white";
//         this.textContent += '😢'

//         //Agar user nay ghalat enter kiya to correct ka color bhi change kardo

//         for (var i = 0; i < optionsArea.length; i++) {

//             if (optionsArea[i].textContent === questionsObject[questionIndex].correct) {
//                 optionsArea[i].style.backgroundColor = "green";
//                 optionsArea[i].style.color = "white";
//             }
//         }
      
//     }


// }




