import { expect, test } from '@jest/globals';
import { turn, gameFlow, Gameboard, Player } from './src/main';

test('Gets player name and array', () => {
  expect(Player('Lilith')).toEqual({name: 'Lilith', getPlays: []});
});

test('Gets gameboard with cells', () => {
  expect(Gameboard(NodeList)).toEqual({tcell: NodeList, winCondition: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]});
});

test('says the turn correctly', () => {
  const play = document.createElement("h1")
  play.setAttribute('id', 'turn')
  play.textContent = 'Player mono turn'

  const make = document.createElement("h1")
  make.setAttribute('id', 'turn')
  make.textContent = 'Player Fiat turn'

  expect(turn({getName:"Fiat", getPlays:[1, 2, 3]}, {getName:"mono", getPlays:[5, 6]}, play)).toEqual(make);
});

test('we have a winner', () => {

  const play = document.createElement("h1")
  play.setAttribute('id', 'turn')
  play.textContent = 'Player Fiat turn'

  const game = {
    winCondition : [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  }

  const player = {getName:"Fiat", getPlays:[1, 2, 3]}

  expect(gameFlow(player.getPlays, play, {getName:"Fiat", getPlays:[1, 2, 3]}, {getName:"mono", getPlays:[5, 6]})).toEqual({"playerWinner": "Fiat is the winner!"});
})
