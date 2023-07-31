
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';
import axios from "axios";
import { useState } from 'react';
function PersonalDetail() {

    // const [personalDetail, setPersonalDetail] = useState(null);

    // let baseURL = "http/"
    // axios.get(baseURL).then((response) => {
    //     setPersonalDetail(response.data);
    //     console.log(personalDetail);
    // });

    return (
        <Container maxWidth="md" style={styles.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="ABOUT ME" />
                </Grid>

                <Grid item xs={4} md={4}>
                    <img src="img_girl.jpg" alt="passport size" style={styles.imageContainer} />

                </Grid>
                <Grid item xs={8} md={8}>

                    {/* <Typography variant="h4" component="span" style={styles.aboutMe}>ABOUT ME</Typography> */}
                    <Typography variant="h6" component="h2">Hi, my name is Lakshmi Vishwakarma I'm a Creative / Full Stack Developer from the Pune. In one years I developed a skill set in a range of technologies and frameworks, including React Js, Express js and Python. Where I really value clean and readable code. Also I'm very passionate about UX / UI .</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PersonalDetail;
