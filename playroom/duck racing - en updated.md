# Duck racing
The weather is beautiful, ducks are going outside! Playing as one of these lovely birds, your objective is to be the first to cross the finish line!
However, don't be mistaken, it isn't going to be as simple as you think. Your way is full of traps and your concurrents won't hesitate to be nasty to you.
Who's going to be the smartest?
## The game
At their turn, players roll the die to make their duck advance on the board.
Many squares have particular effects when landed on, or simply when jumped over without necessarily stopping at (see a non-exhaustive list of possible effects further down under "cards and feathers")
The winner of the game, after having done the number of boardrounds set at the beginning of the game, is the first player to cross the finish line of the race.
## Cards and feathers
Additionally to the board and the die, each player also has cards. They can be played at your turn, before throwing the die, and offer many possibilities to make you progress further, or to put your opponents in trouble.
Most cards need a certain number of feathers in order to be played, but other can give some of them in exchange for little sacrifices. Thus feathers are more or less the money of the game.
All cards aren't played in the same way:
- Some apply only on yourself.
- Some others have to be played against your concurrents.
- Some others must be dropped on the square you currently are on. The next player to land on that square digs up the card and its effect then applies on him at that moment.
- Some others are automatically played when certain conditions are met and given that you have enough feathers to play them; depending on the cases, you may discard them manually or not.
- Finally, some cards, much more rare, can't be played directly and have a passive effect. They apply as long as you have them in your hand, maybe several times. Note that these cards aren't implemented yet and are reserved for a future board.

To play a card, you just need to select it in the menu above the throw the die option. The D key allows you to know what's the effect of your cards and how to play them.
You can only play one card per turn, and you can't drop a card where there's already another one.
Cards can have many effects. Here's a non-exhaustive list of possibilities:
- Advance or go back a certain number of squares
- Win or lose feathers
- Steal feathers and cards from other players
- Skip a certain number of turns
- Exchange cards with other players
- And many others, which you will for sure discover yourself!

## Duels
When a duck arrives on a square where someone else is already present, a duel takes place between them. If a third duck arrives on that same square, there will be a duel between the second and the third; the fourth will have a duel with the third, and so on.
Duels are played with the die or in a mini-game, for example rock-paper-scissors. The winner of the duel steals a certain number of feathers from the loser, unless there's a draw, in which case nobody steals anything.
At the moment, the following kinds of duels exist:
- Dice duel: each player simply rolls the die
- Rock-paper-scissors duel: each player chooses a symbol rock, paper, scissors, well or bomb. Each symbol wins against two symbols and loses against the two others. If both choose the same symbol, that's a draw.
- Farmer duel: with the same principle as rock-paper-scissors, you can choose between the wolf, the goat and the cabbage; the wolf doesn't eat cabbage.
- Element duel: always with the rock-paper-scissors principle, each player chooses an element of the chinese circle: metal, wood, earth, water, fire; here again, an element wins against two elements and lose against the two others.

## Speed based duels
To prevent from having only random duels, some duels based on speed have been implemented. A few notes for successfully playing them:
- For every question, you provide your answers by using numbers on your keyboard. You can use either standard digits or the numeric keypad.
- Always type your answers directly in the menu list box. This is the same list where you hear your cards and have the option to roll the die as well. Directly type numbers there, no matter where the focus is in the list.
- If you are successfully typing numbers, you will hear a small click to tell you. If, instead of hearing a click, you hear a ding sound, it means that your opponent already finished or failed the duel.
- For every speed duel, you have a limited amount of attempts to type the correct answer. If you don't do this and reach this limit, your opponent steals  2 feathers from you.
- There is never an option to delete a number if you make a mistake. Type the remaining numbers (for example, if in a math duel, you are asked 21+21 and you type 3 instead of 4, the game now expects one more digit. Type  it, you should hear wrong answer, and afterwards you can try to type the complete solution again, provided your opponent didn't do so already).

The following kinds of speed duels exist:
- Guess the number: The game will create a random number (either from 1 to 9, or from 10 to 99). Your job is to try to guess it. After typing a number, you will be told whether the number you are looking for is greater than or less than the number you wrote. Use also sounds to help you get this information  faster, the higher pitched noise means greater, the lower pitched one means less.
- Writing numbers: The game  will  ask you  to write a random 4 or 5 digits number. The first one to do so wins. Note: You may be asked to write it backwards as well, so pay attention!
- Mental math: You will be asked a random math equation. This can be additions, subtractions, multiplications or divisions. Your job is of course to answer it correctly before your opponent. Note: Some questions will be even more advanced, asking for the square / cube root.
- Speed question: You will be asked a random question about the game in progress, of course answered only with numbers. This can be number of laps in  the current game, positions of players, and so on...
- Writing braille: You will be asked to write a random braille letter from A to Z. Letters are always written in the correct ascending order (for example, if you are asked to write P, you should write 1234 rather than 4321 or any other combination).
- Counting Ducks: You will hear 10 or more quacking ducks. Your job is of course to remember the count and write it after all sounds are finished playing. You can repeat this sequence with backspace, but this isn't recommended as you will probably be slower than your opponent
- Musical duel: You will hear a series of sounds. These have to be played in  the correct order using numbers from 1 to 8  for musical notes, or from 1 to 0 for DTMF (telephone) tones. This sequence can also be repeated with backspace.
- Rhythmic duel: You will hear 2 different clicks, in a specific rhythm. The higher sound is played using number 1, and the lower sound using 0. Your job is to correctly reproduce this sequence, and as close to the right rhythm as you can. Just like the 2 other duels above, repeat this sequence with backspace if you aren't sure. Note that unlike all other duels, this duel isn't timed, and it waits for both players to finish their sequence, so you are not in a hurry.
- Secret code: This duel is similar to the game of Mastermind. Your job is to guess a code, which can either have 3 or 4 digits from 1 to 0, where digits can repeat. After trying a sequence, you will be told which sounds are not present in the code at all (buzzer sound), which sounds are present but in the wrong place (scopa sound), and which sounds are present and in the correct place (ding / right answer sound). Like in the last few duels above, you can always repeat your last result with backspace.


The table master can enable or disable any of these duels.
## Freeze
When a duck loses all his feathers, he's getting cold, and becomes frozen for a given number of turns.
The number of turns that the freeze lasts depends on the current position on the race. If the last player is generally frozen only for a single turn, the leader may be frozen up to 4 turns if he was quite far away from the last one.
## Quiz
Certain squares and cards have for effect to launch a quiz question. Answering correctly to the questions allow you to get additional feathers, that will be quite useful to you. Depending on the difficulty of the question, you can win from 2 up to even 10  feathers for very difficult questions.
Don't hesitate to play Quiz Party and submit questions! The variety of the database is important to keep an interesting game.
## Keyboard shortcuts
- D: description of the card's effects
- C: view your information
- S: view information for other players and the ranking
- V: view the board
- Backspace: Repeat the sound sequence (only for some speed based duels)
- E: Read the amount of cards currently available in the game
- T: who's turn it is?