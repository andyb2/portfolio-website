import Nav from '../components/Nav';
import { projects } from '../projectList';
import styled from '@emotion/styled';
import { Height } from './Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Icon } from '@mui/material';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ProjectsTitle = styled.p<Height>`
  font-size: ${({ height }) => (height <= 450 ? '8vw' : '13vw')};
  line-height: 0.65;
  margin: 0;
  padding: 0;
  color: black;
  padding-bottom: 1rem;
`;

const ProjectsContainer = styled.div<any>`
  height: ${({ height }) =>
    height <= 450 ? 'calc(100% - 17vw)' : 'calc(100% - 16vw)'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<any>`
  display: flex;
  flex-direction: ${({ height }) => (height >= 450 ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
  max-width: ${({ height }) => (height > 450 ? '350px' : '550px')};
  margin: ${({ height }) => (height <= 450 ? '0.5rem' : '1rem')};
  padding: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.p`
  margin: 0;
  padding: 0.75rem;
  font-weight: bolder;
`;

const CardDescription = styled.p`
  margin: 0;
  padding: 0 0.75rem 0 0.75rem;
  text-align: left;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0 1rem 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  background-color: #1db954;
  font-weight: bolder;
  font-size: 20px;
  border-radius: 15px;
  padding: 0.1rem 1rem 0.1rem 1rem;
`;

const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Projects = ({ height }: Height) => {
  return (
    <Container id='projects'>
      <ProjectsTitle height={height}>PROJECTS</ProjectsTitle>
      <ProjectsContainer height={height}>
        <Card height={height}>
          <Icon sx={{ fontSize: '80px' }} component={GitHubIcon} />
          <TitleContainer>
            <Title>{projects[0].title}</Title>
          </TitleContainer>
          <CardDescription>{projects[0].description}</CardDescription>
          <LinkContainer>
            <Link href={projects[0].link}>Open</Link>
          </LinkContainer>
        </Card>
      </ProjectsContainer>
      <NavContainer>
        <Nav project={true} />
      </NavContainer>
    </Container>
  );
};

export default Projects;
