
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';
function Careers(props) {

    console.log(props);
    return (
        <Container maxWidth="md" style={styles.mainContainer}>

            <Grid container spacing={2}>

                <Grid item xs={12} md={12} style={styles.HeaderContainer}>
                    <Title titleName="CAREERS" />
                </Grid>
                {props.data.map((career) => (
                    <><Grid item xs={4} md={4}>
                        <Typography variant="h6" component="h2">{career.tenure.from} to {career.tenure.to}</Typography>
                    </Grid><span style={styles.verticalLine}></span><Grid item xs={7} md={7}>
                            <Typography variant="h5">{career.designation} @ <a href={career.website} > {career.organizationName}</a></Typography>
                            <Typography variant="subtitle1" component="subtitle1">{career.role}</Typography>
                        </Grid></>
                ))}
            </Grid>
        </Container>
    );
}

export default Careers;
