
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
function Projects() {
    return (
        <><Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="PROJECTS" />
                    <Typography variant="h6" component="h2">Projects I’ve worked on in my career and were I am very proud of I must say.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
            <Container maxWidth="lg" style={styles.projectContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                alt="bill-generator"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bill- Generator
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                alt="bill-generator"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bill- Generator
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


        </>

    );
}

export default Projects;
