import M from "materialize-css";
import Phaser from "phaser";
import {baseURL, gameHeight, gameWidth, gameScale, magicElement } from "./config";
import { GAME_CONSTANT} from "./constant"
import MSPhaserLib from '../msPhaserLib.min'


//blockly variables
let timer = 30;
let score = 0;
let lives = 3;
let SpeechInnerText = ''
let T1 = null; //timerevent
let TopMenu;
//functions to call by blockly
//Start_Game();
//reducetime(-1)  : reduce the timer every second
//reduceLives(-1)
//addScore(+1)
//YouWin()
//gameOver()
//ShowError
//variable to call by blockly
let ErrorText;
let ErrorInnerText = '';

let TopMenuLives;
let LivesTXT;


let screentouched = false;

let if_sec = '';
let else_sec = '';
let reduce_lives = false;
let timer_increment = 0;
let lives_increment = 0;
let score_increment = 0;
let dummy_increment = 0;
let dummy = 0;
let win_score = 1000;
let lose_life = -1000;



let TimerText;
let KMText;
let TotalTime = 0;
let TotalKm = 0;


let isflying = false;

//phaser variables
//moving backgrounds
let BG1;
let BG2;
//all coins
let AllCoins = [];
let lastCoin;
//all sticks
let AllStciks = [];
let lastStick;
let DistX = 4.5; //coef : distance between sticks
//world horizental speed
let speed = 6;
//spacekey down/up listeners
//let keySpace;

let WorldIsMoving = false;
let BirdY = 0;

let _oMSPhaserLib;
let speechBubble;
let speechText;

let timerStep = -1;
let livesStep = 0;
let ScoreStep = 0;


let Button_Score;
let ScoreTX;
let Bird_Hit;


let cursors;
// Phaser config
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: "#eeeeee",
    parent: "sprite-container",
    canvasStyle: `width: 100%;
    object-fit: revert;
    aspect-ratio: 738 / 436;`,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 1300 * 2 },
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};


// Initialize Phaser with config
let game = new Phaser.Game(config);
let _gameThis = null

// Phaser preload function
export function preload() {
    // console.log('preload')
    _gameThis = this;
    _gameThis.load.setBaseURL(baseURL);
    // Initialize MS phaser library - param -> phaser object, development-mode, depth-manager-start-index
    _oMSPhaserLib = new MSPhaserLib(this, true, 100);
    //  console.log('_oMSPhaserLib',_oMSPhaserLib)
    loadImages();
}

// Phaser create function
export function create() {

    let images = GAME_CONSTANT.images;
    let spritesImages = GAME_CONSTANT.spritesImages;
    for (const key in images) {
        if (Object.hasOwnProperty.call(images, key)) {
            const element = images[key];
            console.log('okok element', element)
            _gameThis[element] = _gameThis.add.image(gameWidth / 2, gameHeight / 2, element);

            if (element == "../../flappyAssets/images/speechBubble") {
                speechBubble = _gameThis[element];
                speechText = _gameThis.add.text(gameWidth / 2, gameHeight / 2, "You Win!", { font: "bold 48px Arial", fill: "#000000" });
                speechText.setOrigin(0.5, 0.5);
            }

            if (element == "../../flappyAssets/images/Button_Timer_Km") {
                TopMenu = _gameThis[element];
            }
            if (element == "../../flappyAssets/images/Lives") {
                TopMenuLives = _gameThis[element];
                TopMenuLives.setPosition(gameWidth * 0.88, TopMenuLives.displayHeight * 0.6);
                LivesTXT = _gameThis.add.text(TopMenuLives.x + TopMenuLives.displayWidth * 0.26, TopMenuLives.y, lives, {
                    font: 'bold 38pt arial',
                    color: '#ffffff',
                }).setOrigin(0.5, 0.5);

            }

            if (element == "../../flappyAssets/Background/BG2") {
                _gameThis[element].setPosition(gameWidth + _gameThis[element].displayWidth * 0.5, gameHeight / 2);
            }
            if (element == "../../flappyAssets/Stick/ss") {
                //use 5 sticks
                AllStciks = [
                    _gameThis[element],
                    _gameThis.add.image(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.image(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.image(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.image(gameWidth / 2, gameHeight / 2, element)
                ]
            }
            if (element == '../../flappyAssets/Button_Score') {
                //top right score
                Button_Score = _gameThis[element];
                Button_Score.setPosition(gameWidth * 0.72, Button_Score.displayHeight * 0.6);
                ScoreTX = _gameThis.add.text(Button_Score.x + Button_Score.displayWidth * 0.26, Button_Score.y, "0", {
                    font: 'bold 38pt arial',
                    color: '#ffffff',
                }).setOrigin(0.5, 0.5);
            }
            if (element == '../../flappyAssests/SpriteSheet/Bird_Hit') {
                Bird_Hit = _gameThis[element];
                Bird_Hit.setScale(0.75);
                Bird_Hit.setAlpha(0);
            }
        }
    }

    BG1 = _gameThis['../../flappyAssests/Background/BG1'];
    BG2 = _gameThis['../../flappyAssests/Background/BG2'];


    for (const key in spritesImages) {
        if (Object.hasOwnProperty.call(spritesImages, key)) {
            const element = spritesImages[key];
            const elementValue = magicElement[element];
            if (element == 'bird') {
                _gameThis[element] = _gameThis.physics.add.sprite(elementValue.x, elementValue.y, element);
                _gameThis[element].body.allowGravity = false;

            } else if (element == "Coins") {
                //use 5 sticks
                AllCoins = [
                    _gameThis.add.sprite(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.sprite(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.sprite(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.sprite(gameWidth / 2, gameHeight / 2, element),
                    _gameThis.add.sprite(gameWidth / 2, gameHeight / 2, element)
                ]
            }
        }
    }
    ArrangeStick();
    ArrangeCoins();
    init();

    ErrorText = _gameThis.add.text(0, 0, "Error...", { font: "bold 36px Arial", fill: "#ff0000" });
    ErrorText.setPosition(10, ErrorText.displayHeight * 0.75)
    ErrorText.setOrigin(0, 0.5);
    ErrorText.setAlpha(0);

    speechBubble.setDepth(3);
    speechText.setDepth(3);
    //listen to wrong key board key
    WrongkeyAlert();

    TimerText = _gameThis.add.text(TopMenu.x - TopMenu.displayWidth * 0.2, TopMenu.y - TopMenu.displayHeight * 0.17, "00   00", { font: "bold 42px Arial", fill: "#ffffff" });
    KMText = _gameThis.add.text(TopMenu.x + TopMenu.displayWidth * 0.09, TopMenu.y - TopMenu.displayHeight * 0.26, "00", { font: "bold 52px Arial", fill: "#ffffff" });

    TimerText.setDepth(3);
    TimerText.setVisible(false);
    KMText.setDepth(3);
}



export function ShowError() {
    ErrorText.setAlpha(1);
    ErrorText.setText(ErrorInnerText); //use error text
    //hide after 3 seconds
    _gameThis.tweens.add({
        targets: ErrorText,
        alpha: 0,
        duration: 500,
        delay: 2500
    });
}



export function Start_Game() {

    if (!WorldIsMoving) {
        console.log('------------------->Start_Game');

        WorldIsMoving = true; //if true the update function will move the entire world ( background+obstacles+coins...)
        // _gameThis['bird'].body.allowGravity = true;
        if (T1 == null) {
            T1 = _gameThis.time.addEvent({ delay: 1000, callback: CountDownTime, callbackScope: _gameThis, loop: true });
        }
        reducetime();
    }
}



export function WrongkeyAlert() {
    //listen to wrong keyboard key , only space key is allowed
    //spacekey code  = 32
    _gameThis.input.keyboard.on('keyup', function(event) {

        if (event.keyCode != 32 && WorldIsMoving) {
            //set the value of the ErrorInnerText and show the error
            ErrorInnerText = ' You have selected the\n wrong key for flapping '
            ShowError();
        }
    });
}

export function CountDownTime() {
    //will run automatically when user give a value to timer_increment diffrent from 0
    if (timer_increment != 0 && timer > 0) {
        timer = timer += timer_increment;
        // console.log(timer)
    }
}

export function MoveWorld() {

    //move background
    BG1.x -= speed;
    BG2.x -= speed;
    if (BG1.x <= -BG1.displayWidth / 2) {
        BG1.setPosition(BG2.x + BG2.displayWidth * 0.497 + BG1.displayWidth * 0.5, gameHeight / 2);
        TotalKm++;
    }
    if (BG2.x <= -BG2.displayWidth / 2) {
        BG2.setPosition(BG1.x + BG1.displayWidth * 0.5 + BG2.displayWidth * 0.5, gameHeight / 2);
        TotalKm++;
    }
    //move obstacles
    for (let i = 0; i < AllStciks.length; i++) {
        AllStciks[i].x -= speed;
        if (AllStciks[i].x < -AllStciks[i].displayWidth * 0.5) {
            if (!lastStick) {
                AllStciks[i].x = AllStciks[AllStciks.length - 1].x + gameWidth / DistX;
                lastStick = AllStciks[i];
            } else {
                AllStciks[i].x = lastStick.x + gameWidth / DistX;
                lastStick = AllStciks[i];
            }
            if (Math.random() * 10 < 5) {
                AllStciks[i].flipY = false;
                AllStciks[i].setY(gameHeight - (AllStciks[i].displayHeight * 0.5) + (Math.random() * AllStciks[i].displayHeight * 0.5));
            } else {
                AllStciks[i].setY((AllStciks[i].displayHeight * 0.5) - (Math.random() * AllStciks[i].displayHeight * 0.5));
                AllStciks[i].flipY = true;
            }
        }
    }
    //Move Coins
    for (c = 0; c < AllStciks.length; c++) {
        AllCoins[c].x -= speed;
        if (AllCoins[c].x < -AllCoins[c].displayWidth * 0.5) {
            if (!lastCoin) {
                AllCoins[c].x = AllCoins[AllCoins.length - 1].x + gameWidth / DistX;
                AllCoins[c].setVisible(true);
                lastCoin = AllCoins[c];
            } else {
                AllCoins[c].x = lastCoin.x + gameWidth / DistX;
                AllCoins[c].setVisible(true);
                lastCoin = AllCoins[c];
            }

        }
    }
}

export function ArrangeStick() {
    for (let i = 0; i < AllStciks.length; i++) {
        AllStciks[i].setX(gameWidth + (i * gameWidth / DistX)); //
        AllStciks[i].setY((AllStciks[i].displayHeight * 0.5) - (Math.random() * AllStciks[i].displayHeight * 0.5));
        AllStciks[i].flipY = true;
        if (Math.random() * 10 < 5) {
            // console.log('flip now');
            AllStciks[i].flipY = false;
            AllStciks[i].setY(gameHeight - (AllStciks[i].displayHeight * 0.5) + (Math.random() * AllStciks[i].displayHeight * 0.5));
        }
    }
}

export function ArrangeCoins() {
    let spritesImages = GAME_CONSTANT.spritesImages;
    let coinValue = magicElement.Coins;
    for (let i = 0; i < AllCoins.length; i++) {
        AllCoins[i].setX(gameWidth + (gameWidth * 0.5 / DistX) + (i * gameWidth / DistX)); //
        AllCoins[i].setY((gameHeight * 0.2) + (Math.random() * gameHeight * 0.6));
        let coin = AllCoins[i]
        _oMSPhaserLib.spriteAnimation(coin, spritesImages.Coins, coinValue.frameFrom, coinValue.frameTo, coinValue.frameRate, -1);
    }


}

export function flap_wing() {
    if (WorldIsMoving) {
        if (isflying) { return; }
        console.log('Fly');
        isflying = true;
        FlaptheWing();
        _gameThis['bird'].body.allowGravity = false;
        _gameThis['bird'].setVelocityY(-300 * 4);
        // _gameThis['bird'].setAccelerationY(-98 * 7);
        // _gameThis['bird'].setVelocityY(-300 * 2);
        _gameThis.time.addEvent({
            delay: 300,
            callback: () => {

                _gameThis['bird'].setVelocityY(0);
                // gravity_effect();
                // _gameThis['bird'].body.allowGravity = true;
            },
            callbackScope: _gameThis,
            loop: false
        });

    }
}
'<xml xmlns="https://developers.google.com/blockly/xml"><block type="single_action_block" id="hZZqIXSHFJ4b)g9H^)qS" x="37" y="112"><next><block type="forever_repeat_block" id="@g9]VX?h$HjX!0mgWan`"><statement name="NAME"><block type="controls_if" id=".b(DKfit9^o.ej43unXf"><mutation else="1"></mutation><value name="IF0"><block type="key_sensing" id="%0v`_boFmLY2a=qjB]UD"><field name="NAME">option5</field></block></value><statement name="DO0"><block type="fly" id="7:LslEWB%(*4Wo6S~^7}"></block></statement><statement name="ELSE"><block type="gravity" id="LD|;^2i+lXgL=Ny+n=tU"></block></statement></block></statement></block></next></block></xml>'

export function gravity_effect() {
    if (WorldIsMoving) {
        _gameThis['bird'].setVelocityY(200);
        _gameThis['bird'].body.setGravity(0, 9000);
        _gameThis['bird'].body.allowGravity = true;
        // console.log("gravity effect")

        // if (_gameThis['bird'].body.allowGravity)
        // _gameThis['bird'].setVelocityY(400);
        // _gameThis['bird'].setAccelerationY(98 * 25);
    }
}

export function is_space_pressed() {
    if (!cursors.space.isDown) { isflying = false; }
    if (!screentouched) { isflying = false; }
    // console.log("space_key", cursors.space.isDown)
    let B = false;
    if (cursors.space.isDown) { B = true; }
    if (screentouched) { B = true; }
    return B;
}

export function is_bird_touching_obstacle() {

    let touched = false;
    if (_gameThis['bird'].alpha < 1) { return touched; }


    for (let i = 0; i < AllStciks.length; i++) {
        if (
            Math.abs(AllStciks[i].x - _gameThis.bird.x) < (AllStciks[i].displayWidth * 0.5 + _gameThis.bird.displayWidth * 0.5) * 0.9 &&
            Math.abs(AllStciks[i].y - _gameThis.bird.y) < Math.abs(AllStciks[i].displayHeight * 0.5 + _gameThis.bird.displayHeight * 0.5) * 0.9
        ) {
            touched = true;

            _gameThis['bird'].setAlpha(0.9);

            Bird_Hit.setPosition(_gameThis['bird'].x, _gameThis['bird'].y);
            _gameThis.tweens.add({
                targets: Bird_Hit,
                scaleX: 1,
                alpha: 1,
                ease: "Linear",
                duration: 200,
                repeat: 1,
                yoyo: true,
                onComplete: () => { Bird_Hit.setAlpha(0) }
            });

            _gameThis.tweens.add({
                targets: _gameThis['bird'],
                alpha: 1,
                ease: "Linear",
                duration: 1000,
            });

            break;
        }
    }
    return touched;
}

export function is_bird_touching_ground() {

    let touched = false;
    if (_gameThis['bird'].alpha < 1) { return touched; }

    if (_gameThis.bird.y > gameHeight - _gameThis.bird.displayHeight * 0.5) {
        touched = true;

        _gameThis['bird'].setAlpha(0.9);
        Bird_Hit.setPosition(_gameThis['bird'].x, _gameThis['bird'].y);
        _gameThis.tweens.add({
            targets: Bird_Hit,
            scaleX: 1,
            alpha: 1,
            ease: "Linear",
            duration: 200,
            repeat: 1,
            yoyo: true,
            onComplete: () => { Bird_Hit.setAlpha(0) }
        });

        _gameThis.tweens.add({
            targets: _gameThis['bird'],
            alpha: 1,
            ease: "Linear",
            delay: 2000,
            duration: 1000,
        });
    }

    return touched;
}

export function is_bird_touching_coin() {
    let touched = false;
    for (let i = 0; i < AllCoins.length; i++) {
        if (
            Math.abs(AllCoins[i].x - _gameThis.bird.x) < (AllCoins[i].displayWidth * 0.5 + _gameThis.bird.displayWidth * 0.5) * 0.9 &&
            Math.abs(AllCoins[i].y - _gameThis.bird.y) < Math.abs(AllCoins[i].displayHeight * 0.5 + _gameThis.bird.displayHeight * 0.5) * 0.9
        ) {
            // console.log('collide with coins');
            if (AllCoins[i].visible) {
                AllCoins[i].visible = false;
                touched = true;
            }
        }
    }
    return touched;
}

export function createDialogue(dialogue) {
    let delayTime = 1000;
    delayTime = delayTime < 3000 ? 3000 : delayTime;
    speechText.text = dialogue;
    speechBubble.alpha = 1;
    _oMSPhaserLib.fadeIn(speechBubble);
    _oMSPhaserLib.fadeIn(speechText);
    setTimeout(() => {
        _oMSPhaserLib.fadeOut(speechBubble);
        _oMSPhaserLib.fadeOut(speechText);
    }, delayTime);
}

export function game_win() {
    if (SpeechInnerText.length > 0) { speechText.setText(SpeechInnerText); }
    speechBubble.alpha = speechText.alpha = 1;
    _gameThis['bird'].setVelocityY(0);
    _gameThis['bird'].body.allowGravity = false;
    WorldIsMoving = false;
}

export function game_over() {
    createDialogue("Game Over");
    WorldIsMoving = false;
    gravity_effect();
    console.log("game is over")
}
// Phaser update function
// function update() {

//     if (WorldIsMoving) {
//         KMText.setText(TotalKm.toString());
//         TimerText.setText(FormatTime(timer * 1000));
//         ScoreTX.setText(score);
//         MoveWorld();


//         if (is_space_pressed()) {
//             flap_wing();
//         } else {
//             gravity_effect();
//         }

//     }


//     if (is_bird_touching_ground() || is_bird_touching_obstacle()) {
//         lives -= 1;
//         LivesTXT.setText(lives);
//     }

//     if (lives == 0) {
//         game_over();
//     }

//     if (is_bird_touching_coin()) {
//         score += 1;
//         console.log('score', score)
//     }
//     if (score >= 5) {
//         game_win();
//     }

// }
// }

export function update() {}

// Start_Game();
// function update() {
//     if (WorldIsMoving) {
//         KMText.setText(TotalKm.toString());
//         TimerText.setText(FormatTime(timer * 1000));
//         ScoreTX.setText(score);
//         MoveWorld();

//         if (is_space_pressed()) {
//             flap_wing();
//         }

//     }
// }

// Load images
export function loadImages() {
    let images = GAME_CONSTANT.images;
    let spritesImages = GAME_CONSTANT.spritesImages;

    for (const key in images) {
        if (Object.hasOwnProperty.call(images, key)) {
            const element = images[key];
            _gameThis.load.image(element, element + ".png");
        }
    }

    for (const key in spritesImages) {
        if (Object.hasOwnProperty.call(spritesImages, key)) {
            const element = spritesImages[key];
            const elementValue = magicElement[element];
            _gameThis.load.spritesheet(element, "SpriteSheet/" + element + ".png", { frameWidth: elementValue.frameWidth, frameHeight: elementValue.frameHeight });
        }
    }
}

// Initialize animation functions
export function init() {
    // console.log('init')
    speechBubble.setScale(0.5);
    speechBubble.setPosition(gameWidth - speechBubble.displayWidth * 0.6, speechBubble.displayHeight);
    speechText.setPosition(speechBubble.x, speechBubble.y - speechBubble.displayHeight * 0.15)

    speechBubble.setAlpha(0);
    speechText.setAlpha(0);

    _gameThis.bird.scale = 0.25;

    TopMenu.setPosition(gameWidth / 2, TopMenu.displayHeight * 0.6);
    TopMenu.setDepth(3);




    cursors = _gameThis.input.keyboard.createCursorKeys();
    _gameThis.input.on('pointerdown', () => {

        screentouched = true;
        console.log("clicked screen - DOWN", screentouched)
    })
    _gameThis.input.on('pointerup', () => {
        screentouched = false;
        console.log("clicked screen - UP", screentouched)
    })
}


export function FlaptheWing() {
    //play bird animation
    let spritesImages = GAME_CONSTANT.spritesImages;
    let bird = _gameThis[spritesImages.bird];
    let birdValue = magicElement.bird;
    _oMSPhaserLib.spriteAnimation(bird, spritesImages.bird, birdValue.frameFrom, birdValue.frameTo, birdValue.frameRate, 1);

}


export function reducetime(Value) { //value is an option
    if (Value) { timerStep = Value }
    timer += timerStep;
    if (timer > 0) { _gameThis.time.addEvent({ delay: 1000, callback: reducetime, callbackScope: _gameThis, loop: false }) };
    // console.log('--> timer', timer);
}





// Re-initialize the game variables
export function reInitValues() {
    // timer = 30;
    // score = 0;
    // lives = 3;





    // if_sec = '';
    // else_sec = '';
    // reduce_lives = false;
    // lives_increment = 0;
    // score_increment = 0;
    // dummy_increment = 0;
    // dummy = 0;
    // win_score = 1000;
    // lose_life = -1000;



    // WorldIsMoving = false;
    // BirdY = 0;

    // timerStep = -1;
    // livesStep = 0;
    // ScoreStep = 0;

}

// Reset the game
export function reset_output() {
    console.log('reset_output')
    timer_increment = 0;
    WorldIsMoving = false;
    TotalKm = 0;
    //stop timer
    if (T1) {
        T1.remove(CountDownTime)
        T1 = null;
    }

    reInitValues();
    _gameThis.scene.restart();
}


export function FormatTime(n, countdownfrom) {
    if (countdownfrom) {
        n = countdownfrom - n;
    }
    var m = Math.floor(n / 60000);
    var s = Math.floor((n / 1000) - (m * 60));
    var ms = n - (s * 1000) - (m * 60000);
    var M = m.toString();
    if (M.length == 1) {
        M = '0' + M;
    }
    var S = s.toString();
    if (S.length == 1) {
        S = '0' + S;
    }
    var MS = Math.floor(ms / 10).toString();
    if (MS.length == 1) {
        MS = '0' + MS;
    }
    var RS = S + '   ' + MS; //M + ':' + S + ':' + MS;
    return RS;
}