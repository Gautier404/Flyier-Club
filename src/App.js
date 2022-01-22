import Design from "./components/Design";
import svg from './designes/test_svg.svg'
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
      clicked: false,
    },
    {
      id: 2,
      image_path: svg,
      design_path: svg,
      title: 'test icon2',
      author: 'interweb2',
      expanded: false,
      clicked: false,
    },
    {
      id: 3,
      image_path: svg,
      design_path: svg,
      title: 'test icon3',
      author: 'interweb3',
      expanded: false,
      clicked: false,
    },
    {
      id: 4,
      image_path: svg,
      design_path: svg,
      title: 'test icon4',
      author: 'interweb4',
      expanded: false,
      clicked: false,
    }
  ])

  const [display, setDisplay] = useState(1)

  const [selected, setSelected] = useState([1,1])
  const backgroundClassNames = ["container1", "container2", "container3", "container4"]


  function expandDesign (id){
    console.log(id)
    if (!designes.some(design => design.expanded === true))
    {
      const newDes = designes.map((design) => {
        return design.id==id ? {...design, expanded: true} : design
        
      })
      console.log("newDes: ")
      console.log(newDes)
      setDesignes(newDes, ()=> console.log(designes))
      
    }
  }

  function closeDesign (id){
    setDesignes(designes.map((design) => (
      design.id==id?
      {...design, expanded: false} : design
    )))
  }

  function showTouchOverlay(id, shown)
  {
    // console.log(designes)
    if(!designes.some((design) => design.expanded === true))
    {
      setDesignes(designes.map((design) => (
        design.id==id?
        {...design, clicked: shown} : design
      )))
    }
    // console.log(designes)
  }

  return (
    <div className={backgroundClassNames[selected[0]-1]} onClick={()=>designes.forEach((design) => design.clicked = false)}>
      {/* <div className='rBoarder'></div> 
      <div className='lBoarder'></div> */}
      {/* <div >
        <img src={svg} className='header'/>
        <p className='text'> la;ldskj fasdjflsdkfj ;laf ldhfkl jadsalkfj sdl;kfj a;lsdkfj ;aslkdfj ;ladskfj ;laksdf j;laksfj ;lakdsj f;laskdjf ;lkasdjf ;laksdjf ;laksdjf ;laksdjf ;lkadsjf ;laksdjf hflasdjhfkajsdh </p>
        <h2 className='title'>Flyer Gallary</h2>
      </div> */}

      <div className="menu">
        <div class='section_title'>
            <h1 className = {selected[1] === 1 ? "selected": "notSelected"}
          onClick={()=>(setDisplay(1), setSelected([1,1]))}
          onMouseEnter={()=>(setSelected([selected[0],1]))}
          onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}
          >FLIERCLUB</h1>
        </div>

        <div class='section_title' >
            <h1 className = {selected[1] === 2 ? "selected": "notSelected"}
          onClick={()=>(setDisplay(2), setSelected([2,2]))}
          onMouseEnter={()=>(setSelected([selected[0],2]))}
          onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>DISCORD</h1>
        </div>

        <div class='section_title' >
            <h1 className = {selected[1] === 3 ? "selected": "notSelected"}
          onClick={()=>(setDisplay(3), setSelected([3,3]))}
          onMouseEnter={()=>(setSelected([selected[0],3]))}
          onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>GALLERY</h1>
       </div>
      
       <div class='section_title' >
            <h1 className = {selected[1] === 4 ? "selected": "notSelected"}
          onClick={()=>(setDisplay(4), setSelected([4,4]))}
          onMouseEnter={()=>(setSelected([selected[0],4]))}
          onMouseLeave={()=>(setSelected([selected[0], selected[0]]))}>RECYCLE</h1>
        </div>
      </div>

      
      <div className="content">
      {display === 1 ? <p className = "welcomeText">Hello. This is Flier Club. To submit a design of your own join our Discord. All official designs are published in Gallery. We spend a lot of time and effort making our fliers and wouldn’t want to see them go to waste. See Recycle to give your flier new life.</p>: ""}
      {display === 2 ? <p className = "discordText"><a href="https://discord.gg/AfNaupGa" target="_blank" rel="noopener noreferrer">Join us on Discord!</a></p>: ""}
      {display === 3 ? <DesTable designes={designes} onClick={expandDesign}  showTouchOverlay={showTouchOverlay}/> : ""}
      {display === 4 ? <ol className="recycleList">
        <li>Regift/Display Flier</li>
        <li><a href="https://youtu.be/3BNg4fDJC8A?t=186" target="_blank" rel="noopener noreferrer">Fold worlds longest flying paper airplane</a></li>
        <li><a href = {Puppy} target="_blank" rel="noopener noreferrer">Create A Sitting Puppy</a></li>
        <li><a href = {Letter} target="_blank" rel="noopener noreferrer">Make an envelope to hold a note to a friend.</a></li>
        </ol>: ""}
  
      
      {designes.map((design) => (
                <Expanded trigger={design.expanded} design={design} onClose={closeDesign} onClick={expandDesign}/>
            ))}
      
      </div>
    </div>
  );
}
const title = {
  color:'red',
  backgroundColor:"blue",
}
export default App;