import { FC } from 'react';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';

interface IProps {
  home?: boolean;
  project?: boolean;
}

const NavContainer = styled.nav``;

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li<any>`
  position: relative;
  z-index: 100;
  font-size: 3rem;
  color: ${({ project }) => (!project ? 'black' : '#c3ca86')};
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ project }) => (!project ? 'gray' : '#e0e5ab')};
  }
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const Nav: FC<IProps> = ({ home, project }) => {
  return (
    <NavContainer>
      <NavUl>
        {home ? (
          <Link to='projects' spy={true} smooth={true} duration={500}>
            <NavItem project={home}>PROJECTS</NavItem>
          </Link>
        ) : (
          <Link to='about' spy={true} smooth={true} duration={500}>
            <NavItem home={project}>ABOUT</NavItem>
          </Link>
        )}
      </NavUl>
    </NavContainer>
  );
};
export default Nav;
