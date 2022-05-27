import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { SearchContainer, JobContainer } from '../../components/index';

const AllJobs = () => {
  return (
    <Wrapper>
      <h3>All Jobs</h3>
      <SearchContainer />
      <JobContainer />
    </Wrapper>
  );
};
export default AllJobs;
