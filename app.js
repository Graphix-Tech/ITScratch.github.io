function initializeScratchCard(selectedImageIndex) {
    $("#card").wScratchPad({
        size: 100, // The size of the brush/scratch.
        bg: `Images/Gpay_Card ${selectedImageIndex}.jpg`, // Background image path.
        fg: `Images/front.jpg`, // Foreground image path.
        cursor: "pointer", // Set cursor.
        scratchUp: function () {
            // Add any action you want to perform when the scratch card is revealed
            alert("Scratch card revealed!");
        },
    });
}

// Check if the scratch card has been revealed before and retrieve the selected image index
let isRevealed = localStorage.getItem("isRevealed") === "true";
let selectedImageIndex = localStorage.getItem("selectedImageIndex");

// Initialize or restore the scratch card based on whether it has been revealed before
$(document).ready(function () {
    if (!isRevealed) {
        // If the card has not been revealed, generate a random image index
        const numImages = 4; // Number of available images
        selectedImageIndex = Math.floor(Math.random() * numImages) + 1;
        initializeScratchCard(selectedImageIndex);
        localStorage.setItem("selectedImageIndex", selectedImageIndex);
    } else {
        // If the card has been revealed, load the last scratched card
        if (selectedImageIndex) {
            initializeScratchCard(selectedImageIndex);
        }
    }
});
