import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import AddEditQuestions from '../PapersChild/addEdit-questions';

function Papers() {
     const [willAdd, setWillAdd] = useState(false);
     const [paperName, setPaper] = useState({});
     const [paper, setPapers] = useState({});


     useEffect(()=>{
          setPapers({
               questions: [
                    {
                         date: '2021-12-04',
                         questionPaperName: 'Genereal Knowledge',
                         test: [
                              {
                                   name: 'PM of India',
                                   options: ['Modi', 'Rahul'],
                                   correctAnswer: 'Modi'
                              },
                              {
                                   name: 'Founder of Isro',
                                   options: ['Modi', 'Rahul'],
                              },
                              {
                                   name: 'CM of Telangana',
                                   options: ['Modi', 'Rahul'],
                              }
                         ],
                    },
                    {
                         date: '2021-12-04',
                         questionPaperName: 'Operating System',
                         test: []
                    },
                    {
                         date: '2021-12-06',
                         test: [ {
                              name: 'CM of Telangana',
                              options: ['Modi', 'Rahul'],
                         }],
                         questionPaperName: 'Java Programming',
                    },
               ],
          });
     },[])

     useEffect(()=>{
          console.log(paper);
     },[paper])

     var test = [];

     function addEditQuestions(que) {
          setPaper(que);
          paper.questions = paper.questions.filter((temp)=>{
               return (temp.date !== que.date || temp.questionPaperName !== que.questionPaperName)
          })  
          setPapers(paper);        
          setWillAdd((prevState) => !prevState);
     }


     function onEditComplete(test) {
          setPapers(()=>{
               let temp = {...paper};
               temp.questions.push(test);
               return temp;
          });
               setWillAdd(!willAdd);
     }

     if (!willAdd && Object.keys(paper).length !== 0) {
          test = paper.questions.map((question) => {
               return (
                    <div class="card" style={{margin:'10px',borderColor:'darkgreen'}}>
                         <div class="card-header" name="que" style={{backgroundColor:'lightsteelblue'}}>
                              {question.date}
                         </div>
                         <div class="card-body">
                              <h5 class="card-title">
                                  {question.questionPaperName}
                              </h5>
                              <p class="card-text">
                                   With supporting text below as a natural
                                   lead-in to additional content.
                              </p>
                              <div className='row'>
                                   <div className='col-md-2'>
                              <input
                                   type="submit"
                                   class="btn btn-primary"
                                   value="ADD/EDIT"
                                   onClick={() =>
                                        addEditQuestions(question)
                                   }
                              />
                              </div>
                              <div className='col-md-2'>
                              <input
                                   type="submit"
                                   class="btn btn-secondary"
                                   value="CONFIGURE"
                                   
                              />
                              </div>
                              <div className='col-md-2'>
                              <input
                                   type="submit"
                                   class="btn btn-danger"
                                   value="DELETE"
                                   
                              />
                              </div>
                              </div>
                         </div>
                    </div>
               );
          });

          return (
               <>
                    {paper.questions.length === 0 && (
                         <p style={{ textAlign: 'center' }}>
                              No Question papers Availabe
                         </p>
                    )}
                    {paper.questions.length > 0 && <div>{test}</div>}
               </>
          );
     } else {
          return <AddEditQuestions name={paperName}  onEditComplete={onEditComplete}></AddEditQuestions>;
     }
}

export default Papers;
