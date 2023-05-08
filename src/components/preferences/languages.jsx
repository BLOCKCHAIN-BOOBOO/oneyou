import React from "react";

const Languages = ({showmodal}) => {
  const close=()=>{
    showmodal(false)
  }
 
return (
<>

  <div className="home-profile-edit profile-popup">
    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
    <span> Profile / Add Languages</span>
  <div className="flex self-center justify-end float-right">
  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
  <i className="fa fa-close"></i></button>
  </div>
  
    </div>
<div className="flex flex-col p-2 w-full overflow-y-auto">

<div className="flex py-4 flex-col">
<div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="Language" /></div> 

<div className="py-2 flex">
<select className="accordion-inputs w-4/6 rounded-md" required placeholder="Proficiency">
<option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Beginner</option>
<option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Intermediate</option>
<option className="bg-transparent text-black border rounded-lg w-full px-2" value=""> Expert</option>
</select>
<i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
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

export default Languages;