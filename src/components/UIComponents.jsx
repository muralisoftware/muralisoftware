import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Chip, Card, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { hexToRgba, getTechColor } from '../theme/theme';

// Scroll Entrance Animation Wrapper
export const ScrollFadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If IntersectionObserver is supported, optionally observe
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.05 });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </Box>
  );
};

// Counter Counting Up Animation
export const AnimatedCounter = ({ endValue, duration = 1800, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(endValue, 10);
    if (isNaN(end) || end <= 0) {
      setCount(endValue);
      return;
    }

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * end);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={containerRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Embedded SVG Wave Element for Cards
export const CardWaveBackground = ({ color, isEven }) => {
  const path1 = "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
  const path2 = "M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,197.3C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  return (
    <Box
      className="card-wave-bg"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px',
        width: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.08,
        transition: 'all 0.4s ease-in-out',
        '& svg': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px'
        }
      }}
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill={color} d={isEven ? path1 : path2} />
      </svg>
    </Box>
  );
};

// Premium Skill Card with Smooth Hover Glow
export const SkillCard = ({ icon, title, level, description, tags, color }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glow.style.left = `${x - 100}px`;
    glow.style.top = `${y - 100}px`;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = -((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;
    
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    if (glow) {
      glow.style.left = '-200px';
      glow.style.top = '-200px';
    }
  };

  const rgbaColor08 = hexToRgba(color, 0.08);
  const rgbaColor2 = hexToRgba(color, 0.2);
  const rgbaColor5 = hexToRgba(color, 0.5);
  const rgbaColor12 = hexToRgba(color, 0.12);

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        padding: '32px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #ffffff, #eaedf2)',
        border: `1px solid ${rgbaColor2}`,
        boxShadow: `0 8px 30px ${hexToRgba(color, 0.05)}`,
        transition: 'transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        color: '#051d24',
        '&:hover': {
          borderColor: rgbaColor5,
          boxShadow: `0 20px 45px ${rgbaColor12}`,
          '& .skill-icon-container': {
            transform: 'scale(1.08) rotate(-4deg) translateZ(24px)',
          },
          '& .skill-title': {
            transform: 'translateZ(16px)',
          }
        }
      }}
    >
      <div 
        ref={glowRef} 
        className="skill-card-glow" 
        style={{ 
          left: '-200px', 
          top: '-200px',
          background: `radial-gradient(circle, ${hexToRgba(color, 0.22)} 0%, rgba(255, 255, 255, 0) 70%)`
        }} 
      />
      <Box sx={{ zIndex: 1, position: 'relative', transformStyle: 'preserve-3d' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 2.5, transformStyle: 'preserve-3d' }}>
          <Box
            className="skill-icon-container"
            sx={{
              width: 58,
              height: 58,
              background: `linear-gradient(135deg, ${color} 0%, ${hexToRgba(color, 0.4)} 100%)`,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: '#ffffff',
              transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          >
            {icon}
          </Box>
          <Typography className="skill-title" variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.5px', transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)' }}>
            {title}
          </Typography>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Chip
            label={level}
            sx={{
              backgroundColor: rgbaColor08,
              border: `1px solid ${rgbaColor2}`,
              color: color,
              fontWeight: 700,
              borderRadius: '20px',
              mb: 1.5,
              fontSize: '12px'
            }}
          />
          <Typography variant="body2" sx={{ color: '#425f65', fontSize: '15px', lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, zIndex: 1, position: 'relative', mt: 2 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              backgroundColor: rgbaColor08,
              color: color,
              border: `1px solid ${rgbaColor2}`,
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '11px'
            }}
          />
        ))}
      </Box>
    </Card>
  );
};

// Premium Project Card Component
export const ProjectCard = ({ title, description, features, tech, image, link, index = 0 }) => {
  const isEven = index % 2 === 0;
  const primaryColor = tech && tech.length > 0 ? getTechColor(tech[0]) : '#0F2C59';

  return (
    <Card
      className="glass-card"
      sx={{
        borderRadius: isEven ? '24px 60px 24px 60px' : '60px 24px 60px 24px',
        background: 'linear-gradient(to bottom, #ffffff, #eef7f8, #ffffff)',
        border: '1px solid rgba(15, 44, 89, 0.16)',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        mb: 4,
        boxShadow: '0 10px 40px rgba(15, 44, 89, 0.05)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${primaryColor}, #C59B27, ${primaryColor})`,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        },
        '&:hover': {
          transform: 'translateY(-6px) scale(1.004)',
          borderColor: primaryColor,
          borderRadius: isEven ? '32px 80px 32px 80px' : '80px 32px 80px 32px',
          boxShadow: `0 20px 50px ${hexToRgba(primaryColor, 0.12)}`,
          '&::before': {
            transform: 'scaleX(1)',
          },
          '& .card-wave-bg': {
            opacity: 0.16,
            height: '120px'
          }
        }
      }}
    >
      <CardWaveBackground color={primaryColor} isEven={isEven} />
      
      <Box sx={{ p: { xs: 3.5, md: 5 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography className="project-title" variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '24px', md: '28px' }, color: '#051d24' }}>
            {title}
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', fontSize: '15px', lineHeight: 1.8 }}>
            {description}
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, mb: 1, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
              Key Features
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', fontSize: '14.5px', lineHeight: 1.8, m: 0 }}>
              {features.map((feature, i) => (
                <Box component="li" key={i} sx={{ mb: 0.8, '&::marker': { color: '#C59B27' } }}>
                  {feature}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tech && tech.map((t) => {
                const techColor = getTechColor(t);
                return (
                  <Chip
                    key={t}
                    label={t}
                    sx={{
                      backgroundColor: hexToRgba(techColor, 0.08),
                      color: techColor,
                      border: `1px solid ${hexToRgba(techColor, 0.25)}`,
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '12px',
                      padding: '14px 6px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: techColor,
                        color: '#ffffff',
                        transform: 'scale(1.04)',
                        boxShadow: `0 4px 12px ${hexToRgba(techColor, 0.3)}`
                      }
                    }}
                  />
                );
              })}
            </Box>

            {link && (
              <Button
                variant="contained"
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: '18px' }} />}
                sx={{
                  backgroundColor: primaryColor,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  borderRadius: '30px',
                  px: 3,
                  py: 1,
                  boxShadow: `0 4px 15px ${hexToRgba(primaryColor, 0.25)}`,
                  '&:hover': {
                    backgroundColor: '#C59B27',
                    boxShadow: `0 6px 20px ${hexToRgba('#C59B27', 0.35)}`,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Visit Project
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
