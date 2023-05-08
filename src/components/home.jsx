
import React, {useEffect, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap-accordion";
import home from "../images/home.png";
import file from "../images/file.png";
import downarrow from "../images/downarrow.png";
import arrow from "../images/arrow.png";
import refresh from "../images/refresh.png";
import publishicon from "../images/publish-icon.png"
import downarrowwhite from "../images/downarrowwhite.png";
import forwardarrow from "../images/forward-arrow.png";
import mobile from "../images/mobile.png";
import desktop from "../images/desktop.png"
import filesetting from "../images/file-setting.png";
import sslcertificate from "../images/ssl-certificate.png";
import nextbtn from "../images/next-btn.png";
import Iframe from "react-iframe";
import defaultprofileimgae from "../images/defaultprofileimg.png"
import PostRequest from "./postRequest"
import { useDispatch, useSelector } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./homepage.css"
import Basicdetails from "./preferences/basicdetails";
import { BASEURL } from "../state/actions/actionTypes";
import io from "socket.io-client";

const Home = () => {
  const [typeActive, setTypeActive] = useState("your details");
 const [File, SetFile] = useState(null);
  const [previewimg, setpreviewimg] = useState(defaultprofileimgae);

  const [showmodal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
const socket = io(BASEURL);

let userauth=useSelector(state=>{
    console.log("state update",state,state?.googleToken?.userInfo

)
return state?.googleToken?.state ?state?.googleToken?.state :state?.googleToken

  })

  const click = (section) => {
    console.log("open");
    setShowModal(true);
    // setMessage("open");
    switch (section) {
      case "":
        
        break;
    
      default:
        break;
    }
  };


const [documents, setDocuments] = useState([
    { name: '', link: '' }
  ])

  const [iframe, setIFrame] = useState({random: 0})
  const dispatch =useDispatch()
    const handleTypeActive = (typesale) => {
    setTypeActive(typesale);
    console.log(typesale)
    };

 const handle = useFullScreenHandle();

    const getprofile=(e)=>{
        let file = e.target.files[0];
//  setpreviewimg(URL.createObjectURL(file));
console.log("inmg",e.target.files[0])

if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setpreviewimg(URL.createObjectURL(e.target.files[0]));
      SetFile(file);
    }
    }

   

   const  uploadproileimg=async(type)=> { 
switch (type) {
  case "uploadprofile":

  let data={
    profile:file
  }
    let res= await dispatch(PostRequest(data,"addProfile"))
console.log("response",res)
 return

  default:
    break;
}

   }

  const  handleDocumentChange=(index,event)=>{
    let data = [...documents];
   data[index][event.target.name] = event.target.value;
   setDocuments(data);

   }



const addFields = () => {
  let newfield = { name: '', link: '' }

    setDocuments([...documents, newfield])  
}


const removeDocFields = (index) => {
    let data = [...documents];
    data.splice(index, 1)
    setDocuments(data)
}
    
const refreshIframe=()=>{
  setIFrame({random: iframe.random + 1});
}
    useEffect(() => {
     let data={ email:userauth}
     socket.emit("join_room",data );
      return () => {
        
      }
    }, [])
    

    return (
    <div className="page-background page-body self-center align-middle justify-center">
    
     <div className="m-8 flex flex-row">
    <div className="flex xl:flex-row md:flex-col sm:flex-col flex-col w-full  mt-16" >      
      {/* dir="ltr" md:flex-row mb-16*/}     
        <div className="flex flex-col self-center justify-center xl:w-4/6 md:w-full sm:w-full w-full">
          {/* <div className="flex self-center justify-center md:w-4/6 mx-auto"> */}
            <div className="home-header w-full hidden sm:hidden md:flex xl:flex flex-col  sm:flex-col md:flex-row xl:flex-row">
              {/* dir="ltr" */}
                <div className="current-plan px-5 py-2 ">Current Plan <div className="starter ml-2 px-5 py-1">Starter 
                <img src={downarrow} className="ml-2 float-right flex" height="10" width="10" /></div></div>
                <div className="device-type py-2 px-5">Device: <img src={desktop} height="20" width="20" /> <img src={mobile} height="20" width="20" /></div>
                <div className="preview py-1 px-5" onClick={handle.enter} >Preview <img src={arrow} className="m-2" height="10" width="10" /></div>
                <div className="refresh py-1 px-7" onClick={refreshIframe}>Refresh <img src={refresh} className="m-2" height="15" width="15" /></div>
                <div className="publish-site py-1 px-6"><img src={publishicon} className="m-2" height="13" width="13" /> 
                Publish Site <img src={downarrowwhite} className="m-2" height="10" width="10" /></div>

            </div>

<div className="home-header w-full flex flex-col flex sm:flex md:hidden xl:hidden sm:flex-col md:flex-row xl:flex-row">
              {/* dir="ltr" */}
                <div className="current-plan font-semibold px-5 py-2 m-2">View Only <div className="starter ml-2 px-5 py-2">To edit please go to Desktop 
                <img src={downarrow} className="ml-2 float-right flex" height="10" width="10" /></div></div>
                               
                <div className="publish-site py-1 px-6"><img src={publishicon} className="m-2" height="13" width="13" /> 
                Site Publishing Settings <img src={downarrowwhite} className="m-2" height="10" width="10" /></div>

            </div>

            <div className="home-about flex flex-col sm:flex-col md:flex-row xl:flex-row mt-5 w-full left-0 mb-20">
              {/* dir="ltr" */}
              <FullScreen handle={handle} className="w-full h-full">
               <Iframe
                key={iframe.random}
                src="https://me.harrish.dev/"
                id=""
                height="600px"
                width="100%"
                className="w-full flex"
                allow="autoplay"
                display="block"
                position="relative"
                
              />
              </FullScreen>
                {/* <div className="home-about-name flex self-center justify-center xl:w-2/6 md:w-2/6 sm:w-full w-full m-2">
                    <div className="w-full flex xl:flex-col md:flex-col sm:flex-row flex-row xl:border-b-2 md:border-b-2 sm:border-0 border-0">
                         <img className="about-name-img border-0 rounded-md xl:mx-auto md:mx-auto sm:mx-0 mx-0" height="120" width="120" />
                      <div className="flex flex-col mx-auto sm:mx-2 md:mx-0 xl:mx-0">
                        <span className="profile-name mt-8">Name</span>
                        <span className="profile-about mx-auto my-4">Custom Tag Ex Designer</span>
                      </div>

                    </div>
                    <div className="xl:flex md:flex sm:hidden hidden flex-col my-4">
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Email</span>
                            <span className="details-text">contactemail@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Phone</span>
                            <span className="details-text">+91 8897564534</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Birthday</span>
                            <span className="details-text">July 27 2001</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Location</span>
                            <span className="details-text">Hyderabad</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="home-about-me flex self-center relative justify-center xl:w-4/6 md:w-4/6 sm:w-full w-full m-2 ">
                    <div className="about-links-div self-center">
                        <div className="about-link-about cursor-pointer">About</div>
                        <div className="about-link-resume cursor-pointer">Resume</div>
                        <div className="about-link-blog cursor-pointer">Blog</div>
                    </div>
                    <div className="flex flex-col self-start justify-start text-left">
                        <div className="about-me-header">About Me</div>
                        <div className="about-me-text py-8">Hello there, my name is Rahul and I'm really good at designing things that 
                        people find easy to use. I've been doing this for more than 3 years now and have worked on all kinds of cool projects, 
                        from making really big data work to creating designs for the future. I love working with new companies and helping them make 
                        their ideas real. When I'm not working, I like taking apart electronics 
                        and talking to other people about new ideas. If you need someone to help make your product awesome, let's talk!</div>
                    </div>
                    <div className="flex flex-col w-full self-start justify-start text-left">
                        <div className="my-projects-header">My Projects</div>
                        <div className="my-projects-content flex grid grid-cols-1 gap-2 sm:grid sm:grid-cols-2 my-3 sm:gap-2 md:grid md:grid-cols-2 
                md:gap-2 lg:grid lg:grid-cols-2 lg:gap-2 xl:grid xl:grid-cols-2 xl:gap-2">
                          <div><img className="about-name-img border-0 rounded-md w-5/6 h-5/6" height="200" width="200" /></div>  
                          <div><img className="about-name-img border-0 rounded-md w-5/6 h-5/6" /></div>                         
                          


                        </div>
                    </div>
                </div> */}

            </div>
          {/* </div> */}
        </div>
        <div className="right-0 justify-center self-center xl:w-2/6 md:w-5/6 sm:w-full w-full flex hidden sm:hidden md:flex xl:flex">
        <div className="home-profile-edit ">
            <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
                Profile Edit Preferences
            </div>
            <div className="flex">
                <button   onClick={() => handleTypeActive("your details")} 
                  className={`flex profile-button-text m-2  ${typeActive === "your details" && " profile-button-active"}`} > 
                <img src={home} className="m-2" height="18" width="18" />Your Details</button>
                <button   onClick={() => handleTypeActive("templates")} 
                 className={`flex profile-button-text m-2  ${typeActive === "templates" && " profile-button-active"}`}>
                  <img src={file} className="m-2" height="15" width="15" />Templates</button>
                <button   onClick={() => handleTypeActive("web settings")}  
                className={`flex profile-button-text m-2  ${typeActive === "web settings" && " profile-button-active"}`}>
                     <img src={filesetting} className="m-2" height="20" width="20" /> Web Settings</button>
            </div>
 {typeActive === "your details" && (
 <div className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl w-full p-2 h-full">
       
         
         
       <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Basic Details Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>
          {/* <Accordion title="Basic Details Section" className="bg-transparent">
            <div className="flex flex-col">
              <div className="flex flex-row self-start justify-start py-2">
                
                  <input type="file" id="profileimg"  onChange={e=>getprofile(e)} />
                           <label htmlFor='profileimg'  className= " cursor-pointer self-center text-xs font-bold text-color pt-2" style={{'fontFamily':' Arial, Helvetica, sans-serif','background':' linear-gradient( to right, #2162ec 6.93%, #7a6bf1c7 52.34%, #b771f3b5 95.98%, #d375f6, #d775f6)','WebkitTextFillColor': 'transparent','WebkitBackgroundClip': 'text'}}   >

                <img src={previewimg} className="about-name-img border-0 rounded-md cursor-pointer" height="70" width="70"  />  
                </label>
                
                <div className="flex flex-col justify-between ml-2">

                  <span className="profile-text" >Add Profile Image</span>

                 <button type="button" className="upload-image-btn rounded-2xl rounded-lg" onClick={e=>uploadproileimg("uploadprofile")}> Upload image</button>
                </div>
              </div>
              <div className="flex flex-col accordion-div-height py-4 w-full text-left self-start">
                <span className="profile-text self-start text-left">Add Personal Details</span>
                <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Your Name" /></div>
                <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Birthday" /></div>
               <div className="py-2 flex">
                  <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Custom Tag" />                  
                  <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                </div>
              </div>

              <div className="flex flex-col accordion-div-height py-4 w-full text-left self-start">
                <span className="profile-text self-start text-left">Add Contact Details</span>
                <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Enter Email" /></div>
                <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Enter Phone Number" /></div>
               <div className="py-2">
                  <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Enter Location" /> 
                </div>

               
              </div>
             <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
            </div>
          </Accordion> */}

          <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Education Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>
              {/* <Accordion title="Education Secion" className="text-white bg-transparent">
                <div className="flex flex-col">
                  <div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="School Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Degree" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Field of Study" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Grade" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Activities" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>
                 
                 
                  <div className="py-2 flex">
               <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Skills" />
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                 
             <div className="h-5/6 overflow-y-auto flex flex-col"> 
               <div className="py-2 flex">
                  <span className="profile-text">Documents</span>
                  <i onClick={addFields} className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i>
                  </div>
                  {documents.map((input, index) => {
          return (
                  <div key={index}>
                  <div className="py-2 flex"><input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="name" required placeholder="Name"  value={input.name} />
                  <i onClick={() => removeDocFields(index)} className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="link" required placeholder="Link"  value={input.link} /></div>
                
                </div>
          )})}
                </div>
                            
                  </div>
                
               <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>

                </div>
              </Accordion> */}


              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Experience Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>
              {/* <Accordion title="Experience Section" className="text-white bg-transparent">
                <div className="flex flex-col ">

                   <div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Company Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Location" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Current" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>
                                 
                 <div> 
                  <div className="py-2 flex">
                  <span className="profile-text">Position</span>
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Description" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>
                  </div>
                
               
                  </div>
                  <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                 </div>
              </Accordion> */}


              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Projects Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>
              {/* <Accordion title="Projects Section" className="bg-transparent overflow-x-hidden">
                <div className="flex flex-col">
                 <div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>                                  
                 
                 <div>
                  <div className="py-2 flex">
                  <span className="profile-text">Link</span>
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div> 
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /></div>
                  </div>
                   <img className="about-name-img border-0 rounded-md" height="70" width="70" />
                  <div className="py-2 flex">
                  <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Hashtags" /> 
                  <i className="fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Type" /></div>
              
              
                 <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                             
                  </div>
                </div>
              </Accordion> */}



              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Resume Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>
              {/* <Accordion title="Resume Section" className="bg-transparent overflow-x-hidden">
                <div className="flex flex-col">
                 <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Resume" /></div>

                 <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                </div>
              </Accordion> */}
           

              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Add Social Links
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>

              {/* <Accordion title="Add Social Links" className="bg-transparent overflow-x-hidden">
                <div className="flex flex-col">
                   <div>
                  <div className="py-2 flex">
                    <select className="accordion-inputs w-4/6 rounded-md" required placeholder="Name">
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Linked In</option>
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Blog</option>
                    <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Github</option>
                     <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Portfolio</option>
                      <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Skype</option>
                       <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Youtube</option>
                      </select>
                      <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                    </div>
                   
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /></div> 
                  </div>
                   <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                </div>
              </Accordion> */}


              {/* <Accordion title="Skills Section" className="bg-transparent overflow-x-hidden">
                <div className="flex flex-col">

                   <div>
                 <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Skill" /></div> 

                  <div className="py-2 flex">
                    <select className="accordion-inputs w-4/6 rounded-md" required placeholder="Proficiency">
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Beginner</option>
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Intermediate</option>
                    <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Expert</option>
                      </select>
                      <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                    </div>
                  
                  </div>
                  <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                </div>
              </Accordion> */}


              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Skills Section 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>


              {/* {message === "open" && (
                  <div className="home-profile-edit profile-popup">
                    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
                    <span> Profile / Skills Section</span>
                  <div className="flex self-center justify-end float-right">
                  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
                  <i className="fa fa-close"></i></button>
                  </div>
                  
                    </div>
                <div className="flex flex-col p-2 w-full">

<div className="flex py-4 flex-col">
<div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Language" /></div> 

<div className="py-2 flex">
                    <select className="accordion-inputs w-4/6 rounded-md" required placeholder="Proficiency">
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Beginner</option>
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Intermediate</option>
                    <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Expert</option>
                      </select>
                      <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                    </div>

</div>
<div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
  <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
</div>

</div>
                </div>
              )} */}

             
           
              {/* <Accordion title="Add Languages" className="bg-transparent overflow-x-hidden"> */}
                {/* <div className="flex flex-col"> */}

                   {/* <div>
                 <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Language" /></div> 

                  <div className="py-2 flex">
                    <select className="accordion-inputs w-4/6 rounded-md" required placeholder="Proficiency">
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Beginner</option>
                   <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Intermediate</option>
                    <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Expert</option>
                      </select>
                      <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                    </div>
                  
                  </div>
                   <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div> */}
                 
                {/* </div> */}
              {/* </Accordion> */}

              <div className="accordion-bg m-2" onClick={() => click()}>
                <button className="flex justify-between flex-row user-setting-btn">
                  Add Languages 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>


              {/* {message === "open" && (
                  <div className="home-profile-edit profile-popup">
                    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
                    <span> Profile / Add Languages</span>
                  <div className="flex self-center justify-end float-right">
                  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
                  <i className="fa fa-close"></i></button>
                  </div>
                  
                    </div>
                <div className="flex flex-col p-2 w-full">

<div className="flex py-4 flex-col">
<div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Language" /></div> 

<div className="py-2 flex">
 <select className="accordion-inputs w-4/6 rounded-md" required placeholder="Proficiency">
<option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Beginner</option>
<option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Intermediate</option>
 <option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Expert</option>
   </select>
   <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
 </div>

</div>
<div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
<button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
</div>

</div>
                </div>
              )} */}
        
        
        </div>
 )}

  {typeActive === "templates" && (
     <div className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl w-full p-2 h-full">
     <div className="flex grid grid-cols-1 gap-2 sm:grid sm:grid-cols-2 my-3 sm:gap-2 md:grid md:grid-cols-2 
                md:gap-2 lg:grid lg:grid-cols-2 lg:gap-2 xl:grid xl:grid-cols-2 xl:gap-2">
      <div className="template-card">
        <div className="template-bg">

        </div>
        <div className="template-text">Template 1 <img src={forwardarrow} className="ml-2 flex" height="8" width="8" /></div>
      </div>

       <div className="template-card">
        <div className="template-bg">

        </div>
        <div className="template-text">Template 2 <img src={forwardarrow} className="ml-2 flex" height="8" width="8" /></div>
      </div>
      </div>
     </div>
  )}

  {typeActive === "web settings" && (
    // <div>Web Settings</div>
     <div className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl w-full p-2 h-full">
                
              <Accordion title="Basic Settings" className="text-white bg-transparent">
                <div className="flex flex-col">
                  <div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /></div>
                  <img className="about-name-img border-0 rounded-md" height="70" width="70" />
                  </div>
                 
                </div>
              </Accordion>

              <Accordion title="Domain Settings" className="text-white bg-transparent">
                <div className="flex flex-col py-4">  
                  <div>
                   <span className="domain-text self-start text-left">Enter Domain You Own.</span>
                   <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Enter Domain Name" /></div>
                  </div>

<div className="flex flex-row">
                          <div className="flex m-2">
                            <input
                              type="radio"
                              id="dnsConfig"                            
                              name="domain"
                              value="dnsConfig"
                            />
                            <label
                              className="text-black text-sm pl-2 font-semibold"
                              htmlFor="dnsConfig"
                            >
                              DNS Config
                            </label>
                          </div>
                          <div className="flex m-2 ">
                            <input
                              type="radio"
                              id="status"                            
                              name="domain"
                              value="status"
                             
                            />
                            <label
                              className="text-black text-sm pl-2 font-semibold"
                              htmlFor="status"
                            >
                              Status
                            </label>
                          </div>
                        
                        </div>

                  <div>
                   
                   <span className="profile-text self-start text-left"><img src={sslcertificate} className="flex m-2" width="22" height="22" />SSL Certificate</span>
                  </div>

                  <div className="bg-gray-100 m-2 flex py-2">  <button className="publish-site flex py-2 mx-auto px-6"> Update </button></div>

                  <div className="flex"> 
                  <span className="domain-text text-sm self-start text-left">Don't Have a Domain? Check Oneyou Domain Plans </span>
                  <img src={nextbtn} className="flex self-center" height="25" width="25" />
                  
                  </div>


                 </div>
              </Accordion>

             
           
                  
           
        </div>
  )}
     {showmodal && <Basicdetails showmodal={setShowModal} />}
        </div>
        </div>
     
       </div>
     
    </div>
  
    </div>
  );
};

export default Home;
