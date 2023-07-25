
import setElement from "../app.js";



export default function viewEngine(src) {

    return (
        setElement("script")
        .setAttribute("type", "module")
        .setAttribute("src", src)
    ); 
}