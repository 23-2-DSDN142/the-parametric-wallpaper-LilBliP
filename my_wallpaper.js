//your parameter variables go here!
let lapis = "#2A5C86";
let burntUmber = "#88362B";
let olive = "#88742B";
let garnet = "#742E25";
let platinum = "#DFE0E0"
let charcoal = "#3C434C"
let gunmetal = "#272C36";
let richblack = "#171E27";
let safetyorange = "#EE7F30";

//body parameters
let pukekoposx = 100;
let pukekoposy = 100;
let pukekoThickness = 60;
let pukekoHeight = pukekoThickness - 15;
let wingTopHeight = pukekoposy - (pukekoHeight / 2);

//head parameters
let headposx = 145;
let headposy = 106;
let headWidth = 10;
let headHeight = headWidth + 2.5;

//neck parameters
let neckstartx = pukekoposx + (pukekoThickness / 2);
let neckstarty = pukekoposy;
let necklength = headposx - (pukekoposx + (pukekoThickness / 2));
let neckthickness = 10;
let lowernecklength = necklength * 1.8;
let lowerneckthickness = lowernecklength / 2;

//pukeko beak parameters

let beakroundness = .5; //should be <1 for best results
let beakstartx = headposx + headWidth / 2;
let beakstarty = headposy + headHeight / 6;
let beaktipx = headposx + 8;
let beaktipy = headposy + 12;
let beakendx = headposx;
let beakendy = headposy + headHeight / 2;
let beaktoproundx = (beakstartx + beaktipx) / 2 + beakroundness;
let beaktoproundy = (beakstarty + beaktipy) / 2;
let beakbackroundx = (beakstartx + beakendx) / 2;
let beakbackroundy = (beakstarty + beakendy) / 2 - beakroundness;
//pond
let Pondx = 100
let Pondy = 140


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 100;
}

function wallpaper_background() {
  background(50, 100, 50); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //pond make look like in pond
  fill(lapis)
  stroke(lapis)
  strokeWeight(0)
  arc(Pondx, Pondy, 120, 30, 180, 360)

  //legs
  stroke(safetyorange);
  strokeWeight(4);
  line(100, 120, 98, 130); //front
  line(95, 110, 80, 120); //back


  strokeWeight(3.5);
  line(98, 130, 105, 145); //front
  line(80, 120, 78, 140); //back


  //pond
  fill(lapis)
  stroke(lapis)
  strokeWeight(0)
  arc(Pondx, Pondy, 120, 40, 0, 180)

  //neck
  stroke(richblack);
  strokeWeight(3);
  fill(richblack);
  rect(neckstartx, neckstarty, necklength, neckthickness);
  stroke(lapis)
  fill(lapis)
  ellipse(neckstartx - (necklength / 2), neckstarty + (neckthickness), lowernecklength, lowerneckthickness);



  //head
  stroke(richblack)
  fill(richblack)
  ellipse(headposx, headposy, headWidth, headHeight);


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

  strokeWeight(2)
  line(headposx + headWidth / 2.5, headposy-headHeight/2, beakstartx+1, beakstarty)

  //eye
  strokeWeight(1.5);
  ellipse(headposx + headWidth / 6, headposy - headHeight / 4, .5, .75);
  fill(richblack);
  noStroke();
  ellipse(headposx + headWidth / 6, headposy - headHeight / 4, 1, 1);

  //opposite side body wing
  fill(richblack);
  stroke(richblack);
  strokeWeight(0)
  arc(pukekoposx - 5, pukekoposy + 1, pukekoThickness + pukekoThickness / 6 + 10, 8, 130, 300)
  //body
  noStroke()
  fill(gunmetal)
  ellipse(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight); //body base

  noStroke()
  fill(lapis)
  arc(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight, 340, 140); //lapis overbody

  fill(gunmetal)
  arc(pukekoposx + (pukekoThickness / 3), pukekoposy, pukekoThickness - (2 / 3 * pukekoThickness), pukekoHeight - 18, 260, 325); //dark triangle






  //white tail feather
  stroke(platinum)
  fill(platinum)
  beginShape();
  vertex(pukekoposx, pukekoposy-pukekoposy*.1);
  vertex(pukekoposx-(2/3*pukekoThickness), pukekoposy-pukekoposy*.1);
  vertex(pukekoposx-pukekoThickness/2, pukekoposy+pukekoposy*.05);
  endShape(CLOSE);


//toptailfeather
  stroke(charcoal);
  fill(charcoal);
  beginShape();
  vertex(pukekoposx, pukekoposy-pukekoHeight*.2);
  vertex(pukekoposx-pukekoThickness/6, pukekoposy-pukekoHeight/2.1);
  vertex(pukekoposx-pukekoThickness+pukekoThickness/6, pukekoposy-pukekoHeight*.2);
  endShape(CLOSE);

  //make back dark
  fill(gunmetal);
  strokeWeight(1)
  stroke(gunmetal)
  arc(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight - 2, 170, 300)
  //lower back
  arc(pukekoposx - 10, pukekoposy + 5, pukekoThickness/2, pukekoThickness/2, 90, 180)
  //lowertail feather
  fill(richblack);
  stroke(richblack);
  strokeWeight(0)
  arc(pukekoposx - 10, pukekoposy + 5, pukekoThickness + pukekoThickness/6, 8, 130, 300)

}