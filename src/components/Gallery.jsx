import { useState } from "react";
import Divider from "./Divider.jsx";
import { useObserver } from "../assets/hooks/observer.jsx";
export default function Gallery() {
  const [category, setCategory] = useState("All");

  const images = [
    { id: 1, src: "/img-f-1.webp", category: "Event" },
    { id: 2, src: "/img-f-4.webp", category: "Party" },
    { id: 3, src: "/img-f-3.webp", category: "Party" },
    { id: 4, src: "/img-f-2.webp", category: "Holidays" },
    { id: 5, src: "/img-f-2.webp", category: "Event" },
    { id: 6, src: "/img-f-1.webp", category: "Party" },
    { id: 7, src: "/img-f-4.webp", category: "Event" },
    { id: 8, src: "/img-f-3.webp", category: "Holidays" },
  ];

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);

  const filteredCategories = [
    "All",
    ...new Set(images.map((img) => img.category)),
  ];
  
  useObserver();

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <div className="row mb-4 text-center">
          <div className="col-8 offset-2">
            <h2 className="text-center mb-5 animate">Gallery</h2>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5 gap-3 flex-wrap">
          {filteredCategories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                category === cat ? "btn-primary" : "btn"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredImages.map((img) => (
            <div key={img.id} className="col-6 col-md-3 mb-4">
              <img
                src={img.src}
                alt={img.category}
                width="100%"
                className="rounded shadow-sm gallery-img" loading="lazy"
              />
            </div>
          ))}
        </div>
        <Divider />
      </div>
    </section>
  );
}
