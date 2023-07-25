function preload() {
    mario_gameover = loadSound("gameover.wav");
    mario.jumpp = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
    mario_kick = loadSound("kick.wv");
    mario_die = loadSound("mariodie.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');

    initializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(800,400);
    video.pareent('game_console');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function modelLoaded() {
    console.log('Modelo Carregado!');
}

function gotPoses(resuts)
{
    if(SpeechRecognitionResultList.legth > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    game();
}