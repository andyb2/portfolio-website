import { useEffect, useState } from "react";

const ViewportHeight = () => {
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const getHeight = () => {
            setHeight(window.innerHeight);
            document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`);
        }
        window.addEventListener('resize', getHeight);
        return (() => {
            window.removeEventListener('resize', getHeight);
        })
    }, [height])

    return null;
}

export default ViewportHeight;