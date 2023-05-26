

function Backend(){
    return(
        <div className="skills_content">
            <h3 className="skills_title">Backend</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-postgresql skill-badge' style={{color:'#0485a2'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">SQL</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-nodejs skill-badge' style={{color:'#09af14'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">Node JS</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                    
                    
                </div>      

                <div className="skills_group">
                    

                    <div className="skills_data">
                        <i className='bx bxl-mongodb skill-badge' style={{color:'#058a0e'}}  ></i>
                    
                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Backend;