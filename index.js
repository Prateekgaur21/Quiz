var quizdata=[

    {

        question:'Which framework is related to JS',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'
    },
    {

        question:'Which is not a programming language',
        a: 'HTML',
        b: 'python',
        c: 'java',
        d: 'js',
        correct: 'a'
    },
    {

        question:'CSS stands for:',
        a: 'cascading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct: 'b'
    },
    {
        question:'Which is not a framework?',
        a: 'raect',
        b: 'js',
        c: 'angular',
        d: 'django',
        correct: 'b'

    },
]
var quiz = document.getElementById('quiz')
var answer =document.querySelectorAll('.answer')
//. is to avoid marked option in every upcoming question
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentquestion = 0
//initialised
var quizscore = 0

loadquiz()
//function for forthcoming question loading one by one

function loadquiz(){
    deselect()
    question.innerHTML = quizdata[currentquestion].question
    option_a.innerText = quizdata[currentquestion].a
    option_b.innerText = quizdata[currentquestion].b
    option_c.innerText = quizdata[currentquestion].c
    option_d.innerText = quizdata[currentquestion].d
}

function deselect(){
    //function to avoid the options or radio button preselection on loading quiz
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click' , ()=>{
    var selectedoption;
    answer.forEach(answer=>{

        if(answer.checked){
            selectedoption=answer.id
            //to convey that an option is selected
        }
    })
    if(selectedoption==quizdata[currentquestion].correct){
        quizscore=quizscore+1
    }
    currentquestion=currentquestion+1
    if(currentquestion==quizdata.length){

        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizscore} correctly out of ${quizdata.length}</h1>`
        //$ is for getting or accsessing javascript variable and is called interpolation
    }
    else
    {
        loadquiz()
    }
})