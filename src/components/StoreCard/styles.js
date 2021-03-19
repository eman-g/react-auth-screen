import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: 240,
      borderRadius: theme.shape.borderRadius*6,
      overflow: "hidden",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    content: {
      borderRadius: (theme.shape.borderRadius*6)+"px "+(theme.shape.borderRadius*6)+"px 0px 0px",
      backgroundColor: theme.palette.white.main,
      marginTop: theme.spacing(-4)
    },
    avatar: {
      marginTop: theme.spacing(-6),
      width: theme.spacing(10),
      boxShadow: theme.shadows[1],
      height: theme.spacing(10),
    },

    avatarCircle: {
      border: `${theme.palette.white.main} 2px solid`,
      backgroundColor: theme.palette.white.main
    },

    categoriesTypography: {
      whiteSpace: "nowrap"
    }
  }));