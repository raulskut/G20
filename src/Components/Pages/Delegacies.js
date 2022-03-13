import { Grid, Button, Menu, MenuItem} from '@mui/material';
import * as React from 'react';
import classes from './delegacies.module.css'
import styles from './delegacies.style.css'
import Indonesia from '../../Assets/Indonesia.png'
import DummyPhoto from '../../Assets/dummy.jpg'
import Check from '../../Assets/check_circle.png'
import Cross from '../../Assets/cross.png'
import MenuIcon from '../../Assets/Menu.png'
import NAPhoto from '../../Assets/NA-Profile.png'
import NavbarLogo from '../../Assets/Logo.png'

const Delegacies = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
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
            <Grid>
                <div className={classes.title}>
                    <h3>Submission Status</h3>
                </div>
                <div className={classes.divCard}>
                    <div className={classes.card}>
                        <div className={classes.flag}>
                            <img src={Indonesia}/>
                        </div>
                        <div className={classes.textCountry}>
                            <p>Indonesia</p>
                        </div>
                        <div className={classes.userDetail}>
                            <div className={classes.userPhoto}>
                                <img src={DummyPhoto}/>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userText}>
                                    <p className={classes.userName}><b>Zagy Y Berian</b></p>
                                    <p className={classes.userEmail}>email@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.submissionDate}>
                            <p>28 JAN 2022</p>
                        </div>
                        <div className={classes.status}>
                            <img src={Check}/>
                        </div>
                        <div className={classes.menu}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src={MenuIcon}/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Report</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className={classes.divCard}>
                    <div className={classes.card}>
                        <div className={classes.flag}>
                            <img src={Indonesia}/>
                        </div>
                        <div className={classes.textCountry}>
                            <p>Indonesia</p>
                        </div>
                        <div className={classes.userDetail}>
                            <div className={classes.userPhoto}>
                                <img src={DummyPhoto}/>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userText}>
                                    <p className={classes.userName}><b>Zagy Y Berian</b></p>
                                    <p className={classes.userEmail}>email@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.submissionDate}>
                            <p>28 JAN 2022</p>
                        </div>
                        <div className={classes.status}>
                            <img src={Check}/>
                        </div>
                        <div className={classes.menu}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src={MenuIcon}/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Report</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className={classes.divCard}>
                    <div className={classes.card}>
                        <div className={classes.flag}>
                            <img src={Indonesia}/>
                        </div>
                        <div className={classes.textCountry}>
                            <p>Indonesia</p>
                        </div>
                        <div className={classes.userDetail}>
                            <div className={classes.userPhoto}>
                                <img src={DummyPhoto}/>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userText}>
                                    <p className={classes.userName}><b>Zagy Y Berian</b></p>
                                    <p className={classes.userEmail}>email@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.submissionDate}>
                            <p>28 JAN 2022</p>
                        </div>
                        <div className={classes.status}>
                            <img src={Check}/>
                        </div>
                        <div className={classes.menu}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src={MenuIcon}/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Report</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={classes.title}>
                    <h3 style={{color:'#ff0000',fontStyle:'italic'}}>Awaiting delegates </h3>
                </div>
                <div className={classes.divCard}>
                    <div className={classes.card}>
                        <div className={classes.flag}>
                            <img src={Indonesia}/>
                        </div>
                        <div className={classes.textCountry}>
                            <p>Indonesia</p>
                        </div>
                        <div className={classes.userDetail}>
                            <div className={classes.userPhoto}>
                                <img src={NAPhoto}/>
                            </div>
                            <div className={classes.userInfo}>
                                <div className={classes.userText}>
                                    <p className={classes.userName}><b>N/A</b></p>
                                    <p className={classes.userEmail}>not registered email</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.submissionDate}>
                            <p>xx xxxx xxxx</p>
                        </div>
                        <div className={classes.status}>
                            <img src={Cross}/>
                        </div>
                        <div className={classes.menu}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src={MenuIcon}/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Report</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default Delegacies;
