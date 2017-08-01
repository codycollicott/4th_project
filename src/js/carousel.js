export const carousel = () => {$('.bxslider').bxSlider({
  onSliderLoad: function(){
    // do funky JS stuff here
    alert('Slider has finished loading. Click OK to continue!');
  },
  onSlideAfter: function(){
    // do mind-blowing JS stuff here
    alert('A slide has finished transitioning. Bravo. Click OK to continue!');
  }
});
}

console.log(carousel)