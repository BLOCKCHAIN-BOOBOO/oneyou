
import React, {useEffect, useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import io from "socket.io-client";
import { BASEURL } from "../../state/actions/actionTypes";
// const socket = io.connect(BASEURL);

const Languages = () => {


  useEffect(() => {
    
  
    return () => {
     
    }
  }, [])
  

    return(
    <>
{/* <Accordion title="Add Languages" className="bg-transparent overflow-x-hidden"> */}
<div className="flex flex-col">

   <div>
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
{/* // </Accordion> */}
</>
);
};
export default Languages;