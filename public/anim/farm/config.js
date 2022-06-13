/* Developed by Marvsoft LLP */

let _gameThis1 = "hello null";
const baseURL = '../img';
const gameWidth = 960;
const gameHeight = 540;
const gameScale = 0.5;

const animalInitPos = [
  { name: 'horse', stayAt: 11, x: 407, y: 180, frameWidth: 212, frameHeight: 279, scaleTo: 0.5 },
  { name: 'cow', stayAt: 0, x: 758, y: 444, frameWidth: 256, frameHeight: 256, scaleTo: 0.9 },
  { name: 'pig', stayAt: 12, x: 345, y: 375, frameWidth: 128, frameHeight: 128 },
  { name: 'pigEat', stayAt: 12, x: 180, y: 475, frameWidth: 128, frameHeight: 128, scaleTo: 1.4 }
];

const pigEatAnim = { name: 'pigEat', frameFrom: 12, frameTo: 15, frameRate: 3 };

const path = {
  horse_stable: [
    { x: 553, y: 180, frameFrom: 8, frameTo: 11, time: 2000, frameRate: 6, scaleTo: 0.5 },
    { x: 553, y: 290, frameFrom: 0, frameTo: 3, time: 2000, frameRate: 6, scaleTo: 0.6 },
    { x: 553, y: 290, frameFrom: 8, frameTo: 11, time: 1, frameRate: 6, scaleTo: 0.7 },
    { x: 734, y: 290, frameFrom: 8, frameTo: 11, time: 1500, frameRate: 6, scaleTo: 0.7 },
    { stayAt: 11 }
  ],
  horse_shed: [
    { x: 553, y: 180, frameFrom: 8, frameTo: 11, time: 2000, frameRate: 6, scaleTo: 0.5 },
    { x: 553, y: 280, frameFrom: 0, frameTo: 3, time: 2000, frameRate: 6, scaleTo: 0.6 },
    { x: 553, y: 280, frameFrom: 4, frameTo: 7, time: 1, frameRate: 6, scaleTo: 0.7 },
    { x: 283, y: 280, frameFrom: 4, frameTo: 7, time: 2500, frameRate: 6, scaleTo: 0.7 },
    { stayAt: 7 }
  ],
  horse_sty: [
    { x: 553, y: 180, frameFrom: 8, frameTo: 11, time: 2000, frameRate: 6, scaleTo: 0.5 },
    { x: 573, y: 440, frameFrom: 0, frameTo: 3, time: 5000, frameRate: 6, scaleTo: 0.7 },
    { x: 573, y: 440, frameFrom: 8, frameTo: 11, time: 1, frameRate: 6, scaleTo: 0.8 },
    { x: 363, y: 440, frameFrom: 4, frameTo: 7, time: 2000, frameRate: 6, scaleTo: 0.8 },
    { stayAt: 7 }
  ],

  cow_stable: [
    { x: 752, y: 321, frameFrom: 0, frameTo: 3, time: 4000, frameRate: 4, scaleTo: 0.80 },
    { stayAt: 1 }
  ],
  cow_shed: [
    { x: 761, y: 391, frameFrom: 0, frameTo: 3, time: 2000, frameRate: 5, scaleTo: 0.85 },
    { x: 566, y: 391, frameFrom: 4, frameTo: 7, time: 3000, frameRate: 5, scaleTo: 0.80 },
    { x: 566, y: 327, frameFrom: 0, frameTo: 3, time: 2500, frameRate: 5, scaleTo: 0.7 },
    { x: 283, y: 307, frameFrom: 4, frameTo: 7, time: 5000, frameRate: 5, scaleTo: 0.70 },
    { stayAt: 4 }
  ],
  cow_sty: [
    { x: 380, y: 460, frameFrom: 4, frameTo: 7, time: 8000, frameRate: 5, scaleTo: 0.9 },
    { stayAt: 7 }
  ],

  pig_stable: [
    { x: 758, y: 355, frameFrom: 12, frameTo: 15, time: 9000, frameRate: 6 },
    { stayAt: 15 }
  ],
  pig_shed: [
    { x: 345, y: 317, frameFrom: 0, frameTo: 3, time: 3000, frameRate: 6, scaleTo: 1.0 },
    { x: 283, y: 317, frameFrom: 4, frameTo: 7, time: 1800, frameRate: 6, scaleTo: .95 },
    { stayAt: 7 }
  ],
  pig_sty: [
    { x: 571, y: 368, frameFrom: 12, frameTo: 15, time: 4000, frameRate: 6, scaleTo: 1.0 },
    { x: 571, y: 476, frameFrom: 8, frameTo: 11, time: 4000, frameRate: 6, scaleTo: 1.25 },
    { x: 363, y: 476, frameFrom: 4, frameTo: 7, time: 3000, frameRate: 6, scaleTo: 1.4 },
    { stayAt: 7, scaleTo: 1.50 }
  ]
};

export { path, pigEatAnim, animalInitPos, baseURL, gameHeight, gameWidth, gameScale, _gameThis1 }