import { useState } from "react";
import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx";
export default function Main() {

    useObserver();

    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted");
    }
    

    return(
        <section id="next" >
            <Divider />
        <div className="container">
        <div className="row text-center mb-5">
            <div className="col-12 col-md-4 animate">
                <img src="/wallet.svg" alt="" width="100" className="mb-4"/>
                <h3 className="mb-4">Money Savings</h3>
                <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero hic veniam numquam!!</p>
            </div>
            <div className="col-12 col-md-4 animate">
                <img src="/cart.svg" alt="" width="100" className="mb-4"/>
                <h3 className="mb-4">Online Shoppings</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur autem animi?</p>
            </div>
            <div className="col-12 col-md-4 animate">
                <img src="/credit-card.svg" alt="" width="100" className="mb-4"/>
                <h3 className="mb-4">Credit / Debit Cards</h3>
                <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur consectetur quas.</p>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-md-6 animate">
                <img src="/banker.jpg" alt="" width="100%" className="mb-5"  />
            </div>
            <div className="col-md-5">
                <h3 className="mb-4 animate">Amortization Computation</h3>
                <p className="mb-4 animate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molli consequuntur possimus culpa voluptas tenetur.</p>
                <ul className="mb-5">
                    <li className="nav mb-3 animate"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet.</li>
                    <li className="nav mb-3 animate"><i className="bi bi-check-lg text-success me-2"></i>Lorem ipsum amet consectetur.</li>
                    <li className="nav mb-3 animate"><i className="bi bi-check-lg text-success me-2"></i>Lorem, ipsum dolor.</li>
                </ul>
                <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-8 animate"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" id="email-input" placeholder="Enter Your Email" className="form-control"/></div>
                    <div className="col-4 animate"><input type="submit" className="btn btn-primary w-100"/></div>                    
                </div>
                </form>
            </div>
        </div>
        <Divider/>
        </div>
        </section>
    )
}