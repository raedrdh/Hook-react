import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Add({ Addm }) {
    const [show, setShow] = useState(false);
    const [addmovie, setAddmovie] = useState([{
        posterUrl: "https://i.pinimg.com/originals/aa/15/42/aa15422cb191838cd1b4737c7325d1fc.jpg",
            title: "Vikings",
            description: "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision..",
            rate: 2
        }])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = (event) => {
        setAddmovie((oldstate) => ({
            ...oldstate, [event.target.name ]: event.target.value
        }))
    }
    return (
        <>
            <Button style={{ backgroundColor: "#610094" }} variant="primary" onClick={handleShow}>
                click to open new list
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your film discreption</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column' }} >
                    Title :<input name="title" onChange={handleAdd} />
                    Description :<input name="description" onChange={handleAdd} />
                    PosterUrl :<input name="posterUrl" onChange={handleAdd} />
                    Rate :<input name="rate" onChange={handleAdd} />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "red" }} variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button style={{ backgroundColor: "#610094" }} variant="primary" onClick={() => Addm(addmovie)}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Add