import React from "react";
import TextField from '@material-ui/core/TextField';

const Projects = ({showmodal}) => {
   const close=()=>{
showmodal(false)
  }
return (
<>

  <div className="home-profile-edit profile-popup">
    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
    <span> Profile / Projects</span>
  <div className="flex self-center justify-end float-right">
  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
  <i className="fa fa-close"></i></button>
  </div>
  
    </div>
<div className="flex flex-col p-2 w-full h-full overflow-y-auto overflow-x-hidden">

<div className="flex py-4 flex-col">
<div className="m-3">
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /> */}
                     <TextField id="filled-basic" className=" w-5/6" label="Title" variant="filled" />
                    </div>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /> */}
                    <TextField id="filled-multiline-static" className="w-5/6" label="Description" multiline rows={4}  variant="filled"/>
                    </div>                                  
                 
                 <div>
                  <div className="py-2 w-full flex">
                  <span className="profile-text">Link</span>
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div> 
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Name" /> */}
                     <TextField id="filled-basic" className=" w-5/6" label="Name" variant="filled" />
                    </div>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /> */}
                     <TextField id="filled-basic" className=" w-5/6" label="Link" variant="filled" />
                    </div>
                  </div>
                   <img className="about-name-img border-0 rounded-md" height="70" width="70" />
                  <div className="py-2 w-full flex">
                  {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Hashtags" />  */}
                   <TextField id="filled-basic" className=" w-5/6" label="Hashtags" variant="filled" />
                  <i className="fa fa-plus cursor-pointer text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 w-full flex">
                    {/* <input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Type" /> */}
                     <TextField id="filled-basic" className=" w-5/6" label="Type" variant="filled" />
                    </div>
              
                 
                  </div>

</div>


</div>
<div className="m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
<button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
</div>
</div>
</>
);
};

export default Projects;