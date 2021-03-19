import React from 'react';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {useStyles} from './styles';

function Loader(props) {
    const classes = useStyles(props);

    return (
        <Container className={classes.root} align="center">
            <FontAwesomeIcon icon={['fas', "spinner"]} className={classes.icon} pulse spin />
        </Container>
    );
}

export default Loader;