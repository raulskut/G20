import { Grid, Box} from '@mui/material';
import * as React from 'react';
import { db } from '../../db';
import {useState} from 'react';
import styles from './video.style.css';
import { Player } from 'video-react';
import classes from './video.module.css'
import NavbarLogo from '../../Assets/Logo.png'

const Video = () => {
    return (
        <>
            <Grid style={{width:"100%"}}>
                <nav className={classes.navbarDiv}>
                    <div>
                        <img src={NavbarLogo}></img>
                    </div>
                    <div className={classes.navMenu}>
                        <a href="/"><p>Form</p></a>
                        <a href="/video"><p>Video</p></a>
                        <a href="/delegacies"><p>Status</p></a>
                    </div>
                </nav>
            </Grid>
            <Grid style={{width:"70%", margin:"auto"}}>
                <h3 style={styles.h3}>Sample Video</h3>
                <Player>
                    <source src="https://drive.google.com/file/d/1vyPwOKY4lzRcQAyZ0FfWyuc6YdJ7Dv_6/view?usp=sharing"/>
                </Player>
                <ul>
                    <li><p>Theme of the statement: “Energy transition: Hope and priority activity from young generation prespective”</p></li>
                    <li><p>Maximum 1 (one) minute</p></li>
                    <li><p>Video format (MP4 or MOV) with Ratio 16:9 landscape</p></li>
                    <li><p>Minimum resolution H 480p</p></li>
                    <li><p>Without processing (color, sound, effect, etc)</p></li>
                    <li><p>The background must be in one solid color (white, green, etc)</p></li>
                </ul>
                <p>(Note: Name, title, sound and effects will be added by the editor)</p>
            </Grid>
        </>
    )
}

export default Video;
