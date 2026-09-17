/* Booking calendar behaviour — ported from the booking design source.
   Missed in the original port, which left the slot list empty and the
   Confirm button live with no time chosen. */

(function(){
  var DOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var SLOTS={17:["9:30 am","11:00 am","2:00 pm"],21:["9:00 am","10:30 am","1:00 pm","3:30 pm"],
             22:["9:00 am","9:30 am","11:00 am","1:30 pm","2:00 pm","3:30 pm"],23:["10:00 am","11:30 am","4:00 pm"],
             24:["9:00 am","1:00 pm","2:30 pm","4:30 pm"],28:["9:30 am","11:00 am","12:00 pm","3:00 pm"],
             29:["10:30 am","1:30 pm","4:00 pm"],30:["9:00 am","11:30 am"]};
  var days=[].slice.call(document.querySelectorAll('.cal-days button'));
  var list=document.getElementById('cal-slots'), label=document.getElementById('cal-day'), go=document.getElementById('cal-go');
  if(!days.length||!list||!go) return;
  var CAL=go.getAttribute('href');

  function pickTime(btn,t,dayText){
    [].forEach.call(list.children,function(c){c.setAttribute('aria-pressed','false');});
    btn.setAttribute('aria-pressed','true');
    go.textContent='Confirm \u00b7 '+dayText+', '+t;
    go.removeAttribute('aria-disabled');
    go.setAttribute('href',CAL);
  }
  function render(d){
    days.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.d===String(d)?'true':'false'); });
    var dayText=DOW[new Date(2026,8,d).getDay()]+' '+d+' Sep';
    label.textContent=dayText;
    list.innerHTML='';
    go.textContent='Pick a time';
    go.setAttribute('aria-disabled','true');
    (SLOTS[d]||[]).forEach(function(t){
      var b=document.createElement('button');
      b.className='slot'; b.type='button'; b.textContent=t; b.setAttribute('aria-pressed','false');
      b.addEventListener('click',function(){ pickTime(b,t,dayText); });
      list.appendChild(b);
    });
  }
  days.forEach(function(b){ b.addEventListener('click',function(){ render(parseInt(b.dataset.d,10)); }); });
  render(22);
})();
