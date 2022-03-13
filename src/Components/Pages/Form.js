import { Grid, Box, TextField, Button, MenuItem} from '@mui/material'
import * as React from 'react'
import { db } from '../../db'
import {useState} from 'react'
import classes from './form.module.css'
import styles from './form.style.css'
import FileUpload from 'react-material-file-upload'
import NavbarLogo from '../../Assets/Logo.png'

const Form = () => {
    const [fullname, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [activites, setActivites] = useState("");
    const [other, setOther] = useState("");
    const countries = [
        {
            value: 'Argentina',
            label: 'Argentina',
        },
        {
            value: 'Australia',
            label: 'Australia',
        },
        {
            value: 'Brazil',
            label: 'Brazil',
        },
        {
            value: 'Canada',
            label: 'Canada',
        },
        {
            value: 'China',
            label: 'China',
        },
        {
            value: 'France',
            label: 'France',
        },
        {
            value: 'Germany',
            label: 'Germany',
        },
        {
            value: 'India',
            label: 'India',
        },
        {
            value: 'Indonesia',
            label: 'Indonesia',
        },
        {
            value: 'Italy',
            label: 'Italy',
        },
        {
            value: 'Japan',
            label: 'Japan',
        },
        {
            value: 'Republic of Korea',
            label: 'Republic of Korea',
        },
        {
            value: 'Mexico',
            label: 'Mexico',
        },
        {
            value: 'Russia',
            label: 'Russia',
        },
        {
            value: 'Saudi Arabia',
            label: 'Saudi Arabia',
        },
        {
            value: 'Turkey',
            label: 'Turkey',
        },
        {
            value: 'United Kingdom',
            label: 'United Kingdom',
        },
        {
            value: 'United States',
            label: 'United States',
        },
        {
            value: 'European Union',
            label: 'European Union',
        },
      ];

      const genders = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        }
      ];
    
    const [country, setCountry] = React.useState('Argentina');
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    const [gender, setGender] = React.useState('Male');
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("g20-2022-apps").add({
            fullname:fullname,
            country:country,
            gender:gender,
            age:age,
            email:email,
            organization:organization,
            activites:activites,
            other:other
        }).then(() => {
            alert("success");
        })
        .catch((error) => {
            alert(error.message)
        });

        setFullName("");
        setCountry("");
        setGender("");
        setAge("");
        setEmail("");
        setOrganization("");
        setActivites("");
        setOther("");
    };

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
            <Box sx={{mx: "auto"}} w-100>
                <form className='form' onSubmit={handleSubmit}>
                    <h3 style={{color:"#7F7F7F"}}>Profile</h3>
                    <div className={classes.formFlex}>
                        <div style={{margin:"0px 0% 20px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Full Name</h5>
                            <TextField style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="e.g. Pandu Dirga" type="text" variant="standard" onChange="" autoComplete='off'/>
                        </div>
                        <div style={{margin:"0px 0% 20px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Country</h5>
                            <TextField select style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="Choose one" type="text" variant="standard" value="country" onChange={handleCountry}>
                                {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>))}
                            </TextField>
                        </div>
                    </div>
                    <div className={classes.formFlex}>
                        <div style={{margin:"20px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Gender</h5>
                            <TextField select style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="Choose one" type="text" variant="standard" value="country" onChange={handleGender}>
                                {genders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>))}
                            </TextField>
                        </div>
                        <div style={{margin:"20px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Email</h5>
                            <TextField style={{width:"100%", height:"50px"}} id="standard-basic" type="email" placeholder="e.g. Pandu Dirga" variant="standard" onChange="" autoComplete='off'/>
                        </div>
                    </div>
                    <div className={classes.formFlex}>
                        <div style={{margin:"30px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Age</h5>
                            <TextField style={{width:"100%", height:"50px"}} id="standard-basic" type="number" placeholder="age" variant="standard" onChange="" autoComplete='off'/>
                        </div>
                        <div style={{margin:"30px 0%", width:"45%"}}>
                            <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Phone Number</h5>
                            <TextField style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="e.g. 8177387" type="text" variant="standard" onChange="" autoComplete='off'/>
                        </div>
                    </div>
                    <h3 style={{color:"#7F7F7F"}}>Organization</h3>
                    <div style={{margin:"30px 0%"}}>
                        <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Institution/Organization</h5>
                        <TextField style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="e.g. Society of Renewable Energy" type="text" variant="standard" onChange="" autoComplete='off'/>
                    </div>
                    <div style={{margin:"30px 0%"}}>
                        <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Title</h5>
                        <TextField style={{width:"100%", height:"50px"}} id="standard-basic" placeholder="e.g. Society of Renewable Energy" type="text" variant="standard" onChange="" autoComplete='off'/>
                    </div>
                    <h3 style={{color:"#7F7F7F"}}>Experience</h3>
                    <div style={{margin:"30px 0%"}}>
                        <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Activities/contributions in energy transition</h5>
                        <TextField style={{width:"100%"}} rows={4} multiline id="standard-basic" placeholder="e.g. ......................................................." type="text" variant="standard" onChange="" autoComplete='off'/>
                    </div>
                    <div style={{margin:"30px 0%"}}>
                        <h5 style={{margin:"0 0 1% 0", color:"#0C268B", textAlign:"left"}}>Other informations (if necessary)</h5>
                        <TextField style={{width:"100%", height:"50px"}} rows={4} multiline id="standard-basic" placeholder="e.g. ......................................................." type="text" variant="standard" onChange="" autoComplete='off'/>
                    </div>
                    <br/>
                    <h3 style={{color:"#7F7F7F"}}>File Upload</h3>
                    <div className={classes.divFile}>
                        <label for="upload-photo" style={{textAlign:"center",color:"#FFFFFF"}}><h5>Upload Photo</h5></label>
                        <FileUpload id="upload-photo" style={{width:"100%", color:"#FFFFFF"}}/>
                        <hr style={{color:"$FFFFFF"}}></hr>
                        <label for="upload-video" style={{textAlign:"center",color:"#FFFFFF"}}><h5>Upload Video</h5></label>
                        <FileUpload id="upload-video" style={{width:"100%", color:"#FFFFFF"}}/>
                    </div>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                        <Button 
                            variant="contained" 
                            type="submit"
                            style={{
                                background: "#FF0000",
                                borderRadius: "90px",
                                width:"30%",
                            }}
                            > Submit
                        </Button>
                    </div>
                    <br/>
                    
                    
                    {/* <TextField title={"Full Name"} placeholder={"e.g. Pandu Dirga"} onChange={(e)=>setFullName(e.target.value)}/>
                    <SelectCountries title={"Country"} value={country} onChange={(e)=>setCountry(e.target.value)}/>
                    <SelectGender title={"Gender"} value={gender} onChange={(e)=>setGender(e.target.value)}/>
                    <TextField title={"Age"} placeholder={"e.g. 25"} value={age} onChange={(e)=>setAge(e.target.value)}/>
                    <TextField title={"Email"} placeholder={"e.g. yourname@domain.org"} type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField title={"Institution/Organization"} placeholder={"e.g. Society of Renewable Energy"} value={organization} onChange={(e)=>setOrganization(e.target.value)}/>
                    <Multiline title={"Activities/Contributions in Energy Transition"} placeholder={"e.g. ......"} value={activites} onChange={(e)=>setActivites(e.target.value)}/>
                    <TextField title={"Other Informations (if necessary)"} placeholder={"e.g. ......"} value={other} onChange={(e)=>setOther(e.target.value)}/>
                    <Submit/> test */}
                </form>
            </Box>
            </Grid>
        </>
    )
}

export default Form;