# tic-tac-toe-clj

## How to Play

### Locally with another player

* `lein repl` inside the root directory
* Inside the repl `(use '[tic-tac-toe-clj.cli])`
* `(play-cli)`

### Locally against ai

* `lein repl` inside the root directory
* Inside the repl `(use '[tic-tac-toe-cli.cli])`
* Create your game options:
  * `:ai-difficulty` options `:hard` or `:easy`
  * `:first-player` options `:ai` or `:player`
* Example: `(play-cli {:first-player :ai :ai-difficulty :hard)`