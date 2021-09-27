import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { YouTube } from '@material-ui/icons';
import {WebOutlined,AssignmentOutlined, Language} from '@material-ui/icons';

const details ={
    name:"Sarita Mourya",
    title:"Full stack developer",
    birthday :"27th september 2000",
    email:"saritamourya27@gmail.com",
    address:"Sanpada,Navi-Mumbai-400705",
    phone:"9004514309",

    socials:{
        Facebook:{
            link:"https://www.facebook.com",
            text:"sqa",
            icon: <FacebookIcon/> ,
        },

        Twitter:{
            link:"https://www.twitter.com",
            text:"sqa",
            icon:  <TwitterIcon/>,
        },  
        Linkedin:{
            link:"https://www.linkedin.com",
            text:"sqa",
            icon:  <LinkedInIcon/>,
        },  
        Github:{
            link:"https://www.Github.com",
            text:"sqa",
            icon: <GitHubIcon/> ,
        },
     
    },

    about:"I am in my final year of studying IT Engg from Mumabai University. I have interned in companies like Software Appetite ,Teamlabs and Wabi Infotech. I am a good learner, innovative, I have a positive attitude, and committed to my work and I want to pursue a career in a field that won’t just feel like a job but where I will actually have job satisfaction as well.I have heard many great things about many esteemed organization and I am sure I’ll be able to live up to your vision and gain valuable insights from the team as well if given the chance."
   
   
   
   ,

    experiences:[
        {
            title:"Web Development",
            date:" June 2020",
            description:"I started my career here, spent half years learning and working in various designing aspects of developing variety of applications and projects..",
        },
        {
            title:"Programming",
            date:"2018 453580 ",
            description:"Curently working on c++ and .Net .I completed many projects on different languages like java, vb.net,python,c++.",
        },
        // {
        //     title:"Work 30",
        //     date:"2018 Present",
        //     description:"a personal web hosting service co-founded by Ryan Freitas",
        // },
    ],
    educations:[
        {
            title:"Core Java",
            date:"2016-2017 ",
            description:"Completed java course from the Pixel Project (LEDA) ",
        },
        {
            title:"Diploma in Computer Engg",
            date:"2018-2020 ",
            description:"I completed Diploma from this institution. I successful completed all the credits without any fallout and got A grade overall.",
        },
        {
            title:"IT Engg",
            date:"2021 -2023",
            description:"Currently pursing Engneering in IT feild",
        },
    ],
    services:[
        {
            title:"branding identity",
            description:"hgjusg hjagdugdew buytgduqnbjhuid ldko",
            icon:<WebOutlined/>,
        },
        {
            title:"branding identity 1",
            description:"hgjusg hjagdugdew buytgduqnbjhuid ldko",
            icon:<AssignmentOutlined/>,
        },
        {
            title:"branding identity 11 ",
            description:"hgjusg hjagdugdew buytgduqnbjhuid ldko",
            icon:<WebOutlined/>,
        },
    ],

    skills:[
        {
            title:"Front End",
            description:[
                "Reactjs",
                "Javascript",
                "Bootstrap",
                "Material-ui",
            ],
        },
        {
            title:"Back-End",
            description:["Cpp","Java","Python","php"],

        },
        {
            title:"Databases",
            description:["Firebase","Mysql"],

        },
        {
            title:"Source Control",
            description:["git","Github"],

        },
    ],
    projects:[
        {
            tag:"Flask",
            img:"https://drive.google.com/file/d/1CkKXu56_fI_ckMMRIeSHAP61u8DGlzaj/view?usp=sharing ",
                
            caption:"short descriptyion",
            title:"gdfg",
            description:"this is project description react",
            links:[
                {link:"https://www.google.com",icon:<YouTube/>},
                
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<Language/>},
            ],
        },
       
        {
            tag:"Python",
            img:"https://nwofh4tqspzuuetdb1xe2a-on.drv.tw/www.sarita1.com/img/ds1.jpg ",
            caption:"Drowsiness detection system",
            title:"Drowsiness detection system",
            description:"Driver drowsiness driving is one of the main reasons for road accidents.",
            links:[
                {link:"https://www.google.com",icon:<YouTube/>},
                
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<Language/>},
            ],
        },
        {
            tag:"Providing final year projects",
            img:"https://nwofh4tqspzuuetdb1xe2a-on.drv.tw/www.sarita1.com/img/ds3.jpg",
            caption:"final year projects",
            title:"final year projects",
            description:"providing final year projects to final year students.",
            links:[
                {link:"https://www.google.com",icon:<YouTube/>},
                
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<Language/>},
            ],
        },
    ],
};

export default details;