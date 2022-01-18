import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import EditQuestion from '../EditQuestion/edit-question';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function AddEditQuestions(props) {
     const [editQuestion, setEditQuestion] = useState(false);
     const [update, setUpdate] = useState(false);
     const [question, setQuestion] = useState({});
     const [original, setOriginal] = useState({});
     const[questionsList, setQuestionsList] = useState([]);

     useEffect(()=>{
          setQuestionsList(props.name.test);
          setOriginal(props.name);
     },[]);

     useEffect(()=>{
          if(update === true){
               props.onEditComplete(original)
          }
     },[update]);

     useEffect(()=>{
          console.log(questionsList)
     },[questionsList]);

     useEffect(()=>{
          console.log(original)
     },[original]);

     useEffect(()=>{
          if(question.name){
          setQuestionsList(questionsList.filter((que)=>{
               return que !== question;
          }));
          setEditQuestion(!editQuestion);
     }
     },[question]);
     
     function onEditQuestion(question) {
          setQuestion(question);
     }

     function getEditedQuestion(editedQuestion){
         setQuestionsList([...questionsList,editedQuestion]);
         setEditQuestion(!editQuestion);
     }

     function onDeleteQuestion(que){
          if(window.confirm("Do you want to delete the question?")){
               setQuestionsList(questionsList.filter((q)=>{
                    return q != que;
               }))
          }
     }


     if (!editQuestion) {
          if(questionsList.length === 0){
               return(<>
               <div className="row">
                         <div className="offset-md-8 col-md-1">
                              <input
                                   type="button"
                                   className="btn btn-secondary"
                                   value="MAKE CHANGES"
                                   style={{ marginTop: '10px' }}
                                   onClick={()=>{
                                        toast.success('Changes Saved',{position: toast.POSITION.TOP_CENTER})
                                        setOriginal(()=>{
                                             var temp = {...original}
                                             temp.test = questionsList;
                                             return temp;
                                        })
                                   }}
                              ></input>
                         </div>
                         <div className="offset-md-1 col-md-1">
                              <input
                                   type="button"
                                   className="btn btn-success"
                                   value="SUBMIT"
                                   style={{ marginTop: '10px' }}
                                   onClick={()=>{
                                        setUpdate(!update);
                                   }}
                              ></input>
                         </div>

          </div>
          <h4 style={{textAlign:'center'}}>NO QUESTIONS</h4></>)
          } else {
          return (
               <>
                    <div className="row">
                         <div className="offset-md-8 col-md-1">
                              <input
                                   type="button"
                                   className="btn btn-secondary"
                                   value="MAKE CHANGES"
                                   style={{ marginTop: '10px' }}
                                   onClick={()=>{
                                        toast.success('Changes Saved',{position: toast.POSITION.TOP_CENTER})
                                        setOriginal(()=>{
                                             var temp = {...original}
                                             temp.test = questionsList;
                                             return temp;
                                        })
                                   }}
                              ></input>
                         </div>
                         <div className="offset-md-1 col-md-1">
                              <input
                                   type="button"
                                   className="btn btn-success"
                                   value="SUBMIT"
                                   style={{ marginTop: '10px' }}
                                   onClick={()=>{
                                        setUpdate(!update);
                                   }}
                              ></input>
                         </div>
                    </div>
                    {questionsList.length > 0 && questionsList.map((test) => {
               return (
                    <ul class="list-group" style={{ margin: '10px'}}>
                         <li class="list-group-item" style={{borderColor:"darkgreen"}}>
                              {test.name}
                              <p style={{ marginLeft: '5px' }}>
                                   <div className='row'>
                                        <div className='col-md-1'>
                                        <svg
                                        style={{cursor:'pointer'}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                        onClick={()=>onEditQuestion(test)}
                                   >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                             fill-rule="evenodd"
                                             d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                   </svg>
                                        </div>
                                        <div className='col-md-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>onDeleteQuestion(test)} style={{cursor:'pointer',color:'red'}} width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                                        </div>
                                   </div>
                              </p>
                         </li>
                    </ul>
               );
          })}
               </>
          
          );
     }
     } else {
          return <EditQuestion que={question} sendQuestion={getEditedQuestion} ></EditQuestion>;
     }
}

export default AddEditQuestions;
