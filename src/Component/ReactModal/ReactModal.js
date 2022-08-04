import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css'

const ReactModal = (props) => {
    console.log(props);
    let {image, title, price, description, rating} = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>   
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>
            

            <Modal className='p-3 m-3' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                
                </Modal.Header>
                <div className='text-center'>
                <Modal.Body> <img className='w-50 text-center' src={image} alt="" />  </Modal.Body>
                </div>
                <div className='info p-4'>
                    <p>{description}</p>
                    <h4>Price: {price}</h4>
                    <h5 className='text-success'>Ratings: {rating.rate}</h5>
                </div>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    
        </div>
    );
};

export default ReactModal;