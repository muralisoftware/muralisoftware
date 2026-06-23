import React, { useState, useEffect, useRef } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  TextField,
  Paper,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Drawer,
  Dialog,
  useScrollTrigger
} from '@mui/material';

// Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SettingsIcon from '@mui/icons-material/Settings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightIcon from '@mui/icons-material/Flight';
import BrushIcon from '@mui/icons-material/Brush';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CloseIcon from '@mui/icons-material/Close';

// Premium Unified Light Theme Configuration
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a7e8c', // Primary Accent
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0a7e8c',
    },
    background: {
      default: '#f3f8f9', // Light Theme Background
      paper: '#ffffff',
    },
    text: {
      primary: '#051d24',
      secondary: '#425f65',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        },
      },
    },
  },
});

// Helper: Convert HEX to RGBA dynamically for transparency styles
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Calculate Experience Dynamically
const calculateExperience = (joiningDate) => {
  const joinDate = new Date(joiningDate);
  const today = new Date();
  let experience = today.getFullYear() - joinDate.getFullYear();
  if (
    today.getMonth() < joinDate.getMonth() || 
    (today.getMonth() === joinDate.getMonth() && today.getDate() < joinDate.getDate())
  ) {
    experience--;
  }
  return experience;
};

// --- Subcomponents ---

// Interactive 3D Neural Network Background
const NeuralCanvas = ({ isPaused }) => {
  const canvasRef = useRef(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let nodes = [];
    let pulses = [];
    let rotationX = 0, rotationY = 0;
    let targetRotationX = 0, targetRotationY = 0;
    let isDragging = false;
    let lastMouseX = 0, lastMouseY = 0;
    let autoRotate = true;
    const autoRotationSpeed = 0.002;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initializeNodes();
    };

    class Node {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.connections = [];
        this.energy = 0;
      }

      project() {
        const scale = 500 / (500 + this.z);
        return {
          x: this.x * scale + width / 2,
          y: this.y * scale + height / 2,
          scale: Math.max(0, scale)
        };
      }
    }

    class Pulse {
      constructor(start, end) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = 0.02;
      }

      update() {
        this.progress += this.speed;
        return this.progress >= 1;
      }

      draw() {
        const pos = {
          x: this.start.rx + (this.end.rx - this.start.rx) * this.progress,
          y: this.start.ry + (this.end.ry - this.start.ry) * this.progress,
          z: this.start.rz + (this.end.rz - this.start.rz) * this.progress
        };

        const scale = 500 / (500 + pos.z);
        const px = pos.x * scale + width / 2;
        const py = pos.y * scale + height / 2;
        const pScale = Math.max(0, scale);

        if (pScale > 0) {
          ctx.beginPath();
          ctx.arc(px, py, 5 * pScale, 0, Math.PI * 2);
          
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, 5 * pScale);
          gradient.addColorStop(0, `rgba(10, 126, 140, ${1 - this.progress})`);
          gradient.addColorStop(1, `rgba(10, 126, 140, ${(1 - this.progress) * 0.3})`);
          ctx.fillStyle = gradient;
          
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(10, 126, 140, 0.4)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    const initializeNodes = () => {
      nodes = [];
      const gridSize = 7;
      const spacing = 120;

      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            const node = new Node(
              (x - gridSize / 2) * spacing,
              (y - gridSize / 2) * spacing,
              (z - gridSize / 2) * spacing
            );
            nodes.push(node);
          }
        }
      }

      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dz = node.z - other.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < spacing * 1.5) {
              node.connections.push(other);
            }
          }
        });
      });
    };

    const rotatePoint = (x, y, z, rx, ry) => {
      let cos = Math.cos(rx), sin = Math.sin(rx);
      let y1 = y * cos - z * sin;
      let z1 = y * sin + z * cos;
      
      cos = Math.cos(ry);
      sin = Math.sin(ry);
      let x1 = x * cos - z1 * sin;
      let z2 = x * sin + z1 * cos;
      
      return { x: x1, y: y1, z: z2 };
    };

    let animationFrameId;

    const animate = () => {
      if (!isPausedRef.current) {
        ctx.fillStyle = 'rgba(243, 248, 249, 0.15)';
        ctx.fillRect(0, 0, width, height);

        if (autoRotate && !isDragging) {
          targetRotationY += autoRotationSpeed;
          targetRotationX = Math.sin(Date.now() * 0.0003) * 0.15;
        }

        rotationX += (targetRotationX - rotationX) * 0.1;
        rotationY += (targetRotationY - rotationY) * 0.1;

        nodes.forEach(node => {
          const rotated = rotatePoint(node.x, node.y, node.z, rotationX, rotationY);
          node.rx = rotated.x;
          node.ry = rotated.y;
          node.rz = rotated.z;
        });

        nodes.sort((a, b) => b.rz - a.rz);

        nodes.forEach(node => {
          node.connections.forEach(other => {
            const scaleStart = 500 / (500 + node.rz);
            const sx = node.rx * scaleStart + width / 2;
            const sy = node.ry * scaleStart + height / 2;

            const scaleEnd = 500 / (500 + other.rz);
            const ex = other.rx * scaleEnd + width / 2;
            const ey = other.ry * scaleEnd + height / 2;

            if (scaleStart > 0 && scaleEnd > 0) {
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              ctx.lineTo(ex, ey);
              ctx.strokeStyle = `rgba(10, 126, 140, ${0.12 * scaleStart})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          });
        });

        pulses = pulses.filter(pulse => !pulse.update());
        pulses.forEach(pulse => pulse.draw());

        nodes.forEach(node => {
          const scale = 500 / (500 + node.rz);
          const px = node.rx * scale + width / 2;
          const py = node.ry * scale + height / 2;

          if (scale > 0) {
            ctx.beginPath();
            ctx.arc(px, py, 2.5 * scale, 0, Math.PI * 2);
            
            const gradient = ctx.createRadialGradient(px, py, 0, px, py, 2.5 * scale);
            gradient.addColorStop(0, `rgba(10, 126, 140, ${scale})`);
            gradient.addColorStop(1, `rgba(10, 126, 140, ${scale * 0.6})`);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(10, 126, 140, 0.3)';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        targetRotationY += (e.clientX - lastMouseX) * 0.01;
        targetRotationX += (e.clientY - lastMouseY) * 0.01;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        targetRotationY += (e.touches[0].clientX - lastMouseX) * 0.01;
        targetRotationX += (e.touches[0].clientY - lastMouseY) * 0.01;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleClick = () => {
      if (!isDragging && nodes.length > 0) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.connections.slice(0, 3).forEach(conn => {
          pulses.push(new Pulse(randomNode, conn));
        });
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="neuralCanvas" />;
};

// Scroll entrance animation wrapper
const ScrollFadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`,
        width: '100%',
        display: 'flex'
      }}
    >
      {children}
    </Box>
  );
};

// Counter counting up animation
const AnimatedCounter = ({ endValue, duration = 2000, prefix = "", suffix = "" }) => {
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

    let start = 0;
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

// Premium Skill Card with Mouse Glow and Dynamic Accent Color
const SkillCard = ({ icon, title, level, description, tags, color }) => {
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
  };

  const rgbaColor08 = hexToRgba(color, 0.08);
  const rgbaColor2 = hexToRgba(color, 0.2);
  const rgbaColor5 = hexToRgba(color, 0.5);
  const rgbaColor12 = hexToRgba(color, 0.12);

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-card"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        padding: '35px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #ffffff, #e6f4f6)',
        border: `1px solid ${rgbaColor2}`,
        boxShadow: `0 8px 30px ${hexToRgba(color, 0.05)}`,
        transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.4s ease, box-shadow 0.4s ease',
        color: '#051d24',
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: rgbaColor5,
          boxShadow: `0 20px 45px ${rgbaColor12}`,
          '& .skill-icon-container': {
            transform: 'scale(1.1) rotate(-5deg)',
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
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 3 }}>
          <Box
            className="skill-icon-container"
            sx={{
              width: 64,
              height: 64,
              background: `linear-gradient(135deg, ${color} 0%, ${hexToRgba(color, 0.4)} 100%)`,
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          >
            {icon}
          </Box>
          <Typography className="skill-title" variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
            {title}
          </Typography>
        </Box>
        
        <Box sx={{ mb: 2.5 }}>
          <Chip
            label={level}
            sx={{
              backgroundColor: rgbaColor08,
              border: `1px solid ${rgbaColor2}`,
              color: color,
              fontWeight: 700,
              borderRadius: '20px',
              mb: 2,
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

// Premium Project Card component
const ProjectCard = ({ title, description, features, tech, getTechColor }) => {
  return (
    <Card
      className="glass-card"
      sx={{
        borderRadius: '24px',
        background: 'linear-gradient(to bottom, #ffffff, #eef7f8, #ffffff)',
        border: '1px solid rgba(10, 126, 140, 0.16)',
        color: '#051d24',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        mb: 4,
        boxShadow: '0 10px 40px rgba(10, 126, 140, 0.05)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #0a7e8c, #054f59, #0a7e8c)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: 'rgba(10, 126, 140, 0.5)',
          boxShadow: '0 20px 50px rgba(10, 126, 140, 0.12)',
          '&::before': {
            transform: 'scaleX(1)',
          }
        }
      }}
    >
      <Grid container spacing={4} sx={{ padding: { xs: 4, md: 5 } }}>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Typography className="project-title" variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '24px', md: '30px' } }}>
            {title}
          </Typography>
          <Typography sx={{ color: '#425f65', fontSize: '16px', lineHeight: 1.8 }}>
            {description}
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, mb: 1.5, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '12px' }}>
              Key Features
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: '#425f65', fontSize: '15px', lineHeight: 1.8, m: 0 }}>
              {features.map((feature, i) => (
                <Box component="li" key={i} sx={{ mb: 1, '&::marker': { color: '#0a7e8c' } }}>
                  {feature}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            {tech.map((t) => {
              const techColor = getTechColor(t);
              return (
                <Chip
                  key={t}
                  label={t}
                  sx={{
                    backgroundColor: hexToRgba(techColor, 0.08),
                    color: techColor,
                    border: `1px solid ${hexToRgba(techColor, 0.25)}`,
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '18px 10px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: techColor,
                      color: '#ffffff',
                      transform: 'scale(1.05)',
                      boxShadow: `0 4px 15px ${hexToRgba(techColor, 0.35)}`
                    }
                  }}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

// Custom Scroll Hook for Header Background
const ScrollTriggerAppBar = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.88)' : 'transparent',
      backdropFilter: trigger ? 'blur(16px)' : 'none',
      borderBottom: trigger ? '1px solid rgba(10, 126, 140, 0.1)' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
  });
};

// --- Main App Component ---
export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Lightbox picture viewer state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');

  const handleOpenLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const yearsOfExperience = calculateExperience("2021-09-01");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields!");
      return;
    }

    const emailAddress = "muralip.software.engineer@gmail.com";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
    window.open(gmailLink, "_blank");
  };

  // Dynamic Technology Color mapping helper
  const getTechColor = (techName) => {
    const mapping = {
      'Next.js': '#051d24',
      'PostgreSQL': '#336791',
      'Odoo': '#875A7B',
      'Python': '#306998',
      'XML': '#df5223',
      'React.js': '#00a3a3',
      'Java': '#b03823',
      'Android Studio': '#1d9354',
      'Laravel': '#e3342f',
      'PHP': '#777BB4',
      'MySQL': '#00758f',
      'SMTP / Email OTP': '#cc5200',
      'CSV / XLSX': '#107c41'
    };
    return mapping[techName] || '#0a7e8c'; // default teal
  };

  // Nav links
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  // Skills Data with Premium Custom Colors
  const skillsData = [
    {
      icon: '🐍',
      title: 'Python',
      level: 'Expert Level',
      description: 'Advanced proficiency in Python for backend development, data processing, and automation. Extensive experience with Django, Flask, and building RESTful APIs.',
      tags: ['Django', 'Flask', 'FastAPI', 'Automation'],
      color: '#306998' // Custom Slate Blue
    },
    {
      icon: '🐘',
      title: 'PHP',
      level: 'Expert Level',
      description: 'Deep expertise in PHP and Laravel framework for robust server-side applications. Skilled in building scalable web applications and content management systems.',
      tags: ['Laravel', 'WordPress', 'APIs', 'MVC'],
      color: '#777BB4' // PHP Indigo/Purple
    },
    {
      icon: '⚡',
      title: 'JavaScript',
      level: 'Advanced Level',
      description: 'Strong command of modern JavaScript (ES6+) for creating interactive and dynamic web applications. Experience with async programming and design patterns.',
      tags: ['ES6+', 'Async/Await', 'DOM', 'TypeScript'],
      color: '#bfa100' // Gold/Amber
    },
    {
      icon: '⚛️',
      title: 'React JS',
      level: 'Expert Level',
      description: 'Proficient in building modern, responsive SPAs using React. Expert with hooks, context API, Redux, and component architecture for scalable applications.',
      tags: ['Hooks', 'Redux', 'Context API', 'Testing'],
      color: '#00a3a3' // Cyan
    },
    {
      icon: '▲',
      title: 'Next.js',
      level: 'Expert Level',
      description: 'Experienced in building production-ready applications with Next.js. Proficient in SSR, SSG, API routes, and optimizing performance for SEO-friendly apps.',
      tags: ['SSR/SSG', 'API Routes', 'SEO', 'Performance'],
      color: '#051d24' // Dark Slate/Charcoal
    },
    {
      icon: '📱',
      title: 'Flutter',
      level: 'Expert Level',
      description: 'Skilled in developing cross-platform mobile applications using Flutter and Dart. Experience with state management, custom widgets, and native integrations.',
      tags: ['Dart', 'Bloc Pattern', 'Widgets', 'iOS/Android'],
      color: '#02569B' // Azure Blue
    },
    {
      icon: '🗄️',
      title: 'MySQL',
      level: 'Advanced Level',
      description: 'Strong database design and query optimization skills. Experienced in complex queries, stored procedures, indexing, and database performance tuning.',
      tags: ['Query Optimization', 'Indexing', 'Procedures', 'Normalization'],
      color: '#00758F' // Teal-Blue
    },
    {
      icon: '🐘',
      title: 'PostgreSQL',
      level: 'Expert Level',
      description: 'Advanced knowledge of PostgreSQL for complex data operations. Proficient in JSONB, full-text search, partitioning, and advanced database features.',
      tags: ['JSONB', 'Full-text Search', 'Partitioning', 'Triggers'],
      color: '#336791' // Royal Slate Blue
    },
    {
      icon: '⚙️',
      title: 'ODOO',
      level: 'Proficient Level',
      description: 'Experienced in ODOO ERP customization and module development. Capable of building custom business applications and integrating third-party systems.',
      tags: ['Module Dev', 'Customization', 'ERP', 'Integration'],
      color: '#875A7B' // Odoo Orchid Purple
    }
  ];

  // Services Data with Dynamic Premium Custom Colors
  const servicesData = [
    {
      icon: <LanguageIcon sx={{ fontSize: 35 }} />,
      title: 'Web Development',
      description: 'Custom, responsive, and SEO-friendly websites that elevate your online presence.',
      color: '#0a7e8c' // Teal
    },
    {
      icon: <CodeIcon sx={{ fontSize: 35 }} />,
      title: 'Web Application',
      description: 'Scalable and secure web apps for businesses of all sizes.',
      color: '#777BB4' // Indigo
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 35 }} />,
      title: 'UI/UX Design',
      description: 'Intuitive and visually stunning designs that enhance user experience.',
      color: '#c21d80' // Magenta
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 35 }} />,
      title: 'Mobile App',
      description: 'Native & cross-platform mobile solutions for iOS and Android.',
      color: '#02569B' // Sky Blue
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 35 }} />,
      title: 'End-to-End Development',
      description: 'Proficient in both frontend (React.js) and backend (Python, PHP, etc.) technologies.',
      color: '#bfa100' // Gold
    },
    {
      icon: <StorageIcon sx={{ fontSize: 35 }} />,
      title: 'Database Management',
      description: 'Skilled in handling SQL (PostgreSQL, MySQL) databases for optimized performance.',
      color: '#336791' // Slate Blue
    },
    {
      icon: <CodeIcon sx={{ fontSize: 35 }} />,
      title: 'API Dev & Integration',
      description: 'Building RESTful APIs and integrating third-party services seamlessly.',
      color: '#1d9354' // Emerald Green
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 35 }} />,
      title: 'Odoo App Development',
      description: 'Customizing, developing, and integrating Odoo ERP solutions for business automation.',
      color: '#875A7B' // Orchid Purple
    }
  ];

  // Projects Data
  const projectsData = [
    {
      title: 'Events - Registration Application',
      description: 'A flexible event registration system supporting three delegate types with secure email OTP authentication for reliable sign-ups and attendee verification.',
      features: [
        'Three user flows: Delegate, Team Leader, Invitee',
        'Email OTP authentication for secure registration',
        'Backend API routes for registrations and team management'
      ],
      tech: ['Next.js', 'SMTP / Email OTP', 'PostgreSQL']
    },
    {
      title: 'DWM - Daily Work Management System',
      description: 'Organization-wide daily work management system with org-chart, roles, and rolesheets. Built using Next.js for unified codebase and fast development.',
      features: [
        'Org chart & role management with role-based permissions',
        'Rolesheet generation, import / export (CSV / XLSX)',
        'Shared Next.js frontend + backend code for rapid development'
      ],
      tech: ['Next.js', 'CSV / XLSX', 'PostgreSQL']
    },
    {
      title: 'Kontact',
      description: 'A customized Odoo ERP solution for managing complete business workflow including Sales, Purchase, and Inventory operations with enhanced automation.',
      features: [
        'Custom quotation templates & automated email triggers',
        'Vendor comparison & dynamic pricing rules',
        'Real-time stock status & barcode scanning'
      ],
      tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
    },
    {
      title: 'In Process QA Module',
      description: 'A custom ERP platform designed for manufacturing workflows, integrating Production, Inventory, and Procurement modules for improved operational efficiency.',
      features: [
        'Helps ensure product quality is checked at every stage of production, not just at the end. ',
        'Helps reduce errors and maintain process consistency.',
        'By following clear quality standards and inspection steps, it helps teams stay organized and focused.',
        'It also speeds up problem detection, so issues can be fixed before they become bigger problems.',
        'This reduces waste, saves time, and helps deliver better products to customers.',
        'This reduces manual error and ensures timely corrective actions.',
      ],
      tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
    },
    {
      title: 'Central Kitchen Manager App',
      description: 'Point of Sale solution with real-time syncing between React frontend and Odoo backend, providing intuitive interface for retail operations.',
      features: [
        'Streamlining large-scale food preparation.',
        'Improving consistency, and reducing oprational costs.',
        'Enables real-time inventory tracking, and efficient dispatch management.',
        'Helps food safety, minimize waste, and ensures on-time deliveries.',
        'Vehicle Maintenance: Track fuel consumption, service history, and upkeep schedules to ensure optimal fleet performance.',
        'Attendance Management: Monitor employee attendance with real-time logs and shift-based tracking.',
        'Leave Management: Simplify leave requests, approvals, and balances through an integrated dashboard.',
      ],
      tech: ['React.js', 'Odoo', 'PostgreSQL', 'Python']
    },
    {
      title: 'Canine Office App',
      description: 'Specialized Odoo application for Kennel Club of India to manage dog registrations, pedigree certificates, and breeding history with traceable lineage.',
      features: [
        'Convenient form submission anytime from anywhere.',
        'Flexible payment system.',
        'Full transparency into form lifecycle.',
        'Users preferring offline methods can still submit forms via courier.',
        'Eliminates manual bottlenecks and accelerates form approvals.',
        'Improves traceability and compliance.',
      ],
      tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
    },
    {
      title: 'TMS - Task Management Mobile App',
      description: 'Mobile-first application for team task assignments, daily reporting, and progress tracking with real-time notifications for enhanced productivity.',
      features: [
        'Task creation, assignment, and status tracking',
        'Push notifications for deadlines and updates',
        'Optimized for Android with offline sync'
      ],
      tech: ['Java', 'Android Studio']
    },
    {
      title: 'Education Fund Manager System',
      description: 'Odoo-based financial platform for NGOs to manage student sponsorships, donations, and fund disbursement with complete transparency.',
      features: [
        'Centralized Donation Management.',
        'Expenses are directly linked to schools, students, or activities.',
        'Generate student-wise, school-wise, and donor-wise reports.',
        'Enhances donor trust and supports fundraising efforts.',
        'Offers granular transparency across the foundation’s educational support efforts.',
        'All financial data and reports are stored and ready for audits or board reviews.',
      ],
      tech: ['Python', 'XML', 'PostgreSQL']
    },
    {
      title: 'SBAS - Road Safety System',
      description: 'Comprehensive road safety application for Chola MS to monitor, report, and ensure compliance with safety protocols across transportation operations.',
      features: [
        'Road incident tracking and digital logbooks',
        'Compliance dashboard with safety metrics',
        'Real-time alerts for violations and incidents'
      ],
      tech: ['React.js', 'Laravel', 'PHP']
    },
    {
      title: 'Sacola - Blockchain Platform',
      description: 'Internal blockchain-based platform for secure crypto wallet management and NFT trading, empowering users to manage digital assets with ease.',
      features: [
        'Secure crypto wallet integration',
        'NFT minting and marketplace module',
        'Dashboard for asset tracking'
      ],
      tech: ['React.js', 'PHP', 'MySQL']
    },
    {
      title: 'Hotplates - Food Delivery',
      description: 'Location and time-slot-based online food ordering platform designed for optimized restaurant delivery logistics ensuring fresh and timely meals.',
      features: [
        'Location-based restaurant listing',
        'Time-slot-based delivery scheduling',
        'Real-time order tracking'
      ],
      tech: ['Laravel', 'PHP', 'MySQL']
    }
  ];

  // Client Logos (for infinite scrolling)
  const clients = [
    { logo: 'images/magaltech-logo.jpeg', name: 'Magaltech' },
    { logo: 'images/swadha-logo.png', name: 'Swadha Foundation' },
    { logo: 'images/cholsms-logo.jpeg', name: 'Chola MS' },
    { logo: 'images/kci.jpg', name: 'KCI' },
    { logo: 'images/rubix.jpg', name: 'Rubix' },
    { logo: 'images/kontact_consortium_logo.jpeg', name: 'Kontact Consortium' }
  ];
  
  // Double for infinite marquee effect
  const doubleClients = [...clients, ...clients];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* AppBar Header */}
      <ScrollTriggerAppBar>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
              <Box
                onClick={() => handleNavClick('home')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  cursor: 'pointer',
                  '&:hover img': {
                    transform: 'scale(1.08) rotate(3deg)',
                    borderColor: '#054f59',
                    boxShadow: '0 4px 12px rgba(10, 126, 140, 0.3)'
                  },
                  '&:hover .navbar-brand': {
                    color: '#0a7e8c'
                  }
                }}
              >
                <Box
                  component="img"
                  src="images/murali_profile.png"
                  alt="Murali Palanisamy Logo"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenLightbox('images/murali_profile.png');
                  }}
                  sx={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    border: '2px solid #0a7e8c',
                    boxShadow: '0 2px 8px rgba(10, 126, 140, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'zoom-in'
                  }}
                />
                <Typography
                  variant="h6"
                  className="navbar-brand"
                  sx={{
                    fontWeight: 800,
                    fontSize: '22px',
                    color: '#051d24',
                    letterSpacing: '-0.5px',
                    transition: 'all 0.3s ease-in-out',
                    '& span': { color: '#0a7e8c', transition: 'all 0.3s ease-in-out' }
                  }}
                >
                  Murali <span>Palanisamy</span>
                </Typography>
              </Box>

              {/* Desktop Nav Items */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      color: 'rgba(5, 29, 36, 0.85)',
                      fontSize: '15px',
                      fontWeight: 600,
                      px: 2,
                      '&:hover': {
                        color: '#0a7e8c',
                        backgroundColor: 'rgba(10, 126, 140, 0.05)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
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
        </AppBar>
      </ScrollTriggerAppBar>

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
            borderLeft: '1px solid rgba(10, 126, 140, 0.1)',
            padding: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2
            }}
          >
            <Box
              component="img"
              src="images/murali_profile.png"
              alt="Murali Palanisamy Logo"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenLightbox('images/murali_profile.png');
              }}
              sx={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '1.5px solid #0a7e8c',
                boxShadow: '0 2px 6px rgba(10, 126, 140, 0.15)',
                cursor: 'zoom-in'
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '18px',
                color: '#051d24',
                letterSpacing: '-0.5px',
                fontFamily: "'Sora', -apple-system, sans-serif",
                '& span': { color: '#0a7e8c' }
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
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              sx={{
                py: 2,
                borderRadius: '12px',
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(10, 126, 140, 0.08)',
                  '& .MuiTypography-root': { color: '#0a7e8c' }
                }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: { fontSize: '18px', fontWeight: 600, transition: 'color 0.3s ease', color: '#051d24' }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Home Hero Section */}
      <Box
        id="home"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'radial-gradient(circle at center, #e6f4f6 0%, #f3f8f9 100%)',
        }}
      >
        <NeuralCanvas isPaused={isPaused} />
        
        {/* Canvas Controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 150, md: 40 },
            left: 40,
            zIndex: 10,
            display: 'flex',
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setIsPaused(!isPaused)}
            startIcon={isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            sx={{
              borderColor: 'rgba(10, 126, 140, 0.3)',
              color: '#0a7e8c',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              '&:hover': {
                borderColor: '#0a7e8c',
                backgroundColor: 'rgba(10, 126, 140, 0.1)',
              }
            }}
          >
            {isPaused ? "Play Animation" : "Pause Animation"}
          </Button>
        </Box>

        <Container maxWidth="md" sx={{ zIndex: 2, position: 'relative', textAlign: 'center', px: 3 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '38px', sm: '56px', md: '68px' },
              lineHeight: 1.15,
              mb: 3,
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#051d24',
              textShadow: '0 2px 10px rgba(10, 126, 140, 0.05)'
            }}
          >
            Hello! I'm <Box component="span" sx={{ color: '#0a7e8c', background: 'linear-gradient(120deg, #0a7e8c 0%, #054f59 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Murali Palanisamy</Box>
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '18px', sm: '24px', md: '28px' },
              color: 'text.secondary',
              mb: 3,
              fontWeight: 500,
              letterSpacing: '-0.5px'
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
            I build modern, scalable web and mobile applications with a passion for design and functionality.
          </Typography>

          <Button
            component="a"
            href="static/files/cv.pdf"
            download="MuraliPalanisamy_CV.pdf"
            variant="outlined"
            sx={{
              borderColor: '#0a7e8c',
              color: '#0a7e8c',
              fontSize: '16px',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
                borderColor: '#0a7e8c',
                backgroundColor: '#0a7e8c',
                color: '#ffffff',
                transform: 'scale(1.05) rotateX(10deg)',
                boxShadow: '0 10px 30px rgba(10, 126, 140, 0.15)'
              }
            }}
          >
            📄 Download CV
          </Button>
        </Container>
      </Box>

      {/* Stats Counter Section */}
      <Box
        sx={{
          backgroundColor: '#e6f4f6',
          py: 6,
          borderTop: '1px solid rgba(10, 126, 140, 0.12)',
          borderBottom: '1px solid rgba(10, 126, 140, 0.12)',
          position: 'relative',
          zIndex: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {/* Stat 1 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h2" sx={{ color: '#0a7e8c', fontWeight: 800, fontSize: { xs: '45px', md: '56px' } }}>
                  <AnimatedCounter endValue="10" />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 1 }}>
                  Projects Completed
                </Typography>
              </Box>
            </Grid>
            {/* Stat 2 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h2" sx={{ color: '#0a7e8c', fontWeight: 800, fontSize: { xs: '45px', md: '56px' } }}>
                  <AnimatedCounter endValue="25" />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 1 }}>
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            {/* Stat 3 */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h2" sx={{ color: '#0a7e8c', fontWeight: 800, fontSize: { xs: '45px', md: '56px' } }}>
                  <AnimatedCounter endValue={yearsOfExperience} />+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 600, mt: 1 }}>
                  Years Experience
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 12, position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left side Image */}
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
                    boxShadow: '0 20px 40px rgba(10, 126, 140, 0.12)',
                    border: '1px solid rgba(10, 126, 140, 0.15)',
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
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </Box>
              </ScrollFadeIn>
            </Grid>

            {/* Right side Text */}
            <Grid item xs={12} md={7}>
              <ScrollFadeIn delay={0.2}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
                      My Intro
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
                      About Me
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" sx={{ color: '#425f65', lineHeight: 1.8, fontSize: '16px' }}>
                    Hi! I'm Murali Palanisamy, a dedicated Software Engineer specializing in full-stack web and mobile application development. With over four years of professional experience, I successfully design, build, and deploy robust software systems using Python (Django/FastAPI), PHP (Laravel), JavaScript (React/Next.js), and Odoo ERP customization.
                    <br /><br />
                    My engineering philosophy centers around writing clean, testable code, optimizing database performance (PostgreSQL/MySQL), and designing RESTful APIs that scale. I have a proven track record of helping organizations automate their business workflows, streamline inventory operations, and launch user-focused mobile apps (using Flutter and Java).
                  </Typography>

                  {/* Personal details grid */}
                  <Paper
                    className="glass-panel"
                    sx={{
                      p: 3,
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.65)',
                      border: '1px solid rgba(10, 126, 140, 0.12)',
                      boxShadow: '0 4px 20px rgba(10, 126, 140, 0.04)'
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                          <strong style={{ color: '#0a7e8c' }}>Name:</strong> Murali Palanisamy
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                          <strong style={{ color: '#0a7e8c' }}>Date of Birth:</strong> September 19, 2001
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                          <strong style={{ color: '#0a7e8c' }}>Address:</strong> Krishnagiri, TamilNadu, India
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                          <strong style={{ color: '#0a7e8c' }}>Zip Code:</strong> 635207
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24', wordBreak: 'break-word' }}>
                          <strong style={{ color: '#0a7e8c' }}>Email:</strong> muralip.software.engineer@gmail.com
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ fontSize: '15px', color: '#051d24' }}>
                          <strong style={{ color: '#0a7e8c' }}>Phone:</strong> +91 93616 59922
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>

                  {/* Interests layout */}
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#051d24' }}>
                      Interests
                    </Typography>
                    <Grid container spacing={2}>
                      {[
                        { icon: <MusicNoteIcon sx={{ color: '#0a7e8c' }} />, text: 'Music' },
                        { icon: <FlightIcon sx={{ color: '#0a7e8c' }} />, text: 'Travel' },
                        { icon: <BrushIcon sx={{ color: '#0a7e8c' }} />, text: 'Artist' },
                        { icon: <SportsBasketballIcon sx={{ color: '#0a7e8c' }} />, text: 'Sports' }
                      ].map((interest, idx) => (
                        <Grid item xs={6} sm={3} key={idx}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              p: 1.5,
                              borderRadius: '12px',
                              background: 'rgba(10, 126, 140, 0.05)',
                              border: '1px solid rgba(10, 126, 140, 0.08)',
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
        </Container>
      </Box>

      {/* Skills Section (with different premium colors added) */}
      <Box id="skills" sx={{ py: 12, backgroundColor: 'rgba(10, 126, 140, 0.03)', position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              Expertise & Technologies
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
              Technical Skills
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {skillsData.map((skill, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
                <ScrollFadeIn delay={idx * 0.05}>
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

      {/* Certifications Section */}
      <Box id="certifications" sx={{ py: 12, position: 'relative', zIndex: 3 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              My Achievements
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
              Certified Courses & Recognitions
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Showcasing my professional certifications and achievements in software development and Odoo applications.
            </Typography>
          </Box>

          <ScrollFadeIn>
            <Card
              sx={{
                background: '#ffffff',
                border: '1px solid rgba(10, 126, 140, 0.15)',
                boxShadow: '0 15px 40px rgba(10, 126, 140, 0.06)',
                borderRadius: '24px',
                overflow: 'hidden',
                width: '100%'
              }}
            >
              <Box
                component="img"
                src="images/UC-550a5ca4-33a5-488c-bf62-2fe9e0a8e9df.jpg"
                alt="Udemy Python Pro Certificate"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderBottom: '1px solid rgba(10, 126, 140, 0.12)',
                  display: 'block'
                }}
              />
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, fontSize: { xs: '22px', md: '28px' }, color: '#051d24' }}>
                  Python Pro Certificate
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4, fontWeight: 500 }}>
                  Issued by Udemy on April 2025
                </Typography>
                <Button
                  component="a"
                  href="https://www.udemy.com/certificate/UC-550a5ca4-33a5-488c-bf62-2fe9e0a8e9df/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    px: 5,
                    py: 1.8,
                    fontWeight: 700,
                    fontSize: '15px',
                    boxShadow: '0 4px 15px rgba(10, 126, 140, 0.2)',
                    '&:hover': {
                      boxShadow: '0 6px 25px rgba(10, 126, 140, 0.35)',
                      backgroundColor: '#075b66'
                    }
                  }}
                >
                  View Certificate Verification
                </Button>
              </CardContent>
            </Card>
          </ScrollFadeIn>
        </Container>
      </Box>

      {/* Services Section (with different custom colors added) */}
      <Box id="services" sx={{ py: 12, backgroundColor: 'rgba(10, 126, 140, 0.03)', position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              I Am Great At
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
              We Do Awesome Services For Our Clients
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {servicesData.map((service, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} sx={{ display: 'flex' }}>
                <ScrollFadeIn delay={idx * 0.05}>
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      border: '1px solid rgba(10, 126, 140, 0.12)',
                      padding: 4,
                      borderRadius: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      width: '100%',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: service.color,
                        backgroundColor: '#ffffff',
                        boxShadow: `0 12px 40px ${hexToRgba(service.color, 0.12)}`,
                        '& .service-icon-box': {
                          backgroundColor: hexToRgba(service.color, 0.1)
                        }
                      }
                    }}
                  >
                    <Box
                      className="service-icon-box"
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: hexToRgba(service.color, 0.06),
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: service.color,
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#051d24' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '14px' }}>
                      {service.description}
                    </Typography>
                  </Card>
                </ScrollFadeIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Hire Me CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #f3f8f9 0%, #e6f4f6 100%)',
          borderTop: '1px solid rgba(10, 126, 140, 0.12)',
          borderBottom: '1px solid rgba(10, 126, 140, 0.12)',
          position: 'relative',
          zIndex: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            <Grid item xs={4} md={3} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <ScrollFadeIn delay={0.25}>
                <Box
                  component="img"
                  src="images/murali_profile.png"
                  alt="Murali Palanisamy"
                  onClick={() => handleOpenLightbox('images/murali_profile.png')}
                  sx={{
                    width: { xs: '80px', sm: '160px', md: '240px' },
                    height: { xs: '80px', sm: '160px', md: '240px' },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    border: { xs: '2px solid #ffffff', md: '4px solid #ffffff' },
                    boxShadow: '0 15px 35px rgba(10, 126, 140, 0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'zoom-in',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      borderColor: '#0a7e8c',
                      boxShadow: '0 20px 45px rgba(10, 126, 140, 0.25)'
                    }
                  }}
                />
              </ScrollFadeIn>
            </Grid>
            <Grid item xs={8} md={9}>
              <ScrollFadeIn>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 3.5 } }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '18px', sm: '32px', md: '42px' }, color: '#051d24' }}>
                    Have a project on your mind?
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#425f65', lineHeight: { xs: 1.5, md: 1.8 }, fontSize: { xs: '12px', sm: '15px', md: '16px' } }}>
                    We specialize in crafting innovative and scalable solutions tailored to your business needs. Whether it's web development, mobile apps, UI/UX design, or Odoo-based applications, we ensure seamless execution with cutting-edge technology. Let's collaborate and turn your ideas into reality! 🚀
                  </Typography>
                  <Box sx={{ mt: { xs: 1, md: 0 } }}>
                    <Button
                      onClick={() => handleNavClick('contact')}
                      variant="contained"
                      sx={{
                        px: { xs: 3, md: 5 },
                        py: { xs: 1, md: 1.8 },
                        fontSize: { xs: '12px', md: '16px' },
                        fontWeight: 700,
                        backgroundColor: '#0a7e8c',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(10, 126, 140, 0.25)',
                        '&:hover': {
                          backgroundColor: '#054f59',
                          color: '#ffffff',
                          boxShadow: '0 6px 20px rgba(10, 126, 140, 0.3)'
                        }
                      }}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </Box>
              </ScrollFadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section (with dynamic tag colors) */}
      <Box id="projects" sx={{ py: 12, position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, backgroundColor: 'rgba(10, 126, 140, 0.06)', borderRadius: '30px', mb: 2, border: '1px solid rgba(10, 126, 140, 0.15)' }}>
              <Typography variant="body2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                💼 Featured Work
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
              Projects
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              A curated collection of innovative solutions and impactful applications built with cutting-edge technologies.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {projectsData.map((project, idx) => (
              <ScrollFadeIn key={idx} delay={0.05}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  tech={project.tech}
                  getTechColor={getTechColor}
                />
              </ScrollFadeIn>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Client Logos Infinite Scroll Marquee */}
      <Box sx={{ py: 6, backgroundColor: '#ffffff', position: 'relative', zIndex: 3, borderTop: '1px solid rgba(10, 126, 140, 0.08)', borderBottom: '1px solid rgba(10, 126, 140, 0.08)' }}>
        <Container maxWidth="lg" sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
            Our Esteemed Clients
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#051d24', fontSize: { xs: '26px', md: '34px' } }}>
            Companies We've Worked With
          </Typography>
        </Container>

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

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 12, position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="subtitle2" sx={{ color: '#0a7e8c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
              Have A Project?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Let's build something amazing together! Whether it's a custom web solution, a powerful mobile app, or an Odoo-based business application, we turn your ideas into reality. 🚀
            </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center">
            {/* Form column */}
            <Grid item xs={12} md={10}>
              <ScrollFadeIn>
                <Paper
                  sx={{
                    p: { xs: 4, md: 5 },
                    borderRadius: '24px',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(10, 126, 140, 0.15)',
                    boxShadow: '0 15px 40px rgba(10, 126, 140, 0.05)',
                    width: '100%'
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& label.Mui-focused': { color: '#0a7e8c' },
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '& fieldset': { borderColor: 'rgba(10, 126, 140, 0.2)' },
                            '&:hover fieldset': { borderColor: '#0a7e8c' },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& label.Mui-focused': { color: '#0a7e8c' },
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '& fieldset': { borderColor: 'rgba(10, 126, 140, 0.2)' },
                            '&:hover fieldset': { borderColor: '#0a7e8c' },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& label.Mui-focused': { color: '#0a7e8c' },
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '& fieldset': { borderColor: 'rgba(10, 126, 140, 0.2)' },
                            '&:hover fieldset': { borderColor: '#0a7e8c' },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& label.Mui-focused': { color: '#0a7e8c' },
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '& fieldset': { borderColor: 'rgba(10, 126, 140, 0.2)' },
                            '&:hover fieldset': { borderColor: '#0a7e8c' },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        onClick={handleSendMessage}
                        variant="contained"
                        sx={{
                          px: 6,
                          py: 1.8,
                          fontSize: '15px',
                          fontWeight: 700,
                          boxShadow: '0 4px 15px rgba(10, 126, 140, 0.2)',
                          '&:hover': {
                            boxShadow: '0 6px 25px rgba(10, 126, 140, 0.35)',
                            backgroundColor: '#075b66'
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </ScrollFadeIn>
            </Grid>

            {/* Address, Phone, Email, Website Row */}
            <Grid item xs={12} md={10}>
              <ScrollFadeIn delay={0.2}>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  {/* Address */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(10, 126, 140, 0.12)',
                        boxShadow: '0 8px 30px rgba(10, 126, 140, 0.03)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        height: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px rgba(10, 126, 140, 0.1)',
                          borderColor: '#0a7e8c'
                        }
                      }}
                    >
                      <Box sx={{ width: 48, height: 48, minWidth: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(10, 126, 140, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 126, 140, 0.15)' }}>
                        <RoomIcon sx={{ color: '#0a7e8c', fontSize: '24px' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Address
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '13px' }}>
                          Chennai T-Nagar 600017
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(10, 126, 140, 0.12)',
                        boxShadow: '0 8px 30px rgba(10, 126, 140, 0.03)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        height: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px rgba(10, 126, 140, 0.1)',
                          borderColor: '#0a7e8c'
                        }
                      }}
                    >
                      <Box sx={{ width: 48, height: 48, minWidth: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(10, 126, 140, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 126, 140, 0.15)' }}>
                        <PhoneIcon sx={{ color: '#0a7e8c', fontSize: '24px' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" component="a" href="tel:+919361659922" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#0a7e8c' } }}>
                          +91 93616 59922
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(10, 126, 140, 0.12)',
                        boxShadow: '0 8px 30px rgba(10, 126, 140, 0.03)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        height: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px rgba(10, 126, 140, 0.1)',
                          borderColor: '#0a7e8c'
                        }
                      }}
                    >
                      <Box sx={{ width: 48, height: 48, minWidth: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(10, 126, 140, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 126, 140, 0.15)' }}>
                        <EmailIcon sx={{ color: '#0a7e8c', fontSize: '24px' }} />
                      </Box>
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Email
                        </Typography>
                        <Typography variant="body2" component="a" href="mailto:muralip.software.engineer@gmail.com" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '11px', textDecoration: 'none', display: 'block', wordBreak: 'break-all', '&:hover': { color: '#0a7e8c' } }}>
                          muralip.software.engineer@gmail.com
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Website */}
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(10, 126, 140, 0.12)',
                        boxShadow: '0 8px 30px rgba(10, 126, 140, 0.03)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        height: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 35px rgba(10, 126, 140, 0.1)',
                          borderColor: '#0a7e8c'
                        }
                      }}
                    >
                      <Box sx={{ width: 48, height: 48, minWidth: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(10, 126, 140, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 126, 140, 0.15)' }}>
                        <OpenInNewIcon sx={{ color: '#0a7e8c', fontSize: '24px' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Website
                        </Typography>
                        <Typography variant="body2" component="a" href="https://muralisoftware.github.io/" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#0a7e8c' } }}>
                          muralisoftware.github.io
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </ScrollFadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff', borderTop: '1px solid rgba(10, 126, 140, 0.12)', position: 'relative', zIndex: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            {/* Nav Links Column */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '-0.5px', color: '#051d24' }}>
                Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      color: '#425f65',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 650,
                      display: 'inline-flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '"›"',
                        fontSize: '20px',
                        marginRight: '8px',
                        color: '#0a7e8c',
                        lineHeight: 0
                      },
                      '&:hover': { color: '#0a7e8c', transform: 'translateX(5px)' },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Services Column */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '-0.5px', color: '#051d24' }}>
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
                      fontSize: '15px',
                      fontWeight: 650,
                      display: 'inline-flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '"›"',
                        fontSize: '20px',
                        marginRight: '8px',
                        color: '#0a7e8c',
                        lineHeight: 0
                      }
                    }}
                  >
                    {serv}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Question/Social Column */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, letterSpacing: '-0.5px', color: '#051d24' }}>
                Have a Question?
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <RoomIcon sx={{ color: '#0a7e8c', mt: 0.2 }} />
                  <Typography sx={{ color: '#425f65', fontSize: '15px', fontWeight: 650 }}>
                    T-Nagar Chennai 600017
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: '#0a7e8c' }} />
                  <Typography
                    component="a"
                    href="tel:+919361659922"
                    sx={{ color: '#425f65', fontSize: '15px', fontWeight: 650, textDecoration: 'none', '&:hover': { color: '#0a7e8c' } }}
                  >
                    +91 93616 59922
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <EmailIcon sx={{ color: '#0a7e8c', mt: 0.2 }} />
                  <Typography
                    component="a"
                    href="mailto:muralip.software.engineer@gmail.com"
                    sx={{ color: '#425f65', fontSize: '15px', fontWeight: 650, textDecoration: 'none', display: 'block', wordBreak: 'break-all', '&:hover': { color: '#0a7e8c' } }}
                  >
                    muralip.software.engineer@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { icon: 'fa-twitter', link: 'https://x.com/i/flow/login?redirect_after_login=%2FMuraliVijayBCA1' },
                  { icon: 'fa-facebook', link: 'https://www.facebook.com/share/1ECUmzyGNH/' },
                  { icon: 'fa-instagram', link: 'https://www.instagram.com/__monster__murali__?utm_source=qr&igsh=dzN5cWNwNXI3Mmw4' }
                ].map((social, idx) => (
                  <IconButton
                    key={idx}
                    component="a"
                    href={social.link}
                    target="_blank"
                    sx={{
                      backgroundColor: 'rgba(10, 126, 140, 0.05)',
                      color: '#0a7e8c',
                      width: 44,
                      height: 44,
                      border: '1px solid rgba(10, 126, 140, 0.12)',
                      '&:hover': {
                        backgroundColor: '#0a7e8c',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(10, 126, 140, 0.25)',
                        transform: 'translateY(-3px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className={`fa-brands ${social.icon}`} style={{ fontSize: '18px' }} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Copyright Divider */}
          <Box sx={{ borderTop: '1px solid rgba(10, 126, 140, 0.08)', mt: 6, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(5, 29, 36, 0.5)', textAlign: 'center' }}>
              Copyright © {new Date().getFullYear()}{' '}
              <Link href="https://muralisoftware.github.io/" target="_blank" sx={{ color: '#0a7e8c', textDecoration: 'none', '&:hover': { color: '#054f59' } }}>
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

      {/* Premium Lightbox Modal for Profile/Project Pictures */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        maxWidth="md"
        scroll="body"
        PaperProps={{
          sx: {
            background: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
            margin: { xs: 2, sm: 4 },
            maxWidth: '100vw',
            maxHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(5, 29, 36, 0.85)',
              backdropFilter: 'blur(10px)'
            }
          }
        }}
      >
        <IconButton
          onClick={() => setLightboxOpen(false)}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            color: '#ffffff',
            backgroundColor: 'rgba(10, 126, 140, 0.3)',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              backgroundColor: 'rgba(10, 126, 140, 0.6)',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.2s ease',
            zIndex: 9999
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={lightboxImg}
          alt="Full Size View"
          onClick={() => setLightboxOpen(false)}
          sx={{
            maxWidth: '95vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            cursor: 'zoom-out',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.01)'
            }
          }}
        />
      </Dialog>
    </ThemeProvider>
  );
}
