import React from 'react';
import { Grid,TextField,Typography } from '@material-ui/core';
import resumeData from '../utils/resumeData';
// import CustomTimeline,{CustomTimeLineSeparator} from '../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import './Resume.css';
import CustomTimeLine from '../components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import CustomButton from '../components/Button/Button';
import emailjs from 'emailjs-com';
import Paper from '@material-ui/core/Paper';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wbrwxng', 'template_2gj5kkk', e.target, 'user_irQhvdq4LIoSjcPzcQPn4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
const resume = () => {
    return (
        <>
        {/* About me */}
        <Grid container className=" section pb_45 pt_45">
        <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">About Me</h6>
                    </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>

            </Grid>
        </Grid>
        {/* Education and experiences */}
        <Grid container className="section pb_45">
            <Grid item className="section_title mb_30" >
                <span></span>
                <h6 className="section_title_text">Resume</h6>
            </Grid>

            <Grid item xs={12}>
            <Grid container className="resume_timeline">
                {/* Exprience */}
                <Grid item sm={12} md={6}>
                    <CustomTimeLine title="work experience" icon={<WorkIcon/>}>
                        {resumeData.experiences.map((experiences)=>(
                          <TimelineItem>
                              <TimelineSeparator className="separator_padding">
                                  <TimelineDot variant="outlined" className="timeline_dot"/>
                                  <TimelineConnector/>

                              </TimelineSeparator>
                              <TimelineContent className="timeline_content">
                                  <Typography className="timeline_title">{experiences.title}</Typography>
                                  <Typography variant="caption" className="timeline_date">{experiences.date}</Typography>
                                  <Typography variant="body2" className="timeline_description">{experiences.description}</Typography>
                              </TimelineContent>
                              </TimelineItem>  
                        ))}
                    </CustomTimeLine>
                </Grid>
                {/* Education */}
                <Grid item sm={12} md={6}>
                    <CustomTimeLine title="Education" icon={<SchoolIcon />}>
                        {resumeData.educations.map((education)=>(
                          <TimelineItem>
                              <TimelineSeparator className="separator_padding">
                                  <TimelineDot variant="outlined" className="timeline_dot"/>
                                  <TimelineConnector/>

                              </TimelineSeparator>
                              <TimelineContent className="timeline_content">
                                  <Typography className="timeline_title">{education.title}</Typography>
                                  <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                  <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                              </TimelineContent>
                              </TimelineItem>  
                        ))}
                    </CustomTimeLine>
                </Grid>
            </Grid>
           

        </Grid>
        </Grid>
        {/* Services */}
        {/* <Grid container className=" section pb_45">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text"> My Services</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} justify='space-around'>
                    {
                        resumeData.services.map(service =>(
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Icon className="service_icon">{service.icon}</Icon>
                                    <Typography variant="h6" className="services_title">{service.title}</Typography> 
                                    <Typography variant="body2" className="services_description">{service.description}</Typography> 
                                </div>
                                </Grid>
                        ))
                    }

                </Grid>
            </Grid>

        </Grid> */}

        {/* Skills */}

        <Grid container className="section  graybg pb_45 p_50">
      
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Skills</h6>
                    </Grid>
            <Grid item xs ={12}>
                <Grid container>
                    {resumeData.skills.map((skill)=>(
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={0} className="skill">
                                <Typography variant="h6" className="skill_title">{skill.title}</Typography>
                                {skill.description.map((element)=>(
                                    <Typography variant="body2" className="skill_description">
                                        <TimelineDot variant={"outlined"} className="timeline_dot"/>
                                        {element}
                                        </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>
        {/* Contact Me */}
        <Grid container spacing={6} className=" section pt_45 pb_45">

            {/* contact form */}

            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">contact Form</h6>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Grid container >
                        <form onSubmit={sendEmail}>
                        <Grid item xs={12} sm={6}>
                                <TextField fullWidth name="to_name" defaultValue="Name"></TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth type="email" name="fgmail" defaultValue="E-mail"></TextField>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth name="message" defaultValue="Message" multiline row={4}></TextField>
                            </Grid><br/>
                            <Grid item xs={12} className="btn" >
                                <input type="submit" className="btn_input" value="Submit"></input>
                                {/* <CustomButton type="submit" text="Submit"/> */}
                            </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* contact information */}

            <Grid item xs={12} lg={5}>
                <Grid container>
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Information</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className="contactinfo_item">
                                    <span>Address</span> {resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactinfo_item">
                                    <span>Phone</span> {resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactinfo_item">
                                    <span>Email</span> {resumeData.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className="contactinfo_socialsContainer">
                            {Object.keys(resumeData.socials).map(key =>(
                                <Grid item className="contactinfo_socials">
                                    <a href={resumeData.socials[key].link}>
                                        {
                                            resumeData.socials[key].icon
                                        }
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            
        </Grid>
        </>

       
    );
};

export default resume;
