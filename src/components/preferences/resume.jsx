import React, { useState } from "react";
import defaultprofileimgae from "../../images/defaultprofileimg.png";

const Resume = ({ showmodal, socket }) => {
  const [File, SetFile] = useState(null);
  const [previewimg, setpreviewimg] = useState(defaultprofileimgae);

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
    socket.emit("addSocialLinks", data);
  };

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
        <div className="flex flex-col p-2 w-full overflow-y-auto">
          <div className="flex py-4 flex-col">
            <div className="py-2 ">
              <input
                type="file"
                className="accordion-inputs w-4/6 rounded-md"
                required
                placeholder="Resume"
                onChange={(e) => getprofile(e)}
              />
            </div>
          </div>
          <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2">
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
      </div>
    </>
  );
};

export default Resume;
