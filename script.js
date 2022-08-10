'use strict';

let secretNumber= Math.trunc(Math.random()*20) +1;

let score = 20;

let highscore =0;




document.querySelector('.check').addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value );
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent ='No number';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent ='Correct Number';
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width ='30rem';
        
    }else if(guess > secretNumber){
        if(score>0){
        document.querySelector('.message').textContent ='Too High!';
        score = score -1;
        document.querySelector('.score').textContent= score;

        if(score> highscore){
            highscore= score;
            document.querySelector('.highscore').textContent = highscore ;
        }

        }
        else{
            document.querySelector('.message').textContent ='You lost the Game!';
            document.querySelector('.score').textContent= 0;
        }
        
    }else if(guess < secretNumber){
        document.querySelector('.message').textContent ='Too Low!';
        score = score -1;
        document.querySelector('.score').textContent= score;    

    }
}) ;


document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secretNumber= Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent ='Start Guessing';
    document.querySelector('.score').textContent= score; 
    document.querySelector('.number').textContent= '?'; 
    document.querySelector('.guess').value= ''; 
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width ='15rem';



});




