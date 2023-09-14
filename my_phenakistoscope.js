const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image_sequence("firework","png",27);
  pScope.load_image_sequence("sparkle","png",41); //"sparkle as in the sparkly trail behind a firework pre-explosion"
  pScope.load_image_sequence("flare","png",24);
  pScope.load_image_sequence("stars","png",3);
  pScope.load_image("moon","png");
}

function setup_layers(pScope){

  new PLayer(null, 7, 9, 20);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(shot);
  layer1.mode( SWIRL(1) );
  layer1.set_boundary( 0, 700 );

  var layer2 = new PLayer(bang);
  layer2.mode( RING );
  layer2.set_boundary( 700, 1000 );

  var layer3 = new PLayer(trail);
  layer3.mode( SWIRL(1) );
  layer3.set_boundary( 0, 700 );

  var layer4 = new PLayer(starry);
  layer4.mode( RING );
  layer4.set_boundary( 0, 1000 );

  var layer5 = new PLayer(moon);
  layer5.mode( RING );
  layer5.set_boundary( 0, 0 );

}
//
function shot(x, y, animation, pScope){//the launched firework before it explodes will move from 0 to its boundary very fast
  scale(animation.frame*1);
  fill(255,160,180);
  ellipse(0,0,30,30); // draw glow
  fill(255);
  ellipse(0,0,10,10); // draw flare

}
function trail(x,y,animation, pScope){
	scale(animation.frame*0.6);
	pScope.draw_image_from_sequence('sparkle',0,0, animation.wave(7)*180);
  }
  
  function starry(x,y,animation, pScope){
	translate(x,y-700);
	scale(1);
	pScope.draw_image_from_sequence('stars',0,0, animation.frame);
  }

function bang(x,y,animation, pScope){ //the explosion gif which i created that starts of the same frame that the 'shot' layer reaches its boundary
  translate(x,y-700);
  scale(.4);
  pScope.draw_image_from_sequence('firework',0,0, animation.frame);//draw bang
}
function moon(x,y,animation, pScope){ //using a simple moon image that i drew to hide the centre and create a sort of centrepiece to the whole project.
  scale(0.5);
  pScope.draw_image('moon',0,0);
}
