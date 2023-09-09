import { useState } from "react";
import styles from "./Pagination.module.css"

const Paginate = ({ currentPage, setCurrentPage, totalPages }) => {

  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setCurrentPage(currentPage - 1);
  };

    return (
      <div className={styles.containerPag}>
        <button
          disabled={input === 1}
          className={styles.Pag}
          onClick={previousPage}
        >
         PREVIOUS
        </button>

        <h2 className={styles.h2pag}>{input}</h2>
       
        <button
          disabled={input === totalPages}
          className={styles.Pag}
          onClick={nextPage}
        >
          NEXT
        </button>
      </div>
    );
}

export default Paginate;