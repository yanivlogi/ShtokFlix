// Function to automatically click the "דלג על ההקדמה" (Skip Intro) button
function clickSkipIntroButton() {
    const skipButton = document.querySelector('button[data-uia="player-skip-intro"]');
    if (skipButton) {
        skipButton.click();
    }
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', clickSkipIntroButton);

// Additionally, if the DOM is modified later (e.g., new content loaded), also click the skip intro button
const observer = new MutationObserver(clickSkipIntroButton);
observer.observe(document.body, { childList: true, subtree: true });
