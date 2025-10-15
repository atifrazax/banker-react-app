import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"
export default function Services() {
    useObserver();
    return(
        <section id="services">
            <Divider />
        <div  className="container">
            <div className="row mb-5">
                <div className="col-8 offset-2">
                    <h2 className="text-center my-5">Our Services</h2>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 col-md-4 mb-5 animate">
                    <img src="/wallet.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Money Savings</h3>
                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero hic veniam numquam!!</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-12 col-md-4 mb-5 animate">
                    <img src="/cart.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Online Shoppings</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur autem animi?</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-12 col-md-4 mb-5 animate">
                    <img src="/income.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Income Monitoring</h3>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur consectetur quas.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-12 col-md-4 mb-5 animate">
                    <img src="/credit-card.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Credit / Debit Cards</h3>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur consectetur quas.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-12 col-md-4 mb-5 animate">
                    <img src="/insurance.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Insurance Consulting</h3>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur consectetur quas.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="col-12 col-md-4 animate">
                    <img src="/finance.svg" alt="" width="100" className="mb-4"/>
                    <h3 className="mb-4">Financial Management</h3>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur consectetur quas.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
            
            </div>
            <Divider/>
        </section>
        
    )
}