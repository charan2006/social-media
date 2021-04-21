var b1;
function preload(){
  

}
function setup(){
  createCanvas(700,450);
  background("black");
  b1 = createSprite(200,200,20,20);
  b1.shapeColor = "white"
 

}
function draw(){
 if(mousePressedOver(b1)|| touches.lenght > 0){
  //  var b2 = event.touches[0].b1
  console.log(41)
  b1.shapeColor = "blue";
 }
//  if (x){
//   b1.shapeColor = "blue";
//  }
//  let display = touches.length + ' touches';
//   text(display, 5, 10);
//   if(Touches.lenght(200,200)){
//     b1.shapeColor = "blue";
//   }
  drawSprites();
}
