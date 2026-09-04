import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { ScrollFadeIn, ProjectCard } from '../components/UIComponents';
import { officeProjectsData, clientsData } from '../data/portfolioData';

export const ProjectsPage = () => {
  const doubleClients = [...clientsData, ...clientsData];

  return (
    <Box
      id="projects"
      sx={{
        pt: { xs: 12, md: 14 },
        pb: 12,
        position: 'relative',
        zIndex: 3,
        backgroundImage: 'url(/images/projects_bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, backgroundColor: 'rgba(15, 44, 89, 0.06)', borderRadius: '30px', mb: 2, border: '1px solid rgba(15, 44, 89, 0.15)' }}>
            <Typography variant="body2" sx={{ color: '#0F2C59', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              💼 Client & Corporate Engagements
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
            Enterprise Solutions
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '650px', margin: '0 auto', fontSize: '16px' }}>
            A portfolio of production-grade ERP systems, custom automation modules, and scalable solutions engineered for corporate clients.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {officeProjectsData.map((project, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 0.04}>
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                tech={project.tech}
                index={idx}
              />
            </ScrollFadeIn>
          ))}
        </Box>

        {/* Client Logos Section */}
        <Box sx={{ mt: 12, py: 6, backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid rgba(15, 44, 89, 0.08)' }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              Our Esteemed Clients
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#051d24', fontSize: { xs: '24px', md: '30px' } }}>
              Companies We've Worked With
            </Typography>
          </Box>

          <div className="logo-scroll-container">
            <div className="logo-scroll-wrapper">
              {doubleClients.map((client, idx) => (
                <div className="client-logo-container" key={idx}>
                  <Box
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                    title={client.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
