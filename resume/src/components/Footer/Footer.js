
import styles from './style';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
function Footer() {
    return (
        <Container maxWidth="md" style={styles.mainContainer} >
            <Typography variant="h5" component="h5" >Don't forget to follow me..</Typography>
            <div style={styles.container} >
                <a href="https://www.linkedin.com/feed/" ><BiLogoLinkedin size={30} /></a>
                <a href="https://github.com/lakshmivishwa" ><AiFillGithub size={30} /></a>
            </div>
        </Container>
    );
}

export default Footer;
