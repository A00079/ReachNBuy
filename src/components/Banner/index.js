import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import model1 from '../../assets/img/banner-model1.jpg';
import model2 from '../../assets/img/banner-model2.jpg';
import model3 from '../../assets/img/banner-model3.jpg';
import model4 from '../../assets/img/banner-model4.jpg';

const useStyles = makeStyles((theme) => ({
    screensContainer: {
        height: '300px',
        [theme.breakpoints.down("sm")]: {
            height: '535px'
        }
    },
    screenheight: {
        height: '100%',
    },
    hideonMobile: {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    }
}));

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="mt-4">
                <AutoplaySlider
                    organicArrows={true}
                    className={classes.screensContainer}
                    play={true}
                    bullets={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4000}
                >
                    <div data-src={model1} />
                    <div data-src={model2} />
                    <div data-src={model3} />
                    <div data-src={model4} />
                </AutoplaySlider>
            </div>
        </React.Fragment>
    );
}

export default Banner;