import React, { useEffect } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import { Button, Popover, Typography } from '@mui/material'
// images
import Notifi from "../../../assets/images/notifi.png";
import { useState } from 'react';

const Topbar = ({ estimate = false}) => {
  const [showEstimate, setShowEstimate] = useState(estimate);
  const [limitRole, setLimitRole] = useState(false);
  const navigate = useNavigate();
  const [elem, setelem] = React.useState(null);
  const handleProfile = (event) => {
    setelem(event.currentTarget);
  };
  const handleClose = () => {
    setelem(null);
  };
  const open = Boolean(elem);
  const removeToken = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user");
    localStorage.removeItem("roleName");
    localStorage.removeItem("username");
    navigate("/");
};
var key = localStorage.getItem("user");
// getting initials
var getInitials = function (string) {
  var names = string.split(' '), 
      initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
 var profileName = getInitials(key);
 var roleKey = localStorage.getItem("roleName");

  useEffect(() => {
    if(roleKey == 'resource') {
      setLimitRole(false);
     } else {
      setLimitRole(true);
     }
  })

  return (
    <>
      <header className='nb-header'>
        <div className="nb-right-container">
          <div className='nb-logo'>
            <h2>
              ESTIMATION
              <span>SOFTWARE</span>
            </h2>
          </div>
          {showEstimate && limitRole ?
            (
              <div className='nb-create-est-btn'>
              <Button className='light-btn new-est-btn'>
                <Link to='/new'> <span>+</span> CREATE NEW ESTIMATE</Link>
              </Button>
            </div>
            ) : ' '
          }
          {/* {limitRole ?
            (
               <span>hellloooooo</span>
            ) : (
              <span>byeee</span>
            )
          } */}

        </div>
        <div className="nb-left-container">
            {/* <div className='nb-notifi-wrapper'>
                <img src={Notifi} alt="notification"/>
            </div> */}
            <div className='nb-profile-wrapper'  onClick={handleProfile}>
                 {
                  profileName
                 }
            </div>
            <Popover
              open={open}
              anchorEl={elem}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              className="profile-popover"
              onClick={handleProfile}
            >
              <Typography variant="h5" component="h5">
                <a onClick={removeToken}>Logout</a>
              </Typography>
            </Popover>
        </div>
      </header>
    </>
  )
}

export default Topbar 
