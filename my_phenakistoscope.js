const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image_sequence("firework","png",27);
}

function setup_layers(pScope){

  new PLayer(null, 17,23,60);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(flare);
  layer1.mode( SWIRL(1) );
  layer1.set_boundary( 0, 700 );

  var layer2 = new PLayer(bang);
  layer2.mode( RING );
  layer2.set_boundary( 700, 1000 );

}

function flare(x, y, animation, pScope){
  
  scale(animation.frame*1);
  fill(animation.wave(7)*255,animation.wave(7)*160,animation.wave(7)*180);//trying to flicker the glow colour
  ellipse(0,0,80,80); // draw glow
  fill(255);
  ellipse(0,0,50,50); // draw flare

}

function bang(x,y,animation, pScope){

  //at the moment drawing an ellipse and scaling in a wave func to simulate an "explosion"
  //TODO: replace with still image that expands or frame animation of explosion
  scale(0.2);
  pScope.draw_image('firework',0,0, animation.wave(1));//draw bang
}

//TODO: add twinkling stars in the background..