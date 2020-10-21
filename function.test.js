import turn from './src/main';

test('says the turn correctly', () => {
  const play = document.createElement("h1")
  play.setAttribute('id', 'turn')
  play.textContent = 'Player mono turn'

  const make = document.createElement("h1")
  make.setAttribute('id', 'turn')
  make.textContent = 'Player Fiat turn'

  expect(turn({getName:"Fiat", getPlays:[1, 2, 3]}, {getName:"mono", getPlays:[5, 6]}, play)).toEqual(make);
})

import gameFlow from './src/main'

test('we have a winner', () => {

  const play = document.createElement("h1")
  play.setAttribute('id', 'turn')
  play.textContent = 'Player mono turn'

  const player1 = {getName:"Fiat", getPlays:[1, 2, 3]}
  expect(gameFlow(player1.getPlays, play)).toBe('wef');
})