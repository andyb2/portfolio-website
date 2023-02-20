import Nav from '../components/Nav';
import { projectsList } from '../projectList';
import styled from '@emotion/styled';
import { Height } from './Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatIcon from '@mui/icons-material/Chat';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Icon } from '@mui/material';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
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
  align-items: center;
`;

const Card = styled.div<any>`
  display: flex;
  flex-direction: ${({ height }) => (height >= 450 ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
  max-width: ${({ height }) => (height > 450 ? '350px' : '550px')};
  padding: 1rem;
  min-height: 375px;
  min-width: 375px;
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
  // background-color: #1db954;
  background-color: #169542;
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

const ContentSpacing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
`;

const Projects = ({ height }: Height) => {
  const icons = [GitHubIcon, GitHubIcon, ChatIcon, VideogameAssetIcon];

  return (
    <Container id='projects'>
      <ProjectsTitle height={height}>PROJECTS</ProjectsTitle>
      <ProjectsContainer height={height}>
        <SideScroll>
          {projectsList.map((project, idx) => {
            return (
              <Card key={project.title} height={height}>
                <ContentSpacing>
                  <Icon sx={{ fontSize: '80px' }} component={icons[idx]} />
                  <TitleContainer>
                    <Title>{project.title}</Title>
                  </TitleContainer>
                  <CardDescription>{project.description}</CardDescription>
                </ContentSpacing>
                <LinkContainer>
                  <Link href={project.link}>Open</Link>
                </LinkContainer>
              </Card>
            );
          })}
        </SideScroll>
      </ProjectsContainer>
      <NavContainer>
        <Nav project={true} />
      </NavContainer>
    </Container>
  );
};

export default Projects;
