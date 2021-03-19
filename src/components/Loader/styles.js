import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      margin: props => (props.top ? theme.spacing(props.top)+"px 0px" : theme.spacing(1)+"px 0px"),
    },
    icon: {
      color: props => (props.color ? theme.palette[props.color].main : theme.palette.primary.main),
      fontSize: props => (props.size ? theme.spacing(props.size)+"px" : "1rem"),
    }
  }));