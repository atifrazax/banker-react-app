import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"

export default function Team() {

    const images = [
    { id: 1, src: "/person-1.webp", name: "Chris John", rank: "FINANCE MANAGER" },
    { id: 2, src: "/person-2.webp", name: "Kaiara Spencer", rank: "FINANCE MANAGER" },
    { id: 3, src: "/person-3.webp", name: "Kyla Stewart", rank: "FINANCE MANAGER" },
    { id: 4, src: "/person-4.webp", name: "Kim Lyla", rank: "GENERAL MANAGER" },
    { id: 5, src: "/person-5.webp", name: "Chris John", rank: "BANK TELLER" },
    { id: 6, src: "/person-6.webp", name: "Ben Thompson", rank: "ACCOUNTANT" },
    { id: 7, src: "/person-7.webp", name: "Dave Simpson", rank: "MARKETING MANAGER" },
    { id: 8, src: "/person-8.jpg", name: "Atif Raza", rank: "DEVELOPER" },
    
  ];

    useObserver();
    
    return (
        <section id="team">
        <div className="container">
            <div className="row mb-5 text-center">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center my-5 animate">Meet Team</h2>
                    <p className="fs-5 animate">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            <div className="row mb-4">
                {images.map((image) => (
                    <div key={image.id} className="col-md-3 mb-5">
                        <div className="social-wrapper">
                            <img src={image.src} alt="" width="100%" className="mb-3 animate" loading="lazy"/>
                            <div id="social-bar" className="d-flex flex-column justify-content-center align-items-center">
                                <a href="#" className="mb-3 "><i className="bi bi-facebook"></i></a>
                                <a href="#" className="mb-3 "><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="px-4 ">
                            <h5>{image.name}</h5>      
                            <span>{image.rank}</span>  
                        </div>      
                    </div>
                ))}
            </div>
            <Divider/>
            <hr />
            <Divider/>
        </div>
        </section>
    )
}