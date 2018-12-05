## Screens of the app
Login /register / Guest
List users history
Create new event
Event lobby
Create new games
Start game screen 
Game in progress
Game ended / results 



## user types 
Already registered 
New user Signing up
Guest user joining game




## create game flow
* Login
* User lobby (join event, start event)
* Create Event
* Create / edit game 
  * Game name
  * Game type
  * Teams
    * Team colour
  * Game length
    * Random game length
      * Min
      * Max
  * Save new game return to lobby
* Start /share game 
  * Pool of joinded devices will show
  * Select devices to be used in the game 
  * Start game or start game start countdown
  * Monitor game (score, Pause)
* Get results
* Return to event lobby
* Return to user lobby
* Exit / sign out 

## join game
* Guest open app
* Enter event/ lobby ID 
* Device registers with hosts event 
* Receive game details
  * Join game
  * Back
* Display joined game "waiting for game to start"
* Receive game start from host
* Start game 
* Display results
* Host lobby  

## managment screen
* Create or join game 
* Enters monitor mode 
* Host can start game
* Monitor start game count down
* Display live scores???
* Host can pause game
* display game over 
* Display results



## create game requirements
* type
* time
* depending on game type nodes
  * respawn nodes ( simple counters incriments )
  * flux nodes ( 'turn' point between teams )
  * domination timer ( counts turns and total team duration )



