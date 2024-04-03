import React, { useState, useEffect } from "react";
import axios from "axios";

const Statuses = () => {
  const [completedCount, setCompletedCount] = useState([]);
  const [pendingCount, setPendingCount] = useState([]);
  const [draftCount, setDraftCount] = useState([]);
  const [completedNCount, setCompletedNCount] = useState([]);
  const [pendingNCount, setPendingNCount] = useState([]);
  const [draftNCount, setDraftNCount] = useState([]);
 // const URL = process.env.REACT_APP_SERVER_URL;
  const comp = "http://localhost:5000/api/projects/comp";
  const pending = "http://localhost:5000/api/projects/pending";
  const draft = "http://localhost:5000/api/projects/draft";
  const Ncomp = "http://localhost:5000/api/projects/Ncomp";
  const Npending = "http://localhost:5000/api/projects/Npending";
  const Ndraft = "http://localhost:5000/api/projects/Ndraft";
  useEffect(() => {
    axios
      .get(comp)
      .then((response) => {
        console.log(setCompletedCount(response.data));
      })
      .catch((error) => console.log(error));
      axios
      .get(pending)
      .then((response) => {
        console.log(setPendingCount(response.data));
      })
      .catch((error) => console.log(error));
      axios
      .get(draft)
      .then((response) => {
        console.log(setDraftCount(response.data));
      })
      .catch((error) => console.log(error));
      axios
      .get(Ncomp)
      .then((response) => {
        console.log(setCompletedNCount(response.data));
      })
      .catch((error) => console.log(error));
      axios
      .get(Npending)
      .then((response) => {
        console.log(setPendingNCount(response.data));
      })
      .catch((error) => console.log(error));
      axios
      .get(Ndraft)
      .then((response) => {
        console.log(setDraftNCount(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="nb-statuses-wrapper">
        <div className="nb-statuses-header">
          <div className="main-title">
            <h5>STATUSES</h5>
          </div>
        
            <div className="nb-statuses-content">
              <div className="team-statuses">
                <div className="title">
                  <h6>vteams</h6>
                </div>
                <div className="completed-count count">
                     <span>{completedCount}</span>
                </div>
                <div className="pending-count count">
                  <span>{pendingCount}</span>
                </div>
                <div className="draft-count count">
                <span>{draftCount}</span>
                </div>
              </div>
              <div className="team-statuses">
                <div className="title nxb">
                  <h6>Nextbridge</h6>
                </div>
                <div className="completed-count count">
                  <span>{completedNCount}</span>
                </div>
                <div className="pending-count count">
                  <span>{pendingNCount}</span>
                </div>
                <div className="draft-count count">
                  <span>{draftNCount}</span>
                </div>
              </div>
              {/* <div className="team-statuses label-statuses">
              <div className="title">
                
              </div>
              <div className="completed-label count">
                  <p>Completed</p>
              </div>
              <div className="pending-label count">
                <p>Pending for review</p>
              </div>
              <div className="draft-label count">
                <p>Draft</p>
              </div>
            </div> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default Statuses;
