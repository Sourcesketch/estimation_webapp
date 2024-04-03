import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { CircularProgress } from "@mui/material";
import SearchIcon from "../../../../assets/images/search.svg";
import SelectIcon from "../../../../assets/images/select.svg";
import { Link } from "react-router-dom";

const EstimatesHistory = () => {
  const [projList, setProjList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
  const handleChange = async () => {
    var key = inputSearch;
    setIsLoading(true);
    axios
      .get(`http://localhost:5000/api/projects/search/?proj_name=${key}&proj_tags=${key}`)
      .then((response) => {
        setProjList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSelected = async (event) => {
    var selectedVal = event.target.value;
    if (selectedVal === "Vteams") {
      console.log(selectedVal);
      axios
        .get("http://localhost:5000/api/projects/Vsort")
        .then((response) => {
          setProjList(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    } else if (selectedVal === "Nextbridge") {
      axios
        .get("http://localhost:5000/api/projects/Nsort")
        .then((response) => {
          setProjList(response.data);
        })
        .catch((error) => console.log(error));
    } else if (selectedVal === "RecentlyAdded") {
      axios
        .get("http://localhost:5000/api/projects/dsort")
        .then((response) => {
          setProjList(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("no data");
    }
  };
  const handleEditEstimate = async(_id) => {
    console.log(_id);
  }
  useEffect(() => {
    setIsLoading(true);
    var key = localStorage.getItem("roleName");
    var user = localStorage.getItem("user");
    console.log('key', key);
    if(key === 'manager') {
      axios
      .get(`http://localhost:5000/api/projects/?prepared_by=${user}`)
      .then((response) => {
        setProjList(response.data)
        console.log(response.data);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
    }else if(key === 'resource') {
      var userName = localStorage.getItem("username");
      console.log(userName);
      axios
      .get(`http://localhost:5000/api/projects/resource/?resource_name=${userName}`)
      .then((response) => {
       setProjList(response.data)
        console.log(response.data);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
    }else {
      console.log('no projects found');
    }
  }, []);
  console.log(isLoading);
  return (
    <>
      <div className="nb-estimatesHistory-wrapper">
        <div className="nb-estimatesHistory-header">
          <div className="main-title">
            <h5>ESTIMATES</h5>
          </div>
          <div className="nb-action-wrapper">
            {/* search box */}
            <div className="search-box">
              <input
                type="text"
                value={inputSearch}
                placeholder="Search By"
                className="search-input"
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <img src={SearchIcon} alt="search" onClick={handleChange} />
            </div>
            <div className="sort-box">
              {/* sort data */}
              <select
                id="sort"
                onChange={handleSelected}
                className="sort-autocomplete"
              >
                <option value="DEFAULT">Sort By:</option>
                <option value="Vteams">Vteams</option>
                <option value="Nextbridge">Nextbridge</option>
                <option value="RecentlyAdded">RecentlyAdded</option>
              </select>
              <img src={SelectIcon} alt="select" />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="circular-progress">
            <CircularProgress />
          </div>
        ) : (
          projList.map((p, index) => (
            <>
              <div className="nb-estimatesHistory-content" key={p._id}>
                <div className="calender-wrapper">
                  <div className="date-box">
                    <span>{moment(p.createdAt).format("DD")}</span>
                  </div>
                  <div className="monthYear-box">
                    <span>{moment(p.createdAt).format("MMM YY")}</span>
                  </div>
                </div>
                <div className="project-meta">
                  <span>PROPOSAL FOR</span>
                  {/* <h5 key={p._id} onClick={() => handleEditEstimate(p._id)}>{p.proj_name}</h5> */}
                  <h5>  
                  <Link to={`/timeline/${p._id}`}>
                  {p.proj_name}
                  </Link>
                  </h5>
                  <span>PREPARED BY</span>
                  <p>{p.prepared_by}</p>
                </div>
                <div className="prog-lang">
                  {p.proj_tags.map((tag) => {
                    return (
                      <>
                        <div className="lang-box">
                          <span>{tag}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="proj-status">
                  <div className="status-box" key={p._id}>
                    <span>{p.proj_status}</span>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default EstimatesHistory;
