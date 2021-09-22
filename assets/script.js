var question = document.getElementById('title');
var body = document.getElementById('body');
var btn = document.querySelector('.btn');
var score = 0;


//timer

var timer = document.createElement('div');
var secondLeft = 100;


function countdown() {
    var timerInterval = setInterval(function() {
    secondLeft --;
    timer.textContent = 'Time Left : ' + secondLeft;
    document.body.appendChild(timer);

    if(secondLeft <= 0)  {
        secondLeft = 0;
        timer.textContent = 'Time Left : ' + secondLeft;
        clearInterval(timerInterval);
        inputName();
    } else if (score == 3) {
        clearInterval(timerInterval);
    }
}, 1000);
}

function timerend () {

}


var ol = document.createElement('ol');

var choice1 = document.createElement('li');
var choice2 = document.createElement('li');
var choice3 = document.createElement('li');
var choice4 = document.createElement('li');


//quiz
btn.addEventListener ('click', function () {
    countdown();

    //quiz1_ question
    question.textContent = 'Inside which HTML element do we put the JavaScript?';

    //quiz1_ choice
    body.textContent = '';

    choice1.textContent = '<script>';
    choice2.textContent = '<js>';
    choice3.textContent = '<scripting>';
    choice4.textContent = '<javascript>';

    document.body.children[1].appendChild(ol);
    document.body.children[1].children[0].appendChild(choice1);
    document.body.children[1].children[0].appendChild(choice2);
    document.body.children[1].children[0].appendChild(choice3);
    document.body.children[1].children[0].appendChild(choice4);

    //quiz1_ button remove
    btn.remove();   
  
    //quiz1 -> quiz2
    var li = document.querySelectorAll('li');


    for(i=0; i<li.length; i++){
    var eachli = li[i]
        li[i].addEventListener('click', function (event) {
            event.preventDefault();

            if(event.target.textContent == '<script>') {
                score ++;
                secondquiz();

            } else{
                secondLeft -= 10;
            }

        })
    };
}) ;

    


    // quiz2
    function secondquiz(){
    //quiz2_ question
    question.textContent = 'Which operator is used to assign a value to a variable?';

    //quiz2_ choice
    body.textContent = '';

    choice1.textContent = '-';
    choice2.textContent = '=';
    choice3.textContent = '*';
    choice4.textContent = 'x';

    document.body.children[1].appendChild(ol);
    document.body.children[1].children[0].appendChild(choice1);
    document.body.children[1].children[0].appendChild(choice2);
    document.body.children[1].children[0].appendChild(choice3);
    document.body.children[1].children[0].appendChild(choice4);

    //quiz2 -> quiz3
    var li = document.querySelectorAll('li');


    for(i=0; i<li.length; i++){
    var eachli = li[i]
        li[i].addEventListener('click', function (event) {
            event.preventDefault();


            if((event.target.textContent == '=') && (secondLeft>0)) {
                score ++;
                lastquiz();
            }
            
        });
    }
};
    
    

    // quiz3
    function lastquiz(){
        //quiz3_ question
        question.textContent = 'What is the correct syntax for referring to an external script called "xxx.js"?';
    
        //quiz3_ choice
        body.textContent = '';
    
        choice1.textContent = '<script rel="xxx.js">';
        choice2.textContent = '<script name="xxx.js">';
        choice3.textContent = '<script href="xxx.js">';
        choice4.textContent = '<script src="xxx.js">';
    
        document.body.children[1].appendChild(ol);
        document.body.children[1].children[0].appendChild(choice1);
        document.body.children[1].children[0].appendChild(choice2);
        document.body.children[1].children[0].appendChild(choice3);
        document.body.children[1].children[0].appendChild(choice4);
    
        //quiz1 -> quiz2
        var li = document.querySelectorAll('li');
    
    
        for(i=0; i<li.length; i++){
        var eachli = li[i]
            li[i].addEventListener('click', function (event) {
                event.preventDefault();
    
    
                if((event.target.textContent == '<script src="xxx.js">') && (secondLeft>0)) {
                    score ++;
                    inputName();
                }
            });
        }
    };

    var label = document.createElement('label');
    var input = document.createElement('input');


    function inputName (){
        question.textContent = 'All done!';
        body.textContent = "Your score is " +secondLeft +'.';
        

        label.textContent = 'Enter name : ';


        input.setAttribute('width', '50%');

        document.body.appendChild(label).appendChild(input);


        var submitbtn = document.createElement('button');
        submitbtn.textContent = "submit";
        document.body.appendChild(submitbtn);
        
        
        submitbtn.addEventListener ('click', function(){
            localStorage.setItem("name", input.value);
            localStorage.setItem("score", secondLeft);
            submitbtn.remove();
            finalscore();
        });
    

    }


    function finalscore () {
        var myscore = localStorage.getItem("score");
        var myname = localStorage.getItem("name");

        input.textContent = "";
        label.textContent = "";
        body.textContent = "";  

        question.textContent = 'Highscores';


        var scoreboard = document.createElement('li');
        scoreboard.textContent = myname + ' - ' + myscore;

        document.body.append(scoreboard);


        var clearbtn = document.createElement('button');
        var gotobackbtn = document.createElement('button');

        clearbtn.textContent = 'Clear score';
        gotobackbtn.textContent = 'Go To Back'

        document.body.appendChild(clearbtn);
        document.body.appendChild(gotobackbtn);

        clearbtn.addEventListener('click', function() {
            scoreboard.remove();
        });

        gotobackbtn.addEventListener('click', function(){
            location.reload()}
            );
    }

    
     

    