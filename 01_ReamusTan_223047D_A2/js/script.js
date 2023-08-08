//Navigation from Index
var IdxtoHPg = document.querySelector("#IdxTitle1");
var IdxtoMPg = document.querySelector("#IdxTitle2");
var IdxtoPPg = document.querySelector("#IdxTitle3");
var AllIndextoPgImg = document.querySelectorAll(".IdxIcon");
var AllIndextoPgDesc = document.querySelectorAll(".IdxDesc");

IdxtoHPg.addEventListener("mouseover", function () {
    IndexFadeIn(0);
});
IdxtoMPg.addEventListener("mouseover", function () {
    IndexFadeIn(1);
});
IdxtoPPg.addEventListener("mouseover", function () {
    IndexFadeIn(2);
});

IdxtoHPg.addEventListener("mouseout", function () {
    IndexFadeOut(0);
});
IdxtoMPg.addEventListener("mouseout", function () {
    IndexFadeOut(1);
});
IdxtoPPg.addEventListener("mouseout", function () {
    IndexFadeOut(2);
});
function IndexFadeIn(ButtonNumber)
{
    let id = null;
    let opac = 0;
    clearInterval(id);
    id = setInterval(FadingIn, 5);
    function FadingIn()
    {
        if (opac == 100)
        {
            clearInterval(id);
        }
        else
        {
            opac++;
            AllIndextoPgImg[ButtonNumber].style.opacity = opac/100;
            AllIndextoPgDesc[ButtonNumber].style.opacity = opac/100;
        }
    }
}
function IndexFadeOut(ButtonNumber)
{
    AllIndextoPgImg[ButtonNumber].style.opacity = 0;
    AllIndextoPgDesc[ButtonNumber].style.opacity = 0;
}

IdxtoHPg.addEventListener("click", function () {
    ShowSubtopicPage(1);
});
IdxtoMPg.addEventListener("click", function () {
    ShowSubtopicPage(2);
});
IdxtoPPg.addEventListener("click", function () {
    ShowSubtopicPage(3);
});

//Navigation from Subtopics
var IndexPg = document.querySelector("#IdxPage");
console.log(IndexPg);
var SubtopicPg=document.querySelectorAll(".TopicPage");

const HistToIndex = document.querySelector("#BtnIPg1");
const HistToHist = document.querySelector("#BtnHPg1");
const HistToMedia = document.querySelector("#BtnMPg1");
const HistToGame = document.querySelector("#BtnPPg1");


HistToIndex.addEventListener("click", function (){
    ShowIndexPage();
});

HistToHist.addEventListener("click", function (){
    ShowSubtopicPage(1);
});

HistToMedia.addEventListener("click", function (){
    ShowSubtopicPage(2);
});

HistToGame.addEventListener("click", function (){
    ShowSubtopicPage(3);
});

const MediatoIndex = document.querySelector("#BtnIPg2");
const MediatoHist = document.querySelector("#BtnHPg2");
const MediatoMedia = document.querySelector("#BtnMPg2");
const MediatoGame = document.querySelector("#BtnPPg2");


MediatoIndex.addEventListener("click", function (){
    ShowIndexPage();
});

MediatoHist.addEventListener("click", function (){
    ShowSubtopicPage(1);
});

MediatoMedia.addEventListener("click", function (){
    ShowSubtopicPage(2);
});

MediatoGame.addEventListener("click", function (){
    ShowSubtopicPage(3);
});

const PlaytoIndex = document.querySelector("#BtnIPg3");
const PlaytoHist = document.querySelector("#BtnHPg3");
const PlaytoMedia = document.querySelector("#BtnMPg3");
const PlaytoGame = document.querySelector("#BtnPPg3");

PlaytoIndex.addEventListener("click", function (){
    ShowIndexPage();
});

PlaytoHist.addEventListener("click", function (){
    ShowSubtopicPage(1);
});

PlaytoMedia.addEventListener("click", function (){
    ShowSubtopicPage(2);
});

MediatoGame.addEventListener("click", function (){
    ShowSubtopicPage(3);
});

function HidePages()
{
    IndexPg.classList.add("Blank");
    IndexPg.classList.remove("IndexPage");
    for(let onepage of SubtopicPg){ //go through all subtopic pages
        onepage.classList.add("Blank"); 
        onepage.classList.remove("TopicPage");//hide it
    }
}

function ShowSubtopicPage(PageNumber)
{
    HidePages();
    let PagetoShow = document.querySelector("#TopicPage"+PageNumber);
    PagetoShow.classList.remove("Blank"); 
    PagetoShow.classList.add("TopicPage");
}

function ShowIndexPage()
{
    HidePages();
    IndexPg.classList.remove("Blank");
    IndexPg.classList.add("IndexPage");
    console.log("runs");
}

//History
var HistIcon1 = document.querySelector("#Edition1");
var HistIcon2 = document.querySelector("#Edition2");
var HistIcon3 = document.querySelector("#Edition3");
var HistIcon4 = document.querySelector("#Edition4");

HistIcon1.addEventListener("click", function (){
    ChangeDesc(1);
});
HistIcon2.addEventListener("click", function (){
    ChangeDesc(2);
});
HistIcon3.addEventListener("click", function (){
    ChangeDesc(3);
});
HistIcon4.addEventListener("click", function (){
    ChangeDesc(4);
});

function ChangeDesc (number) {
    if (number == 1)
    {
        document.querySelector("#HistHeader").style.color = "Aliceblue";
        document.querySelector("#HistDesc").style.color = "Aliceblue";
        document.querySelector("#HistDesc").innerHTML = "Published in 1988, Cyberpunk 2013 is the original and oldest edition of the game, its story set in its namesake. It used the Fuzion game system.";
    }
    if (number == 2)
    {
        document.querySelector("#HistHeader").style.color = "Darksalmon";
        document.querySelector("#HistDesc").style.color = "Darksalmon";
        document.querySelector("#HistDesc").innerHTML = "Cyberpunk 2020 is the second edition to come along, published in 1990, just two years after the game's original release. This time, its story was set in the year, 2020 and featured updated rules for combat, Netrunning and Character Creation.";
    }
    if (number == 3)
    {
        document.querySelector("#HistHeader").style.color = "Chartreuse";
        document.querySelector("#HistDesc").style.color = "Chartreuse";
        document.querySelector("#HistDesc").innerHTML = "In 2005, Cyberpunk V3.0 was published with a story set in a transhumanist setting durring the 2030s after a war. This version included changes to artwork featured as well as the usage of the Interlock game system from the Fuzion system.";
    }
    if (number == 4)
    {
        document.querySelector("#HistHeader").style.color = "Red";
        document.querySelector("#HistDesc").style.color = "Red";
        document.querySelector("#HistDesc").innerHTML = "Cyberpunk Red was published in 2020, set in the year 2045, following the events of Cyberpunk 2020 and serving as a prequel to the video game Cyberpunk 2077. A Cyberpunk Edgerunners Mission Kit based on the anime of the same name is also in development.";
    }
}

