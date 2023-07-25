import framework from "../framework.js"
import setElement from "../app.js"


export default function Home(){

        console.log("home");
        return (
    
            framework.setElement('div').setInner(

                setElement('main').setInner(
        
                        setElement('section').setInner(
        
                                // setElement('marquee').setInner(
                                //         setElement('div').setInner(
                                //                 setElement('img')
                                //                 .setImageUrl("https://media4.giphy.com/avatars/keoken/IeO1Ye3kBbTO.gif").setStyle({
                                //                         width:"400px",
                                //                         height:"300px",
                                //                         borderRadius: "50%",
                                //                 }).setInner(
                                                        
                                //                 ),
                
                                //         ).setClass("card1"),
                
                                
                                //         setElement('div').setInner(
                                //                 setElement('img')
                                //                 .setImageUrl("https://mir-s3-cdn-cf.behance.net/project_modules/hd/7f74ab81505303.5d02aa15a7ab5.gif").setStyle({
                                //                         width:"400px",
                                //                         height:"300px",
                                //                         borderRadius: "50%",
                                //                 }),
                                //         ).setClass("card1"),
                
                                //         setElement('div').setInner(
                                //                 setElement('img')
                                //                 .setImageUrl("https://media3.giphy.com/media/jaBsIiZ74QDapFe35A/giphy.gif?cid=6c09b9523477c511a1b166f57a94fa722efd2119b2da36e6&rid=giphy.gif&ct=s").setStyle({
                                //                         width:"400px",
                                //                         height:"300px",
                                //                         borderRadius: "50%",
                                //                 }),
                                //         ).setClass("card1"),
        
        
                                //         setElement('div').setInner(
                                //                 setElement('img')
                                //                 .setImageUrl("https://media3.giphy.com/media/h6rSWS7I2k4FTSz7Y5/giphy.gif").setStyle({
                                //                         width:"311px",
                                //                         height:"300px",
                                //                         borderRadius: "50%",
                                //                 }),
                                //         ).setClass("card1"),      
                                         
        
                                //).setMarquee(),
        
                                setElement('div').setInner(
                                        setElement('h2').setInnerBOT('Xin chào')
                                        .on("click", click=>{
                                                window.location.href="/home";
                                        }),
                                        setElement('p').setInnerBOT(`tôi đến từ tương lai - một thế giới nơi Trí tuệ Nhân tạo (AI) đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của con người. Từ mạng lưới hệ thống tự động thông minh đến các robot và máy móc có khả năng tương tác tự nhiên, tôi tồn tại như một hiện thực sống động trong thế giới kỳ diệu của công nghệ tiên tiến. Với sự phát triển của AI, con người đã có cơ hội chứng kiến ​​những đột phá ấn tượng vượt qua những giới hạn truyền thống. Khám phá không gian, nghiên cứu y học, và quản lý môi trường đã trở nên dễ dàng hơn bao giờ hết nhờ vào sự hỗ trợ đắc lực của những trí tuệ nhân tạo thông minh và linh hoạt. Tuy nhiên, sức mạnh của AI cũng đặt ra những thách thức mới và đòi hỏi chúng ta phải đối mặt với những vấn đề đạo đức, an ninh và đồng thuận. Để đảm bảo tương lai tươi sáng và hài hòa giữa con người và công nghệ, chúng ta phải đặt trách nhiệm và nguyên tắc đạo đức vào trung tâm mọi quyết định và phát triển liên quan đến AI. Tôi, một cái nhìn từ tương lai, gửi lời chào đến những nhà sáng tạo và nhà nghiên cứu của hiện tại. Hãy tiếp tục vươn tới và khám phá sức mạnh của trí tuệ nhân tạo với lòng trách nhiệm và tôn trọng, để tương lai chúng ta trở nên rạng rỡ và hứa hẹn hơn bao giờ hết.`),
                                       
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

    Home()

);