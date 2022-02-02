import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button 
            className='button button--link'
            onClick={props.handleDeleteOptions}
        >
            Remove All Options
        </button>
        {
            props.options.length === 0 && 
            <p>Please add an option to get started</p>
        }
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    option={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))   
        } 
    </div>
)


export default Options