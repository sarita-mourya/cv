import React from 'react';
import { Typography} from '@material-ui/core';
import './Profile.css';
import logo from '../../assests/images/profileimg.jpg'  ;
import CustomTimeLine,{CustomTimelineSeparator} from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import Custombutton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

// function appearform() {
//     <Grid container >
//     <form >
//     <Grid item xs={12} sm={6}>
//             <TextField fullwidth name="to_name" label="Name"/>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <TextField fullwidth name="fgmail" label="E-mail"/>
//         </Grid>
//         <Grid item xs={12} >
//             <TextField fullWidth name="message" label="Message" multiline row={4}/>
//         </Grid><br/>
//         <Grid item xs={12} className="btn" >
//             {/* <input type="submit" className="btn_input" >khhd</input> */}
//             <Custombutton text="Submit"/>
//         </Grid>
//         </form>
//     </Grid>
   
// }

const CustomTimelineItem = ({title,text,link}) => {
    return(
        <TimelineItem >
        <CustomTimelineSeparator/>
        <TimelineContent>
        {
            link?(<Typography className="timelineItem_text"> 
                <span>{title}:</span>{" "}
                <a href={link} >
                    {text}
                    </a>
            </Typography>):(
                <Typography className="timelineItem_text"><span>{title}:</span>{text}</Typography>
            )
        }
        </TimelineContent>
    </TimelineItem>
    )
};

  
const Profile = () => {
    return (
     <div className="profile container_shadow">

            <div className="profile_name">
            <Typography className="name">{resumeData.name}</Typography>
            <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={logo} alt=""/>
            </figure>
            <div className="profile_information">
                <CustomTimeLine icon={<PersonOutlineOutlinedIcon/>}>

                <CustomTimelineItem title="Name" text={resumeData.name}/>
                <CustomTimelineItem title="Title" text={resumeData.title}/>
                <CustomTimelineItem title="Email" text={resumeData.email}/>
                {/* {
                    Object.keys(resumeData.socials).map((key)=>{
                      
                    return(
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                 
                    )
                    
                    
                    }
                    
                    )
                } */}

                </CustomTimeLine>
               
                
                <br/>
                <div className="btn_container">
                    
                <Custombutton text={" Download Cv"}  icon={<GetAppIcon/> }/>
                {/* <input type="submit" className="btn" onSubmit={appearform()}  >Download</input> */}
                </div>
                
            </div>

     </div>
    )
}

export default Profile;
