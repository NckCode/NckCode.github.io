import {
    Box,
    Typography,
    Grid,
    Paper,
    Button,
    Divider,
    useTheme,
  } from '@mui/material';
  import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
  
  const Resume = () => {
    const theme = useTheme();
  
    return (
      <Box
        id="resume"
        sx={{
          py: 6,
          px: 2,
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          className={
            theme.palette.mode === 'dark'
              ? 'gradient-text-dark'
              : 'gradient-text-light'
          }
          gutterBottom
        >
          My Resume
        </Typography>
  
        <Box mt={2} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfIcon />}
            href="/Nishant-Muthiya-Cv.pdf"
            download
          >
            Download Resume
          </Button>
        </Box>
  
        <Grid
          container
          spacing={4}
          sx={{ width: '100%', maxWidth: 900, mt: 4 }}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Summary
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Software Engineer with 2+ years of experience specializing in full-stack development.
                Proficient in React, RESTful APIs, and JavaScript with strong backend expertise in Java,
                Spring Boot, and Docker. Passionate about scalable systems and creative UI/UX.
              </Typography>
  
              <Divider sx={{ my: 2 }} />
  
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Experience
              </Typography>
              <Typography variant="body2">
                <strong>Jio Platforms Ltd (SDE I)</strong><br />
                • Built a user management system for 40M+ users with React & Spring Boot<br />
                • Reduced onboarding time by 30% through backend optimization<br />
                • Built dynamic UI components for CRM dashboard<br />
                • Collaborated in Agile teams to deliver sprint goals
              </Typography>
  
              <Divider sx={{ my: 2 }} />
  
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Projects
              </Typography>
              <Typography variant="body2">
                <strong>Plastic Detection Model (YOLOv5):</strong> AI model to detect plastic in images.<br />
                <strong>SkyWalls (Pinterest Clone):</strong> React + Sanity.io based image sharing platform.
              </Typography>
  
              <Divider sx={{ my: 2 }} />
  
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Education
              </Typography>
              <Typography variant="body2">
                <strong>Sandip University</strong> — B.Tech CSE (8.84 CGPA)<br />
                <strong>NDMVP</strong> — Diploma in CS (78.24%)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Resume;
  