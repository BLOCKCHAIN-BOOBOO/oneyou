import React from "react";

const Experience = ({showmodal}) => {
   const close=()=>{
showmodal(null)
  }
return (
<>

  <div className="home-profile-edit profile-popup">
    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
    <span> Profile / Experience</span>
  <div className="flex self-center justify-end float-right">
  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
  <i className="fa fa-close"></i></button>
  </div>
  
    </div>
<div className="flex flex-col p-2 w-full overflow-y-auto">

<div className="flex py-4 flex-col">
<div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                 
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>
                                 
                 <div> 
                  <div className="py-2 flex">
                  <span className="profile-text">Position</span>
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Title" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Company Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Location" /></div>
                  <div className="py-2 flex w-full float-left"><input type="checkbox" className="accordion-inputs mx-2 rounded-md" /> Current</div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Description" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>
                  </div>
                
                {/* <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>                */}
                  </div>

</div>
<div className=" m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
<button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
</div>

</div>
</div>
</>
);
};

export default Experience;