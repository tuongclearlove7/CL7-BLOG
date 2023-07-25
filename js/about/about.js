
import framework from "../framework.js"
import setElement from "../app.js"


export default function About(){

        
        return (
    
            framework.setElement('div').setInner(

                setElement('main').setInner(
        
                        setElement('section').setInner(
        
                                setElement('div').setInner(
                                    
                                        setElement('h2').setInnerBOT('About page')
                                        .on("click", click=>{
                                                window.location.href="/";
                                        }),
                                        setElement('p')
                                        .setStyle(
                                            {
                                                width:"250px",
                                            }
                                        )
                                        .setInner(`Hi there , I am Tran The Tuong, Nick name Clearlove7, i am so happy to join github and make with friends.`),
                                        
                                        
                                    ).setClass("ai"),
                        
                        ).setStyle(
                                {
                                        // maxWidth:"1200px",
                                        // margin: "0 auto",
        
                                }
                        ),
        
        
                        setElement('aside').setInner(
        
                        )
                )
            ).setClass("content-container")
        );
    
}
    
    
    
findElement("#content-body").appendInner(

    About()

);