import React, { useState } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Link as RouterLink } from 'react-router-dom';
import { NeuralCanvas } from '../components/NeuralCanvas';
import { AnimatedCounter } from '../components/UIComponents';
import { calculateExperience } from '../theme/theme';
import { useLightbox } from '../context/LightboxContext';

export const HomePage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const yearsOfExperience = calculateExperience("2021-08-01");
  const { handleOpenLightbox } = useLightbox();

  return (
    <Box id="home">
      {/* Home Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'radial-gradient(circle at center, #eaedf2 0%, #f4f6f9 100%)',
          pt: { xs: 12, md: 8 }
        }}
      >
        <NeuralCanvas isPaused={isPaused} />
        
        {/* Canvas Controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 130, md: 40 },
            left: { xs: 20, md: 40 },
            zIndex: 10,
            display: 'flex',
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() => setIsPaused(!isPaused)}
            startIcon={isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            sx={{
              borderColor: 'rgba(15, 44, 89, 0.3)',
              color: '#0F2C59',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              '&:hover': {
                borderColor: '#0F2C59',
                backgroundColor: 'rgba(15, 44, 89, 0.1)',
              }
            }}
          >
            {isPaused ? "Play Effect" : "Pause Effect"}
          </Button>
        </Box>

        <Container maxWidth="md" sx={{ zIndex: 2, position: 'relative', textAlign: 'center', px: 3, py: 6 }}>
          {/* Main Monogram Logo Badge */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: 3, md: 4 },
              animation: 'nameFloat 4s ease-in-out infinite'
            }}
          >
            <Box
              component="img"
              src="images/murali_logo.png"
              alt="Murali Monogram Brand Logo"
              onClick={() => handleOpenLightbox('images/murali_logo.png')}
              sx={{
                width: { xs: '110px', sm: '140px', md: '160px' },
                height: { xs: '110px', sm: '140px', md: '160px' },
                borderRadius: '24px',
                border: '3px solid rgba(197, 155, 39, 0.25)',
                boxShadow: '0 20px 40px rgba(15, 44, 89, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'zoom-in',
                backgroundColor: '#ffffff',
                '&:hover': {
                  transform: 'scale(1.06) rotate(2deg)',
                  boxShadow: '0 25px 50px rgba(15, 44, 89, 0.18)',
                  borderColor: '#0F2C59'
                }
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '38px', sm: '56px', md: '68px' },
              lineHeight: 1.15,
              mb: 3,
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#051d24',
              textShadow: '0 2px 10px rgba(15, 44, 89, 0.05)'
            }}
          >
            Hello! I'm{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(120deg, #0F2C59 0%, #1A365D 25%, #D4AF37 50%, #C59B27 75%, #0F2C59 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 6s linear infinite, nameFloat 4s ease-in-out infinite',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05) rotate(1deg)',
                  textShadow: '0 0 30px rgba(15, 44, 89, 0.35)',
                }
              }}
            >
              Murali Palanisamy
            </Box>
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '16px', sm: '22px', md: '26px' },
              color: '#C59B27',
              mb: 3,
              fontWeight: 600,
              fontFamily: "'Fira Code', 'Space Mono', 'Courier New', monospace",
              letterSpacing: '-0.5px',
              display: 'inline-block',
              animation: 'slideUpFade 0.8s ease-out',
              mx: 'auto',
              whiteSpace: 'normal',
              textAlign: 'center'
            }}
          >
            Software Engineer | Full Stack Developer | Mobile App Developer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '15px', sm: '18px' },
              color: 'rgba(5, 29, 36, 0.75)',
              maxWidth: '650px',
              margin: '0 auto 40px auto',
              lineHeight: 1.8
            }}
          >
            I build modern, scalable web and mobile applications with a passion for clean architectures and high performance.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component="a"
              href="static/files/cv.pdf"
              download="MuraliPalanisamy_CV.pdf"
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #0F2C59 0%, #0B203E 100%)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 700,
                px: 3.5,
                py: 1.3,
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(15, 44, 89, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #0d9cb0 0%, #076d7b 100%)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              📄 Download CV
            </Button>

            <Button
              onClick={() => {
                const element = document.getElementById('personal-projects');
                if (element) {
                  const yOffset = -70;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              variant="outlined"
              sx={{
                color: '#0F2C59',
                borderColor: '#0F2C59',
                fontSize: '15px',
                fontWeight: 700,
                px: 3.5,
                py: 1.3,
                borderRadius: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(15, 44, 89, 0.08)',
                  borderColor: '#0F2C59'
                }
              }}
            >
              🚀 Explore Innovations
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Counter Section */}
      <Box
        sx={{
          backgroundColor: '#eaedf2',
          py: 5,
          borderTop: '1px solid rgba(15, 44, 89, 0.12)',
          borderBottom: '1px solid rgba(15, 44, 89, 0.12)',
          position: 'relative',
          zIndex: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#0F2C59', fontWeight: 800, fontSize: { xs: '40px', md: '50px' } }}>
                  <AnimatedCounter endValue="10" />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 0.5 }}>
                  Projects Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#0F2C59', fontWeight: 800, fontSize: { xs: '40px', md: '50px' } }}>
                  <AnimatedCounter endValue="25" />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 0.5 }}>
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#0F2C59', fontWeight: 800, fontSize: { xs: '40px', md: '50px' } }}>
                  <AnimatedCounter endValue={yearsOfExperience} />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 0.5 }}>
                  Years Experience
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
