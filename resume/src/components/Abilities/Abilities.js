
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';

function Abilities() {
    return (
        <><Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="ABILITIES" />
                    <p>Here is a summary of my most important skills and abilities as a Creative Web Developer:</p>

                </Grid>
            </Grid>
        </Container>
            <div style={styles.skillContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h4">Coding</Typography>
                        
                    </Grid>


                    <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">Languages</Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Abilities;
