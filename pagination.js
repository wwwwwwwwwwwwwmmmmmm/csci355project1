document.addEventListener('DOMContentLoaded', function() {
    const menuCards = document.querySelectorAll('.menu-card');
    const paginationLinks = document.querySelectorAll('.pagination a');
    const prevButton = document.querySelector('.pagination .prev');
    const nextButton = document.querySelector('.pagination .next');
    let currentPage = 1;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(menuCards.length / itemsPerPage);

    function showPage(page) {
        menuCards.forEach(card => card.style.display = 'none');
        document.querySelectorAll('.page-' + page).forEach(card => card.style.display = 'block');
        paginationLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.pagination a[data-page="${page}"]`).classList.add('active');
        prevButton.style.display = (page === 1) ? 'none' : 'inline-block';
        nextButton.style.display = (page === totalPages) ? 'none' : 'inline-block';
        currentPage = page;
    }

    showPage(currentPage);

    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page)) {
                showPage(page);
            }
        });
    });

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });
});
