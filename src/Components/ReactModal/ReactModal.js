import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const ReactModal = (props) => {
    console.log(props.product);
    const {category,description,id,image,price,rating,title}=props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const displayContent = (text) => {
    //     return text.length < 20 ? text : text.slice(0, 20) + `<span class='fw-bold'>... read more</span>`;
    //   };


    return (
        <>
        <Button variant="primary mx-1" onClick={handleShow}>
        Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>{displayContent(title)}</Modal.Title> */}
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img className='w-50 mx-auto' src={image} alt="" />
              <p>{id}</p>
              <p>{price}</p>
              <p>{rating.rate}</p>
              <p>{category}</p>
              <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ReactModal;