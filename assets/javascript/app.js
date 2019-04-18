var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var time = 30;

function generateQuiz(questions, quizContainer, resultsContainer) {
    console.log("generatingquiz");
    $(".content").hide();

    $(".introPic").click(function () {
        $(".introPic").hide();

        $(".content").show();
        intervalID = setInterval(count, 1000);
        showQuestions(questions, quizContainer);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
function count() {
    time--;
    $("#timer").text(time);
    if (time === 0) {
        console.log("found time=0");
        clearInterval(intervalID);
        showResults(myQuestions, quizContainer, resultsContainer);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {

        answers = [];

        for (letter in questions[i].answers) {
            console.log("about to push");
            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '"> '
                + letter + ' : '
                + questions[i].answers[letter]
                + '</label> <br>'
            );
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div> <br>'
        );
    }

    quizContainer.innerHTML = output.join('');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        if (userAnswer === questions[i].correctAnswer) {
            numCorrect++;

            answerContainers[i].style.color = 'lightgreen';
        }

        else {
            answerContainers[i].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
var myQuestions = [
    {
        question: "Who killed the Grey Lady?",
        answers: {
            a: 'Voldemort',
            b: 'James Potter',
            c: 'The Bloody Baron',
            d: 'Nearly Headless Nick'
        },
        correctAnswer: 'c'
    },

    {
        question: "Which is not a Deathly Hallow?",
        answers: {
            a: 'Tom Riddle Diary',
            b: 'Resurrection Stone',
            c: 'Invisibility Cloak',
            d: 'Elder Wand'
        },
        correctAnswer: 'b'
    },

    {
        question: "Where did Dumbledore's Army meet regularly?",
        answers: {
            a: 'The Shrieking Shack',
            b: 'The Three Broomsticks',
            c: 'The Room of Requirement',
            d: 'Hogsmeade'
        },
        correctAnswer: 'c'
    },

    {
        question: "How did Severus Snape die?",
        answers: {
            a: 'Snake bite',
            b: 'Killing curse',
            c: 'Dementor kiss',
            d: 'While dueling at the Battle of Hogwarts'
        },
        correctAnswer: 'a'
    },

    {
        question: "Who killed Bellatrix Lestrange?",
        answers: {
            a: 'Molly Weasley',
            b: 'Hermione Granger',
            c: 'Sirius Black',
            d: 'Luna Lovegood'
        },
        correctAnswer: 'a'
    },

    {
        question: "Who did not live in Godric's Hollow?",
        answers: {
            a: 'Aberforth Dumbledore',
            b: 'Bathilda Bagshot',
            c: 'James Potter',
            d: 'Rita Skeeter'
        },
        correctAnswer: 'd'
    },

    {
        question: "What is Hermione Granger's Patronus?",
        answers: {
            a: 'A doe',
            b: 'An otter',
            c: 'An owl',
            d: 'A rabbit'
        },
        correctAnswer: 'b'
    },

    {
        question: "What is Professor Slughorn's favorite treat?",
        answers: {
            a: 'Bertie Botts Every Flavor Beans',
            b: 'Chocolate Frogs',
            c: 'Treacle Tart',
            d: 'Crystallized Pineapple'
        },
        correctAnswer: 'd'
    },

    {
        question: "Who was not in the Slug Club?",
        answers: {
            a: 'Cormac McLaggen',
            b: 'Ginny Weasley',
            c: 'Luna Lovegood',
            d: 'Marcus Belby'
        },
        correctAnswer: 'c'
    },

    {
        question: "Where did Harry break his Phoenix tailfeather wand?",
        answers: {
            a: 'The home of Bathilda bagshot',
            b: 'Hogwarts',
            c: 'The forest of Dean',
            d: 'The home of Xenophilius Lovegood'
        },
        correctAnswer: 'a'
    },

];

$(document).ready(function () {
    generateQuiz(myQuestions, quizContainer, resultsContainer);
    submitButton.onclick = function () {
        showResults(myQuestions, quizContainer, resultsContainer);
    }
});