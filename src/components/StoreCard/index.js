import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import {useStyles} from './styles';

function StoreCard(props) {
    const { store } = props;
    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media}
                image={store.images[1].url}
                title={store.name}
            />
            <CardContent className={classes.content}>
                <Avatar alt="Store Icon" className={classes.avatar}  classes={{circle: classes.avatarCircle}} src={store.images[0].url} />
                <Typography variant="h6">{store.name}</Typography>
                <Typography variant="subtitle1">{store.address.city}</Typography>
                <Typography variant="subtitle2" className={classes.categoriesTypography}>{store.keywords.slice(0, 3).join(" | ").toLowerCase()}</Typography>
            </CardContent>
        </Card>
    );
}

export default StoreCard;