import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import moment from "moment";

const Certification = ({ showmodal, socket }) => {
  const close = () => {
    showmodal(null);
  };
  const removeCertification = () => {
    // let arr = [...experience];
    // arr.splice(index, 1);
    // setExperience(arr);
    // if (id) {
    //   let data = {
    //     experienceId: id,
    //   };
    //   socket.emit("removeCertification", data);
    // }
  };



  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / Certification</span>
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
         <div className="flex py-4 flex-col">
                <div
                  className="py-2 border-b section-shadow mt-2 mb-2"
                //   key={index}
                >
                     <div className="flex">
                      <span className="text-lg font-semibold mx-2">
                        {" "}
                        Details
                      </span>
                      <i
                        onClick={(e) => removeCertification()}
                        className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                      ></i>
                    </div>

                  <div className="m-3">
                   
                    {/* <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Till Date" /></div> */}
                   
                    <div className="py-2 w-full flex">
                      {/* <TextareaAutosize id="filled-basic" variant="filled" label="Description" className="w-4/6" /> */}
                      {/* <textarea type="text" className="w-4/6 accordion-inputs" placeholder="Description" /> */}
                      {/* defaultValue="Default Value" */}
                      <TextField
                        id="filled-multiline-static"
                        className="w-5/6"
                        label="Description"
                        name="descrption"
                        // value={educ?.descrption}
                        multiline
                        rows={4}
                        variant="filled"
                        // onChange={(e) => geteducFields(e, index)}
                      />
                    </div>

                    <div className="overflow-y-auto flex flex-col">                     
                            <div>
                                 {/* key={indx} */}
                              <div className="py-2 w-full flex">
                                <TextField
                                  id="filled-basic"
                                  className=" w-5/6"
                                  label="Name"
                                  variant="filled"
                                  name="name"
                                //   onChange={(event) =>
                                //     geteducDocFields(index, indx, event)
                                //   }
                                  type="text"
                                //   value={input.name}
                                />
                               
                              </div>
                              <div className="py-2 w-full flex">
                                <TextField
                                  id="filled-basic"
                                  className=" w-5/6"
                                  label="Link"
                                  variant="filled"
                                  name="link"
                                //   onChange={(event) =>
                                //     geteducDocFields(index, indx, event)
                                //   }
                                  type="text"
                                //   value={input.link}
                                />
                                {/* <input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="link" required placeholder="Link"  value={input.link} /> */}
                              </div>
                            </div>
                         
                    </div>
                  </div>
                </div>
          {/* : ( */}
          <button
            className="fles add-more m-1 flex py-2"
            // onClick={addEducation}
          >
            <i className="fa fa-plus cursor-pointer self-center px-1"></i>Add
            More
          </button>
          {/* )} */}

          {/* <div className="bg-gray-100 w-full flex self-center justify-center py-2"> 
                   <button className="publish-site m-1 flex py-2 px-6">Add More</button>
                  </div> */}

          {/* <button
            className="fles add-more m-1 flex py-2"
            onClick={addEducation}
          >
            <i className="fa fa-plus self-center px-1"></i>Add More
          </button> */}
        </div>
        </div>
        <div className="m-2 w-full flex self-center justify-center py-2">
          <button
            className="publish-site m-1 flex py-3 px-6"
            // onClick={submitEduction}
          >
            {" "}
            Save & Update{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Certification;
