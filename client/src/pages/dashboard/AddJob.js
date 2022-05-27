import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    isEditing,
    editJobId,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log('job created');
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          ></FormRow>
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          ></FormRow>
          <FormRow
            type='text'
            labelText='job location'
            name='joblocation'
            value={jobLocation}
            handleChange={handleJobInput}
          ></FormRow>

          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
