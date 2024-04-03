import React from "react";
import Topbar from "../common/Topbar";
import Footer from "../common/Footer";
import ProgressBar from "../common/ProgressBar";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router";
import {
  FormControl,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import { useFormik } from "formik";

import "./Style.scss";
//import { postCosting } from "./services";

const Costing = () => {
  
  const { state } = useLocation();
  console.log("state", state);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      hours: " ",
    },
    onSubmit: async (values) => {
      const hours = parseInt(values.hours);
      var projName = localStorage.getItem('projName');
      var totalcost = hours * state;
      let payload = { projName, hours, state, totalcost };
        console.log("payload", payload);
        console.log(projName);
        const projectCostExist = axios.get(`http://localhost:5000/api/costing/project?projectName=${projName}`)
        .then((response) => {
         console.log(response.data, 'dataaaa');
        // navigate("/languages");
       })
       .catch((error) => {
         console.log(error);
       });
        if(projectCostExist.length == 0) {
          alert('dont exist');
         axios
          .post(`http://localhost:5000/api/costing/?totalHours=${state}&hourRate=${hours}&totalCost=${totalcost}&projectName=${projName}`)
          .then((response) => {
            console.log(response.data);
            alert('new costing insert');
            navigate("/languages");
          })
          .catch((error) => {
            console.log(error);
          });
        }else {
          alert('exist');
          var projName = localStorage.getItem('projName');
          axios
          .put("http://localhost:5000/api/costing/id", {
            projectName: projName,
            totalHours: state,
            hourRate: hours,
            totalCost: totalcost,
          })
          .then((response) => {
            console.log(response.data);
            alert('costing update');
            navigate("/languages");
          })
          .catch((error) => {
            console.log(error);
          });
        }
    },
    validate: async (values) => {
      let errors = {};
      if (!values.hours) {
        errors.hours = "Required";
      }
      return errors;
    },
  });
 
  
  return (
    <>
      <Topbar estimate={false} limiteRole={false} />
      <ProgressBar steps={3} />
      <form onSubmit={formik.handleSubmit}>
      <Card className="costing-card">
        <h5 className="costing-sub-title">TOTAL COST OF YOUR PROJECT</h5>
        <h2 className="costing-title">
          <span>$</span> {formik.values.hours * state}
        </h2>
       
          <table className="costing-table">
            <tr>
              <th className="text-left bl-0">Services</th>
              <th>Rate</th>
              <th>Hour</th>
              <th className="br-0">Cost</th>
            </tr>
            <tr>
              <td>{localStorage.getItem("projName")}</td>
              <td>
                <FormControl>
                  <TextField
                    variant="outlined"
                    placeholder="0"
                    name="hours"
                    onChange={formik.handleChange}
                    value={formik.values.hours}
                  />
                </FormControl>
                / hours
              </td>
              <td> {state}</td>
              <td>$ {formik.values.hours * state}</td>
            </tr>
            <tr>
              <td colSpan={3} className="text-right text-bold">
                Total
              </td>
              <td className="text-bold">$ {formik.values.hours * state}</td>
            </tr>
          </table>
      
      </Card>
      <div container className="estimate-btns-container">
          <Button
            variant="contained"
            className="secondary-btn estimate-nav-btn"
          >
            Back
          </Button>

          <Button
            variant="contained"
            className="secondary-btn estimate-nav-btn"
            type="submit"
          >
            Next
          </Button>
      </div>
      </form>
      <Footer />
    </>
  );
};

export default Costing;
