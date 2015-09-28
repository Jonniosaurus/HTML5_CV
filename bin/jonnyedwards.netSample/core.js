
function animate(opts) {
  var start = new Date  
  var goingDown = true;
  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration

    if (progress > 1) progress = 1    
    
    var delta = opts.delta(progress)
    opts.step(delta, goingDown)
    
    if (progress == 1) {
      goingDown = !goingDown
      progress = 0
      start = new Date;
    }
  }, opts.delay || 10) 
}

(function() {
  
var $ = {
  id : function(id) { return document.getElementById(id); } 
}
  var i;
  var arrA = ["J", "N2", "D1", "R"];
  var toA = 2;  
  // animation sequence A
    animate({       
      delay: 0.05,
      duration: 900, // 1 sec by default
      delta: function quad(progress) { 
        return (progress < 0.7) 
          ? Math.pow(progress, 1.122)
          : Math.pow(progress, 1/1.122)},
      step: function(delta, goingDown) {
        for (i in arrA)
          $.id(arrA[i]).style.top = goingDown ? toA*delta + "%" : toA-(toA*delta) + "%";
    }});
  // animation sequence B
  var arrB = [ "O", "Y", "W", "D2" ];
  var toB = 1;
    animate({       
      delay: 0.05,
      duration: 1000, // 1 sec by default
      delta: function quad(progress) { 
        return (progress < 0.7) 
          ? Math.pow(progress, 1.125)
          : Math.pow(progress, 1/1.125)},
      step: function(delta, goingDown) {
        for (i in arrB)
          $.id(arrB[i]).style.top = !goingDown ? toB*delta + "%" : toB-(toB*delta) + "%";
    }});
    
  // animation sequence C
  var arrC = [ "N1", "E", "A", "S"];
  var toC = 1.8;
    animate({       
      delay: 0.05,
      duration: 1100, // 1 sec by default
      delta: function quad(progress) { 
        return (progress < 0.7) 
          ? Math.pow(progress, 1.125)
          : Math.pow(progress, 1/1.125)},
      step: function(delta, goingDown) {
        for (i in arrC)
          $.id(arrC[i]).style.top = !goingDown ? toC*delta + "%" : toC-(toC*delta) + "%";
    }});    

  }
)()

