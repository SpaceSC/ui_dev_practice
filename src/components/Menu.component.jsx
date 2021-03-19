import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000',
    border: 0,
    borderRadius: 25,
    color: 'white',
    height: 48,
    width: 48,
    padding: '10px',
  },
}));

function Menu() {
  const classes = useStyles();

  return (
    <div >
      <IconButton className={classes.root}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export default Menu;