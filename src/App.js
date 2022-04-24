//designs
import svg from './designes/test_svg.svg'
import dogPlane from './designes/DogPlane.jpg'
import tiger from './designes/Tiger.jpg'
import physcadellic from './designes/Physcadellic.jpg'
import bongos from './designes/Bongos.jpg'

//import './index.css'
import './Styles/App.css'
import { useState } from "react"
import DesTable from "./components/DesTable";
import Expanded from "./components/Expanded";

function App() {
  const [designes, setDesignes] = useState([
    {
      id: 1,
      number: "003",
      image_path: dogPlane,
      design_path: dogPlane,
      title: '"Red Baron"',
      author: 'Drew',
      author_link: 'https://www.instagram.com/mmmmsquiglylines/',
      expanded: false,
    },
    {
      id: 2,
      number: "004",
      image_path: tiger,
      design_path: tiger,
      title: '"Tiger"',
      author: 'Drew',
      author_link: 'https://www.instagram.com/mmmmsquiglylines/',
      expanded: false,
    },
    {
      id: 3,
      number: "002",
      image_path: physcadellic,
      design_path: physcadellic,
      title: 'untitled',
      author: 'Drew',
      author_link: 'none',
      expanded: false,
    },
    {
      id: 4,
      number: "001",
      image_path: bongos,
      design_path: bongos,
      title: '"Bongos"',
      author: 'Drew',
      author_link: 'https://www.instagram.com/mmmmsquiglylines/',
      expanded: false,
    }
  ])

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
      <h1>FLIERCLUB</h1>
      <p>Inquiries & Flier Submissions >> <a href = "mailto: notouremail@gmail.com">notouremail@gmail.com</a></p>
      <DesTable designes={designes} onClick={expandDesign}  showTouchOverlay={showTouchOverlay}/>
      {designes.map((design) => (
                <Expanded trigger={design.expanded} design={design} onClose={closeDesign}/>
            ))}
      
      </div>
  );
}

export default App;