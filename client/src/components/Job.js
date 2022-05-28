import moment from 'moment';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { JobInfo } from './JobInfo';

const Job = ({
  company,
  createdAt,
  _id,
  position,
  jobLocation,
  status,
  jobType,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <h3>CONTENT</h3>
        <h5>{date}</h5>
        <footer>
          <Link
            to='/add-job'
            className='btn edit-btn'
            onClick={() => setEditJob(_id)}
          >
            Edit
          </Link>
          <button className='btn delete-btn' onClick={() => deleteJob(_id)}>
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
