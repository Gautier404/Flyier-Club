import {useState} from 'react'
import expandIcon from '../designes/expand.png'
import '../Styles/Design.css'
import download_icon from '../designes/download_icon.png'
import useMediaQuery from '@mui/material/useMediaQuery';



const Design = ({design, onClick}) => {
    // const expand = () => (
    //     img.style.transform = "scale(1.5)"
    //     img.style.transition = "transform 0.25s ease"
    // )
    const hover = useMediaQuery('(hover: hover)');
    const [clicked, setClicked] = useState(false);

    return (hover ? 
        <div className='design'>
            <div className="thumbnail-box">
                <div className="overlay" >
                    <div className = "overlay-top"> 
                        <h1 className="des_label">{design.title}</h1>
                        <p className="des_label">{design.author}</p>
                    </div>
                    <a href={design.design_path} download><img src={download_icon} className="downloadIcon"/></a>
                    <img onClick={() => onClick(design.id)} className="expandIcon" src={expandIcon}/>
                </div>
                <img src={design.image_path} className='thumbnail'/>
            </div>
        </div>
        :
        <div className='design'>
            <div className="thumbnail-box" onClick={() => setClicked(!clicked)}>
                <TouchOverlay design={design} onClick={onClick} clicked={clicked}/>
                <img src={design.image_path} className='thumbnail'/>
            </div>
        </div>
    );
}

const TouchOverlay = ({design, onClick, clicked}) => {
    
    return (clicked) ? 
        <div className="overlay" >
            <div className = "overlay-top"> 
                <h1 className="des_label">{design.title}</h1>
                <p className="des_label">{design.author}</p>
            </div>
            <a href={design.design_path} download><img src={download_icon} className="downloadIcon"/></a>
            <img onClick={() => onClick(design.id)} className="expandIcon" src={expandIcon}/>
        </div> : ""
}

export default Design

