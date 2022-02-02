import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        // !! converts undefined to false and truthy vals to true
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button>Okay</button>
    </Modal>
)

export default OptionModal