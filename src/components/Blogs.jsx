import Divider from "./Divider.jsx"
import { useObserver } from "../assets/hooks/observer.jsx"
export default function Blogs() {
    const blogs = [
        { 
            id: 1, 
            title: "A Basic Guide to Starting a Franchise in the Philippines", 
            author: "John Smith", 
            date: "12th Oct 2025", 
            category: "News", 
            img: "person-2.webp", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." 
        },
        { 
            id: 2, 
            title: "A Basic Guide to Starting a Franchise in the Philippines", 
            author: "Sara Axlender", 
            date: "11th Aug 2025", 
            category: "Update", 
            img: "person-6.webp", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." 
        },
        { 
            id: 3, 
            title: "A Basic Guide to Starting a Franchise in the Philippines", 
            author: "Liza Brown", 
            date: "3rd Jun 2024", 
            category: "Cyber", 
            img: "person-3.webp", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." 
        },
    ]
    useObserver();
    return (
        <section id="blog">
        <div className="container">
            <Divider/>
            <div className="row mb-4 text-center">
                <div className="col-8 offset-2">
                    <h2 className="text-center my-5 animate">Our Blogs</h2>
                </div>
            </div>
            <div className="row">
                {blogs.map((blog)=>(  
                                  
                <div key={blog.id} className="col-md-4 mb-4">
                    <div className="card border-0">
                        <img className="card-img-top animate" src={blog.img} alt="Title" loading="lazy"/>
                        <div className="card-body">
                            <h4 className="card-title">{blog.title}</h4>
                            <small className="text-muted">
                                <span className="bi bi-person me-2"></span>{blog.author} - <i className="bi bi-calendar-check me-2"></i>{blog.date} - 
                                <span><a href="#" className="text-decoration-none"> {blog.category}</a></span>
                            </small>
                            <p className="card-text mt-4">{blog.content}</p>
                            <a href="#">Continues Reading...</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <Divider/>
        </div>
        </section>
    )
}