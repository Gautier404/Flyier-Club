import Design from "./components/Design";
import svg from './designes/test_svg.svg'
//import './index.css'
import './Styles/App.css'
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

  const [display, setDisplay] = useState(1)

  const [selected, setSelected] = useState([1,1])

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
      {/* <div className='rBoarder'></div>
      <div className='lBoarder'></div> */}
      {/* <div >
        <img src={svg} className='header'/>
        <p className='text'> la;ldskj fasdjflsdkfj ;laf ldhfkl jadsalkfj sdl;kfj a;lsdkfj ;aslkdfj ;ladskfj ;laksdf j;laksfj ;lakdsj f;laskdjf ;lkasdjf ;laksdjf ;laksdjf ;laksdjf ;lkadsjf ;laksdjf hflasdjhfkajsdh </p>
        <h2 className='title'>Flyer Gallary</h2>
      </div> */}

      <div class='section_title' 
        onClick={()=>(setDisplay(1), setSelected([1,1]))}
        onMouseEnter={()=>(setSelected([selected[0],1]))}
        onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>
          <h1 className = {selected[1] === 1 ? "selected": "notSelected"}>FLIERCLUB</h1>
      </div>

      {display === 1 ? <p className = "welcomeText">Hello. This is Flier Club. To submit a design of your own join our Discord. All official designs are published in Gallery. We spend a lot of time and effort making our fliers and wouldn’t want to see them go to waste. See Recycle to give your flier new life.</p> : ""}
      
      <div class='section_title' 
        onClick={()=>(setDisplay(2), setSelected([2,2]))}
        onMouseEnter={()=>(setSelected([selected[0],2]))}
        onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>
          <h1 className = {selected[1] === 2 ? "selected": "notSelected"}>DISCORD</h1>
      </div>
      
      {/* display === 2 ? <p>The Awesome</p> : "" */}

      <div class='section_title' 
        onClick={()=>(setDisplay(3), setSelected([3,3]))}
        onMouseEnter={()=>(setSelected([selected[0],3]))}
        onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>
          <h1 className = {selected[1] === 3 ? "selected": "notSelected"}>GALLERY</h1>
      </div>
      
      {display === 3 ? <DesTable designes={designes} onClick={expandDesign}/> : ""}
      
      <div class='section_title' 
        onClick={()=>(setDisplay(4), setSelected([4,4]))}
        onMouseEnter={()=>(setSelected([selected[0],4]))}
        onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>
          <h1 className = {selected[1] === 4 ? "selected": "notSelected"}>RECYCLE</h1>
      </div>
      
      {display === 4 ? <ol className="recycleList">
        <li>Regift/Display Flier</li>
        <li>Fold worlds longest flying paper airplane</li>
        <li>Create A Sitting Puppy</li>
        <li>Make an envelope to hold a note to a friend.</li>
        </ol>: ""}
  
      
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