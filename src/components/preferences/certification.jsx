import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import moment from "moment";

const Certification = ({ showmodal, socket }) => {
  console.log("certia;shg;asn");
  let profileData = useSelector((state) => {
    return state?.Profiledata?.state?.data;
  });

  const [certificate, setcertification] = useState(profileData?.certification);

  const addCertificateFields = async () => {
    console.log("asdfsadf");
    let data = {
      name: "",
      link: "",
      description: "",
    };
    setcertification([...certificate, data]);
  };

  const close = () => {
    showmodal(null);
  };
  const removeCertification = (index, id) => {
    let arr = [...certificate];
    arr.splice(index, 1);
    setcertification(arr);
    if (id) {
      console.log(id);
      let data = {
        certificateId: id,
      };
      socket.emit("removeCertification", data);
      // }
    }
  };
  const submit = async () => {
    console.log(certificate);
    await socket.emit("addCertification", certificate);
  };

  const geteFields = (index, event) => {
    let data = [...certificate];
    data[index][event.target.name] = event.target.value;
    setcertification(data);
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
            {certificate &&
              certificate?.map((item, index) => {
                return (
                  <div
                    className="py-2 border-b section-shadow mt-2 mb-2"
                    key={index}
                  >
                    <div className="flex">
                      <span className="text-lg font-semibold mx-2">
                        {" "}
                        Details
                      </span>
                      <i
                        onClick={() => removeCertification(index, item._id)}
                        className="fa fa-trash-o cursor-pointer flex text-red-500 self-center text-center m-2"
                      ></i>
                    </div>

                    <div className="m-3">
                      <div className="overflow-y-auto flex flex-col">
                        <div>
                          <div className="py-2 w-full flex">
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              label="Name"
                              variant="filled"
                              name="name"
                              onChange={(event) => geteFields(index, event)}
                              type="text"
                              value={item.name}
                            />
                          </div>
                          <div className="py-2 w-full flex">
                            <TextField
                              id="filled-basic"
                              className=" w-5/6"
                              label="Link"
                              variant="filled"
                              name="link"
                              onChange={(event) => geteFields(index, event)}
                              type="text"
                              value={item.link}
                            />
                          </div>
                          <div className="py-2 w-full flex">
                            <TextField
                              id="filled-multiline-static"
                              className="w-5/6"
                              label="Description"
                              name="description"
                              value={item?.description}
                              multiline
                              rows={4}
                              variant="filled"
                              onChange={(event) => geteFields(index, event)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* : ( */}
            <button
              className="fles add-more m-1 flex py-2"
              onClick={addCertificateFields}
            >
              <i className="fa fa-plus cursor-pointer self-center px-1"></i>
              Add More
            </button>
          </div>
        </div>
        <div className="m-2 w-full flex self-center justify-center py-2">
          <button className="publish-site m-1 flex py-3 px-6" onClick={submit}>
            {" "}
            Save & Update{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Certification;
