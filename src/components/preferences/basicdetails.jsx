import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostRequest from "../postRequest";
import file from "../../images/file.png";
import defaultprofileimgae from "../../images/defaultprofileimg.png";


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Basicdetails = ({ showmodal, socket }) => {
  const [typeActive, setTypeActive] = useState("your details");
  const [File, SetFile] = useState(null);
  const [previewimg, setpreviewimg] = useState(defaultprofileimgae);
  const close = (e) => {
    console.log("close");
    showmodal(null);
  };

  const getprofile = (e) => {
    let file = e.target.files[0];
    //  setpreviewimg(URL.createObjectURL(file));
    console.log("inmg", e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setpreviewimg(URL.createObjectURL(e.target.files[0]));
      SetFile(file);
    }
  };

  // const dispatch = useDispatch();
  // const handleTypeActive = (typesale) => {
  //   setTypeActive(typesale);
  //   console.log(typesale);
  // };

  let userauth = useSelector((state) => {
    console.log("state update", state, state?.googleToken?.userInfo);
    return state?.googleToken?.state
      ? state?.googleToken?.state
      : state?.googleToken;
  });

  const uploadproileimg = async () => {
    let data = { resume: File };
    socket.emit("addProfileImg", data);
  };
  const getfetchbyuser = () => {
    socket.emit("fetchByUser");
  };

  useEffect(() => {
    socket.emit("fetchByUser");
    socket.on("fetchByUserd", (data) => {
      console.log("ddata", data);
    });
    return () => {};
  }, []);
  return (
    <>
     <form className="" noValidate autoComplete="off">
      <div className="">
        <div className="home-profile-edit profile-popup">
          <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
            <span> Profile / Basic Details</span>
            <div className="flex self-center justify-end float-right">
              <button
                onClick={() => close()}
                className="flex justify-end float-right self-end"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 w-full overflow-y-auto overflow-x-hidden">
            <div className="flex py-4 flex-col m-3">
              <div className="flex flex-row self-start justify-start py-2">
                <input
                  type="file"
                  id="profileimg"
                  onChange={(e) => getprofile(e)}
                />
                <label
                  htmlFor="profileimg"
                  className=" cursor-pointer self-center text-xs font-bold text-color pt-2"
                  style={{
                    fontFamily: " Arial, Helvetica, sans-serif",
                    background:
                      " linear-gradient( to right, #2162ec 6.93%, #7a6bf1c7 52.34%, #b771f3b5 95.98%, #d375f6, #d775f6)",
                    WebkitTextFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  <img
                    src={previewimg}
                    className="about-name-img border-0 rounded-md cursor-pointer"
                    height="70"
                    width="70"
                  />
                </label>

                <div className="flex flex-col justify-between ml-2">
                  <span className="profile-text">Add Profile Image</span>

                  <button
                    type="button"
                    className="upload-image-btn rounded-2xl rounded-lg"
                    onClick={(e) => uploadproileimg("uploadprofile")}
                  >
                    {" "}
                    Upload image
                  </button>
                </div>
              </div>
              <div className="flex flex-col accordion-div-height py-4 w-full text-left self-start">
                <span className="profile-text self-start text-left">
                  Add Personal Details
                </span>
                <div className="py-2 ">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Your Name"
                  /> */}
                   <div className="py-2 w-full">
                    <TextField id="filled-basic" className=" w-5/6" label="Your Name" variant="filled" />
                    </div> 
                  {/* <div className="py-2 w-full"> <TextField id="outlined-basic" className="w-4/6" label="Outlined" variant="outlined" /></div> */}
                </div>
                <div className="py-2 w-full">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Birthday"
                  /> */}
                   <TextField id="date" className="w-5/6" label="Birthday" type="date" variant="filled"
                    InputLabelProps={{
                   shrink: true,
                      }}/>
                </div>
                <div className="py-2 flex w-full">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Custom Tag"
                  /> */}
                   <TextField id="filled-basic" className=" w-5/6" label="Custom Tag" variant="filled" />
                  <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                </div>
              </div>

              <div className="flex flex-col accordion-div-height py-4 w-full text-left self-start">
                <span className="profile-text self-start text-left">
                  Add Contact Details
                </span>
                <div className="py-2 w-full ">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Enter Email"
                  /> */}
                  <TextField id="outlined-basic" className="w-5/6" label="Enter Email" variant="filled" />
                </div>
                <div className="py-2 w-full">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Enter Phone Number"
                  /> */}
                  <TextField id="outlined-basic" className="w-5/6" label="Enter Phone Number" variant="filled" />
                </div>
                <div className="py-2 w-full">
                  {/* <input
                    type="text"
                    className="accordion-inputs w-4/6 rounded-md"
                    placeholder="Enter Location"
                  /> */}
                  <TextField id="outlined-basic" className="w-5/6" label="Enter Location" variant="filled" />
                </div>
              </div>
            </div>
            
          </div>

<div className=" m-2 w-full flex self-center justify-center py-2">
              <button
                className="publish-site m-1 flex py-2 px-6"
                onClick={getfetchbyuser}
              >
                {" "}
                Save & Update{" "}
              </button>
              <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
            </div>


        </div>
      </div>
      </form>
    </>
  );
};

export default Basicdetails;
