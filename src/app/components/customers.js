// TODO

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const reviews = document.querySelectorAll('.review-card');
    const totalReviews = reviews.length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Initialize display to show the first set of reviews
    updateCarousel();

    // Event listener for the next button
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 3) % totalReviews; // Increment by 3 to show the next set of 3 cards
            updateCarousel();
        });
    }

    // Event listener for the previous button
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 3 + totalReviews) % totalReviews; // Decrement by 3 to show the previous set
            updateCarousel();
        });
    }

    // Function to update carousel display based on currentIndex
    function updateCarousel() {
        // Hide all reviews
        reviews.forEach(review => {
            review.style.display = 'none';
        });

        // Show only 3 reviews at a time
        for (let i = 0; i < 4; i++) {
            const reviewIndex = (currentIndex + i) % totalReviews; // Calculate index to loop through the reviews
            reviews[reviewIndex].style.display = 'block';
        }
    }
});
