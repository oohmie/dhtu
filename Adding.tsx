import { Axios } from 'axios';
import React, { useState } from 'react'
import { useRef } from "react"
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import Homepage from './Homepage';

function Adding() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null)
  //const commentRef = useRef<HTMLInputElement>(null)
  function handleSubmit(event) {
    event.preventDefault()
    console.log(nameRef.current?.value)
    navigate(-1)
  }
  const customStyles = {
    content: {
      top: '30%',
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

 /* const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState(0);
  const [toilet, setToilet] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [reviewing, setReviewing] = useState("");

  const addReview = () => {
    Axios.post('http://localhost:3001/add', {
      building: building,
      floor: floor,
      toilet: toilet,
      rating: rating,
      name: name,
      reviewing: reviewing
    }).then(() => {
      setReviewList([
        ...reviewList,
        {
          building: building,
          floor: floor,
          toilet: toilet,
          rating: rating,
          name: name,
          reviewing: reviewing
        }])
    })
  }*/
  return (
    <Modal isOpen={true} style={customStyles}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="building" className="form-label">Building: </label>
            <input type="text" className="form-control" placeholder='Enter building' /*onChange={(event) => { setBuilding(event.target.value) }}*/ />
          </div>
          <div className="mb-3">
            <label htmlFor="floor" className="form-label">Floor: </label>
            <input type="number" className="form-control" placeholder='Enter floor' /*onChange={(event) => { setFloor(event.target.value) }} *//>
          </div>
          <div className="mb-3">
            <label htmlFor="toilet" className="form-label">Tolet: </label>
            <input type="text" className="form-control" placeholder='Enter toilet'/* onChange={(event) => { setToilet(event.target.value) }}*/ />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating: </label>
            <input type="number" className="form-control" placeholder='Enter rating' /*onChange={(event) => { setRating(event.target.value) }}*/ />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name: </label>
            <input type="text" className="form-control" placeholder='Enter name'/* onChange={(event) => { setReviewing(event.target.value) }} *//>
          </div>
          <div className="mb-3">
            <label htmlFor="reviewing" className="form-label">Comment: </label>
            <input type="text" className="form-control" placeholder='Enter review' />
          </div>
          <button className="btn btn-success" type="submit"> Submit </button>
        </form>
      </div>
    </Modal>
  )
}

export default Adding