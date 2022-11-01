import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box,Grid} from "@mui/material";
import {info} from "../../info/Info";
import ToolIcon from './ToolIcon';


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                <span
                className={Style.pink}>
                {info.bio}
                </span>
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}>  <span
                className={Style.pink}>
                Proficient With
                </span></p>
            <div className={Style.container}> 
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    
                
                {info.skills.proficientWith.map((proficiency, index) => (<Grid xs={2} sm={4} md={4} key={index}>
                    <ToolIcon link={proficiency}/>
                       </Grid>
                       ))}
            </Grid>
            </div>
            <p style={{color: info.baseColor}}>  <span
                className={Style.pink}>
                Exposed To
                </span></p>
            <div className={Style.container}> 
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    
                
                {info.skills.exposedTo.map((skill, index) => (<Grid xs={2} sm={4} md={4} key={index}>
                    <ToolIcon link={skill}/>
                       </Grid>
                       ))}
            </Grid>
            </div>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box><spam className={Style.pink}>{hobby.label}</spam></li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}