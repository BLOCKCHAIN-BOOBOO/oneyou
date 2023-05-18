import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { callbackify } from "util";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from "@material-ui/core/Select";

const Languages = ({ showmodal, section, socket }) => {
  const [documents, setDocuments] = useState([]);
  const [profiledata, setprofiledata] = useState([]);

  const close = () => {
    showmodal(false);
  };

  const dataarry = async (arry) => {
    console.log("data", arry);
    if (arry.length > 0) {
      setDocuments(arry);
    }
    // setDocuments(arry);
  };
  let profileData = useSelector((state) => {
    let userprofdata = [];
    userprofdata = state?.Profiledata?.state?.data;

    return state?.Profiledata?.state?.data;
  });

  const handleDocumentChange = (index, event) => {
    console.log({ [event.target.name]: event.target.value });
    let data = [...documents];
    data[index][event.target.name] = event.target.value;
    setDocuments(data);
  };

  const addFields = () => {
    let newfield = [];
    if (section === "Skills") {
      newfield = { skill: "", proficiency: "" };
      console.log("newfields", newfield);
      setDocuments((documents) => {
        return [...documents, newfield];
      });
    } else if (section === "Languages") {
      newfield = { language: "", proficiency: "" };
      setDocuments([...documents, newfield]);
    } else {
      newfield = { name: "", link: "" };
      setDocuments([...documents, newfield]);
    }
  };

  const removeDocFields = (index, id) => {
    let removedata = "";
    console.log("index", index);
    let data = [...documents];
    data.splice(index, 1);
    setDocuments(data);

    switch (section) {
      case "Languages":
        console.log("data", data);
        removedata = { languageId: id };
        socket.emit("removeLanguages", removedata);
        return;
      case "Social Links":
        console.log("data", data);
        removedata = { socailLinkId: id };
        socket.emit("removeSocialLinks", removedata);
        return;
      case "Skills":
        console.log("data", data);
        removedata = { skillId: id };
        socket.emit("removeSkills", removedata);
        return;

      default:
        return null;
    }
  };

  const submit = () => {
    if (
      (documents && documents?.length === 0) ||
      documents === "" ||
      documents === null
    )
      return;

    let data = [...documents];
    console.log(section + "submited data", data);
    switch (section) {
      case "Languages":
        console.log("data", data);
        socket.emit("addLangauge", data);
        return;
      case "Social Links":
        console.log("data", data);
        socket.emit("addSocialLinks", data);
        return;
      case "Skills":
        console.log("data", data);
        socket.emit("addSkills", data);
        return;

      default:
        return null;
    }
  };

  const loaddata = () => {
    if (section === "Languages") {
      setDocuments(profileData?.languages);
    }
    if (section === "Skills") {
      setDocuments(profileData?.skills);
    }
    if (section === "Social Links") {
      setDocuments(profileData?.socialLinks);
    }
  };
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <>
      <div className="home-profile-edit profile-popup">
        <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
          <span> Profile / {section}</span>
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
            {documents && documents.length > 0 ? (
              documents &&
              documents.map((input, index) => {
                console.log("Aaa", input.language);

                return (
                  <div key={index}>
                    <div className="m-3">
                      {section && section === "Social Links" ? (
                        <>
<div className="py-2 flex flex-col w-full text-left float-left ">
 <InputLabel id="demo-simple-select-filled-label" variant="filled">Social Links</InputLabel>
        <Select
        className="w-5/6"
          labelId="demo-simple-select-filled-label"
          id="filled-basic"
          name="name"
         variant="filled"
           onChange={(event) =>
                     handleDocumentChange(index, event)
                     }  value={input.name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="LinkedIn" name="name">LinkedIn</MenuItem>
          <MenuItem  value="Blog" name="name">Blog</MenuItem>
          <MenuItem value="Github" name="name">Github</MenuItem>
          <MenuItem value="Portfolio" name="name">Portfolio</MenuItem>
          <MenuItem value="Skype" name="name">Skype</MenuItem>
          <MenuItem value="Youtube" name="name">Youtube</MenuItem>
        </Select>
</div>
                          {/* <select
                            className="accordion-inputs w-4/6 rounded-md"
                            required
                            placeholder="SocialLinks"
                            name="name"
                            onChange={(event) =>
                              handleDocumentChange(index, event)
                            }
                            value={input.name}
                          >
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="LinkedIn"
                              name="name"
                            >
                              {" "}
                              LinkedIn
                            </option>
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="Blog"
                              name="name"
                            >
                              {" "}
                              Blog
                            </option>
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="Github"
                              name="name"
                            >
                              {" "}
                              Github
                            </option>
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="Portfolio"
                              name="name"
                            >
                              {" "}
                              Portfolio
                            </option>
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="Skype"
                              name="name"
                            >
                              {" "}
                              Skype
                            </option>
                            <option
                              className="bg-transparent text-black border rounded-lg w-full px-2"
                              value="Youtube"
                              name="name"
                            >
                              {" "}
                              Youtube
                            </option>
                          </select> */}
                          <div className="py-2 flex w-full">
                            {/* <input
                              type="text"
                              className="accordion-inputs w-4/6 rounded-md"
                              required
                              placeholder="link"
                              name={"link"}
                              value={input.link && input.link}
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            /> */}
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              label="Link"
                              variant="filled"
                              required
                              name={"link"}
                              value={input.link && input.link}
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            />
                            <i
                              className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                              onClick={addFields}
                            ></i>{" "}
                            <i
                              className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                              onClick={() => removeDocFields(index, input._id)}
                            ></i>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="py-2 flex w-full ">
                            {/* <input
                              type="text"
                              className="accordion-inputs w-4/6 rounded-md"
                              required
                              placeholder={
                                section === "Skills" ? "skill" : "language"
                              }
                              name={section === "Skills" ? "skill" : "language"}
                              value={
                                section === "Languages"
                                  ? input.language
                                  : input.skill
                              }
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            /> */}
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              required
                              label={
                                section === "Skills" ? "skill" : "language"
                              }
                              variant="filled"
                              name={section === "Skills" ? "skill" : "language"}
                              value={
                                section === "Languages"
                                  ? input.language
                                  : input.skill
                              }
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            />
                          </div>
                          <div className="py-2 flex w-full">
                            {/* <input
                              type="number"
                              className="accordion-inputs w-4/6 rounded-md"
                              required
                              placeholder="proficiency"
                              name="proficiency"
                              value={input.proficiency}
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            /> */}
                            <TextField
                              id="filled-basic"
                              type="number"
                              className=" w-5/6"
                              label="Proficiency"
                              variant="filled"
                              name="proficiency"
                              value={input.proficiency}
                              required
                              onChange={(event) =>
                                handleDocumentChange(index, event)
                              }
                            />
                            <i
                              className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                              onClick={addFields}
                            ></i>{" "}
                            <i
                              className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                              onClick={() => removeDocFields(index, input._id)}
                            ></i>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <i
                  className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                  onClick={addFields}
                >
                  {" "}
                  Add Language
                </i>
              </div>
            )}
          </div>
        </div>
        <div className="m-2 w-full flex self-center justify-center py-2">
          <button onClick={submit} className="publish-site m-1 flex py-2 px-6">
            {" "}
            Save & Update{" "}
          </button>
          <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
        </div>
      </div>
    </>
  );
};

export default Languages;
