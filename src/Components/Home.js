import { useState } from 'react';
import '../styles/index'
const Home = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked(true)
        window.open('https://www.youtube.com/@stools6681/featured', '_blank')
    };
    return (<div className="main">
        {clicked ? <>
            <div className="text">Thanks For Visiting</div>
        </> :
            <div className="text" id="channel-name" onClick={onClick}>S Tools</div>}
    </div>)
}

export default Home;