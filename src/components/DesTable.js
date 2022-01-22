import Design from "./Design"
import "../Styles/DesTable.css"
const DesTable = ({designes, onClick, showTouchOverlay}) => {
    return (
        <div className='designTable'>
            {designes.map((design) => (
                <Design design={design} onClick={onClick} showTouchOverlay={showTouchOverlay}/>
            ))}
        </div>
    )
}

export default DesTable
