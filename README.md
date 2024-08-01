### 4x4 Catch-Up Game

**Description:**

The 4x4 Catch-Up Game is an interactive grid-based game where two players navigate a 4x4 grid to score points. The game board consists of 16 cells, each represented by a `div` element, arranged in a 4x4 layout. Players move their respective positions on the grid using keyboard controls, with the goal of reaching randomly generated target cells.

**Gameplay:**
- **Player 1** moves using the `W`, `A`, `S`, and `D` keys.
- **Player 2** moves using the arrow keys (`↑`, `→`, `↓`, `←`).
- Each player starts at predefined positions on the grid.
- When a player reaches a target cell (which changes randomly), their score increases by 1 point, and the target cell moves to a new location.
- The game dynamically updates the grid, highlighting the current position of each player and the target cell with different colors.

**Features:**
- **Dynamic Target Positioning:** The target cell changes location randomly after each successful capture.
- **Color Indicators:** Player positions and the target cell are visually distinct, with Player 1's position highlighted in green, Player 2's position in yellow, and target cells in red.
- **Real-Time Score Update:** The scores for both players are displayed and updated in real-time as they capture the target cell.

**Technologies Used:**
- **HTML/CSS:** For creating and styling the game grid and interface.
- **JavaScript:** For game logic, including player movement, target positioning, and score management.

**Instructions:**
1. Open the game in a web browser.
2. Use the designated keys to move each player around the grid.
3. Aim to reach the red target cell to score points.
4. The game continues with the target cell moving to new locations as players score points.

**Note:** Ensure the web page is viewed in a desktop environment for optimal play experience.
