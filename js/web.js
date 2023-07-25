import framework from "./framework.js";
import setElement from "./app.js";
import Header from "./header/header.js";
import navMenu from "./nav/nav.js";
import configFromPage from "./config/config.js"
import content from "./content/content.js";
import Footer from "./footer/footer.js";


export default framework.Animation(

        async () => {
    
    
            findElement("body").appendInner(
    
                Header(),
                
            );
    
        },
    
        async ()=>{
    
            findElement("body").appendInner(
    
                navMenu(),
    
            );
    
        },
    
        async ()=>{
    
            findElement("body").appendInner(
    
    
                framework.setElement('div').setInner(

                    framework.setElement('video').setInner(
                                
                    ).setVideo("../resource/video.mp4").setStyle(
                        {
                            
                            minWidth: "100%",
                            minHeight: "100%",
                            display: "block",
                             
                        }
                    )
                ).setId("background")
    
            );
    
        },
    
        async ()=>{
    
            let pageName = localStorage.getItem("lastPage");
    
            if(pageName == null) {
    
                pageName = "home";
    
            }
    
            findElement("body").appendInner(
    
                content(),
                configFromPage(pageName),
                
            );
    
        },

        async ()=>{
    
            findElement("body").appendInner(
    
               Footer(),
    
            );
    
        },

        
    
    )