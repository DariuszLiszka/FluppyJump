let ball;
let obsticles = [];
let score = 10;
let submitButton;
let highscoreButton;
let p;
let input;
let getHighscore = false;

function setup() {
  createCanvas(640, 480);
  ball = new Ball();
  ApiUtils = new ApiUtils();
}

function keyPressed() {
  if (key == ' ') {
    ball.jump();
  }
}

function draw() {
  if (random(1) < 0.05) {
    obsticles.push(new Obsticle());
  }
  background(220);
  ball.show();
  ball.move();
  for (let obsticle of obsticles) {
    obsticle.move();

    obsticle.show();
    collide = obsticle.collide(ball.x, ball.y);
    if (obsticle.x <= 0) {
      obsticles.shift();
    }
    if (obsticle.scored()) {
      score = score + 10;
    }
    if (collide) {
      submitValue(score);
    }
    text('score: ' + score, 10, 30);
  }
}
function submitValue(score) {
  p = createP('submit game Score: ' + score);
  p.position(230, 160);
  input = createInput('player');
  input.position(230, 200);
  submitButton = createButton('submit!');
  submitButton.position(230, 220);

  submitButton.mousePressed(() => {
    postData();
  });

  highscoreButton = createButton('highscore!');
  highscoreButton.position(290, 220);

  highscoreButton.mousePressed(() => {});

  function postData() {
    ApiUtils.postData(
      'http://localhost:3000/api/highscore',
      (data = { nickname: input.value(), score: score })
    );
  }
  async function getData() {
    console.log('xD');
    return ApiUtils.getData('http://localhost:3000/api/highscore');
  }
}
