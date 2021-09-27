import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './Timeline.css';
import WorkIcon from '@material-ui/icons/Work';

const CustomTimeLine = ({ title ,icon,children})=> {
  return (
    
    <Timeline className={"timeline"}>
      {/* item header */}
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{<WorkIcon/>}</TimelineDot>
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" className ={"timeline_header"} >
                {title}
            </Typography>
            </TimelineContent>
      </TimelineItem>

        {children}


        {/* remaining item
      <TimelineItem>
        
          <CustomTimelineSeparator/>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}
      
    </Timeline>
  );
}

export const CustomTimelineSeparator = () =>(

    <TimelineSeparator className={"seperator_padding"}>
    <TimelineDot className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
     
);

export default CustomTimeLine;