import framework from "./framework.js"

var container = document.getElementById("container");

function setStyleContainer(styleConfig){
    
        for(let configName in styleConfig){

              container.style[configName] = styleConfig[configName];

        } 

        return container;
};

setStyleContainer({
        margin:"0 auto",
        maxWidth:"100%"
});



export default function setElement(elementName) {
        
        let result;

        if(elementName == "body") result = findElement('body');
        else result = document.createElement(elementName);
    
        result.setClass = function(name){
    
            result.classList.add(...name.split(' '));
    
            return result;
        }
    
        result.setId = function(id){
    
            result.id = id;
    
            return result;
        }

        result.setMarquee = function(){
    
                result.direction = 'right';
                result.scrollAmount = "15";
                //result.behavior = 'alternate';
                return result;
        }


        result.setVideo = function(url){
    
                result.src = url;
                result.controls = false;
                result.autoplay = true;
                result.addEventListener('ended', function() {
                        result.play();
                });
                return result;
        }
    


        result.setImageUrl = function(url){
    
                result.src = url;
        
                return result;
        }
    
        result.setStyle = function(styleConfig){
    
            for(let configName in styleConfig){
    
                result.style[configName] = styleConfig[configName];
    
            } 
    
            return result;
        };
    
        result.on = function(name, callback){
    
            result.addEventListener(name, callback);
    
            return result;
        };
    
        result.exe = function(callback){
    
            callback.bind(result)();
    
            return result;
        };
    
        const defaultSetAttribute = HTMLElement.prototype.setAttribute;
        result.setAttribute = function(name, value){
    
            defaultSetAttribute.bind(result)(name, value);
    
            return result;
        }
    
        result.appendInner = function(...childs){
            
            for(let childName in childs){
    
                let child = childs[childName];
    
                try {
    
                    result.appendChild(child);
    
                }
                catch
                {
    
                    try{
    
                        result.innerHTML += child;
    
                    }
                    catch{
    
    
    
                    }
    
                }
    
            }
    
            return result;
        }
        
        let i = 0;

        result.setInnerBOT = function(...childs) {
                let message = childs[0];
                //speakText(message);
                function renderText() {
                    if (i < message.length) {
                      result.textContent += message[i];
                      setTimeout(renderText, 30);
                      i++;
                    }
                }
              
                renderText();
              
                return result;
        };
              
        function speakText(text) {
                console.log(text);
                responsiveVoice.speak(text, "Vietnamese Female");
               
        }
              

        result.setScript = (src) => {

                result.setAttribute("type", "module");
                result.setAttribute("src", src);
                
                return result;
        }
                 
    
        result.setInner = function(...childs){
    
            return result.setInnerArray(childs);
        }
    
        result.setInnerArray = function(childsArray){
    
            result.innerHTML = "";
            
            for(let childName in childsArray){
    
                let child = childsArray[childName];
    
                try {
    
                    result.appendChild(child);
    
                }
                catch
                {
    
                    try{
    
                        result.innerHTML += child;
    
                    }
                    catch{
    

                    }
    
                }
    
            }
    
            return result;
        }
    
        return result;
};













