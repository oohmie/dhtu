import React, { useEffect, useState } from 'react'
import { DropdownMenu, Navbar, NavItem } from './Navcomponents.tsx';
import Axios from 'axios'
import ReactStars from 'react-rating-stars-component';
import TheCard from './Accordian.tsx';
import { Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Menu, MenuItem, AppBar, Toolbar, IconButton, Typography, Drawer } from '@mui/material'
import { Box } from '@mui/system';
import theMap from './Map1.png'
import './Style.css'
import thePin from './Pin1.png'
import Badge from 'react-bootstrap/Badge'
import Paopao from './Paopao.tsx'
import './Homepage.css'
import theCu from './Cu1.png'
import theMenu from './Menu1.png'

function Homepage() {
  const [open, setOpen] = useState(false);
  const [allopen, setAllOpen] = useState(false);

  const [reviewList, setReviewList] = useState<any[]>([])

  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState<number>(0);
  const [toilet, setToilet] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState("");
  const [reviewing, setReviewing] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const [display, setDisplay] = useState(false);
  const [buttonText, setButtonText] = useState("Show Review!");

  const [theCard0, setTheCard0] = useState(true);
  const [theCard1, setTheCard1] = useState(true);
  const [theCard2, setTheCard2] = useState(true);
  const [theCard3, setTheCard3] = useState(true);
  const [theCard4, setTheCard4] = useState(true);
  const [theCard5, setTheCard5] = useState(true);
  const [theCard6, setTheCard6] = useState(true);
  const [theCard7, setTheCard7] = useState(true);

  const allToFalse = () => {
    setTheCard0(false);
    setTheCard1(false);
    setTheCard2(false);
    setTheCard3(false);
    setTheCard4(false);
    setTheCard5(false);
    setTheCard6(false);
    setTheCard7(false);
  }
  // function calval(val){
  //   return
  // }

  const getReview = () => {
    Axios.get('http://localhost:3001/review').then((response) => {
      setReviewList(response.data);
    });
    console.log("update List");
  }

  const addReview = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3001/create', {
      building: building,
      floor: floor,
      toilet: toilet,
      rating: rating,
      name: name,
      reviewing: reviewing
    }).then(() => {
      setReviewList([
        ...reviewList, {
          building: building,
          floor: floor,
          toilet: toilet,
          rating: rating,
          name: name,
          reviewing: reviewing
        }
      ])
    })
    getReview();
  }

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setReviewList(
        reviewList.filter((val) => {
          return val.id !== id;
        })
      )
    })
  }

  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-50%, -10%)',
    },
    overlay: {
      background: "rgba(0,0,0,0.5)",
      transparent: "1"
    },
  };



  useEffect(() => {
    getReview();
  }, [])

  const [conMap, setConMap] = useState();

  const mapping = reviewList.map((val, key) => {
    if (val.id == null) { return null } else /*if (val.building == conMap)*/ {
      return (
        <div className='review card'>
          <div className='card-body text-left'>
            <p className='card-text'>Building: {val.building}</p>
            <p className='card-text'>Floor: {val.floor}</p>
            <p className='card-text'>Toilet: {val.toilet}</p>
            <p className='card-text'>Rating: {val.rating}</p>
            <p className='card-text'>Name: {val.name}</p>
            <p className='card-text'>Comment: {val.reviewing}</p>
            <div className='d-flex'>
              <button className='btn btn-warning' onClick={() => { deleteReview(val.id) }}>Delete</button>
            </div>
            {/* <p className='card-text'>{val.id}</p> */}
          </div>
        </div>
      )
    }
  })



  // var domapping;
  // if(display){
  //   domapping = mapping;
  // }else{ domapping = <div></div>}

  const showDisplay = () => {
    getReview();
    if (display)
      setButtonText("Show Review!");
    else setButtonText("Close Review!");
    setDisplay(current => !current);
  }

  const showDisplayCon = (e) => {
    getReview();
    if (display)
      setButtonText("Show Review!");
    else setButtonText("Close Review!");
    setConMap(e);
    setDisplay(current => !current);
  }

  const [countStar, setCountStar] = useState()
  const calval = (e) => {
    reviewList.map((val, key) => {
      if (val.building == e) {

      }
    })
  }

  const [anChorElm, setAnChorElm] = useState(null);
  const [meOpen, setMeOpen] = useState(false)
  const handleMeClose = () => {
    setMeOpen(false);
  }
  const handleMeClick = (e) => {
    setAnChorElm(e.currentTarget)
    setMeOpen(true);
  }

  const [tempt, setTempt] = useState();

  function clickMap(name) {
    setTempt(name);
    setAlll(false);
    // console.log(tempt); 
  }

  const toilets: [string, number, number][] = [["ห้องน้ำตึกอรุณ", 13.7366148, 100.5340958], ["ห้องน้ำบันไดกลาง", 13.7367895, 100.5336363], ["ห้องน้ำสวนรวมใจ", 13.7370833, 100.5326991], ["ห้องน้ำตึก 1", 13.7364472, 100.5327152], ["ห้องน้ำตึก 2", 13.7364355, 100.5333686],
  ["ห้องน้ำตึก 4", 13.7358548, 100.534044], ["ห้องน้ำตึก 100 ปี", 13.7361281, 100.534036], ["ห้องน้ำตึกโยธา", 13.7356599, 100.5331889]]
  let distances: number[];
  let latitude_2;
  let longitude_2;
  let latitude_1: number;
  let longitude_1: number;
  let index;
  let calculated;

  function PaopaoAnd() {
    distances = toilets.map((toilet, idx) => {
      latitude_2 = toilet[1] / (180 / Math.PI)
      longitude_2 = toilet[2] / (180 / Math.PI)
      latitude_1 = 0
      longitude_1 = 0
      // if อันนี้ใช้เช็คดูว่าขอตำแหน่งได้ไหม
      if ("geolocation" in navigator) {
        console.log("Available");
        //อันนี้คำสั่งใช้ขอตำแหน่งของผู้ใช้
        navigator.geolocation.getCurrentPosition((position) => {
          latitude_1 = position.coords.latitude
          longitude_1 = position.coords.longitude
          console.log(latitude_1, longitude_1)
        })
      } else {
        console.log("Not Available")
      }
      calculated = 1.609344 * 3963.0 * Math.acos(Math.sin(latitude_2) * Math.sin(latitude_1) + Math.cos(latitude_1) * Math.cos(latitude_2) * Math.cos(longitude_2 - longitude_1))
      return calculated
      //เอาค่าระยะทางที่ได้ไปใส่ไว้ใน array ของ toilets
    })
    console.log(distances)
    console.log(Math.min(...distances));
    index = distances.indexOf(Math.min(...distances))
    return console.log(index)
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [alll,setAlll] = useState(true);
  return (
    <div>

      <AppBar style={{ background: "#A98C86" }} position="sticky">
        <Toolbar>
          <img src={theMenu} style={{ height: "40px", width: "40px" }} onClick={() => setIsDrawerOpen(true)} />
          <img src={theCu} style={{ height: "70px", width: "210px", position: "absolute", left: "23%" }} />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box sx={{ width: 180, height: 844, backgroundColor: "#A98C86" }} textAlign="center" role="presentation" bgcolor="#A98C86">
          <button onClick={()=>{setAlll(true)}}> Show All</button>
        </Box>
      </Drawer>

      <div className="text-center mt-3">
        <button className="btn btn-warning" onClick={PaopaoAnd}> POOP!</button>
      </div>
      {/* <Navbar>
        <NavItem icon="O">
          <DropdownMenu
            navAllToFalse={allToFalse}
          />
        </NavItem>
      </Navbar> */}



      <div className='MapBox'>
        <button className="btn" id="BR1" onClick={() => { clickMap("Building 3_2") }} ><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        <button className="btn" id="BR2" onClick={() => { clickMap("Building 3_1") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        <button className="btn" id="BR3" onClick={() => { clickMap("Building Arun") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        <button className="btn" id="BR4" onClick={() => { clickMap("Building 1") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        {/* <button className="btn" id="BR5"><img src={thePin} onClick={()=>{console.log("HELLo5")}} style={{width:34, height:34}}/></button> */}
        <button className="btn" id="BR6" onClick={() => { clickMap("Building 2") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        {/* <button className="btn" id="BR7"><img src={thePin} onClick={()=>{console.log("HELLo7")}} style={{width:34, height:34}}/></button> */}
        <button className="btn" id="BR8" onClick={() => { clickMap("Building 100") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        {/* <button className="btn" id="BR9"><img src={thePin} onClick={()=>{console.log("HELLo9")}} style={{width:34, height:34}}/></button> */}
        <button className="btn" id="BR10" onClick={() => { clickMap("Building 4") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
        <button className="btn" id="BR11" onClick={() => { clickMap("Building Yo") }}><img src={thePin} style={{ width: 30, height: 34 }} /></button>
      </div>
      {/* <div className="box">
        <div className="review" id="R1"><h2>ตึก3</h2></div>
        <div className="review" id="R2"><h2>ตึก3 บันไดกลาง</h2></div>
        <div className="review" id="R3"><h2>ตึกอรุณ</h2></div>
        <div className="review" id="R4"><h2>ตึก1 หญิง</h2></div>
        <div className="review" id="R5"><h2>ตึก1 ชาย</h2></div>
        <div className="review" id="R6"><h2>ตึก2 หญิง</h2></div>
        <div className="review" id="R7"><h2>ตึก2 ชาย</h2></div>
        <div className="review" id="R8"><h2>ตึก 100 ปี</h2></div>
        <div className="review" id="R9"><h2>ตึก4 หญิง</h2></div>
        <div className="review" id="R10"><h2>ตึก4 ชาย</h2></div>
      </div> */}




      <button className="btn btn-secondary float-end mb-2 me-4 mt-2" onClick={() => setOpen(true)}>+  Add your review!
      </button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <div>
            <label htmlFor="building" className="form-label"><Badge bg='primary'>Building:</Badge> </label>
            <select onChange={(event) => { setBuilding(event.target.value) }}>
              <option value="">Select</option>
              <option value="Building Arun">ตึกอรุณ</option>
              <option value="Building 1">ตึก 1</option>
              <option value="Building 2">ตึก 2</option>
              <option value="Building 3_1">ตึก 3 บันไดกลาง</option>
              <option value="Building 3_2">ตึก 3 ฝั่งสวน</option>
              <option value="Building 4">ตึก 4</option>
              <option value="Building Yo">ตึกโยธา</option>
              <option value="Building 100">ตึก 100 ปี</option>
            </select>
          </div>
          <div>
            <label htmlFor="floor" className="form-label"><Badge bg='primary'>Floor:</Badge></label>
            <select onChange={(event) => { setFloor(event.target.value) }}>
              <option value={0}>Select</option>
              <option value={1}>ชั้น 1</option>
              <option value={2}>ชั้น 2</option>
              <option value={3}>ชั้น 3</option>
              <option value={4}>ชั้น 4</option>
              <option value={5}>ชั้น M</option>
            </select>
          </div>
          <div>
            <label htmlFor="toilet" className="form-label"><Badge bg='primary'>Toilet:</Badge></label>
            <select onChange={(event) => { setToilet(event.target.value) }}>
              <option value="">Select</option>
              <option value="Men">ห้องน้ำชาย</option>
              <option value="Women">ห้องน้ำหญิง</option>
            </select>
          </div>
          <div>
            <label htmlFor="rating" className="form-label"><Badge bg='primary'>Rating:</Badge></label>
            {/* <select onChange={(event) => { setRating(event.target.value) }}>
                <option value={-1}>Select</option>   
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select> */}
            <ReactStars size={30} count={5} half={false} onChange={ratingChanged} />
          </div>
          <div>
            <label htmlFor="name" className="form-label"><Badge bg='primary'>Name:</Badge></label>
            <input type="text" className="form-control" placeholder='Enter name' onChange={(event) => { setName(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="reviewing" className="form-label"><Badge bg='primary'>Comment:</Badge></label>
            <input type="text" className="form-control" placeholder='Enter review' onChange={(event) => { setReviewing(event.target.value) }} />
          </div>
          <button className="btn btn-success" onClick={(event) => { addReview(event); setOpen(false); }}> Submit </button>
        </DialogContent>
      </Dialog>



      <div>
        <Dialog open={allopen} onClose={() => { setAllOpen(false) }}> {mapping}</Dialog>
      </div>

      {/* <button className="btn btn-primary" type="button" onClick={() => { setAllOpen(true) }}>{buttonText}</button> */}

      <TheCard theList={reviewList} theDelete={deleteReview} check={tempt} update={getReview} theAlll={alll}/>
    </div>
  )
}

export default Homepage
