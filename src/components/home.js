import React from "react";
import { Accordion } from "react-bootstrap-accordion";

const Home = () => {
 
    return (
    <div className="page-background flex self-center align-middle justify-center">
    <div className="flex flex-row w-full   mt-16" dir="ltr">
        <div className="flex flex-col w-4/6">
            <div dir="ltr" className="home-header w-4/6 mt-10 left-0 flex">
                <div className="current-plan px-5 py-2 ">Current Plan <div className="starter px-10 py-2">Starter</div></div>
                <div className="device-type py-2 px-10">Device:</div>
                <div className="preview py-2 px-10">Preview</div>
                <div className="refresh py-2 px-10">Refresh</div>
                <div className="publish-site py-2 px-10">Publish Site</div>

            </div>
            <div dir="ltr" className="home-about flex mt-32 w-full left-0 ">
                <div className="home-about-name w-2/6 m-2">
                    <div className="">
                         <img className="about-name-img border-0 rounded-md" height="100" width="200" />
                        <span></span>

                    </div>
                    <div className="flex flex-col">
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Email</span>
                            <span className="details-text">contactemail@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Phone</span>
                            <span className="details-text">+91 8897564534</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Birthday</span>
                            <span className="details-text">July 27 2001</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-start justify-start py-2">
                        <img className="about-name-img border-0 rounded-md" height="50" width="50" />
                        <div className="flex flex-col m-2">
                            <span className="details-text-header">Location</span>
                            <span className="details-text">Hyderabad</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="home-about-me w-4/6 m-2 ">
                    <div className="about-links-div">
                        <div className="about-link-about">About</div>
                        <div className="about-link-resume">Resume</div>
                        <div className="about-link-blog">Blog</div>
                    </div>
                    <div className="flex flex-col self-start justify-start text-left">
                        <div className="about-me-header">About Me</div>
                        <div className="about-me-text py-8">Hello there, my name is Rahul and I'm really good at designing things that 
                        people find easy to use. I've been doing this for more than 3 years now and have worked on all kinds of cool projects, 
                        from making really big data work to creating designs for the future. I love working with new companies and helping them make 
                        their ideas real. When I'm not working, I like taking apart electronics 
                        and talking to other people about new ideas. If you need someone to help make your product awesome, let's talk!</div>
                    </div>
                    <div className="flex flex-col self-start justify-start text-left">
                        <div className="my-projects-header">My Projects</div>
                        <div className="my-projects-content"></div>
                    </div>
                </div>

            </div>

        </div>
        <div className="flex right-0 mt-10 w-2/6">
        <div className="home-profile-edit ">
            <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
                Profile Edit Preferences
            </div>
            <div>
                <button className="profile-button-text m-2">Your Details</button>
                <button className="profile-button-text m-2">Templates</button>
                <button className="profile-button-text m-2">Web Settings</button>
            </div>
 <div
          className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl xl:w-2/6 md:w-3/6 sm:w-full 
        w-full explore-nft-accordion-width p-2 h-full">
       
          <Accordion title="Type" className="bg-transparent">
            <div className="flex">
              <button
              
                className="rounded-lg accordion-buttons text-xs font-semibold px-2 md:px-2 py-1 ">
                All
              </button>

              <button
                
                className="rounded-lg accordion-buttons text-xs font-semibold px-2 md:px-2 py-1 ">
                On Sale
              </button>

              <button
               
                className="rounded-lg accordion-buttons text-xs font-semibold px-2 md:px-2 py-1 ">
                Not on Sale
              </button>

             
            </div>
          </Accordion>

         
              <Accordion title="Status" className="text-white bg-transparent">
                <div className="flex">
                   <button
                   
                    className="rounded-lg accordion-buttons text-xs font-semibold px-2 md:px-2 py-1 ">
                    Buy Now
                  </button>

                  <button
                   
                    className="rounded-lg accordion-buttons text-xs font-semibold px-2 md:px-2 py-1 ">
                    Live Auction
                  </button>
                </div>
              </Accordion>

              <Accordion
                title="Price"
                className="text-white bg-transparent">
                <div className="flex flex-row ">
                  <input
                    type="Number"
                    name="minPrize"
                    className="input-border placeholder:text-white m-1 text-white w-16 accordion-price-input px-2"
                    placeholder="Min"
                   
                    required
                  />
                  <span className="text-xs self-center px-4 text-white font-normal">
                    to
                  </span>
                  <input
                    type="Number"
                    name="maxPrize"
                 
                    className="input-border m-1 w-16 placeholder:text-gray-200 placeholder:font-normal text-white accordion-price-input px-2"
                    placeholder="Max"
                  
                    required
                  />
                  <div className="flex flex-col justify-center text-sm align-middle m-1 input-border w-16 text-white accordion-price-input px-2">
                    {/* {currency} */}
                  </div>
                 </div>
              </Accordion>

              <Accordion
                title="Collection"
                className="bg-transparent overflow-x-hidden"
              >
                <div className=" h-80 frndslist-dropdown">
                  <ul className="overflow-y-auto h-full">
                   
                          <li className="mt-4">
                            <div className="flex flex-row w-full justify-between py-1 px-4">
                              <div className="flex flex-row ">
                                <img
                                //   src={info && info?.image}
                                  alt=""
                                  height="40"
                                  width="40"
                                  className=" "
                                />
                                <div className="flex flex-col ml-3">
                                  <span className="text-md text-white text-left self-start font-semibold">
                                    {/* {info && info?.name} */}
                                  </span>
                                </div>
                              </div>

                              <input
                                type="checkbox"
                                className="m-2 ml-0"
                                // name={info && info?.name}
                                // onClick={(e) => onCheckItems(e)}
                              />
                            </div>
                          </li>
                       
                  </ul>
                </div>
              </Accordion>
              <Accordion
                title="Categories"
                className="bg-transparent overflow-x-hidden"
              >
                <div className=" h-80 frndslist-dropdown">
                  <ul className="overflow-y-auto h-full">
                  
                          <li className="mt-4">
                            <div className="flex flex-row w-full justify-between py-1 px-4">
                              <div className="flex flex-row ">
                                <img
                                //   src={info && info?.image}
                                  alt=""
                                  height="40"
                                  width="40"
                                  className=" "
                                />

                                <div className="flex flex-col ml-3">
                                  <span className="text-md text-white text-left self-start font-semibold">
                                    {/* {info && info?.name} */}
                                  </span>
                                </div>
                              </div>

                              <input
                                type="checkbox"
                                className="m-2 ml-0"
                                // name={info && info?.name}
                                // onClick={(e) => onCheckcategories(e)}
                              />
                            </div>
                          </li>
                     
                  </ul>
                </div>
              </Accordion>
           
              <Accordion
                title="Collection"
                className="bg-transparent overflow-x-hidden"
              >
                <div className=" h-80 frndslist-dropdown">
                  <ul className="overflow-y-auto h-full">
                   
                          <li className="mt-4">
                            <div className="flex flex-row w-full justify-between py-1 px-4">
                              <div className="flex flex-row ">
                                <img
                                //   src={info && info?.image}
                                  alt=""
                                  height="40"
                                  width="40"
                                  className=" "
                                />
                                <div className="flex flex-col ml-3">
                                  <span className="text-md text-white text-left self-start font-semibold">
                                    {/* {info && info?.name} */}
                                  </span>
                                </div>
                              </div>

                              <input
                                type="checkbox"
                                className="m-2 ml-0"
                                // name={info && info?.name}
                                // onClick={(e) => onCheckItems(e)}
                              />
                            </div>
                          </li>
                     
                  </ul>
                </div>
              </Accordion>
              <Accordion
                title="Categories"
                className="bg-transparent overflow-x-hidden"
              >
                <div className=" h-80 frndslist-dropdown">
                  <ul className="overflow-y-auto h-full">
                  
                          <li className="mt-4">
                            <div className="flex flex-row w-full justify-between py-1 px-4">
                              <div className="flex flex-row ">
                                <img
                                //   src={info && info?.image}
                                  alt=""
                                  height="40"
                                  width="40"
                                  className=" "
                                />

                                <div className="flex flex-col ml-3">
                                  <span className="text-md text-white text-left self-start font-semibold">
                                    {/* {info && info?.name} */}
                                  </span>
                                </div>
                              </div>

                              <input
                                type="checkbox"
                                className="m-2 ml-0"
                                // name={info && info?.name}
                                // onClick={(e) => onCheckcategories(e)}
                              />
                            </div>
                          </li>
                       
                  </ul>
                </div>
              </Accordion>
           

        
        
        </div>
        </div>
        </div>
       

    </div>
    </div>
  );
};

export default Home;
