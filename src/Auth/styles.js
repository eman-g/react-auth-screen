import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8)+"px 0px",
        maxWidth: 470,
        backgroundColor: "#FFF"
    },
    wrapper: {
      MaxWidth: 470 + theme.spacing(2),
      width: "100%",
      verticalAlign: "top",
      position: "relative",
    },
    paper: {
      zIndex: 1,
      position: 'absolute',
      margin: theme.spacing(1),
    },
    link: {
      position: 'relative',
      top: theme.spacing(2)
    }
  }));