import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);

  const prevPage = () => {
    console.log('previous page');
  };
  const nextPage = () => {
    console.log('next page');
  };

  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNum) => {
          return (
            <button
              type='button'
              className={pageNum === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => console.log(page)}
              key={pageNum}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        <HiChevronDoubleRight /> Next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
