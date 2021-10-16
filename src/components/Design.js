import React from 'react'
import expandIcon from '../designes/expand.png'


const Design = ({design, onClick}) => {
    // const expand = () => (
    //     img.style.transform = "scale(1.5)"
    //     img.style.transition = "transform 0.25s ease"
    // )
    return (
        <div className='design'>
                <div className="thumbnail-box">
                    <div className="overlay" onClick={() => onClick(design.id)}> 
                        <img className="expandIcon" src={expandIcon}/>
                    </div>
                    <img src={design.image_path} className='thumbnail'/>
                </div>
            <h3>{design.title}</h3>
            <h4>{design.author}</h4>
            <a href={design.design_path} className='link' download>click to download</a>
        </div>
    );
}

export default Design