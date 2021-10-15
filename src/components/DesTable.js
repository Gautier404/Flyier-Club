import Design from "./Design"

const DesTable = ({designes, onClick}) => {
    return (
        <div className='designTable'>
            {designes.map((design) => (
                <Design design={design} onClick={onClick}/>
            ))}
        </div>
    )
}

export default DesTable
