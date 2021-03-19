import React, { useState } from 'react';
import clsx from 'clsx';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Loader from '../Loader';
import {useStyles} from './styles';

function AuthForm(props) {
    const classes = useStyles(props);
    const { values, setValues, authErrors } = props;
    const [ errors, setErrors] = useState([]);
    
    const handleChange = (prop) => (event) => {
      setErrors([]);
      if (prop == 'email') {validateEmail(event.target.value)};
      if (prop == 'password') {validatePassword(event.target.value)};

      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) props.onSubmit();
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const validate = () => {
        const emailValidates = validateEmail(values.email);
        const passwordValidates = validatePassword(values.password);
        if (emailValidates && passwordValidates) return true;
        
        return false;
    }

    const validateEmail = (email) => {
        const newErrors = [];
        if (!email) {
                newErrors.push("Email Required!")
                setErrors(newErrors);
                return false;
            } 

        if (!(email.toLowerCase().match(/^\s*([a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+)/))) {
                newErrors.push("Invalid Email");
            }
        
        if ((email.toLowerCase().match(/^\s*([a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+)/))) {
            return true
        }

        setErrors(newErrors);
        return false;
    }

    const validatePassword = (password) => {
        const newErrors = [];
        if (!password) {
                newErrors.push("Password Required!")
                setErrors(newErrors);
                return false;
            } 

        if (!(password.match(/^(?=.*([A-Z]+))(?=.*(\W+))(?=.*([a-z]+)).{8,20}$/))) {
                newErrors.push("Password must be at least 8 characters.");
                newErrors.push("Password must contain at least one uppercase character.");
                newErrors.push("Password must contain at least one of [!@#$%^&*()\"{}]");
            }
        
        if (password && password.match(/^(?=.*([A-Z]+))(?=.*(\W+))(?=.*([a-z]+)).{8,20}$/)) {
            return true
        }

        setErrors(newErrors);
        return false;
    }
    
    return (
        <form className={classes.root} noValidate onSubmit={handleSubmit} align="left" autoComplete="off">
            <FormControl color="secondary" size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    className={classes.input}
                    type='text'
                    value={values.email}
                    onChange={handleChange('email')}
                    color="secondary"
                    endAdornment={
                    <InputAdornment position="end">
                        <EmailOutlinedIcon />
                    </InputAdornment>
                    }
                    labelWidth={50}
                />
            </FormControl>
            <FormControl color="secondary" size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    className={classes.input}
                    label="confirm password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    color="secondary"
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={0}
                />
            </FormControl>
            {Boolean(authErrors.length) && 
                <ul>
                    {authErrors.map((error)=>{
                        return (
                            <li key={error}><Typography variant="subtitle1">{error}</Typography></li>
                        )
                    })}
                </ul>
            }
            {Boolean(errors.length) && 
                <ul>
                    {errors.map((error)=>{
                        return (
                            <li key={error}><Typography variant="subtitle1">{error}</Typography></li>
                        )
                    })}
                </ul>
            }
            <Container fullWidth align="center">
                {props.loading && 
                    <Loader />
                } {!props.loading && 
                    <Button className={classes.button} fullWidth type="submit">Continue</Button>
                }
            </Container>
        </form>
    )
}

export default AuthForm;