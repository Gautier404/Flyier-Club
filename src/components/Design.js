import React from 'react'
import expandIcon from '../designes/expand.png'
import '../Styles/Design.css'
import download_icon from '../designes/download_icon.png'


const Design = ({design, onClick}) => {
    // const expand = () => (
    //     img.style.transform = "scale(1.5)"
    //     img.style.transition = "transform 0.25s ease"
    // )
    return (
        <div className='design'>
                <div className="thumbnail-box">
                    <div className="overlay" > 
                        <h3 className="des_label">{design.title}</h3>
                        <h4 className="des_label">{design.author}</h4>
                        <a href={design.design_path} className='link'><img src={download_icon} className="downloadIcon"/></a>
                        <img onClick={() => onClick(design.id)} className="expandIcon" src={expandIcon}/>
                    </div>
                    <img src={design.image_path} className='thumbnail'/>
                </div>
            
        </div>
    );
}

export default Design