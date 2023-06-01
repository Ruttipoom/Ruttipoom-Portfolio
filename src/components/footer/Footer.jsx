import "./Footer.css";

function Footer (){
    return (
       <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ruttipoom</h1>


            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1PAxkv2B5puBSlh5LSZnth2lOtGliNtP1/view" target="blank" className="footer_link">Portfolio</a>
                </li>

                <li>
                    <a href="#works" className="footer_link">My Works</a>
                </li>
            </ul>


            <div className="footer_social">
                <a 
                href="https://www.facebook.com/ruttipoom.paopinta.8/" 
                className="footer_social-link" 
                target="blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                
                <a 
                href="https://www.instagram.com/ruttipoom.y/" 
                className="footer_social-link" 
                target="blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a 
                href="https://github.com/Ruttipoom?tab=repositories" 
                className="footer_social-link" 
                target="blank">
                    <i className="bx bxl-github"></i>
                </a> 
            </div>

            <span className="footer_copy">
                &#169; Ruttipoom. All rights reserved
            </span>
        </div>
       </footer>
    )
}

export default Footer
