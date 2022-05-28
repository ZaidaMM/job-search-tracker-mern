import moment from 'moment';
import Wrapper from '../assets/wrappers/Job';

const Job = ({ company, createdAt }) => {
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  return (
    <Wrapper>
      <h5>{company}</h5>
      <h5>{date}</h5>
    </Wrapper>
  );
};
export default Job;
