import GameGrid from './components/GameGrid'

function App() {
  /**
   * TODO
   * -[X] Spaces that can have digits
   * -[X] A 5x5 grid of Spaces
   * -[X] A random/seeded digit generator for each Space
   * -[X] The Nibbler
   * -[X] Nibbler moves between tiles
   * -[x] Nibbler eats number
   * -[ ] keyboard controls (arrows move, space to nibble)
   * -[ ] Movement follows grid (row/col traversal, edges)
   * -[ ] mouse/touch controls (press other space to move, press current space to nibble)
   * -[ ] A score system
   * -[ ] A check to see if the level is complete
   * -[ ] Generate a new level once complete
   * -[ ] Some instructions
   * ===================================
   * NICE TO HAVES
   * -[ ] Troggles!
   * -[ ] Multiple game modes (Multiples, Factors, Prime, Equality, Non-Equality, Challenge that changes modes each round)
   * -[ ] A menu system (Main, mode select, enter scores)
   * -[ ] High score (local)
   * -[ ] High score (global)
   * -[ ] Animations between rounds
   */

  return (
    <main className="font-mono">
      <h1 className="text-3xl ">DIGIT NIBBLER</h1>
      <div id="gameContainer" className="w-fit border-2 border-green-500">
        <GameGrid></GameGrid>
      </div>
      <div>🥳 App successfully hosted.</div>
    </main>
  )
}

export default App
