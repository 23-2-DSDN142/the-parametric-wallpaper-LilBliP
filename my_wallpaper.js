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
let harvestGold = "#DB9304";
let hunterGreen = "#326432";
let fernGreen = "#3C823C"

let Night = false //true/false
let grass = true //true/false
let pukeko = false //true/false

//body parameters


let pukekoposx = 100;
let pukekoposy = 100;
let pukekoThickness = 60;
let pukekoHeight = pukekoThickness - 15;
let wingTopHeight = pukekoposy - (pukekoHeight / 2);

//head parameters
//editable
let headposx = 145;
let headposy = 106;
let headWidth = 10;
//noneditable
let headHeight = headWidth + 2.5;

//neck parameters
//noneditable
let neckstartx = pukekoposx + (pukekoThickness / 2);
let neckstarty = pukekoposy;
let necklength = headposx - (pukekoposx + (pukekoThickness / 2));
//editable
let neckthickness = 10;
//noneditable
let lowernecklength = necklength * 1.8;
let lowerneckthickness = lowernecklength / 2;

//pukeko beak parameters
//editable
let beakroundness = .5; //should be <1 for best results
let beakstartx = headposx + headWidth / 2;
let beakstarty = headposy + headHeight / 6;
let beaktipx = headposx + 8;
let beaktipy = headposy + 12;
//noneditable
let beakendx = headposx;
let beakendy = headposy + headHeight / 2;
let beaktoproundx = (beakstartx + beaktipx) / 2 + beakroundness;
let beaktoproundy = (beakstarty + beaktipy) / 2;
let beakbackroundx = (beakstartx + beakendx) / 2;
let beakbackroundy = (beakstarty + beakendy) / 2 - beakroundness;
//legs
//editable
let frontlegtopx = 100
let backlegtopx = 95
//noneditable
let frontlegtopy = pukekoposy + pukekoHeight / 2
let backlegtopy = pukekoposy + pukekoHeight / 3
//pond
//editable
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
  background(hunterGreen); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //pond make look like in pond
  fill(lapis)
  stroke(lapis)
  strokeWeight(0)
  arc(Pondx, Pondy, 120, 30, 180, 360)

if(pukeko == true)  {
  //legs
  stroke(safetyorange);
  strokeWeight(4);
  line(frontlegtopx, frontlegtopy, 98, 130); //front
  line(backlegtopx, backlegtopy, 80, 120); //back


  strokeWeight(3.5);
  line(98, 130, 105, 145); //front
  line(80, 120, 78, 140); //back
}

  //pond
  fill(lapis)
  stroke(lapis)
  strokeWeight(0)
  arc(Pondx, Pondy, 120, 40, 0, 180)

if(pukeko == true)
  {
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
  line(headposx + headWidth / 2.5, headposy - headHeight / 2, beakstartx + 1, beakstarty)



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
  vertex(pukekoposx, pukekoposy - pukekoposy * .1);
  vertex(pukekoposx - (2 / 3 * pukekoThickness), pukekoposy - pukekoposy * .1);
  vertex(pukekoposx - pukekoThickness / 2, pukekoposy + pukekoposy * .05);
  endShape(CLOSE);


  //toptailfeather
  stroke(charcoal);
  fill(charcoal);
  beginShape();
  vertex(pukekoposx, pukekoposy - pukekoHeight * .2);
  vertex(pukekoposx - pukekoThickness / 6, pukekoposy - pukekoHeight / 2.1);
  vertex(pukekoposx - pukekoThickness + pukekoThickness / 6, pukekoposy - pukekoHeight * .2);
  endShape(CLOSE);

  //make back dark
  fill(gunmetal);
  strokeWeight(1)
  stroke(gunmetal)
  arc(pukekoposx, pukekoposy, pukekoThickness, pukekoHeight - 2, 170, 300)
  //lower back
  arc(pukekoposx - 10, pukekoposy + 5, pukekoThickness / 2, pukekoThickness / 2, 90, 180)
  //lowertail feather
  fill(richblack);
  stroke(richblack);
  strokeWeight(0)
  arc(pukekoposx - 10, pukekoposy + 5, pukekoThickness + pukekoThickness / 6, 8, 130, 300)
}
  //pond ripples

  arc()


  //reeds/grass
if(grass == true){
   stroke(hunterGreen)
  strokeWeight(.2)
  fill(fernGreen)

  stroke(hunterGreen)
  strokeWeight(.2)
  fill(fernGreen)
  beginShape(TRIANGLES);

  //frontleftgrass
  vertex(46, 145);
  vertex(52, 115);
  vertex(50, 145);

  vertex(48, 143);
  vertex(45, 115);
  vertex(43, 143);

  vertex(40, 144);
  vertex(39, 110);
  vertex(45, 145);

  vertex(45, 146);
  vertex(50, 125);
  vertex(49, 146);
  endShape();
  //backleftgrass
  beginShape(TRIANGLES);
  vertex(50, 155);
  vertex(49, 125);
  vertex(55, 155);

  vertex(56, 155);
  vertex(62, 125);
  vertex(60, 155);

  vertex(58, 153);
  vertex(55, 125);
  vertex(55, 153);

  vertex(55, 156);
  vertex(45, 135);
  vertex(59, 156);
  endShape();
  //centregrass
  beginShape(TRIANGLES);
  vertex(80, 155);
  vertex(79, 125);
  vertex(85, 155);

  vertex(86, 155);
  vertex(92, 125);
  vertex(90, 155);

  vertex(88, 153);
  vertex(85, 125);
  vertex(85, 153);

  vertex(85, 156);
  vertex(75, 135);
  vertex(89, 156);
  endShape();

  //rightgrass
  vertex(148, 145);
  vertex(155, 125);
  vertex(152, 145);

  vertex(149, 144);
  vertex(145, 125);
  vertex(145, 143);

  vertex(145, 146);
  vertex(135, 125);
  vertex(149, 146);
  endShape();
}

  //sun/moon
  noStroke()
  fill(harvestGold)
  ellipse(150, 30, 30, 30)
  if (Night == true) {

    fill(platinum)
    ellipse(150, 30, 30, 30)
    fill(hunterGreen)
    ellipse(155, 25, 30, 30)

    fill(0, 200)
    rect(0, 0, 200, 200)


  }

  if(pukeko == true)
{
  //eye
  strokeWeight(1.5);
  fill(burntUmber)
  stroke(burntUmber)
  ellipse(headposx + headWidth / 6, headposy - headHeight / 4, .5, .75);
  fill(richblack);
  noStroke();
  ellipse(headposx + headWidth / 6, headposy - headHeight / 4, 1, 1);
}
}