var Links = {
  setColor:function(color){
    // var i=0;
    // var links = document.querySelectorAll('a');
    // while(i<links.length){
    //   links[i].style.color = color;
    //   i++;
    // }

    $('a').css('color', color);
  }
}

var Body = {
  set_chColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  set_bgColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function night_day_handler(self){
  if(self.value === 'NightMode'){
    Body.set_bgColor('black');
    Body.set_chColor('white');
    self.value='DayMode';
    Links.setColor('powderblue');
  }
  else{
    Body.set_bgColor('white');
    Body.set_chColor('black');
    self.value='NightMode';
    Links.setColor('blue');
  }
}
