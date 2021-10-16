import Design from "./components/Design";
import svg from './designes/test_svg.svg'
import './index.css'
import { useState } from "react"
import DesTable from "./components/DesTable";
import Expanded from "./components/Expanded";

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
    <div className='container'>
      <div className='rBoarder'></div>
      <div className='lBoarder'></div>
      <div >
        <img src={svg} className='header'/>
        <p className='text'> la;ldskj fasdjflsdkfj ;laf ldhfkl jadsalkfj sdl;kfj a;lsdkfj ;aslkdfj ;ladskfj ;laksdf j;laksfj ;lakdsj f;laskdjf ;lkasdjf ;laksdjf ;laksdjf ;laksdjf ;lkadsjf ;laksdjf hflasdjhfkajsdh </p>
        <h2 className='title'>Flyer Gallary</h2>
      </div>
      
  
      <DesTable designes={designes} onClick={expandDesign}/>
      {designes.map((design) => (
                <Expanded trigger={design.expanded} design={design} onClose={closeDesign}/>
            ))}
      
      {/* <Design image_path={designes[0].image_path} design_path={designes[0].design_path} author={designes[0].author} title={designes[0].title}/> */}
    </div>
  );
}
const title = {
  color:'red',
  backgroundColor:"blue",
}
export default App;