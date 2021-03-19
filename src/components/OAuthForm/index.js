import React from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import googleIcon from '../../assets/images/google-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';

import {useStyles} from './styles';

function OAuthForm(props) {
    const classes = useStyles(props);

    return (
        <Container className={classes.root} align="center">
            <Container className={classes.wrapper} align="center">
                <Avatar alt="google icon" className={classes.avatar} src={googleIcon} onClick={props.signInWithGoogle} />
                <Avatar alt="google icon" className={classes.avatar} src={facebookIcon} onClick={props.signInWithFacebook} />
                <Avatar alt="google icon" className={classes.avatar} src={twitterIcon} onClick={props.signInWithTwitter} />
            </Container>
        </Container>
    );
}

export default OAuthForm;