var c = 1;
var b1 = [20, -18, -10]; //wing speed, x pos, y pos
var b1c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  //0-2 head rgb, 3-5 body rgb, 6-8 beak rgb, 9-11 tail rgb, 12-14 wing rgb, 15-17 wing tip rgb
var b2 = [20, -18, -10];
var b2cr = 1;
var b2c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cloud1 = [0, .009];
var cloud2 = [0, .006];
var cloud3 = [0, .002];
var cloud4 = [0, .0015];

var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  
  gui = new Gui();
  
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'bird_color', 1, 3).step(1);
  gui_setup.add(gui, 'speed', 1, 50);
  gui_setup.add(gui, 'x', 0, windowWidth-132);
  gui_setup.add(gui, 'y', 0, windowHeight-180);
  gui_setup.add(gui, 'bird_friend');
  
  b2[1] = random(0,4)*windowWidth/5 + b1[1];
  b2[2] = random(0,4)*windowHeight/5 + b1[2];
  b2cr = random(1,4);
  birdFriendColor();
  cloud1[0] = random (-.5*windowWidth, 1.5*windowWidth);
  cloud2[0] = random (-.8*windowWidth, 1.6*windowWidth);
  cloud3[0] = random (-.7*windowWidth, 1.35*windowWidth);
  cloud4[0] = random (-.6*windowWidth, 1.3*windowWidth);
  
  
}

function draw() {
  
  birdColor();
  
  frameRate(gui.speed);
  background(197, 221, 230);
  
  backClouds();
  birdOne();
  birdFriends();
  frontClouds();
  
  c++;
}

function frontClouds(){
  
  if (cloud1[0] >= 1.5*windowWidth){
    cloud1[0] = -.5*windowWidth;
  }
  if (cloud2[0] >= 1.8*windowWidth){
    cloud2[0] = -.8*windowWidth;
  }
  noStroke();
  fill(255,255,255,150);
  
  ellipse(cloud1[0], windowHeight/10, windowWidth, windowHeight/10);
  ellipse(cloud2[0],8*windowHeight/10, 1.6*windowWidth, 2*windowHeight/10);
  
  cloud1[0] += windowWidth*cloud1[1];
  cloud2[0] += windowWidth*cloud2[1];

}

function backClouds(){
  
  if (cloud3[0] >= 1.35*windowWidth){
    cloud3[0] = -.35*windowWidth;
  }
  if (cloud4[0] >= 1.3*windowWidth){
    cloud4[0] = -.3*windowWidth;
  }
  noStroke();
  fill(255,255,255,100);
  
  ellipse(cloud3[0], (3*windowHeight)/10, .7*windowWidth, windowHeight/20);
  ellipse(cloud4[0],7*windowHeight/10, .6*windowWidth, 1.3*windowHeight/20);
  
  cloud3[0] += windowWidth*cloud3[1];
  cloud4[0] += windowWidth*cloud4[1];

}

function birdColor(){
  
  if (gui.bird_color == 1){  // dove color
    
    b1c[0] = 250;  // head rgb
    b1c[1] = 250;
    b1c[2] = 250;
    
    b1c[3] = 250;  // body rgb
    b1c[4] = 250;
    b1c[5] = 250;
    
    b1c[6] = 215;  // beak rgb
    b1c[7] = 189;
    b1c[8] = 212;
    
    b1c[9] = 230;  // tail rgb
    b1c[10] = 230;
    b1c[11] = 230;
    
    b1c[12] = 230;  // wing rgb
    b1c[13] = 230;
    b1c[14] = 230;
    
    b1c[15] = 240;  // wing tip rgb
    b1c[16] = 240;
    b1c[17] = 240;
  }
  
  if (gui.bird_color == 2){  // blue jay color
    
    b1c[0] = 250;  // head rgb
    b1c[1] = 250;
    b1c[2] = 250;
    
    b1c[3] = 114;  // body rgb
    b1c[4] = 151;
    b1c[5] = 200;
    
    b1c[6] = 50;  // beak rgb
    b1c[7] = 50;
    b1c[8] = 50;
    
    b1c[9] = 101;  // tail rgb
    b1c[10] = 170;
    b1c[11] = 207;
    
    b1c[12] = 101;  // wing rgb
    b1c[13] = 170;
    b1c[14] = 207;
    
    b1c[15] = 126;  // wing tip rgb
    b1c[16] = 134;
    b1c[17] = 138;
  }
  
  if (gui.bird_color == 3){  // cardinal color
    
    b1c[0] = 50;  // head rgb
    b1c[1] = 50;
    b1c[2] = 50;
    
    b1c[3] = 217;  // body rgb
    b1c[4] = 87;
    b1c[5] = 47;
    
    b1c[6] = 189;  // beak rgb
    b1c[7] = 118;
    b1c[8] = 97;
    
    b1c[9] = 164;  // tail rgb
    b1c[10] = 100;
    b1c[11] = 80;
    
    b1c[12] = 164;  // wing rgb
    b1c[13] = 100;
    b1c[14] = 80;
    
    b1c[15] = 133;  // wing tip rgb
    b1c[16] = 104;
    b1c[17] = 95;
  }
}

function birdOne(){
  
  noStroke();
  
  if(c == 11){
    c = 1;
  }
  
  if(c == 1){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 60+b1[1]+gui.x, 50+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (62+b1[1]+gui.x, 28+b1[2]+gui.y, 80+b1[1]+gui.x, 75+b1[2]+gui.y, 60+b1[1]+gui.x, 50+b1[2]+gui.y);
  }
  
  if(c == 2){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 58+b1[1]+gui.x, 60+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (60+b1[1]+gui.x, 10+b1[2]+gui.y, 79+b1[1]+gui.x, 80+b1[2]+gui.y, 58+b1[1]+gui.x, 60+b1[2]+gui.y);
  }
  
  if(c == 3){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 53+b1[1]+gui.x, 80+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (55+b1[1]+gui.x, 28+b1[2]+gui.y, 76.5+b1[1]+gui.x, 90+b1[2]+gui.y, 53+b1[1]+gui.x, 80+b1[2]+gui.y);
  }
  
  if(c == 4){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 53+b1[1]+gui.x, 120+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (55+b1[1]+gui.x, 64+b1[2]+gui.y, 76.5+b1[1]+gui.x, 110+b1[2]+gui.y, 53+b1[1]+gui.x, 120+b1[2]+gui.y);
  }
  
  if(c == 5){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 58+b1[1]+gui.x, 140+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (60+b1[1]+gui.x, 136+b1[2]+gui.y, 79+b1[1]+gui.x, 120+b1[2]+gui.y, 58+b1[1]+gui.x, 140+b1[2]+gui.y);
  }
  
  if(c == 6){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 60+b1[1]+gui.x, 150+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (62+b1[1]+gui.x, 172+b1[2]+gui.y, 80+b1[1]+gui.x, 125+b1[2]+gui.y, 60+b1[1]+gui.x, 150+b1[2]+gui.y);
  }
  
  if(c == 7){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 62+b1[1]+gui.x, 140+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (64+b1[1]+gui.x, 190+b1[2]+gui.y, 81+b1[1]+gui.x, 120+b1[2]+gui.y, 62+b1[1]+gui.x, 140+b1[2]+gui.y);
  }
  
  if(c == 8){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 67+b1[1]+gui.x, 120+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (69+b1[1]+gui.x, 172+b1[2]+gui.y, 83.5+b1[1]+gui.x, 110+b1[2]+gui.y, 67+b1[1]+gui.x, 120+b1[2]+gui.y);
  }
  
  if(c == 9){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 67+b1[1]+gui.x, 80+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (69+b1[1]+gui.x, 136+b1[2]+gui.y, 83.5+b1[1]+gui.x, 90+b1[2]+gui.y, 67+b1[1]+gui.x, 80+b1[2]+gui.y);
  }
  
  if(c == 10){
    fill(b1c[0], b1c[1], b1c[2]);
    ellipse(40+b1[1]+gui.x, 100+b1[2]+gui.y, 25, 20);
    fill(b1c[3], b1c[4], b1c[5]);
    ellipse(80+b1[1]+gui.x, 105+b1[2]+gui.y, 60, 29);
    fill(b1c[6], b1c[7], b1c[8]);
    triangle (28+b1[1]+gui.x, 96+b1[2]+gui.y, 28+b1[1]+gui.x, 104+b1[2]+gui.y, 18+b1[1]+gui.x, 100+b1[2]+gui.y);
    fill(b1c[9], b1c[10], b1c[11]);
    triangle (150+b1[1]+gui.x, 96+b1[2]+gui.y, 130+b1[1]+gui.x, 110+b1[2]+gui.y, 95+b1[1]+gui.x, 93+b1[2]+gui.y);
    fill(b1c[12], b1c[13], b1c[14]);
    triangle (60+b1[1]+gui.x, 100+b1[2]+gui.y, 100+b1[1]+gui.x, 100+b1[2]+gui.y, 62+b1[1]+gui.x, 60+b1[2]+gui.y);
    fill(b1c[15], b1c[16], b1c[17]);
    triangle (64+b1[1]+gui.x, 64+b1[2]+gui.y, 81+b1[1]+gui.x, 80+b1[2]+gui.y, 62+b1[1]+gui.x, 60+b1[2]+gui.y);
  }
}

function update() {
  redraw();
}

function Gui(){
  this.bird_color = 1;
  this.speed = 20;
  this.x = (windowWidth/2)-66;
  this.y = (windowHeight/2)-90;
  this.bird_friend = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function birdFriendColor(){
  
  if (b2cr >= 1 && b2cr < 2){  // dove color
    
    b2c[0] = 250;  // head rgb
    b2c[1] = 250;
    b2c[2] = 250;
    
    b2c[3] = 250;  // body rgb
    b2c[4] = 250;
    b2c[5] = 250;
    
    b2c[6] = 215;  // beak rgb
    b2c[7] = 189;
    b2c[8] = 212;
    
    b2c[9] = 230;  // tail rgb
    b2c[10] = 230;
    b2c[11] = 230;
    
    b2c[12] = 230;  // wing rgb
    b2c[13] = 230;
    b2c[14] = 230;
    
    b2c[15] = 240;  // wing tip rgb
    b2c[16] = 240;
    b2c[17] = 240;
  }
  
  if (b2cr >= 2 && b2cr < 3){  // blue jay color
    
    b2c[0] = 250;  // head rgb
    b2c[1] = 250;
    b2c[2] = 250;
    
    b2c[3] = 114;  // body rgb
    b2c[4] = 151;
    b2c[5] = 200;
    
    b2c[6] = 50;  // beak rgb
    b2c[7] = 50;
    b2c[8] = 50;
    
    b2c[9] = 101;  // tail rgb
    b2c[10] = 170;
    b2c[11] = 207;
    
    b2c[12] = 101;  // wing rgb
    b2c[13] = 170;
    b2c[14] = 207;
    
    b2c[15] = 126;  // wing tip rgb
    b2c[16] = 134;
    b2c[17] = 138;
  }
  
  if (b2cr >= 3 && b2cr <= 4){  // cardinal color
    
    b2c[0] = 50;  // head rgb
    b2c[1] = 50;
    b2c[2] = 50;
    
    b2c[3] = 217;  // body rgb
    b2c[4] = 87;
    b2c[5] = 47;
    
    b2c[6] = 189;  // beak rgb
    b2c[7] = 118;
    b2c[8] = 97;
    
    b2c[9] = 164;  // tail rgb
    b2c[10] = 100;
    b2c[11] = 80;
    
    b2c[12] = 164;  // wing rgb
    b2c[13] = 100;
    b2c[14] = 80;
    
    b2c[15] = 133;  // wing tip rgb
    b2c[16] = 104;
    b2c[17] = 95;
  }
}

function birdFriends() {
  
  if(gui.bird_friend == true){
    if(c == 4){
      fill(b2c[0], b2c[1], b2c[2]);
      ellipse(40+b2[1], 100+b2[2], 25, 20);
      fill(b2c[3], b2c[4], b2c[5]);
      ellipse(80+b2[1], 105+b2[2], 60, 29);
      fill(b2c[6], b2c[7], b2c[8]);
      triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
      fill(b2c[9], b2c[10], b2c[11]);
      triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
      fill(b2c[12], b2c[13], b2c[14]);
      triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 60+b2[1], 50+b2[2]);
      fill(b2c[15], b2c[16], b2c[17]);
      triangle (62+b2[1], 28+b2[2], 80+b2[1], 75+b2[2], 60+b2[1], 50+b2[2]);
  }
  
  if(c == 5){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 58+b2[1], 60+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (60+b2[1], 10+b2[2], 79+b2[1], 80+b2[2], 58+b2[1], 60+b2[2]);
  }
  
  if(c == 6){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 53+b2[1], 80+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (55+b2[1], 28+b2[2], 76.5+b2[1], 90+b2[2], 53+b2[1], 80+b2[2]);
  }
  
  if(c == 7){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 53+b2[1], 120+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (55+b2[1], 64+b2[2], 76.5+b2[1], 110+b2[2], 53+b2[1], 120+b2[2]);
  }
  
  if(c == 8){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 58+b2[1], 140+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (60+b2[1], 136+b2[2], 79+b2[1], 120+b2[2], 58+b2[1], 140+b2[2]);
  }
  
  if(c == 9){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 60+b2[1], 150+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (62+b2[1], 172+b2[2], 80+b2[1], 125+b2[2], 60+b2[1], 150+b2[2]);
  }
  
  if(c == 10){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 62+b2[1], 140+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (64+b2[1], 190+b2[2], 81+b2[1], 120+b2[2], 62+b2[1], 140+b2[2]);
  }
  
  if(c ==1){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 67+b2[1], 120+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (69+b2[1], 172+b2[2], 83.5+b2[1], 110+b2[2], 67+b2[1], 120+b2[2]);
  }
  
  if(c == 2){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 67+b2[1], 80+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (69+b2[1], 136+b2[2], 83.5+b2[1], 90+b2[2], 67+b2[1], 80+b2[2]);
  }
  
  if(c == 3){
    fill(b2c[0], b2c[1], b2c[2]);
    ellipse(40+b2[1], 100+b2[2], 25, 20);
    fill(b2c[3], b2c[4], b2c[5]);
    ellipse(80+b2[1], 105+b2[2], 60, 29);
    fill(b2c[6], b2c[7], b2c[8]);
    triangle (28+b2[1], 96+b2[2], 28+b2[1], 104+b2[2], 18+b2[1], 100+b2[2]);
    fill(b2c[9], b2c[10], b2c[11]);
    triangle (150+b2[1], 96+b2[2], 130+b2[1], 110+b2[2], 95+b2[1], 93+b2[2]);
    fill(b2c[12], b2c[13], b2c[14]);
    triangle (60+b2[1], 100+b2[2], 100+b2[1], 100+b2[2], 62+b2[1], 60+b2[2]);
    fill(b2c[15], b2c[16], b2c[17]);
    triangle (64+b2[1], 64+b2[2], 81+b2[1], 80+b2[2], 62+b2[1], 60+b2[2]);
  }
     }
  
}