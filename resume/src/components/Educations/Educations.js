
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';

function Educations() {
    return (
        <Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="EDUCATIONS" />
                </Grid>

                <Grid item xs={4} md={4}>
                    <Typography variant="h6" component="h2">Presnt-July 2022</Typography>
                </Grid>

                <span style={styles.verticalLine}></span>

                <Grid item xs={7} md={7}>
                    <Typography variant="h5">M.Sc.(CS)</Typography>
                    <p>Makhanlal University</p>
                    <Typography variant="h6" component="h2">Hi, my name is Lakshmi Vishwakarma I'm a Creative / Full Stack Developer from the Pune. Over the years I developed a skill set in a range of technologies and frameworks, including React Js, Express js and Python. Where I really value clean and readable code. Also I'm very passionate about UX / UI .</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Educations;
