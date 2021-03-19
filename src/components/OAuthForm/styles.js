import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
      width: "100%",
    },
    wrapper: {
      padding: 0,
      width: "max-content",
      display: "flex",
    },
    avatar: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: theme.spacing(5),
      height: theme.spacing(5),
      border: "solid 3px "+theme.palette.secondary.main,
      "&:hover": {
        cursor: "pointer"
      }
    }
  }));