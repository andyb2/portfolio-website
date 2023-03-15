import { projectsList } from '../projectList';
import styled from '@emotion/styled';
import { IProps } from './Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatIcon from '@mui/icons-material/Chat';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Icon } from '@mui/material';
import { Animate } from '../App';

const Container = styled.div`
  padding-top: 3.5rem;
  background-color: white;
`;

const ProjectsTitle = styled.p<IProps>`
  font-size: ${({ height }) => (height <= 450 ? '8vw' : '13vw')};
  line-height: 0.65;
  margin: 0;
  padding: 0;
  color: black;
  padding-bottom: 1rem;
  translate: -0.5%;
`;

const ProjectsContainer = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.5rem 0 3.5rem 0;
`;

const Card = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
  padding: 1rem;
  height: 325px;
  width: 300px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
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
  background-color: #169542;
  font-weight: bolder;
  font-size: 20px;
  border-radius: 15px;
  padding: 0.1rem 1rem 0.1rem 1rem;
`;

const ContentSpacing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const Projects = ({ height }: IProps) => {
  const icons = [GitHubIcon, GitHubIcon, ChatIcon, VideogameAssetIcon];

  return (
    <Container id='projects'>
      <ProjectsTitle height={height}>PROJECTS</ProjectsTitle>
      <ProjectsContainer height={height}>
        <CardContainer>
          {projectsList.map((project, idx) => {
            return (
              <Animate className='card hidden'>
                <Card key={project.title} height={height}>
                  <ContentSpacing>
                    <Icon sx={{ fontSize: '80px' }} component={icons[idx]} />
                    <TitleContainer>
                      <Title>{project.title}</Title>
                    </TitleContainer>
                    <CardDescription>{project.description}</CardDescription>
                  </ContentSpacing>
                  <LinkContainer>
                    <Link href={project.link} target='_blank'>
                      Open
                    </Link>
                  </LinkContainer>
                </Card>
              </Animate>
            );
          })}
        </CardContainer>
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
