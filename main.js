'use strict';


let wordArray = ['background','champagne'
    ,'correspondence'
    ,'earthwax'
    ,'opposition'
    ,'identification'
    ,'partnership'
    ,'blonde'
    ,'mourning'
    ,'dedicate'
    ,'linger'
    ,'complete'
    ,'vegetation'
    ,'endure'
    ,'potential'
    ,'proclaim'
    ,'horizon'
    ,'failure'
    ,'available'
    ,'realize'];
    
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    
    window.onload = function() {
        let idx = getRandomArbitrary(0, wordArray.length);
        let word = wordArray[idx];
        // let word = 'eight';
        let correctLetters = [];
        
    $('#inputBox').on('keyup', function(e) {
        if (e.keyCode === 13) {
            let correctGuessCounter = 0;
            let guessWord = this.value;
            this.value = '';
    
             
              let solutionLetters = word.split('');
              
              for (let i=0; i < solutionLetters.length; i++) {
                  if (solutionLetters[i] === guessWord) {
                      correctGuessCounter++
                      if (!correctLetters.includes(guessWord)) {
                          correctLetters.push(guessWord);
                      }
                      
                  }
              }
              if (correctGuessCounter > 0) {
                  $('#gameOutput').html('You guessed correctly! Correct guess: ' + correctLetters.flat());
              } else {
                    $('#gameOutput').html("Try again sucka");
              }
              console.log(correctLetters.sort().flat() + ':' + solutionLetters.sort().flat());
              
                if (correctLetters.sort().join() == solutionLetters.sort().join()) {
                    $('#gameOutput').html("You Win!");
                }
              }
            
        });
    
    }