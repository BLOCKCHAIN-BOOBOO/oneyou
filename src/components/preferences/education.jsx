import React, { useState } from "react";

const Education = ({showmodal}) => {

   const [checked, setChecked] = useState(false)
   const close=()=>{
showmodal(null)
  }

const [documents, setDocuments] = useState([
    { name: '', link: '' }
  ])


   const  handleDocumentChange=(index,event)=>{
    let data = [...documents];
   data[index][event.target.name] = event.target.value;
   setDocuments(data);

   }

const showEndDate =()=>{
setChecked(!checked)
}

const addFields = () => {
  let newfield = { name: '', link: '' }

    setDocuments([...documents, newfield])  
}


const removeDocFields = (index) => {
    let data = [...documents];
    data.splice(index, 1)
    setDocuments(data)
}

return (
<>

  <div className="home-profile-edit profile-popup">
    <div className="flex home-profile-edit-header w-full self-center justify-between flex text-center border-b-2">
    <span> Profile / Education</span>
  <div className="flex self-center justify-end float-right">
  <button onClick={() => close()} className="flex justify-end float-right self-end"> 
  <i className="fa fa-close"></i></button>
  </div>
  
    </div>
<div className="flex flex-col p-2 w-full overflow-y-auto">

<div className="flex py-4 flex-col">
<div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" required placeholder="School Name" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Degree" /></div>
                  
                  <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Start Date" /></div>
                 {!checked &&
                 ( <div className="py-2"><input type="date" className="flex flex-row accordion-inputs w-4/6 rounded-md" placeholder="End Date" /></div>)}
                 
                  {/* <div className="py-2 "><input type="date" className="accordion-inputs w-4/6 rounded-md" placeholder="Till Date" /></div> */}
                  <div className="flex flex-row">
                        <div className="flex m-2">
                          <input
                            type="checkbox"
                            id="tilldate"
                            name="tillDate"
                            // value="tillDate"
                           checked={checked}
                            onChange={showEndDate}
                          />
                          <label
                            className="text-black text-sm pl-2 font-semibold"
                            htmlFor="tilldate"
                          >
                            Till Date
                          </label>
                        </div>
                        </div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Grade" /></div>
                  <div className="py-2 "><input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Activities" /></div>
                  <div className="py-2 "><textarea type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Description" /></div>
                 
                 
                  {/* <div className="py-2 flex">
               <input type="text" className="accordion-inputs w-4/6 rounded-md" placeholder="Skills" />
                  <i className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i> <i className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div> */}

                
                 
             <div className="overflow-y-auto flex flex-col"> 
             {/* h-5/6  */}
               <div className="py-2 flex">
                  <span className="profile-text">Documents</span>
                  <i onClick={addFields} className="cursor-pointer fa fa-plus text-green-600 self-center flex m-2"></i>
                  </div>
                  {documents.map((input, index) => {
          return (
                  <div key={index}>
                  <div className="py-2 flex"><input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="name" required placeholder="Name"  value={input.name} />
                  <i onClick={() => removeDocFields(index)} className="fa fa-trash-o flex text-red-500 self-center text-center m-2"></i>
                  </div>
                  <div className="py-2 "><input onChange={event => handleDocumentChange(index, event)} type="text" className="accordion-inputs w-4/6 rounded-md" name="link" required placeholder="Link"  value={input.link} /></div>
                
                </div>
          )})}
                </div>
                            
                  </div>

</div>
<div className="m-2 w-full flex self-center justify-center py-2"> 
<button className="publish-site m-1 flex py-2 px-6"> Save & Update </button>
<button className="reset-btn m-1 flex py-2 px-6"> Reset </button>
<button className="publish-site m-1 flex py-2 px-6">Add More</button>
</div>
{/* <div className="bg-gray-100 w-full flex self-center justify-center py-2"> 
                   <button className="publish-site m-1 flex py-2 px-6">Add More</button>
                  </div> */}

</div>
</div>
</>
);
};

export default Education;