import { useState } from "react"
import { useObserver } from "../assets/hooks/observer.jsx";
import Divider from "./Divider.jsx"
export default function Contact() {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');

    useObserver();

    return (
        <section id="contact">
            <div className="container">
                <div className="row mb-4 text-center m-4">
                    <div className="col-8 offset-2">
                        <h2 className="text-center my-5 animate">Contact Us</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-4 animate">
                        <i className="bi bi-geo-alt-fill fs-2" />
                        <p className="mt-2">203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </div>
                    
                    <div className="col-md-4 mb-4 animate">
                        <i className="bi bi-telephone-fill fs-2" />
                        <p className="mt-2">+1 232 3235 324</p>
                    </div>
                    <div className="col-md-4 mb-4 animate">
                        <i className="bi bi-envelope-fill fs-2" />
                        <p className="mt-2">youremail@domain.com</p>
                    </div>

                </div>
                <Divider/>
            </div>
            <div className="container bg-white" id="form">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h3 className="text-center my-5 animate">Contact Form</h3>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <form onSubmit={e=>e.preventDefault()}>
                                <div className="row mb-3">
                                    <div className="col-md-6 animate">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} className="form-control" id="firstName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="col-md-6 animate">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className="form-control" id="lastName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label animate">Email address</label>
                                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label animate">Password</label>
                                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="textarea" className="form-label animate">Message</label>
                                    <textarea className="form-control" value={message} onChange={e=>setMessage(e.target.value)} id="textarea" rows="4" placeholder="Write your notes or questions here..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mb-5 animate">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Divider/>
        </section>
    )
}