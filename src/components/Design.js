// import {useState} from 'react'
import expandIcon from '../designes/expand.png'
import '../Styles/Design.css'
import download_icon from '../designes/download_icon.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef} from 'react';



const Design = ({design, onClick, showTouchOverlay}) => {

    const hover = useMediaQuery('(hover: hover)');
    

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
        <div className='design' >
            <div className="thumbnail-box" onClick={() => showTouchOverlay(design.id, true)}>
                <TouchOverlay design={design} onClick={onClick} showTouchOverlay={showTouchOverlay}/>
                <img src={design.image_path} className='thumbnail'/>
            </div>
        </div>
    );
}

const TouchOverlay = ({design, onClick, showTouchOverlay}) => {

    const node = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClick, {capture: true});
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

      
    const handleClick = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          showTouchOverlay(design.id, false);
        }
    };

    return (design.clicked) ? 
        <div className="overlay" ref={node}>
            <div className = "overlay-top"> 
                <h1 className="des_label">{design.title}</h1>
                <p className="des_label">{design.author}</p>
            </div>
            <a href={design.design_path} download><img src={download_icon} className="downloadIcon"/></a>
            <img onClick={() => onClick(design.id)} className="expandIcon" src={expandIcon}/>
        </div> : ""
}

export default Design

