import React from 'react';
import { Container, Grid, Box, Typography, Card, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ScrollFadeIn, CardWaveBackground } from '../components/UIComponents';
import { servicesData } from '../data/portfolioData';
import { hexToRgba } from '../theme/theme';
import { useLightbox } from '../context/LightboxContext';

export const ServicesPage = () => {
  const { handleOpenLightbox } = useLightbox();

  return (
    <Box id="services" sx={{ pt: { xs: 12, md: 14 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
            What I Offer
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
            My Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '650px', margin: '0 auto', fontSize: '16px' }}>
            Delivering high-quality, scalable, and business-focused development services tailored to modern operational challenges.
          </Typography>
        </Box>

        {/* Services List */}
        <Grid container spacing={4}>
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Grid item xs={12} key={idx}>
                <ScrollFadeIn delay={0.05}>
                  <Card
                    className="glass-card"
                    sx={{
                      borderRadius: isEven ? '24px 60px 24px 60px' : '60px 24px 60px 24px',
                      background: 'linear-gradient(to bottom, #ffffff, #eef7f8, #ffffff)',
                      border: '1px solid rgba(15, 44, 89, 0.16)',
                      color: '#051d24',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      boxShadow: '0 10px 40px rgba(15, 44, 89, 0.05)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${service.color}, #0F2C59, ${service.color})`,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      },
                      '&:hover': {
                        transform: 'translateY(-6px) scale(1.004)',
                        borderColor: service.color,
                        borderRadius: isEven ? '32px 80px 32px 80px' : '80px 32px 80px 32px',
                        boxShadow: `0 20px 50px ${hexToRgba(service.color, 0.12)}`,
                        '&::before': {
                          transform: 'scaleX(1)',
                        },
                        '& .service-icon-box': {
                          backgroundColor: hexToRgba(service.color, 0.12),
                          transform: 'rotate(8deg) scale(1.05)'
                        }
                      }
                    }}
                  >
                    <CardWaveBackground color={service.color} isEven={isEven} />
                    
                    <Grid
                      container
                      spacing={4}
                      flexDirection={isEven ? 'row' : { xs: 'row', md: 'row-reverse' }}
                      sx={{ padding: { xs: 3.5, md: 5 }, position: 'relative', zIndex: 1, alignItems: 'center' }}
                    >
                      {/* Title & Icon Column */}
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                          display: 'flex',
                          gap: 2.5,
                          alignItems: 'center',
                          flexDirection: isEven ? 'row' : { xs: 'row', md: 'row-reverse' },
                          justifyContent: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' }
                        }}
                      >
                        <Box
                          className="service-icon-box"
                          sx={{
                            width: 58,
                            height: 58,
                            minWidth: 58,
                            backgroundColor: hexToRgba(service.color, 0.06),
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: service.color,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            color: '#051d24',
                            fontSize: { xs: '20px', md: '22px' },
                            textAlign: { xs: 'left', md: isEven ? 'left' : 'right' }
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Grid>

                      {/* Description Column */}
                      <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                          textAlign: { xs: 'left', md: isEven ? 'left' : 'right' }
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#425f65',
                            lineHeight: 1.8,
                            fontSize: { xs: '14.5px', md: '16px' }
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </ScrollFadeIn>
              </Grid>
            );
          })}
        </Grid>

        {/* Hire Me CTA Section */}
        <Box
          sx={{
            mt: 10,
            py: 6,
            px: { xs: 3, md: 6 },
            background: 'linear-gradient(135deg, #f4f6f9 0%, #eaedf2 100%)',
            border: '1px solid rgba(15, 44, 89, 0.12)',
            borderRadius: '24px',
            position: 'relative',
            zIndex: 3
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src="images/murali_profile.png"
                alt="Murali Palanisamy"
                onClick={() => handleOpenLightbox('images/murali_profile.png')}
                sx={{
                  width: { xs: '120px', md: '180px' },
                  height: { xs: '120px', md: '180px' },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '3px solid #ffffff',
                  boxShadow: '0 15px 35px rgba(15, 44, 89, 0.15)',
                  cursor: 'zoom-in',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '24px', md: '34px' }, color: '#051d24' }}>
                  Have a project on your mind?
                </Typography>
                <Typography variant="body1" sx={{ color: '#425f65', lineHeight: 1.8, fontSize: '15px' }}>
                  We specialize in crafting innovative and scalable solutions tailored to your business needs. Whether it's web development, mobile apps, UI/UX design, or Odoo-based applications, let's collaborate and turn your ideas into reality! 🚀
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        const yOffset = -70;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.3,
                      fontSize: '15px',
                      fontWeight: 700,
                      backgroundColor: '#0F2C59',
                      color: '#ffffff',
                      boxShadow: '0 4px 15px rgba(15, 44, 89, 0.25)',
                      '&:hover': {
                        backgroundColor: '#054f59'
                      }
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
