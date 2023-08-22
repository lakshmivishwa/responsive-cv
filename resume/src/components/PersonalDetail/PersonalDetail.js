
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';

function PersonalDetail(props) {

    console.log(props);

    return (
        <Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="ABOUT ME" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <img src="http://localhost:3000/image/photo.jpg" alt="passport size" style={styles.imageContainer} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="subtitle1" component="subtitle1">{props.objective}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PersonalDetail;
