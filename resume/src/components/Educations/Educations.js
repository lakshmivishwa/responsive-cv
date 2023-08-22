
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';

function Educations(props) {

    console.log(props);
    return (
        <Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="EDUCATIONS" />
                </Grid>
                {props.data.map((education) => (
                    <><Grid item xs={4} md={4}>
                        <Typography variant="h6" component="h6">{education.tenure.from} to {education.tenure.to}</Typography>
                    </Grid>
                        <span style={styles.verticalLine}></span><Grid item xs={7} md={7}>
                            <Typography variant="h5" component="h6">{education.courseName}</Typography>
                           <a href={education.website}><Typography >{education.instituteName}</Typography></a> 
                            <Typography variant="subtitle1" component="subtitle1">Hi, my name is Lakshmi Vishwakarma I'm a Creative / Full Stack Developer from the Pune. Over the years I developed a skill set in a range of technologies and frameworks, including React Js, Express js and Python. Where I really value clean and readable code. Also I'm very passionate about UX / UI .</Typography>
                        </Grid></>
                ))}


            </Grid>
        </Container>
    );
}

export default Educations;
