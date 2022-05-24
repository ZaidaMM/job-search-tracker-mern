import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  return (
    <Wrapper>
      <div>
        <Logo />
        <NavLinks />
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
