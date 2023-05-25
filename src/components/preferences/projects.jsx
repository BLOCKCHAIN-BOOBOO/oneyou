import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

const Projects = ({ showmodal, socket }) => {
  let profileData = useSelector((state) => {
    let userprofdata = [];
    userprofdata = state?.Profiledata?.state?.data;

    return state?.Profiledata?.state?.data;
  });

  const [projects, setProjects] = useState(profileData?.projects);

  const addProjects = () => {
    let data = {
      title: "",
      type: "",
      descrption: "",
      image: "",
      link: [
        {
          name: "",
          link: "",
        },
      ],
      hashTags: "",
    };
    setProjects([...projects, data]);
  };

  const removeProject = (index, id) => {
    let data = [...projects];
    data.splice(index, 1);
    setProjects(data);
    if (id) {
      let data = {
        projectId: id,
      };
      socket.emit("removeProjects", data);
    }
  };
  const submit = () => {
    console.log("project", projects);
    socket.emit("addProjects", projects);
  };

  const getProjectDetails = (index, event) => {
    let data = [...projects];
    console.log((data[index][event.target.name] = event.target.value));
    data[index][event.target.name] = event.target.value;
    setProjects(data);
  };
  const getProjectLinkDetails = (mainIndex, subindex, event) => {
    let data = [...projects];
    console.log(
      (data[mainIndex].link[subindex][event.target.name] = event.target.value)
    );
    // data[mainindex].documents[subindex][event.target.name] = event.target.value;
    data[mainIndex].link[subindex][event.target.name] = event.target.value;
    setProjects(data);
  };
  // const getProjectHashDetails = (mainindex, subIndex, event) => {
  //   let data = [...projects];
  //   data[mainindex].hashTags[subIndex].name = event.target.name;
  //   data[mainindex].hashTags[subIndex].value = event.target.value;
  //   setProjects(data);
  // };

  const addlink = (index) => {
    let data = [...projects];
    data[index].link.push({ name: "", link: "" });
    setProjects(data);
  };

  const removelink = (mainindex, subindex, id) => {
    let data = [...projects];
    data[mainindex].link.splice(subindex, 1);
    setProjects(data);
    if (id) {
      let data = {
        projectId: id,
      };
      socket.emit("removeProjects", data);
    }
  };

  const close = () => {
    showmodal(false);
  };
  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / Projects</span>
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
            {projects?.map((item, index) => {
              return (
                <div className="m-3" key={index}>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /> */}
                    <TextField
                      id="filled-basic"
                      className=" w-5/6"
                      label="Title"
                      name="title"
                      value={item.title}
                      onChange={(event) => getProjectDetails(index, event)}
                      variant="filled"
                    />
                  </div>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Type" /> */}
                    <TextField
                      id="filled-basic"
                      className=" w-5/6"
                      label="Type"
                      name="type"
                      value={item.type}
                      onChange={(event) => getProjectDetails(index, event)}
                      variant="filled"
                    />
                  </div>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /> */}
                    <TextField
                      id="filled-multiline-static"
                      className="w-5/6"
                      label="Description"
                      name="descrption"
                      value={item?.descrption}
                      multiline
                      rows={4}
                      variant="filled"
                      onChange={(event) => getProjectDetails(index, event)}
                    />
                  </div>

                  <div>
                    <div className="py-2 w-full flex">
                      <span className="profile-text">Link</span>
                      <i
                        className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                        onClick={() => addlink(index)}
                      ></i>{" "}
                    </div>
                    {item?.link?.map((itemlink, ind) => {
                      return (
                        <div key={ind}>
                          <div className="py-2 w-full flex">
                            {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Name" /> */}
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              label="Name"
                              name="name"
                              onChange={(event) =>
                                getProjectLinkDetails(index, ind, event)
                              }
                              value={itemlink.name}
                              variant="filled"
                            />
                          </div>
                          <div className="py-2 w-full flex">
                            {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /> */}
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              label="Link"
                              name="link"
                              value={itemlink.link}
                              onChange={(event) =>
                                getProjectLinkDetails(index, ind, event)
                              }
                              variant="filled"
                            />
                          </div>
                          <i
                            className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                            onClick={() => removelink(index, ind, itemlink._id)}
                          ></i>
                        </div>
                      );
                    })}
                  </div>
                  <img
                    className="about-name-img border-0 rounded-md"
                    height="70"
                    width="70"
                  />
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Hashtags" />  */}
                    <TextField
                      id="filled-basic"
                      className=" w-5/6"
                      label="HashTags"
                      name="hashTags"
                      value={item.hashTags}
                      onChange={(event) => getProjectDetails(index, event)}
                      variant="filled"
                    />
                    {/* <i className="fa fa-plus cursor-pointer text-green-600 self-center flex m-2"></i>
                          <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i> */}
                  </div>
                  <div>
                    <i
                      onClick={() => removeProject(index, item._id)}
                      className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="fles add-more m-1 flex py-2" onClick={addProjects}>
            <i className="fa fa-plus self-center px-1"></i>Add More
          </button>
        </div>
        <div className="m-2 w-full flex self-center justify-center py-2">
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

export default Projects;
