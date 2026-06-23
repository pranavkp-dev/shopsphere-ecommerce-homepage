const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);

function updateCountdown(){

const now = new Date();

const diff = targetDate - now;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(
(diff%(1000*60*60*24))/(1000*60*60)
);

const minutes = Math.floor(
(diff%(1000*60*60))/(1000*60)
);

const seconds = Math.floor(
(diff%(1000*60))/1000
);

document.getElementById("countdown").innerHTML=
`${days}D : ${hours}H : ${minutes}M : ${seconds}S`;

}

setInterval(updateCountdown,1000);


const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}

};

topBtn.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};