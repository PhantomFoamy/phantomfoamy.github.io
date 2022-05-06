const gameState = {
  onColor: 0xaaffaa,
  offColor: 0xffaaaa
};
const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
//game declaration
const game = new Phaser.Game(config);

//preload assets and data function
function preload() {
  this.load.image("background", "/img/green-background.jpg");
  this.load.image("amongus", "/img/smol-mogus.png");
}

//create function
function create() {
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.background = this.add.image(150, 150, "background");
  gameState.amongus = this.add.sprite(40, 40, "amongus");
  gameState.text = this.add.text(100, 100, "sus");
  gameState.sqr1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
  gameState.sqr1.setInteractive();
  gameState.sqr2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
  gameState.sqr2.setInteractive();
  gameState.sqr1.on("pointerup", function () {
    gameState.sqr1.fillColor = gameState.onColor;
    gameState.sqr2.fillColor = gameState.offColor;
  });
  gameState.sqr2.on("pointerup", function () {
    gameState.sqr1.fillColor = gameState.offColor;
    gameState.sqr2.fillColor = gameState.onColor;
  });
}

//update game function
function update() {
  gameState.amongus.x += 1;
  gameState.background.y += 1;
  gameState.text.y -= 1;
}
