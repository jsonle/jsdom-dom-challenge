let timer = document.getElementById("counter").innerText;
let likesElement = document.querySelector("ul.likes");
const up = document.getElementById("+");
const down = document.getElementById("-");
const like = document.getElementById("<3");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");
const buttons = document.querySelectorAll("button");
const comments = document.getElementById("list");
const inputElement = document.querySelector("input");
let commentList = document.createElement("ul");

function timerIncrement() {
    parseInt(timer);
    timer ++;
    document.getElementById("counter").innerText = `${timer}`;
}

function timerDecrement() {
    parseInt(timer);
    timer --;
    document.getElementById("counter").innerText = `${timer}`;
}

function likesIncrement() {

    if (document.getElementById(timer) === null) {
        timeItem = document.createElement("li");
        timeItem.id = timer;
        timeItem.innerText = `${timeItem.id} has 1 like`;
        likesElement.appendChild(timeItem);
    } else {
        timeItem = document.getElementById(timer);
        currentLikes = timeItem.innerText.split(" ")[2];
        parseInt(currentLikes);
        currentLikes ++;
        timeItem.innerText = `${timeItem.id} has ${currentLikes} likes`;
    }

    
}

function pauseGame() {
    if (up.disabled === false && down.disabled === false && like.disabled === false) {
        up.disabled = true;
        down.disabled = true;
        like.disabled = true;
        pause.innerText = "resume";
        clearInterval(timeStart)
    } else {
        up.disabled = false;
        down.disabled = false;
        like.disabled = false;
        pause.innerText = "pause";
        setInterval(timerIncrement, 1000);
    }
}

function addComment(event) {
    newComment = document.createElement("li");
    newComment.innerText = document.getElementById("comment").value;
    commentList.appendChild(newComment);
    comment = document.getElementById("comment").value = "";
    event.preventDefault();
}


let timeStart = setInterval(timerIncrement, 1000);

up.addEventListener("click", timerIncrement);

down.addEventListener("click", timerDecrement);

like.addEventListener("click", likesIncrement);

pause.addEventListener("click", pauseGame);

inputElement.id = "comment";
comments.appendChild(commentList);

submit.addEventListener("click", addComment);
