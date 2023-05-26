

function Frontend(){
    return(
        <div className="skills_content">
            <h3 className="skills_title">Frontend</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-html5 skill-badge' style={{color:'#ff6b00'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-css3 skill-badge' style={{color:"#005fff"}}  ></i>

                        <div>
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills_data ">
                        <i className='bx bxl-javascript skill-badge' style={{color:'#ffd400'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">Javascript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-figma skill-badge' style={{color:'#0af1e6'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">Figma</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i className='bx bxl-git skill-badge' style={{color:'#ff6b00'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">Git</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills_data">
                        <i className='bx bxl-react skill-badge' style={{color:'#00fff4'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">React</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;