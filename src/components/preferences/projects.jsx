import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import axios from "axios";
import defaultprofileimgae from "../../images/defaultprofileimg.png";

const Projects = ({ showmodal, socket }) => {
  const [File, SetFile] = useState();

  let profileData = useSelector((state) => {
    return state?.Profiledata?.state?.data;
  });
  const [previewimg, setpreviewimg] = useState(defaultprofileimgae);

  const [projects, setProjects] = useState(profileData?.projects);

  let userauth = useSelector((state) => {
    console.log("state update", state, state?.googleToken?.userInfo);
    return state?.googleToken?.state
      ? state?.googleToken?.state
      : state?.googleToken;
  });

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

  const getprofile = (e, id) => {
    let file = e.target.files[0];
    console.log("inmg", e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setpreviewimg(URL.createObjectURL(e.target.files[0]));
      SetFile(file);
    }
  };

  const addPreviewImage = async (id) => {
    let formData = new FormData();
    formData.append("image", File);
    formData.append("project_id", id);
    console.log("image", File);
    if (File) {
      const res = await axios.post(
        "http://localhost:3000/profile/addProjects",
        formData,
        {
          headers: {
            authorization: `Bearer ${userauth.token}`,
          },
        }
      );
      console.log("res", res);
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
                <div
                  className="border-b py-2 section-shadow mt-2 mb-2"
                  key={index}
                >
                  <div className="flex">
                    <span className="text-lg font-semibold mx-2"> Details</span>
                    <i
                      onClick={(e) => removeProject(index, item._id)}
                      className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                    ></i>
                  </div>
                  <div className="m-3">
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
                              <i
                                className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                                onClick={() =>
                                  removelink(index, ind, itemlink._id)
                                }
                              ></i>
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
                          </div>
                        );
                      })}
                    </div>

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

                    <div className="py-2 w-full flex-col flex">
                      <span className="flex w-full float-left text-sm py-2">
                        Preview Image
                      </span>
                      <input
                        type="file"
                        id="profileimg"
                        onChange={(e) => getprofile(e, item._id)}
                      />
                      <label
                        htmlFor="profileimg"
                        className=" cursor-pointer self-start text-xs font-bold text-color pt-2"
                        style={{
                          fontFamily: " Arial, Helvetica, sans-serif",
                          background:
                            " linear-gradient( to right, #2162ec 6.93%, #7a6bf1c7 52.34%, #b771f3b5 95.98%, #d375f6, #d775f6)",
                          WebkitTextFillColor: "transparent",
                          WebkitBackgroundClip: "text",
                        }}
                      >
                        <img
                          className="about-name-img border-0 rounded-md"
                          multiple="multiple"
                          height="70"
                          width="70"
                          src={
                            item?.image
                              ? "http://localhost:3000" + item?.image
                              : previewimg
                          }
                        />
                      </label>
                    </div>
                    <div className="flex">
                      <button
                        className="publish-site m-1 flex py-2 px-6"
                        onClick={() => addPreviewImage(item._id)}
                      >
                        Add Preview Image
                      </button>

                      <button className="remove-btn m-1 flex rounded-full py-2 px-6">
                        Remove Image
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="fles add-more m-1 flex py-2" onClick={addProjects}>
            <i className="fa fa-plus cursor-pointer self-center px-1"></i>Add
            More
          </button>
        </div>
        <div className="m-2 w-full flex self-center justify-center py-2">
          <button className="publish-site m-1 flex py-3 px-6" onClick={submit}>
            {" "}
            Save & Update{" "}
          </button>
          {/* <button className="reset-btn m-1 flex py-2 px-6"> Reset </button> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
