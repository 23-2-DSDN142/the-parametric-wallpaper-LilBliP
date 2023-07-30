//your parameter variables go here!
let lapis = "#2A5C86";
let burntUmber = "#88362B";
let olive = "#88742B";
let garnet = "#742E25";
let platinum = "#DFE0E0"
let davyGrey ="#4E555F"
let gunmetal = "#32373E";
let richblack = "#171E27";

//body parameters
let pukekoposx = 100;
let pukekoposy = 100;
let pukekoThickness = 60;
let pukekoHeight = pukekoThickness - 15;
let wingTopHeight = pukekoposy - (pukekoHeight/2);

//head parameters
let headposx = 145;
let headposy = 106;
let headWidth = 10;
let headHeight = headWidth + 2.5;

//neck parameters
let neckstartx = pukekoposx + (pukekoThickness/2);
let neckstarty = pukekoposy;
let necklength = headposx - (pukekoposx + (pukekoThickness/2));
let neckthickness = 10;
let lowernecklength = necklength *1.8;
let lowerneckthickness = lowernecklength/2;

//pukeko beak parameters

let beakroundness = .3; //should be <1 for best results
let beakstartx = headposx + 5;
let beakstarty = headposy + 1;
let beaktipx = headposx + 10;
let beaktipy = headposy + 14;
let beakendx = headposx;
let beakendy = headposy + headHeight/2;
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
  background(50, 100, 50); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


//neck
stroke(richblack);
strokeWeight(3);
fill(richblack);
rect(neckstartx, neckstarty, necklength, neckthickness);
stroke(lapis)
fill(lapis)
ellipse(neckstartx - (necklength/2), neckstarty + (neckthickness), lowernecklength, lowerneckthickness);



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
line(148.5, 100.5, 151, 107)


//opposite side body wing
fill(richblack);
stroke(richblack);
strokeWeight(0)
arc(95, 101, 80, 8, 130, 300)
  //body
  noStroke()
  fill(gunmetal)
  ellipse(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight);//body base
  
  noStroke()
  fill(lapis)
  arc(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight, 340, 140);//lapis overbody

  fill(gunmetal)
  arc(pukekoposx+(pukekoThickness/3), pukekoposy, pukekoThickness-(2/3*pukekoThickness), pukekoHeight-20, 260, 325);//dark triangle




  //wings
  

stroke(platinum)
fill(platinum)
 beginShape();
vertex(100, 90);
vertex(65, 90);
vertex(70, 105);
endShape(CLOSE);



  stroke(davyGrey);
  fill(davyGrey);
  beginShape();
  vertex(100, 90);
  vertex(90, 78.8);
  vertex(50, 90);
  endShape(CLOSE);

 
  fill(gunmetal);
strokeWeight(1)
stroke(gunmetal)
arc(100, 100, 60, 40, 170, 300)

fill(richblack);
stroke(richblack);
strokeWeight(0)
arc(90, 105, 70, 8, 130, 300)


}