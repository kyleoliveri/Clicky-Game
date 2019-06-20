import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="row" id="footer">
            <footer className="page-footer black">
                <div class="container">
                    <div class="row">
                        <div className="col s12 m12 l12">
                            <div className="container text-center">
                                <p>Kyle Oliveri | © Copyright 2019</p>
                                <p>
                                    <a className="hvr-bob" href="https://github.com/kyleoliveri"> GitHub.com/kyleoliveri </a>
                                    <a className="hvr-bob" href="https://www.linkedin.com/in/kyleOliveri/">| https://www.linkedin.com/in/kyleOliveri/</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;