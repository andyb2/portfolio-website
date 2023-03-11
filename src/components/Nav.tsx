import { FC } from 'react';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';
import Socials from './Socials';

interface IProps {
  home?: boolean;
  project?: boolean;
}

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 101;
  border-bottom: 1px solid black;
`;

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  background-color: white;
`;

const NavLi = styled.li<any>`
  font-size: 2rem;
  color: ${({ project }) => (!project ? 'black' : '#c3ca86')};
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ project }) => (!project ? 'gray' : '#e0e5ab')};
  }
`;

const Nav: FC<IProps> = ({ home, project }) => {
  const navItems: string[] = ['projects', 'about'];
  return (
    <NavContainer>
      <Socials />
      <NavUl>
        {navItems.map(item => {
          return (
            <NavLi>
              <Link to={item} spy={true} smooth={true} duration={500}>
                {item.toUpperCase()}
              </Link>
            </NavLi>
          );
        })}
      </NavUl>
    </NavContainer>
  );
};
export default Nav;
