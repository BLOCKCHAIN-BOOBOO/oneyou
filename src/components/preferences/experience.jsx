import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

const Experience = ({ showmodal, socket }) => {
  let profileData = useSelector((state) => {
    let userprofdata = [];
    userprofdata = state?.Profiledata?.state?.data;

    return state?.Profiledata?.state?.data;
  });

  const [experience, setExperience] = useState(profileData?.experience);

  const close = () => {
    showmodal(null);
  };

  const addExperience = () => {
    let experFileds = {
      title: "",
      companyName: "",
      location: "",
      current: false,
      startDate: "",
      endDate: "",
      // description: "",
      position: [
        {
          title: "",
          description: "",
          current: false,
          startDate: "",
          endDate: "",
        },
      ],
    };

    setExperience([...experience, experFileds]);
  };

  const removeExperience = (index, id) => {
    let arr = [...experience];
    arr.splice(index, 1);
    setExperience(arr);
    if (id) {
      let data = {
        experienceId: id,
      };
      socket.emit("removeExperience", data);
    }
  };

  const getexperienceFields = (index, event) => {
    let arr = [...experience];
    if (event.target.name === "current") {
      arr[index][event.target.name] = event.target.checked;
    } else {
      arr[index][event.target.name] = event.target.value;
    }
    setExperience(arr);
  };

  const getpositionFields = (mainindex, subindex, event) => {
    let arr = [...experience];
    if (event.target.name === "current") {
      arr[mainindex].position[subindex][event.target.name] =
        event.target.checked;
    } else {
      arr[mainindex].position[subindex][event.target.name] = event.target.value;
    }

    setExperience(arr);
  };

  const addposition = (index) => {
    let arr = [...experience];
    let position = arr[index].position;
    position.push({
      title: "",
      current: false,
      startDate: "",
      endDate: "",
      description: "",
    });
    arr[index].position = position;
    setExperience(arr);
  };

  const removePosition = (mainindex, subindex, id) => {
    let arr = [...experience];
    let position = arr[mainindex].position;
    position.splice(subindex, 1);
    arr[mainindex].position = position;
    setExperience(arr);
  };
  const submit = () => {
    console.log("experience", experience);
    socket.emit("addExperience", experience);
  };

  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / Experience</span>
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
          <div className="flex py-4 flex-col">
            {experience &&
              experience.length > 0 &&
              experience?.map((item, index) => {
                return (
                  <div className="py-2 border-b section-shadow mt-2 mb-2" key={index}>
                    <div className="flex">
                       <span className="text-lg font-semibold mx-2"> Details</span>
                      <i
                        onClick={(e) => removeExperience(index, item._id)}
                        className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                      ></i>
                    </div>
                    <div className="m-3">
                    <div className="py-2 w-full flex">
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Role"
                        variant="filled"
                        value={item.title}
                        onChange={(e) => getexperienceFields(index, e)}
                        name="title"
                      />
                    </div>
                    <div className="py-2 w-full flex">
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Company Name"
                        variant="filled"
                        value={item.companyName}
                        onChange={(e) => getexperienceFields(index, e)}
                        name="companyName"
                      />
                    </div>
                    <div className="py-2 w-full flex">
                      <TextField
                        id="date"
                        className="w-5/6"
                        label="Start Date"
                        type="date"
                        variant="filled"
                        name="startDate"
                        value={item?.startDate}
                        onChange={(e) => getexperienceFields(index, e)}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    {!item?.current && (
                      <div className="py-2 w-full flex">
                        <TextField
                          id="date"
                          className="w-5/6"
                          label="end Date"
                          type="date"
                          variant="filled"
                          name="endDate"
                          value={item.endDate}
                          onChange={(e) => getpositionFields(index, e)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /> */}
                      </div>
                    )}

                    <div className="py-2 flex w-full float-left">
                      <input
                        type="checkbox"
                        className="accordion-inputs mx-2 rounded-md"
                        name="current"
                        onChange={(e) => getexperienceFields(index, e)}
                        checked={item?.current}
                      />{" "}
                      Current
                    </div>
                    <div className="py-2 w-full flex">
                      {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Location" /> */}
                      <TextField
                        id="filled-basic"
                        className=" w-5/6"
                        label="Location"
                        variant="filled"
                        name="location"
                        value={item.location}
                        onChange={(e) => getexperienceFields(index, e)}
                      />
                    </div>
                    {/* <div className="py-2 w-full flex">
                      <TextField
                        id="filled-multiline-static"
                        className="w-5/6"
                        label="Description"
                        name="description"
                        value={item.description}
                        multiline
                        rows={4}
                        variant="filled"
                      />
                    </div> */}
                    <div>
                     
                      {item.position.map((post, ind) => {
                        return (
                          <div key={ind}>
                             <div className="py-2 w-full flex">
                        <span className="profile-text">Position</span>
                        <i
                          className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                          onClick={() => addposition(index)}
                        ></i>{" "}
                                           
                              <i
                              className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                              onClick={() =>
                                removePosition(index, ind, post._id)
                              }
                            ></i>
                             </div>
                            <div className="py-2 w-full flex">
                              <TextField
                                id="filled-basic"
                                className=" w-5/6"
                                label="Role"
                                variant="filled"
                                name="title"
                                onChange={(e) =>
                                  getpositionFields(index, ind, e)
                                }
                                value={post.title}
                              />
                            </div>
                            <div className="py-2 w-full flex">
                              {/* <input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /> */}
                              <TextField
                                id="date"
                                className="w-5/6"
                                label="From Date"
                                type="date"
                                name="startDate"
                                value={post.startDate}
                                variant="filled"
                                onChange={(e) =>
                                  getpositionFields(index, ind, e)
                                }
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            {!post?.current && (
                              <div className="py-2 w-full flex ">
                                {/* <input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /> */}
                                <TextField
                                  id="date"
                                  className="w-5/6"
                                  label="To Date"
                                  type="date"
                                  name="endDate"
                                  variant="filled"
                                  value={post.endDate}
                                  onChange={(e) =>
                                    getpositionFields(index, ind, e)
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                            )}

                            <div className="py-2 flex w-full float-left">
                              <input
                                type="checkbox"
                                className="accordion-inputs mx-2 rounded-md"
                                name="current"
                                onChange={(e) =>
                                  getpositionFields(index, ind, e)
                                }
                                checked={post?.current}
                              />{" "}
                              Current
                            </div>
                            <div className="py-2 w-full flex">
                              <TextField
                                id="filled-multiline-static"
                                className="w-5/6"
                                label="Description"
                                name="description"
                                value={post.description}
                                onChange={(e) =>
                                  getpositionFields(index, ind, e)
                                }
                                multiline
                                rows={4}
                                variant="filled"
                              />
                            </div>
                           
                          </div>
                        );
                      })}
                    </div>
                    </div>
                    
                    {/* <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>                */}
                  </div>
                );
              })}

            <button
              className="fles add-more m-1 flex py-2"
              onClick={addExperience}
            >
              <i className="fa fa-plus cursor-pointer self-center px-1"></i>Add More
            </button>
          </div>
          
        </div>

        <div className=" m-2 w-full flex self-center justify-center py-2">
          <button className="publish-site m-1 flex py-2 px-6" onClick={submit}>
            {" "}
            Save & Update{" "}
          </button>
          <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
        </div>
      </div>
    </>
  );
};

export default Experience;
