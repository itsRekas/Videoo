function theater(){
    var cinema=document.getElementById("theater");
    var enter=document.getElementById("entrance");
    enter.style.display="none";
    cinema.style.display="block";
}
function about(){
    var info=document.getElementById("about");
    var enter=document.getElementById("entrance");
    enter.style.display="none";
    info.style.display="block";
}
function contact(){
    var contact=document.getElementById("contact");
    var enter=document.getElementById("entrance");
    enter.style.display="none";
    contact.style.display="block";
}
function theaterback(){
    var cinema=document.getElementById("theater");
    var enter=document.getElementById("entrance");
    enter.style.display="block";
    cinema.style.display="none";
}
function aboutback(){
    var info=document.getElementById("about");
    var enter=document.getElementById("entrance");
    enter.style.display="block";
    info.style.display="none";
}
function contactback(){
    var contact=document.getElementById("contact");
    var enter=document.getElementById("entrance");
    enter.style.display="block";
    contact.style.display="none";
}

const overlayer = document.getElementById('playButton');
const video = document.getElementById('localVideo');
const lens = document.getElementById('lens');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const options = document.getElementById('optionPanel');
let decisionTimeout;

// Show decision panel for first decision
function showFirstDecisionPanel() {
    overlayer.style.display = "block";
    setupFirstDecisionListeners();
    
    decisionTimeout = setTimeout(() => {
        resetVideoTo("./media/Part2.mp4", 33, showFirstDecisionPanel);
    }, 10000); 
}

// Setup event listeners for first decision
function setupFirstDecisionListeners() {
    option1.onclick = handleFirstOption1Click;
    option2.onclick = handleFirstOption2Click;
    option3.onclick = handleFirstOption3Click;
}

// Show decision panel for second decision
function showSecondDecisionPanel() {
    overlayer.style.display = "block";
    setupSecondDecisionListeners();
    
    decisionTimeout = setTimeout(() => {
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel);
    }, 10000);
}

// Setup event listeners for second decision
function setupSecondDecisionListeners() {
    option1.onclick = handleSecondOption1Click;
    option2.onclick = handleSecondOption2Click;
    option3.onclick = handleSecondOption3Click;

    // Styling changes for second decision
    option1.style.width = "40%";
    option1.style.marginLeft = "-4%"
    option2.style.width = "40%";
    option3.style.width = "38%";
    option2.style.marginRight = "0%"

}

// Handle option 1 click (first decision)
function handleFirstOption1Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/part7.mp4";
    video.play();
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part2.mp4", 32, showFirstDecisionPanel);
        video.removeEventListener('ended', onEnded);
    });
}

// Handle option 2 click (first decision)
function handleFirstOption2Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/Part4.mp4";
    video.play();
    video.addEventListener('timeupdate', function onTimeUpdate() {
        if (Math.floor(video.currentTime) === 76) {
            showSecondDecisionPanel();
            video.removeEventListener('timeupdate', onTimeUpdate);
        }
    });
}

// Handle option 3 click (first decision)
function handleFirstOption3Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/Part3.mp4";
    video.play();
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part2.mp4", 33, showFirstDecisionPanel);
        video.removeEventListener('ended', onEnded);
    });
}

// Handle option 1 click (second decision)
function handleSecondOption1Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/part8.mp4";
    video.play();
    video.addEventListener('ended', function onEnded() {
        location.reload(); // Refresh the webpage
    });
}

// Handle option 2 click (second decision)
function handleSecondOption2Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/Part6.mp4";
    video.play();
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel);
        video.removeEventListener('ended', onEnded);
    });
}

// Handle option 3 click (second decision)
function handleSecondOption3Click() {
    clearTimeout(decisionTimeout);
    overlayer.style.display = "none";
    video.src = "./media/Part5.mp4";
    video.play();
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel);
        video.removeEventListener('ended', onEnded);
    });
}

// Reset video to a specific time and show decision panel
function resetVideoTo(src, time, showDecisionPanel) {
    video.src = src;
    video.load();
    video.addEventListener('loadeddata', function onLoadedData() {
        video.currentTime = time;
        video.play();
        showDecisionPanel();
        video.removeEventListener('loadeddata', onLoadedData);
    }, { once: true });
}

// Initial setup
lens.addEventListener('click', function() {
    lens.style.display = "none";
    video.src = "./media/Part2.mp4";
    video.play();
    video.addEventListener('timeupdate', function onTimeUpdate() {
        if (Math.floor(video.currentTime) === 33) {
            showFirstDecisionPanel();
            video.removeEventListener('timeupdate', onTimeUpdate);
        }
    });
});

// Display lens if specific time is reached
video.addEventListener('timeupdate', function onTimeUpdate() {
    if (Math.floor(video.currentTime) === 87 && lens.style.display !== "none") {
        lens.style.display = "block";
        video.removeEventListener('timeupdate', onTimeUpdate);
    }
});
