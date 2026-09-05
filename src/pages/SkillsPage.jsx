import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { ScrollFadeIn, SkillCard } from '../components/UIComponents';
import { skillsData } from '../data/portfolioData';

export const SkillsPage = () => {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 12, md: 14 },
        pb: 12,
        position: 'relative',
        zIndex: 3,
        backgroundImage: 'url(/images/skills_bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
            Expertise & Technologies
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#ffffff' }}>
            Technical Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto', fontSize: '16px' }}>
            A comprehensive toolkit of modern programming languages, frameworks, and databases that I leverage to build robust digital solutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillsData.map((skill, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
              <ScrollFadeIn delay={idx * 0.04}>
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                  description={skill.description}
                  tags={skill.tags}
                  color={skill.color}
                />
              </ScrollFadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsPage;
