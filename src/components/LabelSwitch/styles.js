import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      height: "1.5rem",
      margin: theme.spacing(1)+"px 0px",
      maxWidth: 360,
      width: "100%",
    },
    wrapper: {
      position: "relative",
      transition: "transform 0.3s ease",
      transform: props => (props.firstActive ? "translateX(15%)" : "translateX(-15%)"),
    },
    boxClass: {
      display: "inline-block"
    },
    label: {
      height: "1.5rem",
      transition: "font-size 0.3s ease",
      verticalAlign: "center"
    },
    primary: {
      fontSize: "1.4rem",
      color: theme.palette.primary.main,
    },
    secondary: {
      fontSize: "0.8rem",
      color: theme.palette.secondary.main,
    }
  }));