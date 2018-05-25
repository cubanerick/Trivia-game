$(document).ready(function() {
    var QandAArr = [
    { question: 'In "Sonic the Hedgehog" for the Sega Genesis, what is the color of the second Chaos Emerald you can get from Special Stages?',
    correct_answer: "Orange",
    incorrect_answers: [
    "Blue",
    "Green",
    "Magenta"
    ],
    Image:"<img src='https://humblebundle.imgix.net/misc/files/hashed/59c7a44fb3afd175bb56d72193d8da2c107e5a4b.jpg?auto=compress,format&fit=crop&h=425&w=741&s=2dd85ab5309a2a4ca2716db0cd63c84b'/>"
    },
    {question: "Before Super Smash Bros. contained Nintendo characters, what was it known as internally?",
    correct_answer: "Dragon King: The Fighting Game",
    incorrect_answers: [
    "Contest of Champions",
    "Smash and Pummel",
    "Fighter of the Ages: Conquest"
    ],
    Image:"<img src='https://lostmediawiki.com/images/f/f7/Dragon_king_2.jpg'/>"
    },
    {question: "In Halo 2, how many rounds does the M6C hold in a single magazine?",
    correct_answer: "12",
    incorrect_answers: [
    "6",
    "36",
    "18"
    ],
    Image:"<img src='https://vignette.wikia.nocookie.net/halo/images/5/5b/HTMCC-H2A-Cutscenes_M6C_Transparent.png/revision/latest?cb=20150324081342'/>"
    },
    {question: "In the original DOOM (1993) which of the following is NOT a cheat code?",
    correct_answer: "IDCLIP",
    incorrect_answers: [
    "IDFA",
    "IDDQD",
    "IDSPISPOPD"
    ],
    Image:"<img src='http://www.cubed3.com/media/2016/April/doom1pc6.jpg'/>"
    },
    {question: 'In which game did the character "Mario" make his first appearance?',
    correct_answer: "Donkey Kong",
    incorrect_answers: [
    "Super Mario Bros.",
    "Super Mario Land",
    "Mario Bros."
    ],
    Image:"<img src='https://www.destructoid.com/ul/user/1/160366-400267-DonkeyKongarcadePNG-noscale.jpg'/>"
    },
    {question: 'Who voices Max Payne in the 2001 game "Max Payne"?',
    correct_answer: "James McCaffrey",
    incorrect_answers: [
    "Sam Lake",
    "Troy Baker",
    "Hideo Kojima"
    ],
    Image:"<img src='https://www.picsofcelebrities.com/celebrity/james-mccaffrey/pictures/large/pictures-of-james-mccaffrey.jpg'/>"
    },
    {question: 'What device allows Tracer to manipulate her own time in the game "Overwatch"?',
    correct_answer: "Chronal Accelerator",
    "incorrect_answers": [
    "B.L.I.N.K",
    "Spacial Displacement Manipulator",
    "TMD (Time Manipulation Device)"
    ],
    Image:"<img src='https://images-na.ssl-images-amazon.com/images/I/61lFbdj9lIL._SY550_.jpg'/>"
    },
    {question: "Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?",
    correct_answer: "Policenauts",
    incorrect_answers: [
    "Gradius",
    "Contra",
    "Castlevania: Symphony of the Night"
    ],
    Image:"<img src='https://vignette.wikia.nocookie.net/metalgear/images/7/7a/MGS4MerylPP.png/revision/latest?cb=20131222064410'/>"
    },
    {question: 'In the beta version of the 1986 game "The Legend of Zelda" players have the choice between a sword and what other item?',
    correct_answer: "Boomerang ",
    incorrect_answers: [
    "Spear",
    "Slingshot",
    "Crossbow"
    ],
    Image:"<img src='https://vignette.wikia.nocookie.net/zelda/images/e/eb/Link_en_combate_contra_los_Stalfos.jpg/revision/latest?cb=20140419230811&path-prefix=es'/>"
    },
    {question: "What was the first PlayStation game to require the use of the DualShock controller?",
    correct_answer: "Ape Escape",
    incorrect_answers: [
    "Metal Gear",
    "Tekken ",
    "Tomba 2!"
    ],
    Image:"<img src='https://images-na.ssl-images-amazon.com/images/I/515E95SX7TL._SX342_.jpg'/>"
    }]


    var timer = 10;
    var intervalId;
    var qnum = 0;
    var correctanswers = 0;
    var incorrectanswers = 0;
    $(".restart").hide();
    $(".answers").hide();
    $("#jumbo").hide();
    $("#timer").hide();

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    };

    function decrement(){
        $("#timer").text(timer);
        timer--;
        if(timer === 0){
            incorrectanswer();
        }
    }

    function emptyall(){
        $("#question").empty();
        $("#timer").empty();
        $("button").hide();
        $("#showanswer").empty();
    }

    function newquestion(){
        emptyall();
        $("button").show();
        $(".restart").hide();
        $(".start").hide();
        $("#jumbo").show();
        $("#startImage").hide();
        $("#timer").show();
        if(qnum <10){
        
        intervalId = setInterval(decrement, 1000)
        

        $("#question").text(QandAArr[qnum].question)

        var ar = ["a","b","c","d"]
        var newar = shuffle(ar)

        $("#" + newar[0]).text(QandAArr[qnum].correct_answer).attr("class","correct btn btn-outline-dark btn-block")
        $("#" + newar[1]).text(QandAArr[qnum].incorrect_answers[0]).attr("class","incorrect btn btn-outline-dark btn-block")
        $("#" + newar[2]).text(QandAArr[qnum].incorrect_answers[1]).attr("class","incorrect btn btn-outline-dark btn-block")
        $("#" + newar[3]).text(QandAArr[qnum].incorrect_answers[2]).attr("class","incorrect btn btn-outline-dark btn-block")
        

        }

        else{
            endgame();
        }
    }

    function endgame(){
        emptyall();
        $(".restart").show();
        $("#jumbo").hide();
        $("#startImage").show();
        clearInterval(intervalId)
        $("#showanswer").append("Incorrect Answer Count: " + incorrectanswers + "<br><br><br>");
        $("#showanswer").append("Correct Answer Count: " + correctanswers);
    }

    function incorrectanswer(){
        clearInterval(intervalId);
        timer = 10;
        emptyall();
        $("#jumbo").hide();
        $("#timer").hide();       
        $("#showanswer").html("Wrong Answer, here's a hint: ");
        $("#showanswer").append(QandAArr[qnum].Image)
        incorrectanswers++;
        qnum++;  
        setTimeout(newquestion,3000);
    }


    function correctanswer(){
        clearInterval(intervalId);
        timer = 10;
        emptyall();
        $("#jumbo").hide(); 
        $("#timer").hide();      
        $("#showanswer").html("Thats Correct!! ");
        $("#showanswer").append(QandAArr[qnum].Image)
        correctanswers++;
        qnum++; 
        setTimeout(newquestion,3000); 
    }

    function startGame(){
        $(".start").hide();
        qnum = 0;
        incorrectanswers = 0;
        correctanswers = 0;
        newquestion();
    } 

    $(document).on("click",".correct", correctanswer)
    $(document).on("click",".incorrect", incorrectanswer)
    $(document).on("click",".restart", startGame)
    $(document).on("click",".start", startGame)
});    

    