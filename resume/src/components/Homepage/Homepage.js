
import styles from './style';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
function Homepage(props) {
  console.log(props);
  return (
    <div style={styles.Container}>
      <Link href="/userinput">Link</Link>
      <Typography variant="h4" component="h4">{props.data}</Typography>
      <Typography variant="h6" component="h6">..my Interactive Resume</Typography>
    </div>
  );
}

export default Homepage;
