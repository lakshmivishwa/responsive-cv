
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';

function Footer() {

    return (
        <Container maxWidth="md" style={styles.mainContainer}>
            <Typography variant="h6" component="h2" >Don't forget to follow me..</Typography>  
        </Container>
    );
}

export default Footer;
