import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"

export default function Testimonials() {
    const testimonialsData = [
        {
            id:1, 
            name:"Zara Smith", 
            img:"/person-2.webp",
            comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempora similique aspernatur, quae, aut soluta ducimus cupiditate quaerat, temporibus atque."
        },
        {
            id:2, 
            name:"John", 
            img:"/person-3.webp",
            comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi adipisci, repellat a explicabo beatae! Ullam similique non atque sapiente esse vel!"
        },
        {
            id:3, 
            name:"Atif Raza", 
            img:"/person-8.jpg",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quos odit totam amet unde pariatur asperiores corrupti, eum provident"
        },
    ]
    useObserver();
    return (
        <section id="testimonials">
            <Divider />
        <div className="container">
            <div className="row mb-5 text-center">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center my-5 animate">Happy Customers</h2>
                <div id="demo" className="carousel slide" data-bs-ride="carousel">                
                
                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner mb-5">
                        {testimonialsData.slice(-3).map((item, index) => (
                            
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <blockquote className="fs-3"><i>{item.comment}</i></blockquote>
                                    <img src={item.img} alt="" className="rounded-circle m-3"/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        )}
                    </div>

                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                </div>
                </div>
            </div>
            <Divider />
        </div>
        </section>
    )
}