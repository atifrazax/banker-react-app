import { useEffect } from 'react'
export default function Navbar() { 

    useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 1) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <header className='bg-image pt-md-4 pt-2'>
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <h1>Banker <b>.</b></h1>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fs-5">
                        <li className="nav-item me-3"><a className="nav-link active" href="#">Home</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#team">Team</a></li>
                                <li><a className="dropdown-item" href="#gallery">Gallery</a></li>
                                <li><a className="dropdown-item" href="#services">Services</a></li>
                                <li><a className="dropdown-item" href="#testimonials">Testimonials</a></li>
                                <li><a className="dropdown-item" href="#pricing">Pricing</a></li>
                                <li><a className="dropdown-item" href="#faq">FAQ</a></li>
                            </ul>
                        </li>
                        <li className="nav-item me-3"><a className="nav-link" href="#blog">Blog</a></li>
                        <li className="nav-item me-3"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-twitter"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/atifrazax/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
                </div>
            </nav>
            <hr className='mt-5' />
            <div id="carousel-main">
            <div id="carouselControls" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div className="carousel-inner">
                <div className="carousel-item active">                    
                    <div className="col-md-8 offset-md-2">
                        <h1 className="mb-3 text-uppercase fw-bold text-bold">Bank Solution</h1>
                        <article className="fs-4">A small river named Duden flows by their place and supplies it with the necessary duden flows by their place and supplies it withregelialia.</article>
                    </div>
                </div>
                <div className="carousel-item">                    
                    <div className="col-md-8 offset-md-2">
                        <h1 className="mb-3 text-uppercase fw-bold text-bold">Financing Solution</h1>
                        <article className="fs-4">A small river named Duden flows by their place and supplies it with the necessary duden flows by their place and supplies it withregelialia.</article>
                    </div>
                </div>
                <div className="carousel-item">                    
                    <div className="col-md-8 offset-md-2">
                        <h1 className="mb-3 text-uppercase fw-bold text-bold">Savings Solution</h1>
                        <article className="fs-4">A small river named Duden flows by their place and supplies it with the necessary duden flows by their place and supplies it withregelialia.</article>
                    </div>
                </div>
            </div>
               
            </div>
            </div>
        </header>
    )
}