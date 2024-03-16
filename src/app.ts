import "phaser";
import { WelcomeScene } from "./welcomeScene";

const config: GameConfig = {
  title: "IA Game Lobby",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#150d0d",
  scene: [WelcomeScene]
};

export class StarfallGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new StarfallGame(config);
};
