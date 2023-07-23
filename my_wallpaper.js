//your parameter variables go here!
let lapis = "#2A5C86";
let burntUmber = "#88362B";
let olive = "#88742B";
let garnet = "#742E25";
let gunmetal = "#32373E";
let richblack = "#171E27";
let pukekoposx = 100;
let pukekoposy = 100;
let wingTopHeight = 95;
let pukekoThickness = 60;
let pukekoHeight = pukekoThickness - 15;

//head parameters
let headposx = 146
let headposy = 106
let headHeight = 10
let headWidth = headHeight + 2.5

//pukeko beak parameters

let beakroundness = 1;
let beakstartx = headposx + 4;
let beakstarty = headposy - 1;
let beaktipx = 155;
let beaktipy = 120;
let beakendx = 145;
let beakendy = 113;
let beaktoproundx = (beakstartx + beaktipx) / 2 + beakroundness;
let beaktoproundy = (beakstarty + beaktipy) / 2;
let beakbackroundx = (beakstartx + beakendx) / 2;
let beakbackroundy = (beakstarty + beakendy) / 2 - beakroundness;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  //body
  stroke(gunmetal)
  strokeWeight(3)
  fill(gunmetal)
  ellipse(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight);
  
  stroke(lapis)
  fill(lapis)
  arc(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight, 340, 160);
  //neck and head
  stroke(lapis);
  fill(lapis);
  rect(120, 100, 25, 11);
  ellipse(120, 110, 30, 15);

  //head
  ellipse(145, 106, headHeight, headWidth);


  //beak
  stroke(burntUmber);
  fill(burntUmber);

  beginShape();
  vertex(beakstartx, beakstarty);
  vertex(beaktoproundx, beaktoproundy);
  vertex(beaktipx, beaktipy);
  vertex(beakendx, beakendy);
  vertex(beakbackroundx, beakbackroundy);
  endShape(CLOSE);


  line(148, 100.5, 150, 105)


  //wings

  stroke(richblack);
  fill(richblack);
  beginShape();
  vertex(125, 90);
  vertex(100, 80); //unfin
  vertex(100, 120);
  endShape(CLOSE);



  stroke(richblack);
  fill(richblack);
  beginShape();
  vertex(95, wingTopHeight);
  vertex(60, 120);
  vertex(105, 110);
  endShape(CLOSE);

  stroke(richblack);
  fill(richblack);
  beginShape();
  vertex(95, wingTopHeight);
  vertex(60, 110);
  vertex(105, 110);
  endShape(CLOSE);


}