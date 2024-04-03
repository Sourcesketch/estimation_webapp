import React from "react";
import {
  Box,
  Grid,
  FormControl,
  TextField,
  Button,
  textFieldClasses,
} from "@mui/material";
const TableRows = ({
  rowsData,
  rowsExtraData,
  deleteTableRows,
  handleChange,
  addSubRows,
  showExtraRow,
  handleExtraChange,
  deleteTableExtraRows,
}) => {
  return rowsData.map((data, index) => {
    const { screenName, hours , screenSections } = data;

   
    return (
      <>
        <tr key={index}>
          <td>
            <span className="screen-index">{index + 1}.</span>
            <FormControl>
              <TextField
                variant="standard"
                name="screenName"
                placeholder="App Icon"
                onChange={(evnt) => handleChange(index, evnt)}
                value={screenName}
              />
            </FormControl>
            <Button
              className="secondary-button add-subRow"
              onClick={() => addSubRows(index)}
            >
              +
            </Button>
           

              {screenSections.length > 0
                ? screenSections.map((elem, subIndex) => {
                    //const { screenSections } = elem;
                    return (
                      <>
                        <td className="subRowInput">
                        <FormControl key={elem.subIndex}>
                          <TextField
                            type="text"
                            key={subIndex}
                            variant="standard"
                            name="screenSections"
                            placeholder="Login Screen"
                            onChange={(evnt) => handleExtraChange(index, subIndex, evnt)}
                            value={elem}
                          />
                        </FormControl>
                        <span
                          className="subdata"
                          onClick={() => deleteTableExtraRows(index, subIndex)}
                        ></span>
                        </td>
                      </>
                    );
                  })
                : ""}
                
            </td>
          
          <td>
            <FormControl>
              <TextField
                variant="standard"
                name="hours"
                placeholder="2"
                
                onChange={(evnt) => handleChange(index, evnt)}
                value={hours}
              />
            </FormControl>
          </td>
          <span
            className="data"
            onClick={(index) => deleteTableRows(index)}
          ></span>
        </tr>
        {/* <tr className="totalRow">
          <td>Total</td>
          <td>{totalhours}</td>
        </tr> */}
      </>
    );
  });
};

export default TableRows;
