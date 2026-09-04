import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Button
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ScrollFadeIn } from '../components/UIComponents';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sendMethod, setSendMethod] = useState('gmail');

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
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (sendMethod === 'gmail') {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
      window.open(gmailLink, "_blank");
    } else {
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <Box id="contact" sx={{ pt: { xs: 12, md: 14 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="subtitle2" sx={{ color: '#C59B27', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 1 }}>
            Get in Touch
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '32px', md: '42px' }, color: '#051d24' }}>
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '650px', margin: '0 auto', fontSize: '16px' }}>
            Let's build something amazing together! Whether you have a project idea, a question, or simply want to connect, reach out anytime. 🚀
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {/* Form Column */}
          <Grid item xs={12} md={10}>
            <ScrollFadeIn>
              <Paper
                sx={{
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(15, 44, 89, 0.15)',
                  boxShadow: '0 15px 40px rgba(15, 44, 89, 0.05)',
                  width: '100%'
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                          '&:hover fieldset': { borderColor: '#0F2C59' },
                          '&.Mui-focused fieldset': { borderColor: '#0F2C59' }
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
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                          '&:hover fieldset': { borderColor: '#0F2C59' },
                          '&.Mui-focused fieldset': { borderColor: '#0F2C59' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                          '&:hover fieldset': { borderColor: '#0F2C59' },
                          '&.Mui-focused fieldset': { borderColor: '#0F2C59' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                          '&:hover fieldset': { borderColor: '#0F2C59' },
                          '&.Mui-focused fieldset': { borderColor: '#0F2C59' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                      <Button
                        variant={sendMethod === 'gmail' ? 'contained' : 'outlined'}
                        onClick={() => setSendMethod('gmail')}
                        sx={{
                          borderRadius: '20px',
                          backgroundColor: sendMethod === 'gmail' ? '#0F2C59' : 'transparent',
                          color: sendMethod === 'gmail' ? '#ffffff' : '#0F2C59',
                          borderColor: '#0F2C59'
                        }}
                      >
                        Send via Web Gmail
                      </Button>
                      <Button
                        variant={sendMethod === 'default' ? 'contained' : 'outlined'}
                        onClick={() => setSendMethod('default')}
                        sx={{
                          borderRadius: '20px',
                          backgroundColor: sendMethod === 'default' ? '#0F2C59' : 'transparent',
                          color: sendMethod === 'default' ? '#ffffff' : '#0F2C59',
                          borderColor: '#0F2C59'
                        }}
                      >
                        Send via Email App
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleSendMessage}
                      sx={{
                        py: 1.8,
                        borderRadius: '30px',
                        fontSize: '16px',
                        fontWeight: 700,
                        backgroundColor: '#0F2C59',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(15, 44, 89, 0.25)',
                        '&:hover': {
                          backgroundColor: '#C59B27',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      🚀 Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </ScrollFadeIn>
          </Grid>

          {/* Quick Contact Info Cards */}
          <Grid item xs={12} md={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 44, 89, 0.12)',
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <RoomIcon sx={{ fontSize: '32px', color: '#2e7d32', mb: 1 }} />
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase' }}>
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '13px' }}>
                    T-Nagar, Chennai 600017
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 44, 89, 0.12)',
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <PhoneIcon sx={{ fontSize: '32px', color: '#0F2C59', mb: 1 }} />
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase' }}>
                    Contact Number
                  </Typography>
                  <Typography variant="body2" component="a" href="tel:+919361659922" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '13px', textDecoration: 'none' }}>
                    +91 93616 59922
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 44, 89, 0.12)',
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <EmailIcon sx={{ fontSize: '32px', color: '#c62828', mb: 1 }} />
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase' }}>
                    Email
                  </Typography>
                  <Typography variant="body2" component="a" href="mailto:muralip.software.engineer@gmail.com" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '11px', textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}>
                    muralip.software.engineer@gmail.com
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 44, 89, 0.12)',
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <OpenInNewIcon sx={{ fontSize: '32px', color: '#1565c0', mb: 1 }} />
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase' }}>
                    Website
                  </Typography>
                  <Typography variant="body2" component="a" href="https://muralisoftware.vercel.app/" target="_blank" sx={{ fontWeight: 700, mt: 0.5, color: '#051d24', fontSize: '12px', textDecoration: 'none' }}>
                    muralisoftware.vercel.app
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
