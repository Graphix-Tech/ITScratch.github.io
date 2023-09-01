let isRevealed = localStorage.getItem("isRevealed") === "true";
        let selectedImageIndex = localStorage.getItem("selectedImageIndex");

        $(document).ready(function () {
            if (!isRevealed) {
                // The following code initializes the scratch card with the shuffling images and reveal logic
                const numImages = 4; // Number of available images
                if (!selectedImageIndex) {
                    selectedImageIndex = Math.floor(Math.random() * numImages) + 1;
                    localStorage.setItem("selectedImageIndex", selectedImageIndex);
                }

                $("#card").wScratchPad({
                    size: 100, // The size of the brush/scratch.
                    bg: `Images/Gpay_Card ${selectedImageIndex}.jpg`, // Background image path.
                    fg: `Images/front.jpg`, // Foreground image path.
                    cursor: "pointer", // Set cursor.
                    scratchUp: function () {
                        if (!isRevealed) {
                            isRevealed = true;
                            // Save the revealed state in local storage
                            localStorage.setItem("isRevealed", "true");
                            // Add any action you want to perform when the scratch card is revealed
                            alert("Scratch card revealed!");
                        }
                    },
                });
            } else {
                // If the card has been revealed, you can show a message or perform other actions
                alert("Scratch card already revealed!");
            }
        });
