import React, { useState } from "react";


export default function Form(props) {
    //  --------------------------------------------------------------------------
    //                              Constants    

    //  The name of the task
    const [taskName, setTaskName] = useState("");
    // option selected for Task
    const [taskOption, setTaskOption] = useState("");

    //  --------------------------------------------------------------------------
    //                              Functions    
    
    //  Override the submit function and instead call the addTask function from App.js
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(taskName);
        props.addTask(taskOption);
        setTaskName('');
        setTaskOption('');    
    }

    //  When there is change detected on the input, update the name & Option of the task
    function handleChange(e) {
        setTaskName(e.target.value);
        setTaskOption(e.target.value);
    }

    //  --------------------------------------------------------------------------
    //                              HTML Block
    return (
        <>
        <form onSubmit={handleSubmit} className="form-task">
            <input
            type="text"
            id="input-task"
            className="input"
            autoComplete="off"        
            placeholder="What needs to be done?"    
            name="task"
            value={taskName}
            onChange={handleChange}
            />
            <button type="submit" id="btn-add" className="btn">
            <i className="fa fa-plus"></i>
            </button> 



          
    <div>
           
            <select 
             name="task"  
             className="input"  
             autoComplete="off" 
             id ="input-cars" 
             placeholder="When its need to be done? " 
             value={taskOption}  >
                <option value="morning">Morning</option>
                <option value="afternoon">AfterNoon</option>
                <option value="evening">Evening</option>
            </select>
        
            <button type="submit" id="btn-add" className="btn">
            <i className="fa fa-plus"></i>
            </button>
     
    </div>
            
         
        
      
        </form>
        </>
    );
}
