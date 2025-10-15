import { useState, useMemo } from "react"
import { useObserver } from "../assets/hooks/observer.jsx";
import Divider from "./Divider.jsx"
export default function Footer() {
    const [email, setEmail] = useState("");
    const date = useMemo(() => new Date().getFullYear(), []);

    useObserver();

    return (
        <section id="footer">
            <Divider />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-3 mb-5 animate">
                        <h5 className="mb-3">About Us</h5>
                        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae earum reiciendis odit facilis quod ducimus iste fugiat quam quisquam voluptas.</article>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled text-decoration-underline">
                            <li className="mb-3 animate"><a href="#">Terms</a></li>
                            <li className="mb-3 animate"><a href="#">Policy</a></li>
                            <li className="mb-3 animate"><a href="#">About Us</a></li>
                            <li className="mb-3 animate"><a href="#">Services</a></li>
                            <li className="mb-3 animate"><a href="#">Testimonials</a></li>
                            <li className="mb-3 animate"><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5 animate">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex mt-3">
                            <li><a href="#"></a><i className="bi bi-facebook me-4"></i></li>
                            <li><a href="#"></a><i className="bi bi-twitter me-4"></i></li>
                            <li><a href="#"></a><i className="bi bi-instagram me-4"></i></li>
                            <li><a href="#"></a><i className="bi bi-linkedin me-4"></i></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="animate">Subscribe Newsletters</h5>
                        <div className="row mt-3">
                            <form className="d-flex col-10 col-md-12 animate" onSubmit={e=>e.preventDefault()}>
                                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Email Address"/>
                                <button className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <hr />
                <div className="text-center my-4">
                    <small >Copyright © {date} All rights reserved | This template is made by <i className="bi bi-heart-fill text-danger">
                        </i> by <a className="text-decoration-underline" href="https://atifraza.is-great.net/">Atif</a>
                    </small>

                </div>
                <Divider/>
        </section>
    )
}