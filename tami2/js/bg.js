
var colors = [
  [0, 0, 0], // black  
  [14, 10, 60],    // dark blue
  [50, 39, 156],    // blue
  [96, 40, 104],    // purple
  [204, 73, 37],    // red
  [240, 152, 72] // orange
];

var height = $('body').height() - window.innerHeight;

$(document).scroll(function() {
   var body = $("body");
   var steps = Math.floor(height / colors.length);
   var position = $(this).scrollTop();
   var currentStep = Math.floor(position / steps);
   if ( currentStep === colors.length ) currentStep = colors.length - 1;
   var rgb = $("body").css('background-color').replace('rgb(','').replace(')','').replace(/\s/g, '').split(',');     
   var previousColor = colors[currentStep] || colors[0];
   var nextColor = colors[currentStep+1] || colors[colors.length-1];
   var percentFromThisStep = ( position - ( currentStep * steps ) ) / steps;
   if ( percentFromThisStep > 1 ) percentFromThisStep = 1;
  
 
   var newRgb = [
     Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromThisStep )),
     Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromThisStep )),
     Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromThisStep ))
     
   ];
   
   $("body").css('background-color', 'rgb('+ newRgb.join(',') +')');
});