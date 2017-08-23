function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

  if(h==0) {
    h=12;
  }

    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


var quotes = [
  'You were born original, don\'t die a copy.',
  'It\'s not that I\'m so smart, it\'s just that I stay with problems longer.',
  'Your only limit is you.',
  'It always seems impossible until it\'s done.',
  'A little progress each day adds up to great results.',
  'Stop wishing and start doing.',
  'Work hard in silence, let success speak for you.',
  'It comes down to one simple thing: how bad do you want it ?',
  'Be so good that they can\'t ignore you.',
  'I am going to make you so proud! - note to self.',
  'Nothing worth having comes easy.',
  'Focus on your goal, don\'t look in any direction but ahead.',
  'Nothing changes if nothing changes.',
  'Hustle until your haters ask if you are hiring.',
  'You can not have a better tomorrow if you are still thinking about yesterday.',
  'One day or day one. You decide.',
  'No pain, no gain. Shut up and train.',
  'Purpose is an incredible alarm clock.',
  'Grow through what you go through.',
  'The difference between extraordinary and ordinary is that little extra.'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quotehere').innerHTML = quotes[randomNumber];
  var x = document.getElementsById(h4);
  if (x.style.display === 'block') {
    x.style.display = 'none';
  }
}