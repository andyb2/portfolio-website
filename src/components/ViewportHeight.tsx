import { useEffect, useState } from "react";

interface Height {
    height: number
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

const ViewportHeight = ({ height, setHeight }: Height): any => {
    // const [height, setHeight] = useState<number>(window.innerHeight);
    
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