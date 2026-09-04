import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { ScrollFadeIn, ProjectCard } from '../components/UIComponents';
import { personalProjectsData } from '../data/portfolioData';

export const PersonalProjectsPage = () => {
  return (
    <Box
      id="personal-projects"
      sx={{
        pt: { xs: 12, md: 14 },
        pb: 12,
        position: 'relative',
        zIndex: 3,
        backgroundColor: '#f8fafd',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: 1, backgroundColor: 'rgba(197, 155, 39, 0.1)', borderRadius: '30px', mb: 2, border: '1px solid rgba(197, 155, 39, 0.25)' }}>
            <Typography variant="body2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              🚀 Product Development & Tools
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
            Independent Innovations
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '650px', margin: '0 auto', fontSize: '16px' }}>
            Independently architected, engineered, and published web apps, utilities, and developer platforms with live access.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {personalProjectsData.map((project, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 0.05}>
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                tech={project.tech}
                link={project.link}
                index={idx}
              />
            </ScrollFadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PersonalProjectsPage;
