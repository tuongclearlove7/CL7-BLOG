import setElement from "./app.js"
import Animation from "./animation.js"
import viewEngine from "./config/script.js";


const framework = {


        setElement,
        Animation,
        viewEngine,
        init(){
    
            setElement("body");
    
        },
    
        addStyle(url){
    
            document.body.appendInner(        
                framework.setElement("link")
                .setAttribute("rel", "stylesheet")
                .setAttribute(
                    "href", 
                    url
                )
            )
    
        },
    
        endUserText(inputText) {
            let words = inputText.split("_");
            let formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            let formattedText = formattedWords.join(" ");
            return formattedText;
        },
    
        wait : async function(seconds){
    
            return await new Promise((resolve)=>{
    
                setTimeout(() => {
                    resolve()
                }, seconds);
    
            });
    
        }
    
    }
    
    
    
window.framework = framework;
window.findElement = (selector)=>{return document.querySelector(selector)}

export default framework