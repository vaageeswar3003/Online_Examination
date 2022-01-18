function Dashboard() {
     return (
          <>
          <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="year">
                              COURSE
                         </label>
                         <select name="year" className="form-control">
                              <option>--SELECT--</option>
                              <option>B.Tech</option>
                              <option>M.Tech</option>
                         </select>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="course">
                              BRANCH
                         </label>
                         <select name="course" className="form-control">
                              <option>--SELECT--</option>
                              <option>CSE</option>
                              <option>IT</option>
                         </select>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="year">
                              YEAR
                         </label>
                         <select name="year" className="form-control">
                              <option>--SELECT--</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                         </select>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="year">
                              SECTION
                         </label>
                         <select name="year" className="form-control">
                              <option>--SELECT--</option>
                              <option>A</option>
                              <option>B</option>
                              <option>C</option>
                              <option>D</option>
                         </select>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="sem">
                              SEMESTER
                         </label>
                         <select name="sem" className="form-control">
                              <option>--SELECT--</option>
                              <option>I</option>
                              <option>II</option>
                         </select>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <label for name="sem">
                              DATE
                         </label>
                         <input type="date" className="form-control"></input>
                    </div>
               </div>
               <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                         <input type="button" className="btn btn-success" value="CREATE"></input>
                    </div>
               </div>
          </>
     );
}

export default Dashboard;
