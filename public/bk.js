/* Booking calendar behaviour.
   Renders a rolling calendar from today's date: weekday slots inside a
   45-day booking window, with working month navigation. The times shown
   are indicative — Confirm hands off to Cal.com, which holds the real
   availability. */
(function(){
  var DOW   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var MONTH = ["January","February","March","April","May","June","July",
               "August","September","October","November","December"];
  var POOL  = ["9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","11:30 am",
               "1:00 pm","1:30 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm","4:00 pm"];

  var grid  = document.getElementById('cal-grid');
  var mlab  = document.getElementById('cal-mlabel');
  var prev  = document.getElementById('cal-prev');
  var next  = document.getElementById('cal-next');
  var list  = document.getElementById('cal-slots');
  var label = document.getElementById('cal-day');
  var go    = document.getElementById('cal-go');
  if(!grid||!mlab||!list||!label||!go) return;

  var CAL = go.getAttribute('href');
  var LEAD = 2;    /* first bookable day, in days from today */
  var SPAN = 45;   /* last bookable day */

  function midnight(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addDays(d,n){ var x=new Date(d.getTime()); x.setDate(x.getDate()+n); return midnight(x); }
  function key(d){ return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }

  var today = midnight(new Date());
  var first = addDays(today, LEAD);
  var last  = addDays(today, SPAN);

  function bookable(d){
    var wd = d.getDay();
    if(wd===0 || wd===6) return false;               /* weekends closed */
    return d.getTime() >= first.getTime() && d.getTime() <= last.getTime();
  }

  /* Deterministic per-date, so a day shows the same times on every render. */
  function slotsFor(d){
    if(!bookable(d)) return [];
    var seed = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
    function rnd(){ seed = (seed*1103515245 + 12345) & 0x7fffffff; return seed/0x7fffffff; }
    rnd(); rnd();                                     /* discard the first draws */
    var pool = POOL.slice(), out = [], want = 3 + Math.floor(rnd()*4);
    while(out.length < want && pool.length){
      out.push(pool.splice(Math.floor(rnd()*pool.length), 1)[0]);
    }
    out.sort(function(a,b){ return POOL.indexOf(a) - POOL.indexOf(b); });
    return out;
  }

  var view = new Date(today.getFullYear(), today.getMonth(), 1);
  var minView = new Date(today.getFullYear(), today.getMonth(), 1);
  var maxView = new Date(last.getFullYear(), last.getMonth(), 1);
  var chosen = null;

  function pickTime(btn, t, dayText){
    [].forEach.call(list.children, function(c){ c.setAttribute('aria-pressed','false'); });
    btn.setAttribute('aria-pressed','true');
    go.textContent = 'Confirm · ' + dayText + ', ' + t;
    go.removeAttribute('aria-disabled');
    go.setAttribute('href', CAL);
  }

  function showDay(d){
    chosen = d;
    [].forEach.call(grid.children, function(c){
      if(c.dataset && c.dataset.k) c.setAttribute('aria-pressed', c.dataset.k===key(d) ? 'true':'false');
    });
    var dayText = DOW[d.getDay()] + ' ' + d.getDate() + ' ' + MONTH[d.getMonth()].slice(0,3);
    label.textContent = dayText;
    list.innerHTML = '';
    go.textContent = 'Pick a time';
    go.setAttribute('aria-disabled','true');
    slotsFor(d).forEach(function(t){
      var b = document.createElement('button');
      b.className='slot'; b.type='button'; b.textContent=t;
      b.setAttribute('aria-pressed','false');
      b.addEventListener('click', function(){ pickTime(b, t, dayText); });
      list.appendChild(b);
    });
  }

  function renderMonth(){
    mlab.textContent = MONTH[view.getMonth()] + ' ' + view.getFullYear();
    if(prev) prev.disabled = view.getTime() <= minView.getTime();
    if(next) next.disabled = view.getTime() >= maxView.getTime();

    grid.innerHTML = '';
    /* the week starts on Monday, matching the M T W T F S S header */
    var lead = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() + 6) % 7;
    var days = new Date(view.getFullYear(), view.getMonth()+1, 0).getDate();
    var i;
    for(i=0;i<lead;i++) grid.appendChild(document.createElement('span'));
    for(i=1;i<=days;i++){
      var d = new Date(view.getFullYear(), view.getMonth(), i);
      var el;
      if(bookable(d)){
        el = document.createElement('button');
        el.type='button'; el.className='day'; el.dataset.k = key(d);
        el.setAttribute('aria-pressed','false');
        el.setAttribute('aria-label', DOW[d.getDay()]+' '+i+' '+MONTH[view.getMonth()]);
        (function(dd){ el.addEventListener('click', function(){ showDay(dd); }); })(d);
      } else {
        el = document.createElement('span');
      }
      el.textContent = i;
      grid.appendChild(el);
    }
    while(grid.children.length % 7) grid.appendChild(document.createElement('span'));
    if(chosen) showDay(chosen);
  }

  function firstBookableIn(v){
    var days = new Date(v.getFullYear(), v.getMonth()+1, 0).getDate();
    for(var i=1;i<=days;i++){
      var d = new Date(v.getFullYear(), v.getMonth(), i);
      if(bookable(d)) return d;
    }
    return null;
  }

  /* the window can end early in a month that then has no weekday left in
     it — don't let the arrows reach a month with nothing to book */
  while(maxView.getTime() > minView.getTime() && !firstBookableIn(maxView)){
    maxView = new Date(maxView.getFullYear(), maxView.getMonth()-1, 1);
  }

  function step(n){
    var v = new Date(view.getFullYear(), view.getMonth()+n, 1);
    if(v.getTime() < minView.getTime() || v.getTime() > maxView.getTime()) return;
    view = v; chosen = null;
    renderMonth();
    var d = firstBookableIn(view);
    if(d) showDay(d); else { list.innerHTML=''; label.textContent='Select a date';
                             go.textContent='Pick a time'; go.setAttribute('aria-disabled','true'); }
  }
  if(prev) prev.addEventListener('click', function(){ step(-1); });
  if(next) next.addEventListener('click', function(){ step(1); });

  /* open on the first day that can actually be booked */
  var start = firstBookableIn(view);
  if(!start){ view = new Date(view.getFullYear(), view.getMonth()+1, 1); start = firstBookableIn(view); }
  renderMonth();
  if(start) showDay(start);
})();
