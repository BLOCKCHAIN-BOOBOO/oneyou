import axios from "axios";
const BASEURL="https://api.yourbrandfolio.com/profile/"

const PostRequest = (data, url) => async (dispatch) => {
  const token=sessionStorage.getItem("token")
  console.log("token",token)
  // let reqapi = api(type);
  const responsedata = await axios({
    method: "post",
    url: BASEURL+url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  })
    .then((res) => {
      console.log(res)
      return res;
    })
    .catch((err) => {
      return err;
    });
  return responsedata;
};

export default PostRequest;
