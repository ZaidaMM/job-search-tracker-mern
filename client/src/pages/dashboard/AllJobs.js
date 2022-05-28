import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { SearchContainer, JobsContainer } from '../../components/index';

const AllJobs = () => {
  return (
    <Wrapper>
      <h3>All Jobs</h3>
      <SearchContainer />
      <JobsContainer />
    </Wrapper>
  );
};
export default AllJobs;
