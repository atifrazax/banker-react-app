import "./loader.css"
import { useEffect, useState } from "react";

export default function Loader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        if(document.readyState === 'complete') {
            handleLoading();
        }
        window.addEventListener('load' , handleLoading)

        return () => {
            window.removeEventListener('load' , handleLoading)
        }
    }, [])
    return loading && (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}