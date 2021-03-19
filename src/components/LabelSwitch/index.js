import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import {useStyles} from './styles';

function LabelSwitch(props) {
    const classes = useStyles(props);
    const {label1, label2} = props;
    const {firstActive, setFirstActive} = props;

    return (
        <Container className={classes.root} align="center">
            <Container className={clsx(classes.wrapper, (!firstActive ? classes.wrapperWithMargin : null))}>
                <Button onClick={() => { setFirstActive(true) }} className={clsx((firstActive ? classes.primary : classes.secondary), classes.label)}>{label1}</Button>
                <Box className={classes.boxClass}>|</Box>
                <Button onClick={() => { setFirstActive(false) }} className={clsx((firstActive ? classes.secondary : classes.primary), classes.label)}>{label2}</Button>
            </Container>
        </Container>
    );
}

export default LabelSwitch;