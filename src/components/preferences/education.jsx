import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import moment from "moment";

const Education = ({ showmodal, socket }) => {
  const [checked, setChecked] = useState(false);
  const close = () => {
    showmodal(null);
  };

  // const [documents, setDocuments] = useState([{ name: "", link: "" }]);

  let profileData = useSelector((state) => {
    let userprofdata = [];
    userprofdata = state?.Profiledata?.state?.data;

    return state?.Profiledata?.state?.data;
  });

  const [education, setEducation] = useState(profileData?.education);

  const handleDocumentChange = (index, event) => {
    // let data = [...documents];
    // data[index][event.target.name] = event.target.value;
    // setDocuments(data);
  };

  const addFields = (index) => {
    let data = {};
    console.log("addfld", education);
    let doc = { name: "", link: "" };
    let addDocs = education?.map((item, indx) => {
      if (index === indx && item.documents) {
        item.documents.push(doc);
      }
      return item;
    });

    data = [...addDocs];
    setEducation([...data]);
  };

  const addEducation = () => {
    let educFileds = {
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      grade: "",
      descrption: "",
      activites: "",
      current: false,
      documents: [{ name: "", link: "" }],
    };

    setEducation([...education, educFileds]);
  };

  const removeDocFields = (mainindex, subindex) => {
    let data = {};
    console.log("addfld", education);
    let doc = { name: "", link: "" };
    let addDocs = education?.map((item, indx) => {
      if (mainindex === indx) {
        item.documents.splice(subindex, 1);
      }
      return item;
    });

    data = [...addDocs];
    setEducation([...data]);
  };
  const geteducFields = (event, index) => {
    let data = [...education];
    if (event.target.name === "current") {
      console.log({ [event.target.name]: event.target.checked });
      data[index][event.target.name] = event.target.checked;
    } else {
      console.log({ [event.target.name]: event.target.value });

      data[index][event.target.name] = event.target.value;
    }

    setEducation(data);
  };

  const geteducDocFields = (mainindex, subindex, event) => {
    let data = [...education];
    //  if (event.target.name === "current") {
    //    console.log({ [event.target.name]: event.target.checked });
    //    data[mainindex].documents[subindex][event.target.name] = event.target.checked;
    //  } else {

    console.log({ [event.target.name]: event.target.value });

    data[mainindex].documents[subindex][event.target.name] = event.target.value;
    //  }
    console.log("dddd", data);
    setEducation([...data]);
  };

  const submitEduction = () => {
    console.log("educatio ", education);
    socket.emit("addEducation", education);
  };

  const removeEduc = (index, id) => {
    console.log("id", id);
    let edudata = [...education];
    edudata.splice(index, 1);
    setEducation(edudata);

    if (id) {
      let data = {
        educationId: id,
      };
      socket.emit("removeEducation", data);
    }
  };

  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / Education</span>
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
          {education &&
            education.length > 0 &&
            education.map((educ, index) => {
              console.log("Date", educ);
              return (
                <div className="flex py-4 flex-col border-b section-shadow mt-2 mb-2" key={index}>

                  <div className="flex">
                    <span className="text-lg font-semibold mx-2">{educ?.degree} Details</span>
                    <i
                      onClick={(e) => removeEduc(index, educ._id)}
                      className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                    ></i>
                  </div>

                  <div className="m-3">
                    <div className="py-2 w-full flex">
                      {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="School Name" /> */}
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        name="schoolName"
                        value={educ?.schoolName}
                        label="School Name"
                        variant="filled"
                        onChange={(e) => geteducFields(e, index)}
                      />
                    </div>
                    <div className="py-2 w-full flex">
                      {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Degree" /> */}
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Degree"
                        name="degree"
                        value={educ?.degree}
                        variant="filled"
                        onChange={(e) => geteducFields(e, index)}
                      />
                    </div>

                    <div className="py-2 w-full flex">
                      {/* <input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /> */}
                      <TextField
                        id="date"
                        className="w-5/6"
                        label="Start Date"
                        type="date"
                        variant="filled"
                        name="startDate"
                        onChange={(e) => geteducFields(e, index)}
                        value={moment(educ?.startDate).format("DD / MM / YYYY")}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    {!(educ?.current || education.current) && (
                      <div className="py-2 w-full flex">
                        {/* <input type="date" className="flex flex-row accordion-inputs w-4/6 rounded-md" placeholder="End Date" /> */}
                        <TextField
                          id="date"
                          className="w-5/6"
                          label="End Date"
                          type="date"
                          name="endDate"
                          variant="filled"
                          value={educ?.endDate}
                          onChange={(e) => geteducFields(e, index)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    )}

                    {/* <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Till Date" /></div> */}
                    <div className="flex flex-row">
                      <div className="flex m-2">
                        <input
                          type="checkbox"
                          id="tilldate"
                          name="current"
                          // value={educ?.current}
                          checked={educ?.current}
                          onChange={(e) => geteducFields(e, index)}
                        />
                        <label
                          className="text-black text-sm pl-2 font-semibold"
                          htmlFor="tilldate"
                        >
                          Till Date
                        </label>
                      </div>
                    </div>
                    <div className="py-2 w-full flex">
                      {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Grade" /> */}
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Grade"
                        name="grade"
                        value={educ.grade}
                        onChange={(e) => geteducFields(e, index)}
                        variant="filled"
                      />
                    </div>
                    <div className="py-2 w-full flex">
                      {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Activities" /> */}
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Activities"
                        name="activites"
                        value={educ.activites}
                        onChange={(e) => geteducFields(e, index)}
                        variant="filled"
                      />
                    </div>
                    <div className="py-2 w-full flex">
                      {/* <TextareaAutosize id="filled-basic" variant="filled" label="Description" className="w-4/6" /> */}
                      {/* <textarea type="text" className="w-4/6 accordion-inputs" placeholder="Description" /> */}
                      {/* defaultValue="Default Value" */}
                      <TextField
                        id="filled-multiline-static"
                        className="w-5/6"
                        label="Description"
                        name="descrption"
                        value={educ?.descrption}
                        multiline
                        rows={4}
                        variant="filled"
                        onChange={(e) => geteducFields(e, index)}
                      />
                    </div>

                    {/* <div className="py-2 flex">
               <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Skills" />
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div> */}

                    <div className="overflow-y-auto flex flex-col">
                      {/* h-5/6  */}
                      <div className="py-2 flex">
                        <span className="profile-text">Documents</span>
                        <i
                          onClick={() => addFields(index)}
                          className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                        ></i>
                      </div>
                      {educ?.documents &&
                        educ?.documents?.map((input, indx) => {
                          console.log("docs", input, indx);
                          return (
                            <div key={indx}>
                              <div className="py-2 w-full flex">
                                <TextField
                                  id="filled-basic"
                                  className=" w-5/6"
                                  label="Name"
                                  variant="filled"
                                  name="name"
                                  onChange={(event) =>
                                    geteducDocFields(index, indx, event)
                                  }
                                  type="text"
                                  value={input.name}
                                />
                                {/* <input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="name" required placeholder="Name"  value={input.name} /> */}
                                <i
                                  onClick={() => removeDocFields(index, indx)}
                                  className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                                ></i>
                              </div>
                              <div className="py-2 w-full flex">
                                <TextField
                                  id="filled-basic"
                                  className=" w-5/6"
                                  label="Link"
                                  variant="filled"
                                  name="link"
                                  onChange={(event) =>
                                    geteducDocFields(index, indx, event)
                                  }
                                  type="text"
                                  value={input.link}
                                />
                                {/* <input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="link" required placeholder="Link"  value={input.link} /> */}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                 
                </div>
              );
            })}
          {/* : ( */}
          <button
            className="fles add-more m-1 flex py-2"
            onClick={addEducation}
          >
            <i className="fa fa-plus cursor-pointer self-center px-1"></i>Add More
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
        <div className="m-2 w-full flex self-center justify-center py-2">
          <button
            className="publish-site m-1 flex py-2 px-6"
            onClick={submitEduction}
          >
            {" "}
            Save & Update{" "}
          </button>
          {/* <button className="reset-btn m-1 flex py-2 px-6"> Reset </button> */}
          {/* <button className="publish-site m-1 flex py-2 px-6">Add More</button> */}
        </div>
      </div>
    </>
  );
};

export default Education;
