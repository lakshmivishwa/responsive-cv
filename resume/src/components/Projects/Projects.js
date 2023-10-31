
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
function Projects(props) {
    console.log(props);
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
                <Grid container spacing={2} >
                    {props.data.map((project) => (
                        <Grid item xs={12} md={6} >
                            <Card sx={{ maxWidth: 500 }} style={styles.projectSubContainer}>
                                <CardMedia
                                    component="img"
                                    alt={project.name}
                                    height="300"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    {project.features.map((data) => (<Typography variant="body2" color="text.secondary">
                                        {data}
                                    </Typography>
                                    ))}
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Live URL</Button>
                                    {/* <Button size="small">Learn More</Button> */}
                                    <Button size="small">Source code</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}
                </Grid>

            </Container>


        </>

    );
}

export default Projects;
