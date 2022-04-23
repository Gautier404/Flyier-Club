import Design from "./components/Design";
import svg from './designes/test_svg.svg'
//import './index.css'
import './Styles/App.css'
import { useState } from "react"
import DesTable from "./components/DesTable";
import Expanded from "./components/Expanded";
import Puppy from "./designes/BussinessCardPuppy.PNG"
import Letter from "./designes/Letter.PNG"

function App() {
  const [designes, setDesignes] = useState([
    {
      id: 1,
      image_path: svg,
      design_path: svg,
      title: 'test icon',
      author: 'interweb',
      expanded: false,
    },
    {
      id: 2,
      image_path: svg,
      design_path: svg,
      title: 'test icon2',
      author: 'interweb2',
      expanded: false,
    },
    {
      id: 3,
      image_path: svg,
      design_path: svg,
      title: 'test icon3',
      author: 'interweb3',
      expanded: false,
    },
    {
      id: 4,
      image_path: svg,
      design_path: svg,
      title: 'test icon4',
      author: 'interweb4',
      expanded: false,
    }
  ])

  const [display, setDisplay] = useState(1)

  const [selected, setSelected] = useState([1,1])
  const backgroundClassNames = ["container1", "container2", "container3", "container4"]

  function showTouchOverlay(id, shown)
  {
    // console.log(designes)
    setDesignes(designes.map((design) => (
      design.id==id?
      {...design, clicked: shown} : design
    )))
    // console.log(designes)
  }

  function expandDesign (id){
    if (!designes.some(design => design.expanded === true))
    {
      setDesignes(designes.map((design) => (
        design.id==id?
        {...design, expanded: true} : design
      )))
    }
  }

  function closeDesign (id){
    setDesignes(designes.map((design) => (
      design.id==id?
      {...design, expanded: false} : design
    )))
  }


  return (
    <div className="container">
      {/* <div className='rBoarder'></div>
      <div className='lBoarder'></div> */}
      {/* <div >
        <img src={svg} className='header'/>
        <p className='text'> la;ldskj fasdjflsdkfj ;laf ldhfkl jadsalkfj sdl;kfj a;lsdkfj ;aslkdfj ;ladskfj ;laksdf j;laksfj ;lakdsj f;laskdjf ;lkasdjf ;laksdjf ;laksdjf ;laksdjf ;lkadsjf ;laksdjf hflasdjhfkajsdh </p>
        <h2 className='title'>Flyer Gallary</h2>
      </div> */}
      <h1>//FLIERCLUB</h1>
      <p>//Inquiries & Flier Submissions>><a>temp link</a></p>
      <DesTable designes={designes} onClick={expandDesign}  showTouchOverlay={showTouchOverlay}/>
      {designes.map((design) => (
                <Expanded trigger={design.expanded} design={design} onClose={closeDesign}/>
            ))}
      
      </div>
  );
}
const title = {
  color:'red',
  backgroundColor:"blue",
}
export default App;