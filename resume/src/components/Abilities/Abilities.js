
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
function Abilities() {
    return (
        <><Container maxWidth="lg" style={styles.mainContainer}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="ABILITIES" />
                    <p>Here is a summary of my most important skills and abilities as a Creative Web Developer:</p>

                </Grid>
            </Grid>

            <div style={styles.abilitiesContainer}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h4" style={styles.abilitiesSubContainer}>Coding</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="span" component="legend">React Js</Typography> </Grid>
                            <Grid item xs={12} md={6}>
                                <span style={styles.rating}>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></span>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h4" style={styles.abilitiesSubContainer}>Languages</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="span" component="legend">Hindi</Typography></Grid>
                            <Grid item xs={12} md={6}>
                                <span style={styles.rating}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
        </>
    );
}

export default Abilities;
