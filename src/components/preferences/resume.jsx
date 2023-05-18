import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import defaultprofileimgae from "../../images/defaultprofileimg.png";
import TextField from '@material-ui/core/TextField';

const Resume = ({ showmodal, socket }) => {
  const [File, SetFile] = useState(null);

  const [documents, setDocuments] = useState([]);

  let profileData = useSelector((state) => {
    let userprofdata = [];
    userprofdata = state?.Profiledata?.state?.data;

    return state?.Profiledata?.state?.data;
  });
  const [previewimg, setpreviewimg] = useState(
    profileData?.resume ? profileData?.resume : defaultprofileimgae
  );

  const close = () => {
    showmodal(false);
  };
  const getprofile = (e) => {
    let file = e.target.files[0];
    //  setpreviewimg(URL.createObjectURL(file));
    console.log("resume", e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setpreviewimg(URL.createObjectURL(e.target.files[0]));
      SetFile(file);
    }
  };

  const submit = () => {
    let data = { resume: File };
    socket.emit("addResume", data);
  };

  //   const loaddata = () => {

  // setDocuments(profileData.languages);

  //   };
  //   useEffect(() => {
  //     loaddata();
  //   }, []);

  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / Resume</span>
          <div className="flex self-center justify-end float-right">
            <button
              onClick={() => close()}
              className="flex justify-end float-right self-end"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 w-full h-full overflow-y-auto overflow-x-hidden">
          <div className="flex py-4 flex-col m-3">
            <div className="py-2 w-full flex flex-col">
              {/* <input
                type="file"
                className="accordion-inputs w-4/6 rounded-md"
                required
                placeholder="Resume"
                onChange={(e) => getprofile(e)}
              /> */}
              <label for="myfile" className="flex self-start text-left">Select a file:</label>
              {/* <input
                type="file"
                id="myfile"
                name="myfile"
                className="accordion-inputs w-4/6 rounded-md"
                onChange={(e) => getprofile(e)}
              /> */}
              <TextField id="myfile" type="file" onChange={(e) => getprofile(e)} name="myfile" className=" w-5/6" variant="filled" />
              <br></br>
            </div>
            <div className="py-2 ">
              {/* <img src={previewimg}></img> */}
              <embed
                src={previewimg && previewimg}
                width="80px"
                height="90px"
              />
            </div>
          </div>
         
        </div>
         <div className="m-2 w-full flex self-center justify-center py-2">
            <button
              className="publish-site m-1 flex py-2 px-6"
              onClick={submit}
            >
              {" "}
              Save & Update{" "}
            </button>
            <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
          </div>
      </div>
    </>
  );
};

export default Resume;
