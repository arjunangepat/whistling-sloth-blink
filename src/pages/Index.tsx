import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";

export default function Index() {
  return (
    <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 3,
        backgroundColor: theme => theme.palette.background.default // Use theme background color
      }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
        Welcome to Scalix AI Tools
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 960, width: '100%' }}>
        <Grid item xs={12} sm={6} key="image-generator-card"> {/* Removed the comment that was potentially misleading and ensured 'item' prop is correctly placed */}
          <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              p: 3, 
              boxShadow: 3, 
              borderRadius: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
              }
            }}>
            <CardHeader sx={{ textAlign: 'center', pb: 2 }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                AI Image Generator
              </Typography>
            </CardHeader>
            <CardContent sx={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Create stunning images from text descriptions using our advanced AI.
              </Typography>
              <Link to="/image-generator" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="contained" size="large" color="primary" sx={{ width: '100%', fontWeight: 'bold' }}>
                  Go to Image Generator
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} key="another-tool-card"> {/* Removed the comment that was potentially misleading and ensured 'item' prop is correctly placed */}
          <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              p: 3, 
              boxShadow: 3, 
              borderRadius: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
              }
            }}>
            <CardHeader sx={{ textAlign: 'center', pb: 2 }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Another Tool
              </Typography>
            </CardHeader>
            <CardContent sx={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Description for another amazing tool coming soon.
              </Typography>
              <Button variant="contained" size="large" color="secondary" disabled sx={{ width: '100%', fontWeight: 'bold', cursor: 'not-allowed' }}>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}