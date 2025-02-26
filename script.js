document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const startChatBtn = document.getElementById("startChatBtn");
    const aiButton = document.getElementById("aiButton");
    const musicButton = document.getElementById("musicButton");
    const aiBox = document.getElementById("aiBox");
    const musicBox = document.getElementById("musicBox");
    const closeAiBox = document.getElementById("closeAiBox");
    const closeMusicBox = document.getElementById("closeMusicBox");

    // Store user name in localStorage
    startChatBtn.addEventListener("click", function () {
        const userName = nameInput.value.trim();
        if (userName) {
            localStorage.setItem("userName", userName);
            window.location.href = "chat.html"; // Redirect to chat page
        } else {
            alert("Please enter a valid name.");
        }
    });

    // Show AI box when clicking AI button
    aiButton.addEventListener("click", function () {
        aiBox.style.display = "block";
    });

    // Close AI box when clicking close button
    closeAiBox.addEventListener("click", function () {
        aiBox.style.display = "none";
    });

    // Show Music box when clicking Music button
    musicButton.addEventListener("click", function () {
        musicBox.style.display = "block";
    });

    // Close Music box when clicking close button
    closeMusicBox.addEventListener("click", function () {
        musicBox.style.display = "none";
    });
});
