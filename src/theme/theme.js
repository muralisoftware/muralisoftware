import { createTheme } from '@mui/material';

// Helper: Convert HEX to RGBA dynamically for transparency styles
export const hexToRgba = (hex, alpha) => {
  if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
    return `rgba(15, 44, 89, ${alpha})`;
  }
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Calculate Experience Dynamically
export const calculateExperience = (joiningDate) => {
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

// Technology Color Mapping Helper
export const getTechColor = (techName) => {
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
    'CSV / XLSX': '#107c41',
    'Vite': '#646CFF',
    'Tailwind CSS': '#06B6D4',
    'TypeScript': '#3178C6',
    'PDF.js': '#E74C3C',
    'Canvas API': '#9B59B6',
    'Material-UI': '#007FFF'
  };
  return mapping[techName] || '#0F2C59';
};

// Unified Light Theme Configuration
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F2C59',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#C59B27',
    },
    background: {
      default: '#f4f6f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#0B1E36',
      secondary: '#425f65',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { fontFamily: "'Sora', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Sora', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Sora', sans-serif", fontWeight: 600 },
    button: { fontFamily: "'Sora', sans-serif", fontWeight: 600, textTransform: 'none' },
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

export default theme;
