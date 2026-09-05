import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { navItems } from '../data/portfolioData';

export const Footer = () => {
  return (
    <>
      {/* Footer Wave Divider (Old Clean Style) */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          backgroundColor: '#f4f6f9',
          position: 'relative',
          zIndex: 3
        }}
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '80px'
          }}
        >
          {/* Wave 1 (Deepest) */}
          <path
            fill="#C59B27"
            opacity="0.08"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
          {/* Wave 2 (Middle) */}
          <path
            fill="#C59B27"
            opacity="0.18"
            d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,144C672,149,768,139,864,122.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
          {/* Wave 3 (Foreground/Solid White) */}
          <path
            fill="#ffffff"
            d="M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,170.7C672,171,768,149,864,138.7C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </Box>

      {/* Footer Main (Old Light Clean Theme with Perfect Spacing) */}
      <Box sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#ffffff', position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="space-between">
            {/* Quick Navigation Column */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '18px',
                  letterSpacing: '-0.5px',
                  color: '#051d24'
                }}
              >
                Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {navItems.map((item) => (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        const yOffset = -70;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      color: '#425f65',
                      textDecoration: 'none',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#0F2C59',
                        transform: 'translateX(4px)',
                        fontWeight: 600
                      }
                    }}
                  >
                    <span style={{ color: '#0F2C59', fontSize: '13px', lineHeight: 1 }}>›</span>
                    {item.label}
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Services Column */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '18px',
                  letterSpacing: '-0.5px',
                  color: '#051d24'
                }}
              >
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {[
                  'Web Design',
                  'Web Development',
                  'Business Strategy',
                  'Data Analysis',
                  'Graphic Design'
                ].map((serv) => (
                  <Typography
                    key={serv}
                    sx={{
                      color: '#425f65',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#0F2C59',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <span style={{ color: '#0F2C59', fontSize: '13px', lineHeight: 1 }}>›</span>
                    {serv}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Question/Social Column */}
            <Grid item xs={12} md={5}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '18px',
                  letterSpacing: '-0.5px',
                  color: '#051d24'
                }}
              >
                Have a Question?
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', gap: 1.8, alignItems: 'flex-start' }}>
                  <RoomIcon sx={{ color: '#0F2C59', fontSize: '20px', mt: 0.2, flexShrink: 0 }} />
                  <Typography sx={{ color: '#425f65', fontSize: '14.5px', fontWeight: 500, lineHeight: 1.5 }}>
                    T-Nagar, Chennai, Tamil Nadu - 600017, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.8, alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: '#0F2C59', fontSize: '20px', flexShrink: 0 }} />
                  <Typography
                    component="a"
                    href="tel:+919361659922"
                    sx={{
                      color: '#425f65',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: '#0F2C59', fontWeight: 600 }
                    }}
                  >
                    +91 93616 59922
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.8, alignItems: 'flex-start' }}>
                  <EmailIcon sx={{ color: '#0F2C59', fontSize: '20px', mt: 0.2, flexShrink: 0 }} />
                  <Typography
                    component="a"
                    href="mailto:muralip.software.engineer@gmail.com"
                    sx={{
                      color: '#425f65',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      wordBreak: 'break-all',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: '#0F2C59', fontWeight: 600 }
                    }}
                  >
                    muralip.software.engineer@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                {[
                  { icon: 'fa-twitter', link: 'https://x.com/i/flow/login?redirect_after_login=%2FMuraliVijayBCA1', label: 'Twitter' },
                  { icon: 'fa-facebook', link: 'https://www.facebook.com/share/1ECUmzyGNH/', label: 'Facebook' },
                  { icon: 'fa-instagram', link: 'https://www.instagram.com/__monster__murali__?utm_source=qr&igsh=dzN5cWNwNXI3Mmw4', label: 'Instagram' }
                ].map((social, idx) => (
                  <IconButton
                    key={idx}
                    component="a"
                    href={social.link}
                    target="_blank"
                    aria-label={social.label}
                    sx={{
                      backgroundColor: 'rgba(15, 44, 89, 0.05)',
                      color: '#0F2C59',
                      width: 42,
                      height: 42,
                      border: '1px solid rgba(15, 44, 89, 0.12)',
                      borderRadius: '10px',
                      '&:hover': {
                        backgroundColor: '#0F2C59',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(15, 44, 89, 0.25)',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <i className={`fa-brands ${social.icon}`} style={{ fontSize: '17px' }} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Copyright Divider */}
          <Box sx={{ borderTop: '1px solid rgba(15, 44, 89, 0.08)', mt: 6, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(5, 29, 36, 0.5)', textAlign: 'center' }}>
              Copyright © {new Date().getFullYear()}{' '}
              <Link href="https://muralisoftware.vercel.app/" target="_blank" sx={{ color: '#0F2C59', textDecoration: 'none', '&:hover': { color: '#0B203E' } }}>
                muralisoftware
              </Link>. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Floating Buttons in Bottom Right Corner */}
      <Box className="social-float">
        <a href="https://wa.me/919361659922" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp" />
          <span>WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/__monster__murali__?utm_source=qr&igsh=dzN5cWNwNXI3Mmw4" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram" />
          <span>Instagram</span>
        </a>
      </Box>
    </>
  );
};

export default Footer;
