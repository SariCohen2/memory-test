
// window.addEventListener("beforeunload", function(event) {
//   event.returnValue = "";
// });
//המשתנים בשביל ההוראות
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
//משתנים עבור מכונת כתיבה
var i = 0;
var txt = 'אני ממתין לבחירתך, אנא בחר את הרמה הרצויה';
var speed = 100;
//משתנה עבור בדיקה האם הקלף שנלחץ הוא זהה לאחרון
let last=-1;
//הדיבים שנוצרים בשביל הקלפים
let savePic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let savePic2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
let savePic3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//מספר הפעמים שנהפכו קלפים
let countPress=0;
//שלא יתן לפתוח יותר משתי קלפים יחד לפני שהופך
let flip=0;
//מערך התמונות
let pics=["url(./pics/100.webp)","url(./pics/200.gif)","url(./pics/300.gif)","url(./pics/400.webp)","url(./pics/1lp.gif)"," url(./pics/600.gif)","url(./pics/700.gif)","url(./pics/800.gif)","url(./pics/900.gif)"," url(./pics/10000.gif)"," url(./pics/10500.gif)"," url(./pics/10100.gif)","url(./pics/10200.gif)"," url(./pics/10300.gif)"," url(./pics/10400.gif)"];
//ספירת מספר הסטים שנמצאו בשביל הצגתם
let numOfSets=0;
//המערכים בהם ישמרו התמונות המוגרלות
const displayPic1=[12];
const displayPic2=[20];
const displayPic3=[30];
let a,b,x,r=0,win=0;
//מערך המונה את מספר הלחיצות על כל כפתור
let flags=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//מערך שבודק מהם הזוגות
let flagsPair=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//יצירת איזור בשביל הפתיחה 
let d=document.createElement("div");
//משתנה לשינוי גודל הלב
let heartSize=25;
//משתנה לספירת הזמן
let countTime=0;
let stopTheGame=false;
let widths=0;
let person ;
let numOfGame=0;
let minTime=110;
let numOfWins=0;
let p=0;
//הפתיחה של המשחק
d.id="d";
box.appendChild(d);
d.innerHTML="ברוכים הבאים למשחק הזיכרון שלי";
d.style.backgroundSize="100%";
let q=document.createElement("div");
q.id="q";
q.innerHTML="❤";
d.appendChild(q);
setInterval("myn()",20);
//הפונקציה של הגדלת הלב בפתיחה
function myn(){
if(heartSize>300)
{
    clearInterval();
    if(heartSize<500)
{  
  if(numOfGame==0)
   typeWriter()
}   heartSize+=300;
q.style.fontSize="50px";
q.style.color="hotpink";
}
else{
  heartSize++;
    //כדי שהלב יחליף צבעים
    q.style.fontSize=heartSize+"px";
    if(heartSize%3==0)
    q.style.color="rgb(222, 166, 232)";
    if(heartSize%4==0)
    q.style.color="rgb(165, 216, 245)";
    if(heartSize%5==0)
    q.style.color="aquamarine";
}
}
// הפונקציה של האותיות שנכתבות
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("q").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else clearInterval();
}
//התחלת המשחק
function startGame(level){
  //איפוס ציר הזמן
  document.getElementById("line").style.width="1%";
  widths=1;
  numOfGame++;
//הכנסת שם לפניה אישית לשחקן
  person = prompt("הכנס בבקשה את שמך:", "שרי🤍");
  // מחיקת הודעות הניצחון במקרה שהמשתמש לא לחץ על  איקס
  document.getElementById("v").style.display="none";
  document.getElementById("box").innerHTML="";
  document.getElementById("header").innerHTML="";
  document.getElementById("v").innerHTML="";
  //איפוס כל המונים
  countPress=0;
  stopTheGame=false;
  ime=20;
  numOfSets=0;
  //הפעלת המוזיקה
  document.getElementById("audio19").src="./music/19.mp3";
  document.getElementById("audio19").play();
  //איפוס מערכי הבדיקה
  win=0;
  flags=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  flagsPair=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //הפעלת פונקצית ההגרלה
  randomaly(level,flags);
  //יצירת הקופסא שתכלול את הקלפים
  const box=document.getElementById("box");
  //יצירת הכרטיסים לפי הרמה
  if(level==12)
  {  countTime=40;
    box.style.gridTemplateColumns="repeat(4,1fr)";
      //הפעלת פונקצית הטיימר‣♪⁌⁑⁍◀▶◁▷
      document.getElementById("btn1").innerHTML+="◀ ";
      document.getElementById("btn2").innerHTML="רמה בינוני";
      document.getElementById("btn3").innerHTML="רמה קשה";
      document.getElementById("btn1").style.backgroundColor="white";
      document.getElementById("btn2").style.backgroundColor="rgb(245, 183, 232)";
      document.getElementById("btn3").style.backgroundColor="rgb(245, 183, 232)";
  for(let i=0;i<12;i++){
    savePic[i]=document.createElement("div");
    savePic[i].id="pic";
    savePic[i].onclick=function(){createPic1(savePic[i],i,12,savePic)};
    box.appendChild(savePic[i]);
}
if(numOfGame==1)
setInterval("timer()",1000);
}
if(level==20){
  countTime=70;
  box.style.gridTemplateColumns="repeat(5,1fr)";
  document.getElementById("btn2").style.backgroundColor="white";
      document.getElementById("btn1").style.backgroundColor="rgb(245, 183, 232)";
      document.getElementById("btn3").style.backgroundColor="rgb(245, 183, 232)";
      document.getElementById("btn2").innerHTML+="◀";
      document.getElementById("btn1").innerHTML="רמה קל";
      document.getElementById("btn3").innerHTML="רמה קשה";
    //הפעלת פונקצית הטיימר
  for(let i=0;i<20;i++){
    savePic2[i]=document.createElement("div");
    savePic2[i].id="pic";
    savePic2[i].onclick=function(){createPic1(savePic2[i],i,20,savePic2)};
    box.appendChild(savePic2[i]);
}
if(numOfGame==1)
setInterval("timer()",1000);
}
if(level==30){
  document.getElementById("btn3").style.backgroundColor="white";
      document.getElementById("btn2").style.backgroundColor="rgb(245, 183, 232)";
      document.getElementById("btn1").style.backgroundColor="rgb(245, 183, 232)";
      document.getElementById("btn3").innerHTML+="◀ ";
      document.getElementById("btn2").innerHTML="רמה בינוני";
      document.getElementById("btn1").innerHTML="רמה קל";
  countTime=110;
  box.style.gridTemplateColumns="repeat(6,1fr)";
    //הפעלת פונקצית הטיימר
  for(let i=0;i<30;i++){
    savePic3[i]=document.createElement("div");
    savePic3[i].id="pic";
    box.appendChild(savePic3[i]);
    savePic3[i].onclick=function(){createPic1(savePic3[i],i,30,savePic3)};
}
if(numOfGame==1)
setInterval("timer()",1000);
}
r=countTime;
}
//פונקצית ההגרלה
function randomaly(u,flagsv){
for(let c=0;c<(u/2);c++)
{ 
  do{
     a=Math.floor(Math.random() *u) + 0;
     }while(flagsv[a]!=0);
  flagsv[a]++;
  do{
     b=Math.floor(Math.random() * u) + 0;
     }while(flagsv[b]!=0);       
  flagsv[b]++;
  // (לפי הרמה)הכנסת 2 התמונות המוגרלות למערך המתאים
  if(u==12)
     {
     displayPic1[a]=pics[c];
     displayPic1[b]=pics[c];
     }
  else if(u==20)
     {
     displayPic2[b]=pics[c];
     displayPic2[a]=pics[c];
     }
  else{
     displayPic3[b]=pics[c];
     displayPic3[a]=pics[c];
     }
}}
//פונקצית המשחק עצמו
function createPic1(savePics,p,g,savePicn){
//בתנאי שלא מצאו כבר את הזוג של הקלף
if(flagsPair[p]==0&&stopTheGame==false&&flip==0){
//בתנאי שלא לחצו על אותו קלף פעמיים
    if(p!=last||countPress%2==0)
{
  //שמירת הקלף בשביל הלחיצה הבאה
last=p;
//אם מספר הלחיצות זוגי לאפס את המערך
if(countPress%2==0)
flags=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//הפיכת הקלף לפי מערך התמונות המתאים
if(g==12)
savePics.style.backgroundImage=displayPic1[p];
if(g==20)
savePics.style.backgroundImage=displayPic2[p];
if(g==30)
savePics.style.backgroundImage=displayPic3[p];
savePics.style.backgroundSize="cover";
savePics.style.backgroundRepeat="no-repeat";
savePicn[p].style.transform=" rotateY(180deg)";
savePicn[p].style.transition=" transform 0.3s";
// savePics.style.transition="all 0.5s ease";
//הגדלת מספר הלחיצות
countPress++;
//הוספה למערך בדיקת הזוגות
flags[p]++;
for(let q=0;q<g;q++)
{//בדיקה האם שתי התמונות שנלחצו שוות
if(g==12&&flags[p]>0&&displayPic1[q]==displayPic1[p]&&flags[q]>0&&p!=q||
   g==20&&flags[p]>0&&displayPic2[q]==displayPic2[p]&&flags[q]>0&&p!=q||
   g==30&&flags[p]>0&&displayPic3[q]==displayPic3[p]&&flags[q]>0&&p!=q)
  { //הוספה למערך ששומר את כל הזוגות שנמצאו
    flagsPair[p]++;
    flagsPair[q]++;
     numOfSets++;
     //הפעלת צליל שמסמן על מציאת זוג
     document.getElementById("audio").play(); 
     //שינויים גרפים בקלפי הזוג
     savePicn[q].style.border="4px violet ridge";
     savePicn[p].style.border="4px violet ridge"
     savePicn[q].style.opacity="0.9"
     savePicn[p].style.opacity="0.9"
     savePicn[p].style.filter="blur(5px)";
     savePicn[q].style.filter="blur(5px)";
    }
}
//הפיכת הקלפים כל 2 לחיצות
if(countPress%2==0&&countPress!=0)
{flip=1;
setTimeout(myFunction,600);}
let c=0;
//אם השחקן מצא את כל הזוגות
if(numOfSets>=(g/2)){
     document.getElementById("header").innerHTML=" 🏅כל הכבוד, מצאת את כל הזוגות🏅";
     document.getElementById("header").style.fontSize="5vw";
     document.getElementById("header").style.color="violet";
    }
//אחרת תעדכן את מספר הזוגות שהוא מצא
else{
    document.getElementById("header").innerHTML=" עד עכשיו מצאת "+numOfSets+" זוגות "+" מתוך "+g/2;
    document.getElementById("header").style.fontSize="6vw";
    document.getElementById("header").style.color="violet";
}
//בדיקה האם נמצאו כל הזוגות
for (let y=0;y<g;y++)
    if(flagsPair[y]>0)
        c++
//במקרה של ניצחון
if(c==g)
{
  numOfWins++;
  win++;
document.getElementById("body").style.animation="shake";
document.getElementById("body").style.animationDuration="0.5s";
// document.getElementById("body").style.animationDelay="3s";
//הפעלת פונקצית הניצחון
if(g==12)
  winner(40);
  if(g==20)
  winner(70);
  if(g==30)
  winner(110);
//הפיכת הקלפים עם הודעת ניצחון עליהם
  for(let s=0;s<g;s++)
    {
     savePicn[s].innerHTML="!!כל הכבוד";
     savePicn[s].style.fontSize="3vw";
     savePicn[s].style.color="white";
     savePicn[s].style.opacity="1";
     savePicn[s].style.filter="blur(0px)";
     savePicn[s].style.transform="rotateY(360deg)";
     savePicn[s].style.transition=" transform 10s";
    }
//עצירת מוזיקת רקע
document.getElementById("audio19").src="123";
//הפעלת מוזיקת ניצחון
document.getElementById("win").play(); 
}
}}
//פונקצית הפיכת הקלפים במקרה שאין זוג
function myFunction(){
  flip=0;
  for(let q=0;q<g;q++)
    if((flagsPair[p]==0&&flagsPair[q]==0))//אם השניםם אינם זוג
{ savePicn[q].style.transform="rotateY(0deg)";
savePicn[q].style.transition=" transform 0.3s";     
   savePicn[q].style.backgroundImage="url(./pics/00.png)";
}
}
}
//פונקצית הפעלת הניצחון
function winner(countTimes){
    let exit;
    //הרעדת חלון הזמן
    document.getElementById("window").style.animation="shake";
    document.getElementById("window").style.animationDuration="4s";
    //הודעת ניצחון
    document.getElementById("v").innerHTML="!!כל הכבוד   <br>"+person+" הזיכרון שלך<br> !!פשוט מצוין<br>עשית זאת תוך:"+(countTimes-countTime)
    +" שניות<br>";
    if((countTimes-countTime)<minTime)
   { minTime=(countTimes-countTime);
    document.getElementById("v").innerHTML+="!!עשית שיא";
    p=person;
    fadeText(document.getElementById("v"),1000);
    
  }
  
    document.getElementById("v").style.display="block";
    document.getElementById("v").style.animation="shake";
    document.getElementById("v").style.backgroundImage= "url(./pics/victory.png)";
    document.getElementById("v").style.backgroundSize= "cover";
    document.getElementById("v").style.animationDuration="6s";
    //יצירת איקס ליציאה מהודעת הניצחון
    exit=document.createElement("div");
    exit.id="exit";
    document.getElementById("v").appendChild(exit);
    exit.innerHTML="x";
    exit.onclick=function(){exitWinBox(exit)};
}
//הצגת השיא
function score(){
  
}
//הפונקיות להצגת הוראות המשחק
btn.onclick = function() {
  modal.style.display = "block";
  if(numOfWins==0)
  document.getElementById("score").innerHTML="-----:הזמן המינימלי הוא"+"<br>"+"-----:השיא נעשה על ידי";
else
document.getElementById("score").innerHTML="הזמן המינימלי הוא: "+minTime+"<br>"+" השיא נעשה על ידי: "+p;
document.getElementById("score").style.fontSize="15px";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//פונקצית יציאה מהודעת הניצחון
 function exitWinBox(exit){
    document.getElementById("v").innerHTML="";
    document.getElementById("v").style.display="none";
 }
 //פונקצית טיימר
 function timer(){
if(countTime==0&&stopTheGame==false)
{  clearInterval();
  loseTheGame();
}
else if(win==0&&stopTheGame==false&&numOfGame%numOfGame==0)
{
  document.getElementById("window").style.color="white";
  widths+=(100/r);
  document.getElementById("line").style.width=(widths-1)+"%";
  countTime--;
  if(countTime<=10&&countTime%2==0)
  document.getElementById("window").style.color="red";
  if(countTime<=10&&countTime%2==1)
  document.getElementById("window").style.color="rgb(246, 124, 124)";

//עדכון חלון הטיימר בכל שניה
document.getElementById("window").innerHTML=countTime;
}
else
clearInterval();
}
//הודעת במקרה שתם הזמן לפני הניצחון
function loseTheGame(){
  stopTheGame=true;
  document.getElementById("v").innerHTML="חבל מאוד"+"<br>"+"הזמן תם לא הספקת"+"<br>"+"למצוא את כל הקלפים"+"<br>"+"?נסה שוב,אולי תצליח" ;
  document.getElementById("v").style.display="block";
  document.getElementById("v").style.backgroundImage= "url(./pics/loser.png)";
  document.getElementById("v").style.backgroundSize= "cover";
  document.getElementById("v").style.animation="shake";
  document.getElementById("v").style.animationDuration="6s";
  //יצירת איקס ליציאה מהודעת הניצחון
  exit=document.createElement("div");
  exit.id="exit";
  document.getElementById("v").appendChild(exit);
  exit.innerHTML="x";
  exit.onclick=function(){exitWinBox(exit)};
}
//פןנקציה שגורמת להודעת הניצחון להבהב במקרב שיש שיא
function fadeText(element, duration) {
  let color = ["lightyellow","lightpink","lightgreen","lightblue","lightyellow","lightpink","lightgreen","lightblue",
  "lightyellow","lightpink","lightgreen","lightblue","lightyellow","lightpink","lightgreen","lightblue"];
  let len=color.length-1;
  const interval = setInterval(() => {
  element.style.backgroundColor = color[len];
  len --;
  if (len < 0) {
  clearInterval(interval);
  }
  }, duration/10);
  }
