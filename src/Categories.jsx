import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import wild from "./Photos/harsh-tank-279712-unsplash.jpg";
import heritage from "./Photos/sander-don-1067759-unsplash.jpg";
import scenery from "./Photos/daniel-klein-573630-unsplash.jpg";
import event from "./Photos/shaun-salmon-1271866-unsplash.jpg";
import adventure from "./Photos/filipp-nekhaev-58681-unsplash.jpg";
import {TouchRippleProps as center} from "@material-ui/core/ButtonBase/TouchRipple";

const tileData = [
    {
        img: wild,
        title: 'Wild|Explore',
        author: 'author',
        featured: true,
        cols:2,
        rows:5


    },
    {
        img: heritage,
        title: 'Heritage|Explore',
        author: 'author',
        featured: true,
        cols:1,
        rows:1

    },
    {
        img: scenery,
        title: 'Scenery|Explore',
        author: 'author',
        featured: true,
        cols:1,
        row:1

    },
    {
        img: event,
        title: 'Event|Explore',
        author: 'author',
        featured: true


    },
    {
        img: adventure,
        title: 'Adventure|Explore',
        author: 'author',
        featured: true

    }
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        height:500,
        width:800
    },
    gridList: {
        position:center,
        cellHeight:'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});


function Categories(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={4} rows={2}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 2}  rows={tile.featured ? 1 : 3} >
                        <img src={tile.img} alt ={""}/>
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="bottom"
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

Categories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
