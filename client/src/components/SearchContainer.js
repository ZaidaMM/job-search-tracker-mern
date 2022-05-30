import { useAppContext } from '../context/appContext';
import { FormRow, FormRowSelect } from '../components/index';
import Wrapper from '../assets/wrappers/SearchContainer';

function SearchContainer() {
  const {
    isLoading,
    search,
    searchStatus,
    statusOptions,
    searchType,
    jobTypeOptions,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>Search Form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText='job status'
            name='searchStatus'
            value={searchStatus}
            list={['all', ...statusOptions]}
            handleChange={handleSearch}
          />
          {/* labelText='job status'
            name='searchStatus'
            value={searchStatus}
            list={['all', ...statusOptions]}
            handleChange={handleSearch} */}
          <FormRowSelect
            labelText='job type'
            name='searchType'
            value={searchType}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name='sort'
            value={sort}
            list={[...sortOptions]}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-danger btn-block'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
export default SearchContainer;
