import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        // !! converts undefined to false and truthy vals to true
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal_body'>{props.selectedOption}</p>}
        <button 
            className='button'
            onClick={props.handleClearSelectedOption}
        >
        Okay
        </button>
    </Modal>
)

export default OptionModal