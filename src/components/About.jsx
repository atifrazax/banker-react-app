import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"

export default function About() {
    useObserver();
    return (
        <section id="about">
        <div className="container">
            <div className="row mb-5 text-center animate">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center my-5">About Us</h2>
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate, sequi sapiente quos aspernatur.</p>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-md-6 mb-5 animate">
                    <img src="/banker-1.webp" alt="" width="100%" loading="lazy" />
                </div>
                <div className="col-md-5 animate">
                    <h3 className="mb-3 animate">We Solve Your Financial Problem</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    <br /><br />A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>
            <Divider />
        </div>
        </section>
    )
}