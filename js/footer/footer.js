import framework from "../framework.js";
import setElement from "../app.js";


export default function Footer(){

        return(

                framework.setElement('footer').setInner(
                       
                        setElement('h3').setInner("Footer").setStyle(
                            {
                                color : "white",
                                padding:'20px',
                            }
                        )
                        
                    ).setClass("footer-content").setStyle(
                        {
                            clean : "both",
                            float: 'left',
                            width: "100%",
                            position: "fixed",
                            height:'150px',
                            bottom:'0',
                            background:'rgba(0, 0, 0, 0.247)',
                        }
                    )
        );
        
}