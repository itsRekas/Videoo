// Function to display the theater section and hide the entrance section
// This function is triggered when the user clicks on the door image in the entrance section.
function theater() {
    // Get the theater section element by its ID
    var cinema = document.getElementById("theater");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Hide the entrance section by setting its display style to 'none'
    enter.style.display = "none";
    // Show the theater section by setting its display style to 'block'
    cinema.style.display = "block";
}

// Function to display the about section and hide the entrance section
// This function is triggered when the user clicks on the info image in the entrance section.
function about() {
    // Get the about section element by its ID
    var info = document.getElementById("about");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Hide the entrance section by setting its display style to 'none'
    enter.style.display = "none";
    // Show the about section by setting its display style to 'block'
    info.style.display = "block";
}

// Function to display the contact section and hide the entrance section
// This function is triggered when the user clicks on the billboard image in the entrance section.
function contact() {
    // Get the contact section element by its ID
    var contact = document.getElementById("contact");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Hide the entrance section by setting its display style to 'none'
    enter.style.display = "none";
    // Show the contact section by setting its display style to 'block'
    contact.style.display = "block";
}

// Function to display the entrance section and hide the theater section
// This function is triggered when the user clicks on the exit image in the theater section.
function theaterback() {
    // Get the theater section element by its ID
    var cinema = document.getElementById("theater");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Show the entrance section by setting its display style to 'block'
    enter.style.display = "block";
    // Hide the theater section by setting its display style to 'none'
    cinema.style.display = "none";
}

// Function to display the entrance section and hide the about section
// This function is triggered when the user clicks on the return button in the about section.
function aboutback() {
    // Get the about section element by its ID
    var info = document.getElementById("about");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Show the entrance section by setting its display style to 'block'
    enter.style.display = "block";
    // Hide the about section by setting its display style to 'none'
    info.style.display = "none";
}

// Function to display the entrance section and hide the contact section
// This function is triggered when the user clicks on the back button in the contact section.
function contactback() {
    // Get the contact section element by its ID
    var contact = document.getElementById("contact");
    // Get the entrance section element by its ID
    var enter = document.getElementById("entrance");
    // Show the entrance section by setting its display style to 'block'
    enter.style.display = "block";
    // Hide the contact section by setting its display style to 'none'
    contact.style.display = "none";
}

// Get references to various HTML elements by their IDs
const overlayer = document.getElementById('playButton');
const video = document.getElementById('localVideo');
const lens = document.getElementById('lens');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const options = document.getElementById('optionPanel');

let decisionTimeout; // Variable to store timeout for decision panels

// Function to display the first decision panel
function showFirstDecisionPanel() {
    // Display the overlay with decision buttons
    overlayer.style.display = "block";
    // Set up event listeners for the first set of decision buttons
    setupFirstDecisionListeners();

    // Set a timeout to automatically proceed if no decision is made
    decisionTimeout = setTimeout(() => {
        // Reset video to a specific point and show the first decision panel again
        resetVideoTo("./media/Part2.mp4", 33, showFirstDecisionPanel);
    }, 10000); // 10 seconds timeout
}

// Function to set up event listeners for the first decision buttons
function setupFirstDecisionListeners() {
    option1.onclick = handleFirstOption1Click;
    option2.onclick = handleFirstOption2Click;
    option3.onclick = handleFirstOption3Click;
}

// Function to display the second decision panel
function showSecondDecisionPanel() {
    // Display the overlay with decision buttons
    overlayer.style.display = "block";
    // Set up event listeners for the second set of decision buttons
    setupSecondDecisionListeners();

    // Set a timeout to automatically proceed if no decision is made
    decisionTimeout = setTimeout(() => {
        // Reset video to a specific point and show the second decision panel again
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel);
    }, 10000); // 10 seconds timeout
}

// Function to set up event listeners for the second decision buttons
function setupSecondDecisionListeners() {
    option1.onclick = handleSecondOption1Click;
    option2.onclick = handleSecondOption2Click;
    option3.onclick = handleSecondOption3Click;

    // Styling changes for the second decision buttons
    option1.style.width = "40%";
    option1.style.marginLeft = "-4%";
    option2.style.width = "40%";
    option3.style.width = "38%";
    option2.style.marginRight = "0%";
}

// Function to handle the first option click in the first decision panel
function handleFirstOption1Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/part7.mp4"; // Set video source to part 7
    video.play(); // Play the video
    // Event listener for when the video ends
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part2.mp4", 32, showFirstDecisionPanel); // Reset video to part 2
        video.removeEventListener('ended', onEnded); // Remove this event listener
    });
}

// Function to handle the second option click in the first decision panel
function handleFirstOption2Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/Part4.mp4"; // Set video source to part 4
    video.play(); // Play the video
    // Event listener for when the video's current time updates
    video.addEventListener('timeupdate', function onTimeUpdate() {
        if (Math.floor(video.currentTime) === 76) { // Check if current time is 76 seconds
            showSecondDecisionPanel(); // Show the second decision panel
            video.removeEventListener('timeupdate', onTimeUpdate); // Remove this event listener
        }
    });
}

// Function to handle the third option click in the first decision panel
function handleFirstOption3Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/Part3.mp4"; // Set video source to part 3
    video.play(); // Play the video
    // Event listener for when the video ends
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part2.mp4", 33, showFirstDecisionPanel); // Reset video to part 2
        video.removeEventListener('ended', onEnded); // Remove this event listener
    });
}

// Function to handle the first option click in the second decision panel
function handleSecondOption1Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/part8.mp4"; // Set video source to part 8
    video.play(); // Play the video
    // Event listener for when the video ends
    video.addEventListener('ended', function onEnded() {
        location.reload(); // Refresh the webpage
    });
}

// Function to handle the second option click in the second decision panel
function handleSecondOption2Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/Part6.mp4"; // Set video source to part 6
    video.play(); // Play the video
    // Event listener for when the video ends
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel); // Reset video to part 4
        video.removeEventListener('ended', onEnded); // Remove this event listener
    });
}

// Function to handle the third option click in the second decision panel
function handleSecondOption3Click() {
    clearTimeout(decisionTimeout); // Clear any existing decision timeout
    overlayer.style.display = "none"; // Hide the decision overlay
    video.src = "./media/Part5.mp4"; // Set video source to part 5
    video.play(); // Play the video
    // Event listener for when the video ends
    video.addEventListener('ended', function onEnded() {
        resetVideoTo("./media/Part4.mp4", 76, showSecondDecisionPanel); // Reset video to part 4
        video.removeEventListener('ended', onEnded); // Remove this event listener
    });
}

// Function to reset the video to a specific source and time, then show a decision panel
function resetVideoTo(src, time, showDecisionPanel) {
    video.src = src; // Set the video source
    video.load(); // Load the video
    // Event listener for when the video data is loaded
    video.addEventListener('loadeddata', function onLoadedData() {
        video.currentTime = time; // Set the video's current time
        video.play(); // Play the video
        showDecisionPanel(); // Show the decision panel
        video.removeEventListener('loadeddata', onLoadedData); // Remove this event listener
    }, { once: true }); // Ensure the event listener is removed after it's triggered once
}

// Initial setup to add click event listener to the lens button
lens.addEventListener('click', function() {
    lens.style.display = "none"; // Hide the lens button
    video.src = "./media/Part2.mp4"; // Set the video source to part 2
    video.play(); // Play the video
    // Event listener for when the video's current time updates
    video.addEventListener('timeupdate', function onTimeUpdate() {
        if (Math.floor(video.currentTime) === 33) { // Check if current time is 33 seconds
            showFirstDecisionPanel(); // Show the first decision panel
            video.removeEventListener('timeupdate', onTimeUpdate); // Remove this event listener
        }
    });
});

// Event listener for the video's time updates to display the lens button at a specific time
video.addEventListener('timeupdate', function onTimeUpdate() {
    if (Math.floor(video.currentTime) === 87 && lens.style.display !== "none") { // Check if current time is 87 seconds and lens button is not hidden
        lens.style.display = "block"; // Display the lens button
        video.removeEventListener('timeupdate', onTimeUpdate); // Remove this event listener
    }
});