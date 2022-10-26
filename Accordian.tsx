import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import { Rating } from '@mui/material';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

// const building = [
// {
//     name: "Building Arun"
// },
// {
//     name: "Building1"
// }
// ]
// const floor = [0,1,2,3,"M"];

function CustomToggle({ children, eventKey, updateR }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
        console.log(eventKey);
        {updateR()};
    }
    );
    return (
        <Button
            variant='warning'
            // style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

function TheCard({ theList, theDelete, check, update, theAlll}) {
    function averageStar(name, floorStar, toiletStar) {
        let sum = 0.0
        let count = 0.0
        theList.forEach((val, key) => {
            if (val.building == name && (val.floor == floorStar || floorStar == 0) && (val.toilet == toiletStar || toiletStar == "")) {
                sum += val.rating
                count += 1
            }
        })
        const ans = sum / count

        return ans
    }

    function count(name, floorStar, toiletStar) {
        let sth = 0;
        theList.forEach((val, key) => {
            if (val.building == name && (val.floor == floorStar || floorStar == 0) && (val.toilet == toiletStar || toiletStar == "")) {
                sth += 1
            }
        })
        return sth;
    }

    const [floorValueArun, setFloorValueArun] = useState(0)
    const [toiletValueArun, setToiletValueArun] = useState("")

    const [floorValue1, setFloorValue1] = useState(0)
    const [toiletValue1, setToiletValue1] = useState("")

    const [floorValue2, setFloorValue2] = useState(0)
    const [toiletValue2, setToiletValue2] = useState("")

    const [floorValue3_1, setFloorValue3_1] = useState(0)
    const [toiletValue3_1, setToiletValue3_1] = useState("")

    const [floorValue3_2, setFloorValue3_2] = useState(0)
    const [toiletValue3_2, setToiletValue3_2] = useState("")

    const [floorValue4, setFloorValue4] = useState(0)
    const [toiletValue4, setToiletValue4] = useState("")

    const [floorValueYo, setFloorValueYo] = useState(0)
    const [toiletValueYo, setToiletValueYo] = useState("")

    const [floorValue100, setFloorValue100] = useState(0)
    const [toiletValue100, setToiletValue100] = useState("")
    // const buildingOrder = building.map((val) =>{
    //     return val.name
    // })
    // const [floorValue, setFloorValue] = useState(0)
    // const [toiletValue, setToiletValue] = useState("")
    // const floorValues: { 
    //     [buildingOrder[0]]: floorState,
    // }
    // const Elements=building.map((build,key)=>{
    //     return(
    //         <Card>
    //             <Card.Header>
    //                 <h1>{build.name}</h1>
    //                 <select onChange={(e) => { setFloorValue(e.target.value) }}>
    //                     <option value={0}>Select</option>
    //                     <option value={1}>ชั้น {floor[1]}</option>
    //                     <option value={2}>ชั้น {floor[2]}</option>
    //                     <option value={3}>ชั้น {floor[3]}</option>
    //                     <option value={4}>ชั้น {floor[4]}</option>
    //                 </select>
    //                 <select onChange={(e) => { setToiletValue(e.target.value) }}>
    //                     <option value="">Select</option>
    //                     <option value="Men">ห้องน้ำชาย</option>
    //                     <option value="Women">ห้องน้ำหญิง</option>
    //                 </select>
    //                 <Rating name = "read-only" value ={averageStar(build.name)} precision={0.1} readOnly/>
    //                 <CustomToggle eventKey={build.name}>Click me!</CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey={build.name}>
    //                 <Card.Body>
    //                     {theList.map((val, key) => {
    //                         if (val.id == null) { return null } else if (val.building == build.name && (val.floor == floorValueArun || floorValue == 0) && (val.toilet == toiletValue || toiletValue == "")) {
    //                             return (
    //                                 <div className='review card'>
    //                                     <div className='card-body text-left'>
    //                                         <p className='card-text'>Building: {val.building}</p>
    //                                         <p className='card-text'>Floor: {val.floor}</p>
    //                                         <p className='card-text'>Toilet: {val.toilet}</p>
    //                                         <p className='card-text'>Rating: {val.rating}</p>
    //                                         <p className='card-text'>Name: {val.name}</p>
    //                                         <p className='card-text'>Comment: {val.reviewing}</p>
    //                                         <div className='d-flex'>
    //                                             <button className='btn btn-warning' onClick={() => { theDelete(val.id) }}>Delete</button>
    //                                         </div>
    //                                         {/* <p className='card-text'>{val.id}</p> */}
    //                                     </div>
    //                                 </div>
    //                             )
    //                         }
    //                     })}
    //                 </Card.Body>
    //             </Accordion.Collapse>
    //         </Card>
    //     )
    // })

    const cardArun = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building Arun</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValueArun(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValueArun(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building Arun", floorValueArun, toiletValueArun)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building Arun", floorValueArun, toiletValueArun)})</></p>
            </div>
            <CustomToggle eventKey="Building Arun" updateR = {update}>Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building Arun">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building Arun" && (val.floor == floorValueArun || floorValueArun == 0) && (val.toilet == toiletValueArun || toiletValueArun == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card1 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building 1</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue1(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                            <option value={2}>ชั้น 2</option>
                            <option value={3}>ชั้น 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue1(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 1", floorValue1, toiletValue1)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 1", floorValue1, toiletValue1)})</></p>
            </div>
            <CustomToggle eventKey="Building 1">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 1">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 1" && (val.floor == floorValue1 || floorValue1 == 0) && (val.toilet == toiletValue1 || toiletValue1 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card2 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building 2</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue2(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                            <option value={2}>ชั้น 2</option>
                            <option value={3}>ชั้น 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue2(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 2", floorValue2, toiletValue2)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 2", floorValue2, toiletValue2)})</></p>
            </div>
            <CustomToggle eventKey="Building 2">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 2">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 2" && (val.floor == floorValue2 || floorValue2 == 0) && (val.toilet == toiletValue2 || toiletValue2 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card3_1 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building 3 (Middle stair)</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue3_1(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                            <option value={2}>ชั้น 2</option>
                            <option value={3}>ชั้น 3</option>
                            <option value={4}>ชั้น 4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue3_1(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 3_1", floorValue3_1, toiletValue3_1)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 3_1", floorValue3_1, toiletValue3_1)})</></p>
            </div>
            <CustomToggle eventKey="Building 3_1">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 3_1">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 3_1" && (val.floor == floorValue3_1 || floorValue3_1 == 0) && (val.toilet == toiletValue3_1 || toiletValue3_1 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card3_2 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building 3 (Garden side)</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue3_2(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                            <option value={2}>ชั้น 2</option>
                            <option value={3}>ชั้น 3</option>
                            <option value={4}>ชั้น 4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue3_2(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 3_2", floorValue3_2, toiletValue3_2)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 3_2", floorValue3_2, toiletValue3_2)})</></p>
            </div>
            <CustomToggle eventKey="Building 3_2">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 3_2">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 3_2" && (val.floor == floorValue3_2 || floorValue3_2 == 0) && (val.toilet == toiletValue3_2 || toiletValue3_2 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card4 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Building 4</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue4(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue4(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 4", floorValue4, toiletValue4)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 4", floorValue4, toiletValue4)})</></p>
            </div>
            <CustomToggle eventKey="Building 4">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 4">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 4" && (val.floor == floorValue4 || floorValue4 == 0) && (val.toilet == toiletValue4 || toiletValue4 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const cardYo = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>Civil Engineering Building</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValueYo(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={1}>ชั้น 1</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValueYo(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building Yo", floorValueYo, toiletValueYo)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building Yo", floorValueYo, toiletValueYo)})</></p>
            </div>
            <CustomToggle eventKey="Building Yo">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building Yo">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building Yo" && (val.floor == floorValueYo || floorValueYo == 0) && (val.toilet == toiletValueYo || toiletValueYo == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>

    const card100 = <Card className="mb-3" style={{ width: "87.5%" }}>
        <Card.Header><h3>100 Years Building</h3></Card.Header>
        <Card.Body>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Select onChange={(e) => { setFloorValue100(e.target.value) }}>
                            <option value={0}>Floor</option>
                            <option value={5}>ชั้น M</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Select onChange={(e) => { setToiletValue100(e.target.value) }}>
                            <option value="">Type</option>
                            <option value="Men">ห้องน้ำชาย</option>
                            <option value="Women">ห้องน้ำหญิง</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div style={{ display: "flex", gap: "10px" }}>
                <Rating value={averageStar("Building 100", floorValue100, toiletValue100)} precision={0.1} readOnly />
                <p style={{ color: "black" }}><>({count("Building 100", floorValue100, toiletValue100)})</></p>
            </div>
            <CustomToggle eventKey="Building 100">Open review</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="Building 100">
            <Card.Body>
                {theList.map((val, key) => {
                    if (val.id == null) { return null } else if (val.building == "Building 100" && (val.floor == floorValue100 || floorValue100 == 0) && (val.toilet == toiletValue100 || toiletValue100 == "")) {
                        return (
                            <div className='review card mb-2' >
                                <div className='card-body text-left'>
                                    <p><Rating value={val.rating}/></p>
                                    <Row className='mb-3'>
                                        <Col>
                                            <p className='card-text' >
                                                <Badge bg="primary">Floor:</Badge> 
                                                <Badge bg="secondary">{val.floor}</Badge>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className='card-text'>
                                            <Badge bg="primary">Toilet: </Badge>
                                                <Badge bg="secondary">
                                                    {val.toilet}
                                                </Badge>
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className='card-text'>
                                        <Badge bg="primary">Name:</Badge>
                                        <Badge bg="secondary">{val.name}</Badge>
                                    </p>
                                    <p className='card-text'>
                                        <Badge bg="primary">
                                            Comment: 
                                        </Badge>
                                        <Badge bg="secondary">
                                            {val.reviewing}
                                        </Badge>
                                    </p>
                                    <div className='d-flex'>
                                        <Button className='btn btn-danger' size="sm" onClick={() => { theDelete(val.id) }}>Delete</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                })}
            </Card.Body>
        </Accordion.Collapse>
    </Card>
    return (
        <Accordion>
            {(check == "Building Arun" || theAlll) && cardArun}
            {(check == "Building 1" || theAlll) && card1}
            {(check == "Building 2" || theAlll)&& card2}
            {(check == "Building 3_1" || theAlll) && card3_1}
            {(check == "Building 3_2" || theAlll)&& card3_2}
            {(check == "Building 4" || theAlll)&& card4}
            {(check == "Building Yo" || theAlll)&& cardYo}
            {(check == "Building 100" || theAlll)&& card100}
        </Accordion>
    );
}
export default TheCard