#Rock Paper Scissors

##Step 1: Setup project

create and CLONE Git repo
create index.html and javascript.js
link .js in .html and test log output in browser


##Step 2: Logic to get computer choice (no Arrays learned yet)

CALL getComputerChoice RETURNING computerChoice
INIT a random number between 0 and 1
SET that number to a variable
IF that number is greater than or equal 0 and lower than 0.3
    THEN SET the string to "rock"
ELSE IF that number is greater than or equal 0.3 and lower than 0.6
    THEN SET the string to "paper"
ELSE SET the string to "scissors"
ENDIF


##Step 3: Logic to get human choice

CALL getHumanChoice RETURNING humanChoice
GET user input in console


##Step 4: Declare players score variables

INIT in global scope two values, one for computer, one for human with 0


##Step 5: Logic to play a single round

CALL playRound with computerChoice and humanChoice
SET humanChoice to lowercase
IF humanChoice equal to computerChoice
    THEN log the string "TIE! Same choices!"
    INCREMENT both scores
IF humanChoice is scissors and computerChoice is paper OR
    humanChoice is rock and computerChoice is scissors OR
    humanChoice is paper and computerChoice is rock
        THEN log the string "You win! humanChoice beats computerChoice!"
        INCREMENT humanScore
ELSE log the string "You lose! computerChoice beats humanChoice!"
        INCREMENT computerScore
ENDIF

##Step 6: Logic to play the entire game

CALL playGame RETURNING winner
MOVE playRound + score variables in scope of playGame
INVOKE playRound 5x
IF humanScore is greather than computerScore after the rounds
    THEN SET winner to human
ELSE THEN SET winner to computer
ENDIF