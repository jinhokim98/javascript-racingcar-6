import RacingGame from './RacingGame.js';

class App {
  async play() {
    RacingGame.start();
    await RacingGame.inputRacingCarNames();
  }
}

export default App;
