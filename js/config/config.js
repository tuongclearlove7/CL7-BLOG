import framework from "../framework.js"



export default function configFromPage(pageName){

    return framework.viewEngine(`${window.location.origin}/js/${pageName}/${pageName}.js`);

}