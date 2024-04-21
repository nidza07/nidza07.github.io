---
generator: pandoc
lang: en
title: Chess - Quentin C's Playroom
viewport: width=device-width, initial-scale=1.0, user-scalable=yes
---


Chess is one of the most popular board games, played by millions of people worldwide. It is played on an 8X8 Chess board, with each player controlling 16 pieces.

The goal of the game is to *checkmate* the opponent's king, that is, threatening the king with a capture that is impossible to escape.

Today, international Chess competitions are organized by FIDE (Fédération Internationale des Échecs), and tournaments are played all across the world.

# Game rules
The two players in a Chess game are called "White" and "black". The white player always takes the first turn, and plays with the white pieces. The black player follows, and plays with the black pieces. Both players have the same number of pieces, and they are as follows:

- One king,
- One queen,
- Two rooks,
- Two bishops,
- Two knights,
- Eight pawns.

The table below illustrates the Chess board, and the initial positions of every piece:

a|b|c|d|e|f|g|h
1: White rook|1: White knight|1: White bishop|1: White queen|1: White king|1: White bishop|1: White knight|1: White rook
2: White pawn|2: White pawn|2: White pawn|2: White pawn|2: White pawn|2: White pawn|2: White pawn|2: White pawn
3|3|3|3|3|3|3|3
4|4|4|4|4|4|4|4
5|5||5|5|5|5|5|5
6|6|6|6|6|6|6|6
7: Black pawn|7: Black pawn|7: Black pawn|7: Black pawn|7: Black pawn|7: Black pawn|7: Black pawn|7: Black pawn
8: Black rook|8: Black knight|8: Black bishop|8: Black queen|8: Black king|8: Black bishop|8: Black knight|8: Black rook

In competitive games, the color is usually decided by the organizer. On the Playroom, the table master is always white, but it is possible to change this as soon as the game starts and before making the first move.

## Moving
Each player can move only one piece at a time. The only exception is the castling (see below) where two pieces move at once.  
The white player starts the first move.

Each piece can be moved to either a free square, or a square occupied by an opponent's piece. In that case, that piece is captured and removed from the board.  
The only move allowing to capture a piece without moving to its square is called "en passant", see below.

A player is never allowed to skip a turn, even if the only move available is disadvantageous.

Every Chess piece has its own way of moving. Here are the rules for movement of the different pieces:

- A king can move vertically, horizontally, or diagonally in any direction, but only one move at a time. The king also takes part in a special move called "castle. It is the most valuable piece in the game: If the attack on a king cannot be countered, the game is lost.
- A rook can move any number of squares, but only vertically or horizontally, and never jumping over other pieces. The rook is involved together with the king in the castling move
- A bishop can move any number of squares, but only diagonally, and never jumping over other pieces
- A queen combines the powers of the rook and the bishop, and can move diagonally or vertically, any number of squares, but never jumping over other pieces.
- A knight moves in an l-shaped pattern: Either two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The knight is the only piece that can jump over other pieces.
- A pawn can move one square vertically. On its first move, a pawn can advance two squares, assuming both squares are free. To capture a piece, a pawn must move forward diagonally to the square where that piece is. In the same turn, it is not possible for a pawn to both advance forward, and then capture a piece by advancing diagonally. The pawn also has two special moves, en passant capture and the promotion (see below).

## Check and Checkmate
When a king is under attack, he is said to be in "check". It is allowed to respond to a check and move the king somewhere else, as long as it does not result in the king being under attack again. There are 3 ways to get out of a check:

- Capturing the piece threatening the king
- Placing your own piece between the threatening piece and the king (possible only if the attacking piece is a queen, rook or bishop and there is a square between that piece and the king)
- Moving the king to a square not under attack.

While in check, you are not allowed to castle. Similarly, you are never allowed to make a move that would result in a situation where your king ends up in check.

The goal of the game is to checkmate your opponent's king. This means that your opponent's king is in check, and there is no way for the king to escape it.

## Castling
Once in a game, each player can make a move known as castling.  
This move consists of moving the king two squares toward a rook of the same color, located in the same row, and then placing the rook on the square the king crossed.

Castling is allowed only under the following conditions:

- Neither the king nor the rook made any moves before the castling
- No other pieces are located between the king and the rook
- The king is not in chec and will not pass through a square or end up on a square attacked by an enemy piece

Note that castling is allowed if the rook is under attack, or if the rook is passing an attacked square/will arrive on one.

There are two kinds of castling:

- Short castle: Moving the white king to G1 or the black king to G8 and the rook moves to F1/f8
- Long castle: Moving the white king to C1 or the black king to C8 and the white rook moves to D1/d8

## En passant
When one pawn moves two squares forward from its starting position, and an enemy pawn is located one square next to the destination square of the advancing pawn horizontally, that enemy pawn can capture it en passant ("in passing).  
To perform such a capture, the pawn must move to the square just passed by the target pawn.

For example, if black pawn moves from G7 to G5, and there is a white pawn on F5, the white pawn can capture it by moving from F5 to G6.  
Note that this move must be made immediately after the pawn advances two squares. If you do not make the move on the first available turn, you lose this possibility.

## Promotion
When a pawn advances to rank eight (square 8 for white/square 1 for black), it must be promoted to another piece of the same colour. This piece can be either a queen, a bishop, a rook or a knight.  
The pawn is then exchanged for that new piece.

Typically, the pawn is promoted to a queen, although promoting to a different piece may also be useful. This is called "underpromotion".

There are no restrictions on how many pawns can be promoted, and it is perfectly allowed to have more pieces than at the start of the game, for example two queens.

## End of the game
A game can end with either a clear winner, or as a draw.

The game can be won in the following ways:

- Via a Checkmate
- One player resigning the game (giving up)

A game can end as a draw under the following conditions:

- Stalemate: If the player has no legal moves to make, but his king is not in check, the position is called a stalemate and the game is a draw
- Dead position: If there is no theoretical possible Checkmate, but the players can make legal moves, the game is also considered a draw. For example, if the players have only two kings on their board.
- Mutual agreement: The players can agree to a draw.

Note: Official Chess rules add a few more situations under which the game is declared as a draw, such as three repeated moves for both players or the fifty moves with no progress rule. These rules are currently not implemented on the Playroom.

## Time limit
At the beginning of the game, you can optionally configure a time limit.  
This will add a clock for each player.  
You should enter the time in seconds, and, when looking at the clocks, each player will be able to see their remaining time. The time is the total amount they will have for the entire game, and not the time per move, unlike in other games.

## Notations
When using the shortcuts to import/export the game, you will encounter two types of notations. They are standard Chess notations, so they will not be described here in detail, this page will only describe their purpose. For more information, you can find various resources on the Internet describing the notations.

- FEN: This notation is used to record the entire position of the board. All the pieces, whether castling is allowed for a player, and so on...
- PGN: This notation indicates the Chess moves a player made so far. It is also used to enter a new move.

## Keyboard shortcuts
- Quick navigation between the pieces:
    - K: Moves to the next king on the board
    - R: Moves to the next rook on the board
    - B: Moves to the next bishop on the board
    - N: Moves to the next knight on the board
    - D: Moves to the next queen on the board
    - P: Moves to the next pawn on the board
- Moving pieces:
    - To move a piece, press enter on its square, and then enter again on its destination square
    - Using the mouse, you can also hold the left click on a piece and drag it to the desired position, then release the click
- C: Look at the clocks (if the time limit is not configured, the total time for each player, if the time limit is configured, the remaining time)
- E: View threats for that square, or for a piece located on the square
- V: View all the possible moves for a piece
- H at the beginning of a game only: Swap colours (white plays as black and black plays as white)
- Space: Enter a move manually in PGN notation (see the notations section)
- Shift+N: Request a draw game (the other player must confirm with Shift+A)
- Shift+M: Resign the game (confirmation with Shift+A is necessary)
- CTRL+O: Import/export in FEN format (see the notations section)
- Shift+H: Look at the moves history in PGN format (see the notations section)
- CTRL+Z: Undo a move (request to undo if playing with a human, or automatically undo if playing with a bot). Note that games with undone moves won't be counted in the statistics
- Numbers 1 or 2: If you are a spectator, switch the board orientation to either white or black
- T: See whose turn it is