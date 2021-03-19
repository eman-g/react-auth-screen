import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 470
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(1),
    },
    textField: {
      borderRadius: theme.shape.borderRadius*3,
      backgroundColor: theme.palette.white.main,
      width: '100%',
    },
    input: {
      borderRadius: theme.shape.borderRadius*3,
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 50,
        height: 50,
        maxWidth: 360,
        marginTop: theme.spacing(1),
        color: theme.palette.white.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }
  }));