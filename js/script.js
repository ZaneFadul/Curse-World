var continents = ["na","sa","af","eu","as","au"];

//ok so i need to have multidimensional arrays that have the soundfile and the blurb
//na
var na1words = [["usa1.wav","Crap originated from Thomas Crapper, the famous plumber who was best known as an advocate of sanitary plumbing in London in the 1910s "],["mexico1.wav",""],["hawaii1.wav","In the USA, Hawaii ranks #51 as the state that curses the least. (Washington DC counted as a state)"]];
var na2words = [["usa2.wav",""],["mexico2.wav","“maricon” - gay man"],["hawaii2.wav","“hūpō” = stupid"]];
var na3words = [["usa3.wav","Shit is the most popular swear word used on Facebook."],["mexico3.wav",""],["hawaii1.wav","In the USA, Hawaii ranks #51 as the state that curses the least. (Washington DC counted as a state)"]];
var na4words = [["usa4.wav","In the USA, Virginia ranks #1 as the state that curses the most. "],["mexico4.wav","“chinga tu madre” -  fuck your mother"],["hawaii2.wav","“hūpō” = stupid"]];
var na5words = [["usa5.wav","In ancient times in the United Kingdom, inhabitants were not allowed to have sex without. The royal party will give signs to hang on the door of the couple during their relationship. The sign reads \"Fornication Under Consent of the King\" or abbreviated as F.U.C.K."],["mexico5.wav","“verga” -  penis"],["hawaii2.wav","“hūpō” = stupid"]];

//sa
var sa1words = [["ecuador1.wav","Many spanish speaking countries have curse words specific to their country; however, carajo is universal."]];
var sa2words = [["ecuador2.wav","“marica” - gay man"]];
var sa3words = [["ecuador3.wav","“chucha to madre” - fuck your mother  "]];
var sa4words = [["ecuador4.wav",""]];
var sa5words = [["ecuador5.wav",""]];

//as
var as1words = [["china1.wav","“靠” - It used to mean “butt” in Mandarin. Today, however, this Taiwanese colloquialism is closely associated to “holy shit!”"],["korea1.wav"," "]];
var as2words = [["china2.wav",""],["korea2.wav","“닥쳐 dackcheo” - shut up "]];
var as3words = [["china3.wav","“傻屄” - 屄 bī means vagina. 傻 shǎ means fool = foolish vagina"],["korea3.wav"," "]];
var as4words = [["china4.wav","“操他妈的” - although it has mother in the saying, it has nothing to do with mothers and is usually used as the equivalent of “fuck that shit” "],["korea4.wav","Due to the extensive time that the two countries have been separate, North and South Korean are different and have evolved to have distinct vocabularies, pronunciations, and even grammatical rules."]];
var as5words = [["china5.wav","Profanity in Mandarin Chinese most commonly involves sexual references and scorn of the object's ancestors, especially their mother."],["korea5.wav","“씨발 ssibal” - the most common curse word in South Korea "]];

//af
var af1words = [["ethiopia1.wav",""]];
var af2words = [["ethiopia2.wav","There are upwards of 84 dialects spoken in Ethiopia! Despite the fact that the official dialect is Amharic, numerous Ethiopians talk a neighborhood dialect."]];
var af3words = [["ethiopia3.wav","እናትህንና(Enatihinina) - Motherfucker"]];
var af4words = [["ethiopia4.wav","Ethiopia is among the oldest countries on the planet, having been established in 980 B.C."]];
var af5words = [["ethiopia5.wav","ሸርሙጣ(shermuta) - Prostitute"]];

//eu
var eu1words = [["norway1.wav",""],["poland1.wav","“kurcze” - chicken"]];
var eu2words = [["norway2.wav","“Herregud” - oh my god"],["poland2.wav","“Cholera” - Cholera is an infectious disease that causes severe watery diarrhea, which can lead to dehydration and even death if untreated."]];
var eu3words = [["norway3.wav","“Jækla søkk” - Fucking sock"],["poland3.wav","Poland is One of the Most Religious Countries in Europe and is a proud owner of the tallest statue of Jesus in the world"]];
var eu4words = [["norway4.wav","Offensiveness of the profanities in Norway is not constant and vary between regions."],["poland4.wav",""]];
var eu5words = [["norway5.wav","“Fuck” in Norwegian is often spelled as \"føkk\". "],["poland5.wav","“kurwa mac” - mother is a whore"]];

//au
var au1words = [["australia1.wav","“Bugger off” - “Bugger” is common in both Aussie and British slang, and vaguely refers to someone or something that is annoying. Calling someone a bugger can be used both affectionately or derogatorily! "]];
var au2words = [["australia2.wav","“get stuffed” - Like a firmer version of \"Get lost\", the phrase is an easy substitute for telling someone to “piss off”, or to shove it in a certain place."]];
var au3words = [["australia3.wav","Dickhead = dickhead"]];
var au4words = [["australia4.wav","“Ya soft cock” - the word “rooster” was invented to avoid saying cock. Beforehand, a rooster was called a cock, but as “cock” became more and more used as a term for the male sexual organ, it became more and more awkward to use it as a term for the animal. So a new word took its place in this capacity."]];
var au5words = [["australia5.wav","“Fuckwit” - The world record for most F-bombs in a movie goes to The Wolf of Wall Street, with the word being used 506 times."]];

//create a variable for prompt counter
var promptCount = 0;

var createdContinent = document.getElementById("na");
createdContinent.addEventListener('click', function(){mouseClick("na")});
var createdContinent = document.getElementById("sa");
createdContinent.addEventListener('click', function(){mouseClick("sa")});
var createdContinent = document.getElementById("af");
createdContinent.addEventListener('click', function(){mouseClick("af")});
var createdContinent = document.getElementById("eu");
createdContinent.addEventListener('click', function(){mouseClick("eu")});
var createdContinent = document.getElementById("as");
createdContinent.addEventListener('click', function(){mouseClick("as")});
var createdContinent = document.getElementById("au");
createdContinent.addEventListener('click', function(){mouseClick("au")});

function mouseClick(continentName){
  changeMouse();
  if (document.getElementById(continentName) != null){
    //prompt the user
  switch(continentName){
    case("na"):
    promptUser("Now Entering: North America");
    break;
    case("sa"):
    promptUser("Now Entering: South America");
    break;
    case("as"):
    promptUser("Now Entering: Asia");
    break;
    case("af"):
    promptUser("Now Entering: Africa");
    break;
    case("as"):
    promptUser("Now Entering: Asia");
    break;
    case("eu"):
    promptUser("Now Entering: Europe");
    break;
    case("au"):
    promptUser("Now Entering: Australia");
    break;
  }
  //get rid of other countries animation
  for(var i = 0; i < continents.length; i++){
    if(continents[i] != continentName){
      document.getElementById(continents[i]).style.animation = "remove 1s";
      document.getElementById(continents[i]).style.webkitAnimationDelay = String(i/8) + "s";
      document.getElementById(continents[i]).style.animationDelay = String(i/8) + "s";
      document.getElementById(continents[i]).style.webkitAnimationFillMode = "forwards";
      document.getElementById(continents[i]).style.animationFillMode = "forwards";
    }
  }
  //ButtonAdd
  document.getElementById("backButton").style.animation = "revealButton 1.5s";
  document.getElementById("backButton").style.webkitAnimationFillMode = "forwards";
  document.getElementById("backButton").style.animationFillMode = "forwards";
  document.getElementById("backButton").style.webkitAnimationDelay = "1s";
  document.getElementById("backButton").style.animationDelay = "1s";
  //Change selected country
  document.getElementById(continentName).id = continentName + "Active";
  document.getElementById(continentName + "Active").style.animation = "feature" + continentName + " 2s";
  document.getElementById(continentName + "Active").style.animationFillMode = "forwards";
  document.getElementById(continentName + "Active").style.webkitAnimationFillMode = "forwards";
  //Feature HEAD
  document.getElementById("head").style.animation = "featureHead 2s";
  document.getElementById("head").style.webkitAnimationFillMode = "forwards";
  document.getElementById("head").style.animationFillMode = "forwards";
  document.getElementById("head").style.transform = "translate(400px,-1550px) scale(0.25)";
}
}

function promptUser(string){
  var toAdd = document.createElement("div");
  toAdd.id = "promptAnimation" + String(promptCount);
  toAdd.style.opacity = "0";
  toAdd.style.animation = "prompt 8s";
  toAdd.style.webkitAnimationDelay = "0.1s";
  toAdd.style.animationDelay = "0.1s";
  var headingBox = document.getElementById("headingBox");
  headingBox.insertBefore(toAdd, headingBox.firstElementChild);
  var prompt = document.createElement("p");
  prompt.innerHTML = string;
  document.getElementById("promptAnimation" + String(promptCount)).appendChild(prompt);
  promptCount += 1;
}

function goBack(){
  changeMouse();
  promptUser("Returning to: The World of Profanity")
  for(var i = 0; i < continents.length; i++){
        if(document.getElementById(continents[i] + "Active") == null){
        document.getElementById(continents[i]).style.animation = "return 1s";
        document.getElementById(continents[i]).style.webkitAnimationFillMode = "forwards";
        document.getElementById(continents[i]).style.animationFillMode = "forwards";
      }
  }
  document.getElementById("backButton").style.animation = "returnButton 1.5s";
  document.getElementById("backButton").style.webkitAnimationFillMode = "forwards";
  document.getElementById("backButton").style.animationFillMode = "forwards";
  for(var i = 0; i < continents.length; i++){
    if(document.getElementById(continents[i] + "Active") != null){
      document.getElementById(continents[i]+"Active").id = continents[i];
      document.getElementById(continents[i]).style.animation = "return" + continents[i] + " 1s";
      document.getElementById(continents[i]).style.animationFillMode = "forwards";
      document.getElementById(continents[i]).style.webkitAnimationFillMode = "forwards";
    }
  }
  //remove HEAD
  document.getElementById("head").style.animation = "removeHead 2s";
  document.getElementById("head").style.webkitAnimationFillMode = "forwards";
  document.getElementById("head").style.animationFillMode = "forwards";
}

//SLAPPING CALCULATIONS!!!
var speed = 0;

var prevEvent, currentEvent;
document.documentElement.onmousemove=function(event){
  currentEvent=event;
}

var maxSpeed=0,prevSpeed=0;
setInterval(function(){
  if(prevEvent && currentEvent){
    movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
    var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
    var movement=Math.sqrt(movementX*movementX+movementY*movementY);
    speed=10*movement;//current speed
  }
  prevEvent=currentEvent;
  prevSpeed=speed;
},100);

//Slapping stuff
var slapState = false;

//SLAPPING STUFF

function resetSlap(){
  slapState = false;
  document.getElementById("head").style.animation = "stay 0s";
  document.getElementById("head").style.animationFillMode = "forwards";
  document.getElementById("head").style.webkitAnimationFillMode = "forwards";
}

function performSlap(){
  if (slapState != true){
  document.getElementById("head").style.animation = "slap 0.5s";
  document.getElementById("head").style.animationFillMode = "forwards";
  document.getElementById("head").style.webkitAnimationFillMode = "forwards";
    slapState = true;
  if (speed >= 1000){
    var slap = new Audio("audio/slap.wav");
    slap.play();
  var playIndex = Math.floor(Math.random() * Math.floor(3));
  for(var i = 0; i < continents.length; i++){
        if(document.getElementById(continents[i] + "Active") != null){
          var continentName = continents[i];
        }
      }
//blocks depending on speed
  if (speed >= 1000 && speed < 4000){ //category 1 words
  //switch case for continent name
  //playIndex randomize until number is a valid index
  //play the first index of the object
  //prompt user second index of the object
  switch(continentName){
    case("na"):
    var playIndex = Math.floor(Math.random() * Math.floor(2));
    var audio = new Audio("audio/" + na1words[playIndex][0])
    audio.play();
    promptUser(na1words[playIndex][1]);
    break;

    case("sa"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + sa1words[playIndex][0])
    audio.play();
    promptUser(sa1words[playIndex][1]);
    break;

    case("as"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + as1words[playIndex][0])
    audio.play();
    promptUser(as1words[playIndex][1]);
    break;

    case("af"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + af1words[playIndex][0])
    audio.play();
    promptUser(af1words[playIndex][1]);
    break;

    case("eu"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + eu1words[playIndex][0])
    audio.play();
    promptUser(eu1words[playIndex][1]);
    break;

    case("au"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + au1words[playIndex][0])
    audio.play();
    promptUser(au1words[playIndex][1]);
    break;
  }
}
  if (speed >= 4000 && speed < 5500){ //category 2 words
  //switch case for continent name
  //playIndex randomize until number is a valid index
  //play the first index of the object
  //prompt user second index of the object
  switch(continentName){
    case("na"):
    var playIndex = Math.floor(Math.random() * Math.floor(2));
    var audio = new Audio("audio/" + na2words[playIndex][0])
    audio.play();
    promptUser(na2words[playIndex][1]);
    break;

    case("sa"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + sa2words[playIndex][0])
    audio.play();
    promptUser(sa2words[playIndex][1]);
    break;

    case("as"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + as2words[playIndex][0])
    audio.play();
    promptUser(as2words[playIndex][1]);
    break;

    case("af"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + af2words[playIndex][0])
    audio.play();
    promptUser(af2words[playIndex][1]);
    break;

    case("eu"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + eu2words[playIndex][0])
    audio.play();
    promptUser(eu2words[playIndex][1]);
    break;

    case("au"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + au2words[playIndex][0])
    audio.play();
    promptUser(au2words[playIndex][1]);
    break;
  }
}
  if (speed >= 5500 && speed < 7000){ //category 3 words
  //switch case for continent name
  //playIndex randomize until number is a valid index
  //play the first index of the object
  //prompt user second index of the object
  switch(continentName){
    case("na"):
    var playIndex = Math.floor(Math.random() * Math.floor(2));
    var audio = new Audio("audio/" + na3words[playIndex][0])
    audio.play();
    promptUser(na3words[playIndex][1]);
    break;

    case("sa"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + sa3words[playIndex][0])
    audio.play();
    promptUser(sa3words[playIndex][1]);
    break;

    case("as"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + as3words[playIndex][0])
    audio.play();
    promptUser(as3words[playIndex][1]);
    break;

    case("af"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + af3words[playIndex][0])
    audio.play();
    promptUser(af3words[playIndex][1]);
    break;

    case("eu"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + eu3words[playIndex][0])
    audio.play();
    promptUser(eu3words[playIndex][1]);
    break;

    case("au"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + au3words[playIndex][0])
    audio.play();
    promptUser(au3words[playIndex][1]);
    break;
  }
}
  if (speed >= 7000 && speed < 9000){ //category 4 words
  //switch case for continent name
  //playIndex randomize until number is a valid index
  //play the first index of the object
  //prompt user second index of the object
  switch(continentName){
    case("na"):
    var playIndex = Math.floor(Math.random() * Math.floor(2));
    var audio = new Audio("audio/" + na4words[playIndex][0])
    audio.play();
    promptUser(na4words[playIndex][1]);
    break;

    case("sa"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + sa4words[playIndex][0])
    audio.play();
    promptUser(sa4words[playIndex][1]);
    break;

    case("as"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + as4words[playIndex][0])
    audio.play();
    promptUser(as4words[playIndex][1]);
    break;

    case("af"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + af4words[playIndex][0])
    audio.play();
    promptUser(af4words[playIndex][1]);
    break;

    case("eu"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + eu4words[playIndex][0])
    audio.play();
    promptUser(eu4words[playIndex][1]);
    break;

    case("au"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + au4words[playIndex][0])
    audio.play();
    promptUser(au4words[playIndex][1]);
    break;
  }
}
  if (speed >= 9000){ //category 5 words
  //switch case for continent name
  //playIndex randomize until number is a valid index
  //play the first index of the object
  //prompt user second index of the object
  switch(continentName){
    case("na"):
    var playIndex = Math.floor(Math.random() * Math.floor(2));
    var audio = new Audio("audio/" + na5words[playIndex][0])
    audio.play();
    promptUser(na5words[playIndex][1]);
    break;

    case("sa"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + sa5words[playIndex][0])
    audio.play();
    promptUser(sa5words[playIndex][1]);
    break;

    case("as"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + as5words[playIndex][0])
    audio.play();
    promptUser(as5words[playIndex][1]);
    break;

    case("af"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + af5words[playIndex][0])
    audio.play();
    promptUser(af5words[playIndex][1]);
    break;

    case("eu"):
    var playIndex = Math.floor(Math.random() * Math.floor(1));
    var audio = new Audio("audio/" + eu5words[playIndex][0])
    audio.play();
    promptUser(eu5words[playIndex][1]);
    break;

    case("au"):
    var playIndex = Math.floor(Math.random() * Math.floor(0));
    var audio = new Audio("audio/" + au5words[playIndex][0])
    audio.play();
    promptUser(au5words[playIndex][1]);
    break;
  }
}
}
}
}

//Turn cursor into hand
var mouseChanged = false;

function changeMouse(){
  if(mouseChanged === false){
    mouseChanged = true;
    document.body.style.cursor = "grab";
  }
  else{
    mouseChanged = false;
    document.body.style.cursor = "auto";
  }
}
