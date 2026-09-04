import React, { createContext, useContext, useState } from 'react';
import { Dialog, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LightboxContext = createContext(null);

export const LightboxProvider = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');

  const handleOpenLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <LightboxContext.Provider value={{ handleOpenLightbox, handleCloseLightbox }}>
      {children}
      <Dialog
        open={lightboxOpen}
        onClose={handleCloseLightbox}
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
          onClick={handleCloseLightbox}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            color: '#ffffff',
            backgroundColor: 'rgba(15, 44, 89, 0.3)',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              backgroundColor: 'rgba(15, 44, 89, 0.6)',
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
          onClick={handleCloseLightbox}
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
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    return { handleOpenLightbox: () => {}, handleCloseLightbox: () => {} };
  }
  return context;
};
