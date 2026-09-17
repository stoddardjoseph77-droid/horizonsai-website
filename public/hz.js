/* HorizonsAI page behaviour: hero canvas, tabs, ask bar, counters, FAQ accordion,
   sticky-header height variable. Ported verbatim from the design source. */

var SRC="/img/hz-2fde32a1.jpg";

function _fitC(cv){
  var host=cv.parentNode, w=host.offsetWidth, h=host.offsetHeight;
  if(!w||!h) return null;
  var d=Math.min(window.devicePixelRatio||1,2);
  cv.width=Math.round(w*d); cv.height=Math.round(h*d);
  cv.style.width=w+'px'; cv.style.height=h+'px';
  var c=cv.getContext('2d'); c.setTransform(d,0,0,d,0,0);
  return {c:c,w:w,h:h};
}
function _cover(img,w,h){
  var s=Math.max(w/img.width,h/img.height), dw=img.width*s, dh=img.height*s;
  return [(w-dw)/2,(h-dh)/2,dw,dh];
}
function _track(c,s,size,weight,ls){
  c.font=weight+' '+size+'px "IBM Plex Mono", ui-monospace, Menlo, monospace';
  try{ c.letterSpacing=ls; }catch(e){}
  return c.measureText(s).width;
}

function drawPlain(cv, img){
  var f=_fitC(cv); if(!f) return; var c=f.c, w=f.w, h=f.h;
  c.fillStyle='#E9E9E6'; c.fillRect(0,0,w,h);
  if(img && img.complete && img.naturalWidth){
    var r=_cover(img,w,h); c.drawImage(img,r[0],r[1],r[2],r[3]);
  }
  c.fillStyle='rgba(233,233,230,.26)'; c.fillRect(0,0,w,h);
}

function drawAnnotated(cv, img){
  var f=_fitC(cv); if(!f) return; var c=f.c, w=f.w, h=f.h;

  c.fillStyle='#E9E9E6'; c.fillRect(0,0,w,h);
  if(img && img.complete && img.naturalWidth){
    var r=_cover(img,w,h);
    c.drawImage(img,r[0],r[1],r[2],r[3]);
  }
  // soften the frame so drawn linework and type sit on top of it cleanly
  c.fillStyle='rgba(233,233,230,.26)'; c.fillRect(0,0,w,h);

  var BRONZE='#8C6A3C', INK='#131416', CONCRETE='#E9E9E6', INK2='#55585C';
  var small = w < 430;

  /* ── reticle over the subject asset ── */
  var rx=w*0.16, ry=h*0.17, rw=w*0.44, rh=h*0.62;
  c.strokeStyle=BRONZE; c.lineWidth=1.6; c.setLineDash([9,6]);
  c.strokeRect(Math.round(rx)+.5,Math.round(ry)+.5,Math.round(rw),Math.round(rh));
  c.setLineDash([]);
  c.fillStyle=BRONZE;
  [[rx,ry],[rx+rw,ry],[rx,ry+rh],[rx+rw,ry+rh]].forEach(function(p){
    c.fillRect(Math.round(p[0])-3.5,Math.round(p[1])-3.5,7,7);
  });

  /* ── callout plates, right-hand stack ── */
  var PADX=13, PADY=11, LH=25, GAP=6;
  function plate(anchor, rowY, label, value){
    var MARGIN=Math.max(16,w*0.05);
    var vsize=small?14:17;
    var lw=_track(c,label,10.5,'500','.2em');
    var vw=_track(c,value,vsize,'500','.04em');
    // keep a plate inside 60% of the panel, shrinking the value if it must
    var maxPw=w*0.60-MARGIN;
    while(Math.max(lw,vw)+PADX*2>maxPw && vsize>10){
      vsize-=1; vw=_track(c,value,vsize,'500','.04em');
    }
    var pw=Math.min(Math.max(lw,vw)+PADX*2, w-MARGIN*2);
    var ph=LH+GAP+vsize+PADY*2-4;
    var px=w-pw-MARGIN;
    var py=rowY-ph/2;
    if(py<8) py=8; if(py+ph>h-8) py=h-8-ph;

    // leader: anchor -> elbow -> plate edge
    var ax=anchor[0]*w, ay=anchor[1]*h;
    var ey=py+ph/2;
    c.strokeStyle=INK; c.lineWidth=1.2; c.beginPath();
    c.moveTo(ax,ay); c.lineTo(px-22,ey); c.lineTo(px,ey); c.stroke();
    c.fillStyle=BRONZE; c.beginPath(); c.arc(ax,ay,3.6,0,6.2832); c.fill();

    // scrim plate so the type reads over any part of the frame
    c.fillStyle='rgba(233,233,230,.94)';
    c.fillRect(Math.round(px),Math.round(py),Math.round(pw),Math.round(ph));
    c.fillStyle=BRONZE; c.fillRect(Math.round(px),Math.round(py),2,Math.round(ph));

    c.textBaseline='alphabetic';
    c.fillStyle=INK2; _track(c,label,10.5,'500','.2em');
    c.fillText(label, px+PADX, py+PADY+10);
    c.fillStyle=INK; _track(c,value,vsize,'500','.04em');
    c.fillText(value, px+PADX, py+PADY+10+LH);
    try{ c.letterSpacing='0px'; }catch(e){}
  }

  plate([0.44,0.32], h*0.18, 'HELD',      '23 YEARS');
  plate([0.47,0.50], h*0.50, 'LOAN DUE',  'IN 8 MONTHS');
  plate([0.50,0.68], h*0.82, 'DSCR',      '1.12');
}


function _fitH(cv){
  var host=cv.parentNode, w=host.offsetWidth, h=host.offsetHeight;
  if(!w||!h) return null;
  var d=Math.min(window.devicePixelRatio||1,2);
  cv.width=Math.round(w*d); cv.height=Math.round(h*d);
  cv.style.width=w+'px'; cv.style.height=h+'px';
  var c=cv.getContext('2d'); c.setTransform(d,0,0,d,0,0);
  return {c:c,w:w,h:h};
}
function _coverH(img,w,h){
  var s=Math.max(w/img.width,h/img.height), dw=img.width*s, dh=img.height*s;
  return [(w-dw)/2,(h-dh)/2,dw,dh];
}
function _tr(c,s,size,weight,ls){
  c.font=weight+' '+size+'px "IBM Plex Mono", ui-monospace, Menlo, monospace';
  try{ c.letterSpacing=ls; }catch(e){}
  return c.measureText(s).width;
}

var HERO_SIGNALS=[
  ['HELD',     '23 YEARS'],
  ['LOAN DUE', 'IN 8 MONTHS'],
  ['DSCR',     '1.12']
];

function drawHeroBlend(cv, img){
  var f=_fitH(cv); if(!f) return; var c=f.c, w=f.w, h=f.h;
  var CONCRETE='#E9E9E6', BRONZE='#8C6A3C', INK='#131416', INK2='#55585C', INK3='#8B8E92';

  c.fillStyle=CONCRETE; c.fillRect(0,0,w,h);

  // reserve a margin on the right for the signal column
  var narrow = w < 560;
  var gut = narrow ? Math.min(150, w*0.36) : Math.max(168, Math.min(210, w*0.30));
  var frameW = Math.max(60, w - gut);

  if(img && img.complete && img.naturalWidth){
    c.save();
    c.beginPath(); c.rect(0,0,frameW,h); c.clip();
    var r=_coverH(img,frameW,h);
    c.drawImage(img,r[0],r[1],r[2],r[3]);
    c.fillStyle='rgba(233,233,230,.20)'; c.fillRect(0,0,frameW,h);
    c.restore();
  }

  // dissolve both edges into the page so nothing reads as a pasted panel
  var fadeL=c.createLinearGradient(0,0,Math.max(40,w*0.20),0);
  fadeL.addColorStop(0,'rgba(233,233,230,1)'); fadeL.addColorStop(1,'rgba(233,233,230,0)');
  c.fillStyle=fadeL; c.fillRect(0,0,Math.max(40,w*0.20),h);

  var fadeR=c.createLinearGradient(frameW-Math.max(50,w*0.13),0,frameW,0);
  fadeR.addColorStop(0,'rgba(233,233,230,0)'); fadeR.addColorStop(1,'rgba(233,233,230,1)');
  c.fillStyle=fadeR; c.fillRect(frameW-Math.max(50,w*0.13),0,Math.max(50,w*0.13)+2,h);

  var fadeT=c.createLinearGradient(0,0,0,h*0.16);
  fadeT.addColorStop(0,'rgba(233,233,230,.85)'); fadeT.addColorStop(1,'rgba(233,233,230,0)');
  c.fillStyle=fadeT; c.fillRect(0,0,frameW,h*0.16);

  var fadeB=c.createLinearGradient(0,h*0.84,0,h);
  fadeB.addColorStop(0,'rgba(233,233,230,0)'); fadeB.addColorStop(1,'rgba(233,233,230,.92)');
  c.fillStyle=fadeB; c.fillRect(0,h*0.84,frameW,h*0.16);

  /* ── signal column, on the page itself ── */
  var n=HERO_SIGNALS.length;
  var top=h*0.20, span=h*0.58, step=span/Math.max(1,n-1);
  var colX=w-8, tick=frameW+14;
  var lsize=narrow?8.5:9.5, vsize=narrow?11:12.5;

  // anchors on the frame, roughly following the tower edge
  var anchors=[[0.44,0.34],[0.47,0.50],[0.50,0.66]];   // one asset, three reads

  c.textBaseline='alphabetic';
  for(var i=0;i<n;i++){
    var y=top+step*i;
    var ax=anchors[i][0]*frameW, ay=anchors[i][1]*h;

    // hairline leader from the asset out to the margin
    c.strokeStyle='rgba(19,20,22,.42)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(ax,ay); c.lineTo(tick,y); c.lineTo(colX-2,y); c.stroke();
    c.fillStyle=BRONZE; c.beginPath(); c.arc(ax,ay,2.8,0,6.2832); c.fill();

    c.textAlign='right';
    c.fillStyle=INK3; _tr(c,HERO_SIGNALS[i][0],lsize,'500','.22em');
    c.fillText(HERO_SIGNALS[i][0], colX, y-7);
    c.fillStyle=INK; _tr(c,HERO_SIGNALS[i][1],vsize,'500','.06em');
    c.fillText(HERO_SIGNALS[i][1], colX, y+13);
  }
  c.textAlign='left';
  try{ c.letterSpacing='0px'; }catch(e){}

  // one quiet line naming what the stack adds up to
  c.fillStyle=INK2; _tr(c,'THREE SIGNALS, ONE OWNER, NOTHING LISTED',narrow?8:9,'500','.2em');
  c.textAlign='right'; c.fillText('THREE SIGNALS, ONE OWNER, NOTHING LISTED', colX, h-14);
  c.textAlign='left';
  try{ c.letterSpacing='0px'; }catch(e){}
  c.strokeStyle='rgba(140,106,60,.55)'; c.lineWidth=1;
  c.beginPath(); c.moveTo(w*0.42,h-26); c.lineTo(colX,h-26); c.stroke();
}


function initRadar(cv, img){
  if(!cv || cv._radar) return; cv._radar = true;
  var c,w,h,dpr,cx,cy,R,raf=null,running=false,last=0;
  var BRONZE='#8C6A3C';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SPEED=0.34, SWEEP=Math.PI*0.42;
  var ang=-Math.PI*0.75;

  /* real buildings in the frame */
  var marks=[
    {x:0.500,y:0.345,w:0.048,h:0.075, t:-99},
    {x:0.305,y:0.400,w:0.042,h:0.062, t:-99},
    {x:0.720,y:0.275,w:0.044,h:0.068, t:-99},
    {x:0.440,y:0.665,w:0.046,h:0.070, t:-99},
    {x:0.790,y:0.495,w:0.040,h:0.060, t:-99}
  ];




  function measure(){
    var host=cv.parentNode; w=host.offsetWidth; h=host.offsetHeight;
    if(!w||!h) return false;
    dpr=Math.min(window.devicePixelRatio||1,2);
    cv.width=Math.round(w*dpr); cv.height=Math.round(h*dpr);
    cv.style.width=w+'px'; cv.style.height=h+'px';
    c=cv.getContext('2d'); c.setTransform(dpr,0,0,dpr,0,0);
    cx=w*0.50; cy=h*0.50; R=Math.max(w,h)*0.95;      // true plan view: pivot at centre
    marks.forEach(function(m){ m.a=null; });   // bearing resolved per frame, in image space
    return true;
  }
  function norm(a){ while(a<-Math.PI)a+=Math.PI*2; while(a>Math.PI)a-=Math.PI*2; return a; }

  function frame(now){
    if(!c) return;
    var t=now/1000;
    c.fillStyle='#DEDEDB'; c.fillRect(0,0,w,h);

    var ox=0, oy=0, dw=w, dh=h;
    if(img && img.complete && img.naturalWidth){
      var s=Math.max(w/img.width,h/img.height); dw=img.width*s; dh=img.height*s;
      ox=(w-dw)/2; oy=(h-dh)/2;
      c.drawImage(img,ox,oy,dw,dh);
      c.fillStyle='rgba(233,233,230,.52)'; c.fillRect(0,0,w,h);
      var fl=c.createLinearGradient(0,0,w*0.26,0);
      fl.addColorStop(0,'rgba(222,222,219,1)'); fl.addColorStop(1,'rgba(222,222,219,0)');
      c.fillStyle=fl; c.fillRect(0,0,w*0.26,h);
      var fr=c.createLinearGradient(w*0.86,0,w,0);
      fr.addColorStop(0,'rgba(222,222,219,0)'); fr.addColorStop(1,'rgba(222,222,219,1)');
      c.fillStyle=fr; c.fillRect(w*0.86,0,w*0.14+2,h);
      var ft=c.createLinearGradient(0,0,0,h*0.26);
      ft.addColorStop(0,'rgba(222,222,219,.95)'); ft.addColorStop(1,'rgba(222,222,219,0)');
      c.fillStyle=ft; c.fillRect(0,0,w,h*0.26);
      var fb=c.createLinearGradient(0,h*0.74,0,h);
      fb.addColorStop(0,'rgba(222,222,219,0)'); fb.addColorStop(1,'rgba(222,222,219,.95)');
      c.fillStyle=fb; c.fillRect(0,h*0.74,w,h*0.26);
    }

    /* sweep, fanning out from the viewer */
    var g=c.createRadialGradient(cx,cy,0,cx,cy,R);
    g.addColorStop(0,'rgba(140,106,60,.02)');
    g.addColorStop(0.55,'rgba(140,106,60,.15)');
    g.addColorStop(1,'rgba(140,106,60,0)');
    c.save(); c.beginPath(); c.rect(0,0,w,h); c.clip();
    c.fillStyle=g; c.beginPath(); c.moveTo(cx,cy); c.arc(cx,cy,R,ang-SWEEP,ang); c.closePath(); c.fill();
    c.strokeStyle='rgba(140,106,60,.5)'; c.lineWidth=1.2;
    c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+Math.cos(ang)*R, cy+Math.sin(ang)*R); c.stroke();

    /* range arcs */
    c.strokeStyle='rgba(19,20,22,.10)'; c.lineWidth=1;
    [0.30,0.55,0.80].forEach(function(f){ c.beginPath(); c.arc(cx,cy,R*f,0,6.2832); c.stroke(); });
    c.beginPath(); c.moveTo(cx-R,cy); c.lineTo(cx+R,cy); c.stroke();
    c.beginPath(); c.moveTo(cx,cy-R); c.lineTo(cx,cy+R); c.stroke();
    c.restore();

    /* nothing is marked until the sweep has passed over it */
    var found=0;
    c.textBaseline='alphabetic';
    marks.forEach(function(m){
      var bx=ox+(m.x-m.w/2)*dw, by=oy+m.y*dh, bw=m.w*dw, bh=m.h*dh;
      if(m.a===null) m.a=Math.atan2((by+bh/2)-cy, (bx+bw/2)-cx);
      var d=Math.abs(norm(ang-m.a));
      if(!m.hit && d<0.06){ m.hit=true; m.t=t; }
      if(!m.hit) return;
      found++;

      var age=t-m.t;
      var appear=Math.min(1, age/0.55);              // ease in as it is uncovered
      var ping=(age<1.4)?(1-age/1.4):0;

      if(ping>0){
        c.strokeStyle='rgba(140,106,60,'+(0.42*ping).toFixed(3)+')'; c.lineWidth=1.4;
        c.strokeRect(bx-14*ping, by-14*ping, bw+28*ping, bh+28*ping);
      }
      c.fillStyle='rgba(140,106,60,'+(0.13*appear+0.16*ping).toFixed(3)+')';
      c.fillRect(bx,by,bw,bh);
      c.strokeStyle='rgba(140,106,60,'+(0.68*appear).toFixed(3)+')'; c.lineWidth=1.6;
      var k=8;
      [[bx,by,1,1],[bx+bw,by,-1,1],[bx,by+bh,1,-1],[bx+bw,by+bh,-1,-1]].forEach(function(q){
        c.beginPath(); c.moveTo(q[0]+q[2]*k,q[1]); c.lineTo(q[0],q[1]); c.lineTo(q[0],q[1]+q[3]*k); c.stroke();
      });
    });

    c.font='500 10px "IBM Plex Mono", ui-monospace, monospace';
    try{ c.letterSpacing='.2em'; }catch(e){}
    c.fillStyle='#55585C'; c.textAlign='left';  c.fillText(found + (found===1?' IDENTIFIED':' IDENTIFIED'), 16, h-16);
    c.textAlign='right'; c.fillText('SCANNING', w-16, h-16); c.textAlign='left';
    try{ c.letterSpacing='0px'; }catch(e){}
  }

  function loop(now){
    if(!running) return;
    if(last) ang=norm(ang + SPEED*((now-last)/1000));
    last=now; frame(now); raf=requestAnimationFrame(loop);
  }
  function start(){ if(running||reduce) return; running=true; last=0; raf=requestAnimationFrame(loop); }
  function stop(){ running=false; if(raf) cancelAnimationFrame(raf); raf=null; }

  if(measure()){ frame(performance.now()); if(!reduce) start(); }
  if(img && !img.complete) img.addEventListener('load', function(){ frame(performance.now()); });
  if(window.IntersectionObserver){
    new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting?start():stop(); }); },{threshold:0.05}).observe(cv);
  }
  var rt; window.addEventListener('resize',function(){
    clearTimeout(rt); rt=setTimeout(function(){ if(measure()) frame(performance.now()); },180);
  });
}


function drawDealMap(cv, img){
  var host=cv.parentNode, w=host.offsetWidth, h=host.offsetHeight;
  if(!w||!h) return;
  var dpr=Math.min(window.devicePixelRatio||1,2);
  cv.width=Math.round(w*dpr); cv.height=Math.round(h*dpr);
  cv.style.width=w+'px'; cv.style.height=h+'px';
  var c=cv.getContext('2d'); c.setTransform(dpr,0,0,dpr,0,0);
  var BRONZE='#8C6A3C', INK='#131416', INK2='#55585C', INK3='#8B8E92';

  c.fillStyle='#F7F7F5'; c.fillRect(0,0,w,h);
  var ox=0,oy=0,dw=w,dh=h;
  if(img && img.complete && img.naturalWidth){
    var s=Math.max(w/img.width,h/img.height); dw=img.width*s; dh=img.height*s;
    ox=(w-dw)/2; oy=(h-dh)/2;
    c.drawImage(img,ox,oy,dw,dh);
  }
  c.fillStyle='rgba(247,247,245,.58)'; c.fillRect(0,0,w,h);
  function X(u){ return ox+u*dw; } function Y(v){ return oy+v*dh; }

  /* Below ~560px the label positions below, which are tuned for a wide
     canvas, run off the edge and collide with each other. NARROW shortens
     the text and clamps every label inside the frame. */
  var NARROW = w < 560;
  function lbl(x,y,text,strong,align){
    c.font='500 '+(strong?11:10)+'px "IBM Plex Mono", ui-monospace, monospace';
    try{ c.letterSpacing=strong?'.12em':'.16em'; }catch(e){}
    var tw=c.measureText(text).width, px=(align==='right')?x-tw-14:x;
    if(NARROW){
      px=Math.max(4, Math.min(px, w-tw-18));
      y =Math.max(14, Math.min(y, h-8));
    }
    c.fillStyle='rgba(247,247,245,.94)'; c.fillRect(px,y-12,tw+14,19);
    c.fillStyle=strong?INK:INK2; c.fillText(text,px+7,y+2);
    try{ c.letterSpacing='0px'; }catch(e){}
    return tw+14;
  }

  /* ── flood edge, drawn first so everything sits over it ── */
  c.save(); c.beginPath(); c.rect(0,0,w,h); c.clip();
  c.fillStyle='rgba(19,20,22,.045)';
  c.beginPath(); c.moveTo(X(0),Y(0.86)); c.lineTo(X(0.34),Y(0.78)); c.lineTo(X(0.30),Y(1.02)); c.lineTo(X(0),Y(1.02));
  c.closePath(); c.fill();
  c.strokeStyle='rgba(19,20,22,.22)'; c.lineWidth=1; c.setLineDash([5,4]);
  c.beginPath(); c.moveTo(X(0),Y(0.86)); c.lineTo(X(0.34),Y(0.78)); c.stroke(); c.setLineDash([]);
  lbl(X(0.02), NARROW?Y(0.72):Y(0.94), 'FEMA ZONE AE');

  /* ── rail spur ── */
  c.strokeStyle='rgba(19,20,22,.42)'; c.lineWidth=1.6;
  c.beginPath(); c.moveTo(X(0.02),Y(0.115)); c.lineTo(X(0.98),Y(0.055)); c.stroke();
  for(var i=0;i<=26;i++){
    var u=0.02+(0.96*i/26), vx=X(u), vy=Y(0.115-(0.06*i/26));
    c.beginPath(); c.moveTo(vx,vy-4); c.lineTo(vx,vy+4); c.stroke();
  }
  lbl(NARROW?X(0.40):X(0.62), Y(0.075), NARROW?'RAIL · 0.3 MI':'NS RAIL SPUR · 0.3 MI');

  /* ── the subject parcel ── */
  var sx=X(0.589), sy=Y(0.433), sw=dw*0.128, sh=dh*0.213;
  c.fillStyle='rgba(140,106,60,.16)'; c.fillRect(sx,sy,sw,sh);
  c.strokeStyle=BRONZE; c.lineWidth=2;
  c.strokeRect(Math.round(sx)+.5,Math.round(sy)+.5,Math.round(sw),Math.round(sh));
  var k=14;
  [[sx,sy,1,1],[sx+sw,sy,-1,1],[sx,sy+sh,1,-1],[sx+sw,sy+sh,-1,-1]].forEach(function(q){
    c.lineWidth=3; c.beginPath();
    c.moveTo(q[0]+q[2]*k,q[1]); c.lineTo(q[0],q[1]); c.lineTo(q[0],q[1]+q[3]*k); c.stroke();
  });
  lbl(sx, sy-8, NARROW?'SUBJECT':'SUBJECT · 214,000 SF · 9.4 AC', true);

  /* ── comparables ── */
  var comps=[[0.255,0.300,'$6.90/SF'],[0.815,0.365,'$7.35/SF'],[0.365,0.755,'$6.75/SF']];
  comps.forEach(function(p){
    var px=X(p[0]), py=Y(p[1]), r=9;
    c.strokeStyle='rgba(19,20,22,.65)'; c.lineWidth=1.5;
    c.strokeRect(px-r,py-r,r*2,r*2);
    c.fillStyle='rgba(19,20,22,.65)'; c.fillRect(px-2,py-2,4,4);
    /* on a narrow canvas the right-hand comp shares a line with the
       SUBJECT label; drop it below rather than over it */
    var ly = (NARROW && p[0]>0.6) ? py+30 : py+4;
    lbl(px+r+4, ly, (NARROW?'':'COMP · ')+p[2]);
  });

  /* ── one-mile ring from the subject ── */
  var cx=sx+sw/2, cy=sy+sh/2, R=Math.min(dw,dh)*0.42;
  c.strokeStyle='rgba(140,106,60,.42)'; c.lineWidth=1.2; c.setLineDash([7,6]);
  c.beginPath(); c.arc(cx,cy,R,0,6.2832); c.stroke(); c.setLineDash([]);
  c.strokeStyle='rgba(140,106,60,.42)'; c.lineWidth=1;
  c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+R*0.94,cy-R*0.33); c.stroke();
  if(!NARROW) lbl(cx+R*0.34, cy-R*0.20, '1 MI · 71% PROHIBITS THIS USE');

  /* ── corridor ── */
  c.strokeStyle='rgba(19,20,22,.30)'; c.lineWidth=5;
  c.beginPath(); c.moveTo(X(0.98),Y(0.20)); c.lineTo(X(0.90),Y(1.02)); c.stroke();
  c.strokeStyle='rgba(247,247,245,.8)'; c.lineWidth=1; c.setLineDash([9,7]);
  c.beginPath(); c.moveTo(X(0.98),Y(0.20)); c.lineTo(X(0.90),Y(1.02)); c.stroke(); c.setLineDash([]);
  lbl(X(0.985), NARROW?Y(0.16):Y(0.30), NARROW?'31,400 AADT':'WESTERVILLE RD · 31,400 AADT', '', 'right');
  c.restore();

  /* ── scale bar ── */
  var bx=16, by=h-18, bw=Math.min(120,w*0.22);
  c.strokeStyle=INK2; c.lineWidth=1.4;
  c.beginPath(); c.moveTo(bx,by); c.lineTo(bx+bw,by); c.stroke();
  c.beginPath(); c.moveTo(bx,by-5); c.lineTo(bx,by+5); c.stroke();
  c.beginPath(); c.moveTo(bx+bw,by-5); c.lineTo(bx+bw,by+5); c.stroke();
  c.font='500 10px "IBM Plex Mono", ui-monospace, monospace';
  try{ c.letterSpacing='.18em'; }catch(e){}
  c.fillStyle=INK3; c.fillText('1/4 MI', bx, by-11);
  c.textAlign='right'; c.fillText(NARROW?'FRANKLIN CO GIS · FEMA':'FRANKLIN COUNTY GIS · FEMA · ODOT', w-16, by+4); c.textAlign='left';
  try{ c.letterSpacing='0px'; }catch(e){}
}

var HERO_IMG=new Image();
function renderHero(){var cv=document.getElementById('hero');if(cv)drawHeroBlend(cv,HERO_IMG);}
HERO_IMG.onload=renderHero; HERO_IMG.src=SRC; renderHero();
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(renderHero);}
var AERIAL=new Image(); AERIAL.src="/img/hz-0b9b477e.jpg";
var MAPIMG=new Image(); MAPIMG.src="/img/hz-737c0ae1.jpg";
function renderMap(){var q=document.getElementById('deal-map'); if(q) drawDealMap(q,MAPIMG);}
MAPIMG.onload=renderMap; renderMap();
window.addEventListener('load',renderMap);
var _mt;window.addEventListener('resize',function(){clearTimeout(_mt);_mt=setTimeout(renderMap,200);});
function renderRadar(){var q=document.getElementById('cs-radar'); if(q) initRadar(q,AERIAL);}
renderRadar();
window.addEventListener('load',function(){renderHero();renderRadar();});
var _ht;window.addEventListener('resize',function(){clearTimeout(_ht);_ht=setTimeout(renderHero,180);});
var _bar=document.getElementById('talk'), _end=document.getElementById('book');
function _talk(){if(!_bar)return;var past=window.scrollY>window.innerHeight*0.75;var atEnd=_end?_end.getBoundingClientRect().top<window.innerHeight*0.92:false;var on=past&&!atEnd; _bar.classList.toggle('up',on); _bar.setAttribute('aria-hidden',on?'false':'true');}
window.addEventListener('scroll',_talk,{passive:true}); window.addEventListener('resize',_talk); _talk();
var _rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var _on = /[?&]smooth=on/.test(location.search);
if(!_rm && _on && window.Lenis){
  var _len = new Lenis({lerp:0.062, wheelMultiplier:0.72, touchMultiplier:1.3, smoothWheel:true});
  function _raf(t){ _len.raf(t); requestAnimationFrame(_raf); } requestAnimationFrame(_raf);
  _len.on('scroll', _talk);
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id=a.getAttribute('href'); if(id.length<2) return;
      var el=document.querySelector(id); if(!el) return;
      e.preventDefault(); _len.scrollTo(el, {offset:-74});
    });
  });
}
var _tl=document.querySelector('.app-tabs');
if(_tl){var _tabs=[].slice.call(_tl.querySelectorAll('button'));
  function _sel(b){_tabs.forEach(function(t){var on=(t===b);t.setAttribute('aria-selected',on?'true':'false');var pn=document.getElementById(t.getAttribute('aria-controls')); if(pn) pn.setAttribute('data-on',on?'1':'0');});if(b.getAttribute('aria-controls')==='tp-over') renderMap();}
  _tabs.forEach(function(t){t.addEventListener('click',function(){_sel(t);});t.addEventListener('keydown',function(e){var i=_tabs.indexOf(t);if(e.key==='ArrowRight'){e.preventDefault();var n=_tabs[(i+1)%_tabs.length];n.focus();_sel(n);}if(e.key==='ArrowLeft'){e.preventDefault();var q=_tabs[(i-1+_tabs.length)%_tabs.length];q.focus();_sel(q);}});});}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-src]');if(a)e.preventDefault();});
function _sbw(){document.documentElement.style.setProperty('--sbw',(window.innerWidth-document.documentElement.clientWidth)+'px');}
_sbw(); window.addEventListener('resize',_sbw);


/* ---- */

(function(){
  var b=document.getElementById('ask-jump'), t=document.getElementById('tb-ask');
  if(b&&t) b.addEventListener('click',function(){ t.click(); t.scrollIntoView({block:'nearest',inline:'nearest'}); });
})();

/* ---- */

(function(){
  var els=[].slice.call(document.querySelectorAll('.cnt'));
  if(!els.length) return;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  els.forEach(function(el){ el.dataset.final=el.textContent; });
  function run(el){
    if(el.dataset.done) return; el.dataset.done='1';
    var final=el.dataset.final;
    var m=final.match(/^([^0-9]*)([0-9][0-9.,]*)(.*)$/);
    if(!m||reduce){ el.textContent=final; return; }
    var pre=m[1], numStr=m[2], post=m[3];
    var hasComma=numStr.indexOf(',')>-1;
    var dec=(numStr.split('.')[1]||'').length;
    var target=parseFloat(numStr.replace(/,/g,''));
    var t0=null, dur=1100;
    function fmt(v){
      var out=dec?v.toFixed(dec):String(Math.round(v));
      if(hasComma) out=Number(out).toLocaleString('en-US');
      return pre+out+post;
    }
    function step(ts){
      if(t0===null) t0=ts;
      var k=Math.min(1,(ts-t0)/dur);
      k=1-Math.pow(1-k,3);
      el.textContent=fmt(target*k);
      if(k<1) requestAnimationFrame(step); else el.textContent=final;
    }
    el.textContent=fmt(0);
    requestAnimationFrame(step);
  }
  if(!('IntersectionObserver' in window)){ els.forEach(run); return; }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
  },{threshold:.4});
  els.forEach(function(el){ io.observe(el); });
})();

/* ---- */

(function(){
  var ds=[].slice.call(document.querySelectorAll('.faq details'));
  if(!ds.length) ds=[].slice.call(document.querySelectorAll('details')).filter(function(d){return d.querySelector('.faq-a');});
  ds.forEach(function(d){
    d.addEventListener('toggle',function(){
      if(!d.open) return;
      ds.forEach(function(o){ if(o!==d && o.open) o.open=false; });
    });
  });
})();

/* ---- */

(function(){
  var h=document.querySelector('.hdr');
  if(!h) return;
  function set(){ document.documentElement.style.setProperty('--hdr', Math.round(h.getBoundingClientRect().height)+'px'); }
  set();
  window.addEventListener('resize', set);
  if(window.ResizeObserver) new ResizeObserver(set).observe(h);
})();