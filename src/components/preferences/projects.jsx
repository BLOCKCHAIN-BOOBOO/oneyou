import React from "react";

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
<div className="flex flex-col p-2 w-full">

<div className="flex py-4 flex-col">
<div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>                                  
                 
                 <div>
                  <div className="py-2 flex">
                  <span className="profile-text">Link</span>
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div> 
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Link" /></div>
                  </div>
                   <img className="about-name-img border-0 rounded-md" height="70" width="70" />
                  <div className="py-2 flex">
                  <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Hashtags" /> 
                  <i className="fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Type" /></div>
              
              
                 <div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
               <button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
                <button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
               </div>
                             
                  </div>

</div>
<div className="bg-gray-100 m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
<button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
</div>

</div>
</div>
</>
);
};

export default Projects;