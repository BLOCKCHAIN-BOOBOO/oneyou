import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Languages = ({ showmodal, section, socket }) => {
  const [documents, setDocuments] = useState([{}]);
  const [profiledata, setprofiledata] = useState([{}]);

  const close = () => {
    showmodal(false);
  };

  let profileData = useSelector(async (state) => {
    console.log("profiledata", state?.Profiledata?.state);
    let data = state?.Profiledata?.state;
    // return state?.Profiledata?.state?.data;
    let fordata = data.forEach((item) => {
      console.log("items", item);
      let data = [...data, item];
      return data;
    });
    console.log("Ffffffff", fordata);

    switch (section) {
      case "Languages":
        console.log("asdf", data?.data?.languages);
        setDocuments(data?.data?.languages);
        return;
      case "Social Links":
        setprofiledata(data?.data?.socialLinks);
        return;

      case "Skills":
        console.log("asdf", data?.data?.skills);
        setDocuments([...data?.data?.skills]);
        return;

      default:
        return null;
    }
  });
  console.log("profileData", profiledata);

  const handleDocumentChange = (index, event) => {
    console.log({ [event.target.name]: event.target.value });
    let data = [...documents];
    data[index][event.target.name] = event.target.value;
    setDocuments(data);
  };

  const addFields = () => {
    let newfield = { skill: "", proficiency: "" };

    setDocuments([...documents, newfield]);
  };

  const removeDocFields = (index) => {
    let data = [...documents];
    data.splice(index, 1);
    setDocuments(data);
  };

  const submit = () => {
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
        <div className="flex flex-col p-2 w-full overflow-y-auto">
          <div className="flex py-4 flex-col">
            {documents.map((input, index) => {
              console.log("input", input);
              return (
                <div key={index}>
                  <div>
                    {section && section === "Social Links" ? (
                      <>
                        <select
                          className="accordion-inputs w-4/6 rounded-md"
                          required
                          placeholder="SocialLinks"
                          name="name"
                          onChange={(event) =>
                            handleDocumentChange(index, event)
                          }
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
                        </select>
                        <div className="py-2 ">
                          <input
                            type="text"
                            className="accordion-inputs w-4/6 rounded-md"
                            required
                            placeholder="link"
                            name={"link"}
                            value={input.link ? input.link : ""}
                            onChange={(event) =>
                              handleDocumentChange(index, event)
                            }
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="py-2 ">
                          <input
                            type="text"
                            className="accordion-inputs w-4/6 rounded-md"
                            required
                            placeholder={
                              section === "Skills" ? "skill" : "language"
                            }
                            name={section === "Skills" ? "skill" : "language"}
                            value={input.skill}
                            onChange={(event) =>
                              handleDocumentChange(index, event)
                            }
                          />
                        </div>

                        <div className="py-2 flex">
                          <input
                            type="number"
                            className="accordion-inputs w-4/6 rounded-md"
                            required
                            placeholder="proficiency"
                            name="proficiency"
                            value={input.proficiency}
                            onChange={(event) =>
                              handleDocumentChange(index, event)
                            }
                          />
                        </div>
                      </>
                    )}
                    <i
                      className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"
                      onClick={addFields}
                    ></i>{" "}
                    <i
                      className="fa fa-trash-o flex text-red-500 self-center text-center m-2"
                      onClick={removeDocFields}
                    ></i>
                  </div>
                </div>
              );
            })}
            <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2">
              <button
                onClick={submit}
                className="publish-site m-1 flex py-2 px-6"
              >
                {" "}
                Save & Update{" "}
              </button>
              <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
