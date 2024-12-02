let num=Math.floor(Math.random()*100)+1;
let guess=prompt("Guess the number");
let i=0;
while(guess!=num)
{ for(i=0;i<5;i++)
   { if(guess<num)
    {
        alert("your guess is too small");
    }
    else {
        if(guess>num)
            {
                alert("your guess is too big");
            }
    }
    guess=prompt("Guess the number");
    i++;
}alert(`the number is ${num}`);
let yes=prompt("do you want to play again");
if(yes=="no"){
    break;
}
else{
    guess=prompt("Guess the number");
}
}
if(guess==num)
    {
        alert("woah! you won the game");
    }


