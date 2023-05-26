import { useState } from "react";
import "./Qualification.css";

function Qualification (){
    const [toggleEDUState, setToggleEDUState] = useState(false);   
    const [toggleEXPState, setToggleEXPState] = useState(false);


    const toggleEDUTab = () => { setToggleEDUState(prev => !prev);}   //prev รับค่าก่อนหน้าทีตั้งไวใน Usestate เเล้วเอาเอามาเปลี่ยนโดย " ! " ของfunction setToggle ให้ตรงกับ toggleState
    const toggleEXPTab = () => { setToggleEXPState(prev => !prev);} 
    
    return(
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>


            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div onClick={()=>{toggleEDUTab()}} className={toggleEDUState === true ? "qualification_button qualification_active button-flex" :  "qualification_button button-flex"}>
                        <i onClick={()=>{toggleEDUTab()}} className="bx bxs-graduation bx-tada qualfication_icon"></i>
                        Education
                    </div>


                    <div onClick={()=>{toggleEXPTab()}} className={toggleEXPState === true ? "qualification_button qualification_active button-flex" :  "qualification_button button-flex"}>
                        <i onClick={()=>{toggleEXPTab()}} className="bx bx-briefcase-alt-2 bx-tada qualfication_icon"></i>
                        Experience
                    </div>

                </div>



                <div className="qualification_sections">
                    <div className={toggleEDUState === true ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Generation Junior software developer boostcamp</h3>
                                <span className="qualification_subtitle">
                                    Generation Thailand
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>


                            <div>
                                <h3 className="qualification_title">Aviation Business Management : Operation Aviation</h3>
                                <span className="qualification_subtitle">
                                   Mae Fah Laung university
                                </span>
                                <span className="qualification_subtitle">
                                    First Class 1st honour 
                                    GPAX: 3.76/4.00
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2022
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleEXPState === true ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Ramp Officer</h3>
                                <span className="qualification_subtitle">
                                    Wingspan, Suvarnabhumi Airport
                                </span>
                                <span className="qualification_subtitle">
                                Conducted the loading procedure of an aircraft according to load plan planning and secured the vicinity of the loading area. Communicate with customer airline staff to facilitate them and Wingspan operators.
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    July 2022 - Feb 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                    </div>      
                </div>
            </div>
        </section>
    )
}

export default Qualification