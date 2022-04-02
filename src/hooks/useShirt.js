const { useState, useEffect } = require("react")

const useShirt = () => {
    const [shirt, setShirt] = useState([]);
    useEffect(() => {
        fetch('Tshirt.json')
            .then(res => res.json())
            .then(data => setShirt(data))
    }, [])

    return [shirt, setShirt]
}
export default useShirt;