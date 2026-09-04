import React from 'react';
import { Container, Grid, Box, Typography, Paper, Card } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightIcon from '@mui/icons-material/Flight';
import BrushIcon from '@mui/icons-material/Brush';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { ScrollFadeIn } from '../components/UIComponents';
import { useLightbox } from '../context/LightboxContext';

export const AboutPage = () => {
  const { handleOpenLightbox } = useLightbox();

  return (
    <Box id="about" sx={{ pt: { xs: 12, md: 14 }, pb: 12 }}>
      {/* Intro Section */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={5}>
            <ScrollFadeIn>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  width: '100%',
                  maxWidth: { xs: '380px', md: '100%' },
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(15, 44, 89, 0.12)',
                  border: '1px solid rgba(15, 44, 89, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 65%, rgba(243, 248, 249, 0.8) 100%)',
                    zIndex: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src="images/murali2.jpg"
                  alt="Murali Palanisamy"
                  onClick={() => handleOpenLightbox('images/murali2.jpg')}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'all 0.5s ease',
                    cursor: 'zoom-in',
                    '&:hover': {
                      transform: 'scale(1.04)'
                    }
                  }}
                />
              </Box>
            </ScrollFadeIn>
          </Grid>

          {/* Right Text Content */}
          <Grid item xs={12} md={7}>
            <ScrollFadeIn delay={0.15}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
                    My Intro
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '30px', md: '40px' }, color: '#051d24' }}>
                    About Me
                  </Typography>
                </Box>
                
                <Typography variant="body1" sx={{ color: '#425f65', lineHeight: 1.8, fontSize: '16px' }}>
                  Hi! I'm Murali Palanisamy, a dedicated Software Engineer specializing in full-stack web and mobile application development. With over four years of professional experience, I successfully design, build, and deploy robust software systems using Python (Django/FastAPI), PHP (Laravel), JavaScript (React/Next.js), and Odoo ERP customization.
                  <br /><br />
                  My engineering philosophy centers around writing clean, testable code, optimizing database performance (PostgreSQL/MySQL), and designing RESTful APIs that scale. I have a proven track record of helping organizations automate their business workflows, streamline inventory operations, and launch user-focused mobile apps.
                </Typography>

                {/* Personal Details Table */}
                <Paper
                  className="glass-panel"
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(15, 44, 89, 0.12)',
                    boxShadow: '0 4px 20px rgba(15, 44, 89, 0.04)'
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                        <strong style={{ color: '#0F2C59' }}>Name:</strong> Murali Palanisamy
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                        <strong style={{ color: '#0F2C59' }}>Role:</strong> Software Engineer
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                        <strong style={{ color: '#0F2C59' }}>Location:</strong> Chennai, India
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                        <strong style={{ color: '#0F2C59' }}>Email:</strong> muralip.software.engineer@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>

                {/* Interests */}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#051d24' }}>
                    Interests
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { icon: <MusicNoteIcon sx={{ color: '#0F2C59' }} />, text: 'Music' },
                      { icon: <FlightIcon sx={{ color: '#0F2C59' }} />, text: 'Travel' },
                      { icon: <BrushIcon sx={{ color: '#0F2C59' }} />, text: 'Artist' },
                      { icon: <SportsBasketballIcon sx={{ color: '#0F2C59' }} />, text: 'Sports' }
                    ].map((interest, idx) => (
                      <Grid item xs={6} sm={3} key={idx}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: 1.5,
                            borderRadius: '12px',
                            background: 'rgba(15, 44, 89, 0.05)',
                            border: '1px solid rgba(15, 44, 89, 0.08)',
                            justifyContent: 'center'
                          }}
                        >
                          {interest.icon}
                          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#051d24' }}>
                            {interest.text}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </ScrollFadeIn>
          </Grid>
        </Grid>

        {/* Certifications Section */}
        <Box sx={{ mt: 12 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              My Achievements
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '28px', md: '38px' }, color: '#051d24' }}>
              Certified Courses & Recognitions
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto', fontSize: '15px' }}>
              Showcasing professional certifications and credentials in Python, Software Engineering, and Odoo.
            </Typography>
          </Box>

          <ScrollFadeIn>
            <Card
              sx={{
                background: '#ffffff',
                border: '1px solid rgba(15, 44, 89, 0.15)',
                boxShadow: '0 15px 40px rgba(15, 44, 89, 0.06)',
                borderRadius: '24px',
                overflow: 'hidden',
                maxWidth: '750px',
                margin: '0 auto',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 25px 50px rgba(15, 44, 89, 0.12)'
                }
              }}
            >
              <Box
                onClick={() => handleOpenLightbox('images/UC-550a5ca4-33a5-488c-bf62-2fe9e0a8e9df.jpg')}
                sx={{
                  position: 'relative',
                  width: '100%',
                  cursor: 'zoom-in',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src="images/UC-550a5ca4-33a5-488c-bf62-2fe9e0a8e9df.jpg"
                  alt="Udemy Python Pro Certificate"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </Box>
            </Card>
          </ScrollFadeIn>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
