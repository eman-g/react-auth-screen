import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import LabelSwitch from '../components/LabelSwitch';
import AuthForm from '../components/AuthForm';
import OAuthForm from '../components/OAuthForm';
import {useStyles} from './styles';

const signInWithFacebook = () => alert("Sign In with Facebook");
const signInWithGoogle = () => alert("Sign In with Google");
const signInWithTwitter = () => alert("Sign In with Twitter");

const authFormInitialState = {
    email: "",
    password: "",
    showPassword: false,
}

function Auth() {
    const classes = useStyles();
    const [firstActive, setFirstActive] = useState(true);
    const [ loading, setLoading ] = useState(false);
    const [signinErrors, setSigninErrors] = useState([]);
    const [signinValues, setSigninValues] = useState(authFormInitialState);
    const [signupErrors, setSignupErrors] = useState([]);
    const [signupValues, setSignupValues] = useState(authFormInitialState);
    
    const handleSignup = async () => {
        const email = signupValues.email.toLowerCase().match(/^\s*([a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+)/)[1];
        const password = signupValues.password;

        setLoading(true);
    };

    const handleSignin = async () => {
        const email = signinValues.email.toLowerCase().match(/^\s*([a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+)/)[1];
        const password = signinValues.password;

        setLoading(true);
    }
    
    return (
            <Container maxWidth="md" align="center" className={classes.root}>
                <Typography variant="h6" color="primary">Login with</Typography>
                <OAuthForm 
                    signInWithGoogle={signInWithGoogle}
                    signInWithFacebook={signInWithFacebook}
                    signInWithTwitter={signInWithTwitter} />
                    
                <LabelSwitch firstActive={firstActive} setFirstActive={setFirstActive} label1="Sign in" label2="Sign up"/>
                
                    <div className={classes.wrapper}>
                        <Slide direction="right" in={firstActive} {...(firstActive ? { timeout: 300 } : {})} mountOnEnter unmountOnExit>
                            <Paper elevation={0} className={classes.paper}>
                                <AuthForm 
                                    values={signinValues} 
                                    setValues={setSigninValues} 
                                    loading={loading} 
                                    authErrors={signinErrors} 
                                    onSubmit={handleSignin} />
                                <Link className={classes.link} href="/forgot-password" variant="h6">Forgot Password?</Link>
                            </Paper>
                        </Slide>
                    </div>
                
                    <div className={classes.wrapper}>
                        <Slide direction="left" in={!firstActive} {...(!firstActive ? { timeout: 300 } : {})} mountOnEnter unmountOnExit>
                            <Paper elevation={0} className={classes.paper}>
                                <AuthForm
                                    values={signupValues} 
                                    setValues={setSignupValues} 
                                    loading={loading} 
                                    authErrors={signupErrors} 
                                    onSubmit={handleSignup} />
                            </Paper>
                        </Slide>
                    </div>

            </Container>   
    )
}

export default Auth;