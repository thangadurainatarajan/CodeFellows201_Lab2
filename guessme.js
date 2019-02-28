var GuestName = prompt ('Welcome Guest! What is your Name?');
console.log ('GuestName : ',GuestName);
if (GuestName === null){
    GuestName = 'Guest';
}
var Question1 = prompt ('Hi '+GuestName+ ' Ready to play the Guessing Game (Y/N)?');
console.log ('Answer1 (Y/N) : ', Question1);
var Points = 0;
var total = 0;
if (Question1 === 'Y' || Question1 === 'y' || Question1 === 'Yes'|| Question1 === 'yes') {
    var Food = prompt ('My Favorite Food?');
    console.log ('Favorite Food : ', Food);
    total++;
    if (Food.toLowerCase() === 'pizza'){
        alert ('You guessed it correct!!!');
        Points++;
    }                   
    else {
        alert ('Sorry, You guessed it wrong!!!')
    }
    var vacationspot = window.prompt ('My Favorite vacation spot?');
    console.log ('vacationspot : ', vacationspot);
    total++;
    if (vacationspot.toLowerCase() === 'venice'){
        alert ('You guessed it correct!!!');
        Points++;
    }                   
    else {
        alert ('Sorry, You guessed it wrong!!!')
    }
    var TVSerial = prompt ('My Favorite TV Serial');
    console.log ('TVSerial : ', TVSerial);
    total++;
    if (TVSerial.toLowerCase() === 'game of thrones'){
        alert ('You guessed it correct!!!');
        Points++;
    }                   
    else {
        alert ('Sorry, You guessed it wrong!!!')
    }
        if (parseInt(Points) > 0) {
        alert('Hi '+ GuestName +'! ' + Points +' out of your '+ total +' guesses are correct' );
    }
    else {
        alert('Hi '+ GuestName +'! Sorry, All your guesses are wrong' );
    } 
}
else {
    alert('Hi '+ GuestName +'! Play Some other time!!');
}
