import React from 'react';
import { useState } from 'react';
import './Homepage.css';

export function DropdownMenu({ navAllToFalse}) {

  /*function DropdownItem(props) {
    return (
      <h1>
        <label style={{color: "white"}}></label>
        <select>building</select>
      </h1>
    )
  }*/


  const handleInput = (field) => (event) => {
    const { value } = event.target;


    switch (value) {
      case "Building Arun":
        // onBuildingFilter(value);
        console.log(value);
        navAllToFalse();
        break;
      default:
        break;
    }
  }
  return (
    <div className="dropdown">
      <div style={{ color: "white" }}>
        <h1>Filter</h1>
      </div>
      <div>
        <label className="form-label" style={{ color: "white" }}>Building:  </label>
        <select id="building" onChange={handleInput("building")}>
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
        <div>
          <label className="form-label" style={{ color: "white" }}>Rating: </label>
          <select id="rating">
            <option value={-1}>Select</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}

export function NavItem(props) {

  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <button className="icon-button" onClick={() => {setOpen(!open)}}>
        {props.icon}
      </button>

      {open ? props.children : null}
    </li>
  )
}
