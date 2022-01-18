import DisplayOptions from "../DisplayOptions/display-options";
import { useState, useRef } from "react";

function AddItem() {


     const option = useRef();

    const[options, setOptions] = useState([]);

    function onAddOption() {

         setOptions((prevState)=>[...prevState,option.current.value]);
    }

     return (
          <>
               <h1 style={{ textAlign: 'center' }}>ENTER QUESTION PAPER</h1>
               <div className="row">
                   <div className="col-md-6">
                    <div className="row" style={{ margin: '10px' }}>
                         <div className="col-md-1">
                              <label forName="question">QUESTION</label>
                         </div>
                         <div className="col-md-7 offset-md-1">
                              <input
                                   name="question"
                                   type="text"
                                   className="form-control"
                              />
                         </div>
                    </div>
                    <div className="row" style={{ margin: '10px' }}>
                         <div className="col-md-1">
                              <label forName="options">OPTIONS</label>
                         </div>
                         <div className="col-md-7 offset-md-1">
                              <input
                                   ref = {option}
                                   name="options"
                                   type="text"
                                   className="form-control"
                              />
                         </div>
                         <div className="col-md-1">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="25"
                                   height="25"
                                   fill="currentColor"
                                   class="bi bi-plus-circle-fill"
                                   viewBox="0 0 16 16"
                                   onClick={onAddOption}
                              >
                                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                              </svg>
                         </div>
                    </div>
                    <div className="row" style={{ margin: '10px' }}>
                         <div className="col-md-1">
                              <label forName="question">CORRECT ANSWER</label>
                         </div>
                         <div className="col-md-7 offset-md-1">
                              <input
                                   name="crct_answer"
                                   type="text"
                                   className="form-control"
                              />
                         </div>
                    </div>
                    <div className="row" style={{ margin: '10px' }}>
                         <div className="col align-self-center">
                              <input
                                   type="button"
                                   className="btn btn-success"
                                   value="ADD"
                              ></input>
                         </div>
                    </div>
                    </div>
                    <div
                         className="col-md-5"
                         style={{ border: 'solid lightblue' }}
                    >
                        <DisplayOptions opt={options}></DisplayOptions>
                    </div>
                    
               </div>
          </>
     );
}

export default AddItem;
