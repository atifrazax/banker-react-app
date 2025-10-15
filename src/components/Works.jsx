import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"

export default function Works() {
    useObserver();
    return (
        <section id="works">
        <div className="container">
            <div className="row mb-5 text-center">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center my-5 animate">How It Works</h2>
                    <p className="fs-5 animate">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
        <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src="/banker-coffee.webp" alt="" className="d-block w-100" loading="lazy"/>
                    </div>
                    <div className="col-md-5 mt-5 offset-md-1">
                        <h3 className="mb-3">01. Online Applications</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia...</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src="/image-1.webp" alt="" className="d-block w-100" loading="lazy"/>
                    </div>
                    <div className="col-md-5 mt-5 offset-md-1">
                        <h3 className="mb-3">02. Get an approval</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia...</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src="/banker.jpg" alt="" className="d-block w-100" loading="lazy"/>
                    </div>
                    <div className="col-md-5 mt-5 offset-md-1">
                        <h3 className="mb-3">03. Card delivery</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia...</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <Divider />
        </section>
    )
    
}
