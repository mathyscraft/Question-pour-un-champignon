const flashcard = document.getElementById("flashcard")
const flashcardContainer = document.getElementById("flashcard-container")
const output = document.getElementById("output")
const answer = document.getElementById("answer")
const pointSpan = document.getElementById("points")
const progressBar = document.getElementById("progress-bar")
const progressStat = document.getElementById("progress-stat")
let currentQuestion = {}
const initialQuestionLength = question.length
let points = 0
let count = 0
let playerGirolle = false
let amanitePoints = 0
let girollePoints = 0
let bonusRound = 0
getQuestion()

function getQuestion() {
    if (bonusRound === 0) {
        playerGirolle = !playerGirolle
    } else {
        bonusRound -= 1
    }
    flashcard.classList.remove('is-flipped')
    answer.hidden = true
    output.hidden = false
    flashcard.style.opacity = "0"
    setTimeout(function() {
        flashcard.style.left = "50%"
        flashcard.style.opacity = "1"
         // Choisir une question aléatoire qui n'a pas encore été posée
        let unansweredQuestions = question.filter(q => !q.asked);
        if (unansweredQuestions.length === 0) {
            question = question.filter(q => !q.correct)
            for (i in question) {
                question[i].asked = false
            }
            if (question.length === 0) {
                output.innerHTML = "Bravo, vous avez répondu à toutes les questions !"
                answer.innerHTML = "Recharchez la page pour rejouer"
                return;
            } else if (question.length <= 0.1*initialQuestionLength) {
                progressBar.style.borderColor = "green"
            } else if (question.length <= 0.35*initialQuestionLength) {
                progressBar.style.borderColor = "orange"
            } else {
                progressBar.style.borderColor = "red"
            }
            unansweredQuestions = question.filter(q => !q.asked);
            console.log(question)
        }
        // let randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
        currentQuestion = question[count];
        count += 1

        if (playerGirolle) {
            document.getElementById("girolle").style.borderColor = "gold"
            document.getElementById("amanite").style.borderColor = "cornflowerblue"
        } else {
            document.getElementById("amanite").style.borderColor = "gold"
            document.getElementById("girolle").style.borderColor = "cornflowerblue"
        }

    
        // Afficher la question à l'utilisateur
        output.innerHTML = currentQuestion.texte + '<a id="output-img-link" href="" target="_blank"><img id="output-img" src="" ></a>';
        answer.innerHTML = currentQuestion.reponse + '<a id="answer-img-link" href="" target="_blank"><img id="answer-img" src="" ></a>';
        if (currentQuestion.img != undefined) {
            document.getElementById("output-img-link").href = currentQuestion.img
            document.getElementById("output-img").src = currentQuestion.img
            document.getElementById("output-img").hidden = false
        } else {
            document.getElementById("output-img-link").href = ""
            document.getElementById("output-img").href = ""
            document.getElementById("output-img").hidden = true
        }
        if (currentQuestion.reponseImg != undefined) {
            document.getElementById("answer-img-link").href = currentQuestion.reponseImg
            document.getElementById("answer-img").src = currentQuestion.reponseImg
            document.getElementById("answer-img").hidden = false
        } else {
            document.getElementById("answer-img-link").href = ""
            document.getElementById("answer-img").href = ""
            document.getElementById("answer-img").hidden = true
        }
    
        // Mettre à jour le nombre de questions répondues et marquer la question comme posée
        currentQuestion.asked = true;
        progressBar.style.borderLeftWidth = ((question.length + 1 - unansweredQuestions.length) / question.length) * progressBar.getBoundingClientRect().width + "px"
        progressStat.innerHTML = (question.length + 1 - unansweredQuestions.length) +"/"+ question.length
    }, 800)
}

const soundEffect = document.createElement("audio");
soundEffect.src = "mineria_apothecarium_page_turn.mp3";
soundEffect.play();
soundEffect.pause();
flashcard.addEventListener("click", function() {
    if (flashcard.style.left == "50%") {
        soundEffect.play();
        flashcard.classList.toggle('is-flipped')
        answer.hidden = !answer.hidden
        output.hidden = !output.hidden
    }
})

flashcard.addEventListener("mousedown", function() {
    document.onmousemove = function(e){
        flashcard.style.left = e.clientX + window.scrollX +"px"
    }
})
flashcardContainer.addEventListener("mouseup", function() {
    let flashcardX = flashcard.style.left
    flashcardX = flashcardX.replace("px","")
    if (flashcardX <= 0.3*window.innerWidth) {
        console.log("false")
        currentQuestion.correct = false
        getQuestion()
    } else if (flashcardX > 0.7*window.innerWidth) {
        console.log("correct")

        if (playerGirolle) {
            girollePoints++
            document.getElementById("girolle-points").innerHTML = girollePoints
        } else {
            amanitePoints++
            document.getElementById("amanite-points").innerHTML = amanitePoints
        }
        currentQuestion.correct = true
        getQuestion()
    } else {
        setTimeout(function() {
            flashcard.style.left = "50%"
        }, 100)
    }
    document.onmousemove = function() {return}
})

flashcard.addEventListener("touchstart", function() {
    document.ontouchmove = function(e){
      flashcard.style.left = e.touches[0].clientX + window.pageXOffset + "px";
    }
  })
  
  flashcardContainer.addEventListener("touchend", function() {
    let flashcardX = flashcard.style.left.replace("px", "");
    if (flashcardX <= 0.3*window.innerWidth) {
        console.log("false")
        currentQuestion.correct = false
        getQuestion()
    } else if (flashcardX > 0.7*window.innerWidth) {
        console.log("correct")
        if (playerGirolle) {
            girollePoints++
            document.getElementById("girolle-points").innerHTML = girollePoints
        } else {
            amanitePoints++
            document.getElementById("amanite-points").innerHTML = amanitePoints
        }
        currentQuestion.correct = true
        getQuestion()
    } else {
      setTimeout(function() {
        flashcard.style.left = "50%";
      }, 100);
    }
    document.ontouchmove = function() {return;}
  })

let canPlay = true
document.addEventListener("keypress", function(e) {
    console.log(e)
    if (e.code === "Space") {
    let buzzer = document.createElement("audio");
    buzzer.src = "buzz.mp3";
    if (canPlay) {
        buzzer.play()
        canPlay = false
        setTimeout(function() {
            canPlay = true
        }, 300)
    }
};
});

let canChange = true
document.addEventListener("keypress", function(e) {
    console.log(e)
    if (e.code === "Enter") {
    let malus = document.createElement("audio");
    malus.src = "wrong.mp3";
    if (canChange) {
        malus.play()
        canChange = false
        if (playerGirolle) {
            // playerGirolle = true
            // document.getElementById("girolle").style.borderColor = "gold"
            // document.getElementById("amanite").style.borderColor = "cornflowerblue"
            amanitePoints -= 1
            bonusRound ++
            document.getElementById("amanite-points").innerHTML = amanitePoints
            document.getElementById("amanite").style.backgroundColor = "crimson"
            document.getElementById("amanite").style.borderColor = "crimson"
            setTimeout(function() {
                document.getElementById("amanite").style.backgroundColor = "cornflowerblue"
                document.getElementById("amanite").style.borderColor = "cornflowerblue"
            }, 3000)
        } else {
            // playerGirolle = false
            // document.getElementById("amanite").style.borderColor = "gold"
            // document.getElementById("girolle").style.borderColor = "cornflowerblue"
            girollePoints -= 1
            bonusRound ++
            document.getElementById("girolle-points").innerHTML = girollePoints            
            document.getElementById("grirolle").style.backgroundColor = "crimson"
            document.getElementById("grirolle").style.borderColor = "crimson"
            setTimeout(function() {
                document.getElementById("grirolle").style.borderColor = "cornflowerblue"
                document.getElementById("girolle").style.backgroundColor = "cornflowerblue"
            }, 3000)
        }

        setTimeout(function() {
            canChange = true
        }, 1000)
    }   
};
});
