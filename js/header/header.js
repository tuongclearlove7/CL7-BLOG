import framework from "../framework.js"



export default function Header(){

        return(
                
                framework.setElement('div').setInner(

                        framework.setElement('div').setInner(
                
                            framework.setElement('img').setStyle(
                                {
                                        padding:"15px",
                                        width:"70px",
                                        float:"left",
                                        borderRadius:'50%'
                                }
                        )
                        .setImageUrl("https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/316045021_1286893185186556_7398038355011019990_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=v7fFDfTZrjoAX959dkp&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCG61ThFWEGzfilsBlCwBBP2SPM05Nz_ScXbC0FHbKxTg&oe=64C40195")
                        
                        ).setClass("logo"),
                
                
                        framework.setElement('div').setInner(
                
                            framework.setElement("h2").setInner("Rose9")
                                .on("click", function(){
                                
                                        localStorage.setItem("lastPage", "home");
                                        window.location.reload();
                                
                                })
                
                        ).setClass("text-header")
                
                        .setStyle(
                                {
                                    color:"white",
                                    paddingTop :"35px",
                                }
                        ),
                
                
                ).setStyle(
                
                        { 
                           float:"left",
                           width: "100%",
                           height:"100px",
                           backgroundColor:"rgb(30, 30, 29)"
                        }
                )
                .setId("header")
        
        
               
        
        )
}

