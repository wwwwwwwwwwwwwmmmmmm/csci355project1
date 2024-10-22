import styles from "./MenuPagination.module.css";

interface MenuPaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalItems: number;
    itemsPerPage: number;
}

export default function MenuPagination({currentPage, setCurrentPage, totalItems, itemsPerPage}: MenuPaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const generatePaginationLinks = () => {
        return Array.from({length: totalPages}, (_, index) => index + 1).map(number => (
            <a
                href="#"
                key={number}
                onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(number);
                }}
                className={currentPage === number ? styles.active : ''}
                data-page={number}
            >
                {number}
            </a>
        ));
    };

    return (
        <div className={styles.paginationSection}>
            <div className={styles.pagination}>
                <a
                    href="#"
                    className={styles.prev}
                    onClick={(e) => {
                        e.preventDefault();
                        handlePrevClick();
                    }}
                    style={{display: currentPage === 1 ? 'none' : 'inline-block'}}
                >
                    Prev
                </a>
                {generatePaginationLinks()}
                <a
                    href="#"
                    className={styles.next}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNextClick();
                    }}
                    style={{display: currentPage === totalPages ? 'none' : 'inline-block'}}
                >
                    Next
                </a>
            </div>
        </div>
    );
}