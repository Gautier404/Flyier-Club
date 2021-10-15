import close from '../designes/close.png'

const Expanded = ({trigger, design, onClose}) => {
    return (trigger) ? (
        <div className="expanded">
            <div className="backdrop"/>
            <img className="close" src={close} onClick={() => onClose(design.id)}/>
            <div className="expanded-inner">
                <img className="expanded-image" src={design.image_path}/>
            </div>
        </div>
    ) : "";
}

export default Expanded
