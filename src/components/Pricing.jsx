import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"

export default function Pricing() {
    useObserver();
    return (
        <section id="pricing" >
        <Divider />
        <div className="container mb-5">
            <div className="row mb-5 text-center">
                <div className="col-8 offset-2">
                    <h2 className="text-center my-5 animate">Pricing</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4 animate">
                    <div className="card shadow-sm border-0">
                        <div className="card-body text-center">
                            <h3 className="card-title text-center my-4">Basic</h3>
                            <div className="d-flex justify-content-center my-4">
                                <h2 className="mb-0 fw-light">$47</h2>
                                <small className="align-self-end text-muted">/ year</small>
                            </div>
                            <div className="text-center mb-5">
                                <ul className="list-unstyled text-left">
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"></i><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"></i><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                </ul>
                            </div>
                            <button className="btn btn-primary my-3 w-50 animate">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 animate">
                    <div className="card shadow-sm border-0">
                        <div className="card-body text-center">
                            <h3 className="card-title text-center my-4">Premium</h3>
                            <div className="d-flex justify-content-center my-4">
                                <h2 className="mb-0 fw-light">$250</h2>
                                <small className="align-self-end text-muted">/ year</small>
                            </div>
                            <div className="text-center mb-5">
                                <ul className="list-unstyled">
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"/>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"/>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"/><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"/><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                </ul>
                            </div>
                            <button className="btn btn-primary my-3 w-50 animate">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 animate">
                    <div className="card shadow-sm border-0">
                        <div className="card-body text-center">
                            <h3 className="card-title text-center my-4">Professional</h3>
                            <div className="d-flex justify-content-center my-4">
                                <h2 className="mb-0 fw-light">$700</h2>
                                <small className="align-self-end text-muted">/ year</small>
                            </div>
                            <div className="text-center mb-5">
                                <ul className="list-unstyled text-left">
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet caios consectetur.</li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"></i><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                    <li className="mb-4 opacity-25"><i className="bi bi-check-lg text-success me-2"></i><del>Lorem ipsum dolor sit amet caios consectetur.</del></li>
                                </ul>
                            </div>
                            <button className="btn btn-primary my-3 w-50 animate">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <section id="faq">
            <div className="row g-4">
                <h2 className="my-5 text-center animate">Frequently Asked Questions</h2>
                <div className="col-md-6">
                    <h3 className="mb-4 animate">Can I accept both Paypal and Stripe?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>

                <div className="col-md-6 animate">
                    <h3 className="mb-4">Where are you Located?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident perspiciatis sit fugiat ullam nulla!</p>
                </div>
                
                <div className="col-md-6 animate">
                    <h3 className="mb-4">What available is refund period?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident perspiciatis sit fugiat ullam nulla!</p>
                </div>
                
                <div className="col-md-6 animate">
                    <h3 className="mb-4">What is your opening time?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident perspiciatis sit fugiat ullam nulla!</p>
                </div>
                
                <div className="col-md-6 animate">
                    <h3 className="mb-4">What available is refund period?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident perspiciatis sit fugiat ullam nulla!</p>
                </div>
                
                <div className="col-md-6 animate">
                    <h3 className="mb-4">Can I accept both Paypal and Stripe?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident perspiciatis sit fugiat ullam nulla!</p>
                </div>
                
            </div>
            </section>
        </div>
        <Divider/>
        </section>
    )
    
}
