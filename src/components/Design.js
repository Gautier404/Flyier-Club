import React from 'react'
import '../Styles/Design.css'


const Design = ({design, onClick}) => {
    // const expand = () => (
    //     img.style.transform = "scale(1.5)"
    //     img.style.transition = "transform 0.25s ease"
    // )
    return (
        <div className='design'>
                <div className="thumbnail-box">
                <div className="overlay" onClick={() => onClick(design.id)}>
                        <div className = "overlay-top"></div>
                    </div>
                    <img src={design.image_path} className='thumbnail'/>
                </div>
                <p>#{design.number} <a href={design.design_path}>{design.title}</a> {design.author_link != 'none'? <a href = {design.author_link}>{design.author}</a>: design.author}</p>
            
        </div>
    );
}

export default Design