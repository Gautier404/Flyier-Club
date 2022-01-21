import close from '../designes/close.png'
import download_icon from '../designes/download_icon.png'


const Expanded = ({trigger, design, onClose, onClick, touch}) => {

    return (trigger) ? (
        <div className="expanded">
            <div className="backdrop"/>
            <div className="expanded-inner">
                <img className="expanded-image" src={design.image_path}/>
            </div>
            <img className="close" src={close} onClick={() => onClose(design.id)}/>
            { () => {
                if (touch)
                {
                    return <div className="mobileTitle">
                        <img onClick={() => onClick(design.id)} className="downloadIcon" src={download_icon}/>
                        <h1 className="des_label">{design.title}</h1>
                        <p className="des_label">{design.author}</p>
                    </div>
                }}
                
            }
        </div>
    ) : "";
}

export default Expanded
