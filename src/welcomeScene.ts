import "phaser";

export class WelcomeScene extends Phaser.Scene {
  constructor() {
    super({ key: "WelcomeScene" });
  }

  create(): void {

  // Request welcome message from the server
  fetch("http://your-server-url/welcome-message")
    .then((response) => response.text())
    .then((welcomeMessage) => {
      // Display the received welcome message
      const welcomeText = this.add.text(200, 200, welcomeMessage, {
        fontSize: "24px",
        color: "#ffffff",
      });

      // Add a button to proceed to the login scene
      const loginButton = this.add.text(300, 300, "Login", {
        fontSize: "24px",
        color: "#ffffff",
        backgroundColor: "#00ff00",
        padding: {
          x: 10,
          y: 5,
        },
      });

      loginButton.setInteractive();
      loginButton.on("pointerdown", () => {
        // Transition to the login scene when the button is clicked
        this.scene.start("LoginScene");
      });
    })
    .catch((error) => {
      // Handle any errors related to fetching the welcome message
      console.error("Error fetching welcome message:", error);
      // Fallback welcome message in case of error
      const welcomeText = this.add.text(200, 200, "Welcome to the Game Lobby", {
        fontSize: "24px",
        color: "#ffffff",
      });

      // Add a button to proceed to the login scene
      const loginButton = this.add.text(300, 300, "Login", {
        fontSize: "24px",
        color: "#ffffff",
        backgroundColor: "#00ff00",
        padding: {
          x: 10,
          y: 5,
        },
      });

      loginButton.setInteractive();
      loginButton.on("pointerdown", () => {
        // Transition to the login scene when the button is clicked
        this.scene.start("LoginScene");
      });
    });
  }
}
