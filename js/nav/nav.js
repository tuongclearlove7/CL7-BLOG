export default function navMenu(){

        return (

                framework.setElement('div').setInner(

                        framework.setElement("ul").setInner(
                                framework.setElement("li").setInner(
                                        framework.setElement("a")
                                        .setInner("HOME").on("click", function(){
                
                                                localStorage.setItem("lastPage", "home");
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                framework.setElement("li").setInner(
                                        framework.setElement("a")
                                        .setInner("ABOUT").on("click", function(){
                
                                                localStorage.setItem("lastPage", "about");
                                                window.location.reload();
                
                                                
                                               
                
                                        }).setStyle({
                                                color:"black",
                                        })
                                        ,
                                        
                                ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                framework.setElement("li").setInner(
                                        framework.setElement("a")
                                        .setInner("KNOWLEDGE").on("click", function(){
                
                                                localStorage.setItem("lastPage", "knowkedge");
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                framework.setElement("li").setInner(
                                        framework.setElement("a")
                                        .setInner("SKILL").on("click", function(){
                
                                                localStorage.setItem("lastPage", "skill");
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                                framework.setElement("li").setInner(
                                        framework.setElement("a")
                                        .setInner("PROJECT").on("click", function(){
                
                                                localStorage.setItem("lastPage", "project");
                                                window.location.reload();
                                                
                                        }).setStyle({
                                                color:"black",
                                        })
                                        ,
                                        
                                        ).setStyle(
                                        { 
                                                listStyle:"none",
                                                float:"left",
                                        }
                                ).setClass("link"),
                
                        ).setStyle({
                                height:"70px",
                        })
                        
                
                
                ).setClass("nav-menu").setStyle({
                        float:"left",
                        width:"100%",
                        height:"70px",
                        backgroundColor: "aqua",
                })
        );

        
}