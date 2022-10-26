import React, { useEffect } from 'react'
import Modal from 'react-modal'
import {useState} from 'react';

Modal.setAppElement('#root')
export default function Md(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const customStyles = {
        content: {
          top: '35%',
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
      useEffect(()=> {setModalIsOpen(true)}, [])
    return(
        <div>
         <Modal isOpen = {modalIsOpen} onRequestClose = {()=>setModalIsOpen(false)} style ={customStyles}>
            <h2> Welcome!</h2>
            <p> :3 </p>
            <div>
                <button onClick = {()=>setModalIsOpen(false)}> Close</button>
            </div>
         </Modal>
        </div>
    )
}