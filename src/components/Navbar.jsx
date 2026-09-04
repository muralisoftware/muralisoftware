import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../data/portfolioData';
import { useLightbox } from '../context/LightboxContext';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { handleOpenLightbox } = useLightbox();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 3 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(244, 246, 249, 0.90)',
          backdropFilter: 'blur(16px)',
          boxShadow: trigger ? '0 4px 20px rgba(15, 44, 89, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          overflow: 'visible',
          borderBottom: trigger ? '1px solid rgba(15, 44, 89, 0.08)' : 'none',
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Brand Logo & Name */}
            <Box
              onClick={() => scrollToSection('home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover img': {
                  transform: 'scale(1.08) rotate(3deg)',
                  borderColor: '#054f59',
                  boxShadow: '0 4px 12px rgba(15, 44, 89, 0.3)'
                },
                '&:hover .navbar-brand': {
                  color: '#0F2C59'
                }
              }}
            >
              <Box
                component="img"
                src="images/murali_logo.png"
                alt="Murali Palanisamy Logo"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleOpenLightbox('images/murali_logo.png');
                }}
                sx={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  objectFit: 'contain',
                  border: '1.5px solid rgba(15, 44, 89, 0.15)',
                  boxShadow: '0 2px 6px rgba(15, 44, 89, 0.1)',
                  cursor: 'zoom-in',
                  backgroundColor: '#ffffff'
                }}
              />
              <Typography
                variant="h6"
                className="navbar-brand"
                sx={{
                  fontWeight: 500,
                  fontSize: '28px',
                  color: '#051d24',
                  fontFamily: "'Great Vibes', 'Playball', 'Brush Script MT', cursive",
                  transition: 'all 0.3s ease-in-out',
                  '& span': { color: '#C59B27', transition: 'all 0.3s ease-in-out' }
                }}
              >
                Murali <span>Palanisamy</span>
              </Typography>
            </Box>

            {/* Desktop Nav Items */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: isActive ? '#0F2C59' : 'rgba(5, 29, 36, 0.85)',
                      fontSize: '14px',
                      fontWeight: isActive ? 700 : 600,
                      px: 1.8,
                      py: 0.8,
                      borderRadius: '20px',
                      backgroundColor: isActive ? 'rgba(15, 44, 89, 0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(15, 44, 89, 0.15)' : '1px solid transparent',
                      '&:hover': {
                        color: '#0F2C59',
                        backgroundColor: 'rgba(15, 44, 89, 0.06)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, color: '#051d24' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Animated Header Wave Ribbon */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -10,
            left: 0,
            width: '100%',
            height: '12px',
            overflow: 'hidden',
            pointerEvents: 'none',
            lineHeight: 0,
            opacity: trigger ? 0.9 : 0.6,
            transition: 'opacity 0.3s ease',
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="header-wave-1"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '200%',
              height: '100%',
            }}
          >
            <path
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
              fill="rgba(197, 155, 39, 0.22)"
            />
          </Box>
          <Box
            component="svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="header-wave-2"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '200%',
              height: '100%',
            }}
          >
            <path
              d="M0,20 C200,100 450,0 700,60 C950,120 1100,20 1200,40 L1200,120 L0,120 Z"
              fill="rgba(15, 44, 89, 0.18)"
            />
          </Box>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(16px)',
            borderLeft: '1px solid rgba(15, 44, 89, 0.1)',
            padding: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              component="img"
              src="images/murali_logo.png"
              alt="Murali Palanisamy Logo"
              sx={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                objectFit: 'contain',
                border: '1.5px solid rgba(15, 44, 89, 0.15)'
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: '24px',
                color: '#051d24',
                fontFamily: "'Great Vibes', 'Playball', 'Brush Script MT', cursive",
                '& span': { color: '#C59B27' }
              }}
            >
              Murali <span>P</span>.
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle} color="inherit" sx={{ color: '#051d24' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <ListItem
                button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 1.5,
                  borderRadius: '12px',
                  mb: 1,
                  backgroundColor: isActive ? 'rgba(15, 44, 89, 0.08)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(15, 44, 89, 0.08)',
                    '& .MuiTypography-root': { color: '#C59B27' }
                  }
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '16px',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#0F2C59' : '#051d24',
                      transition: 'color 0.3s ease'
                    }
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
