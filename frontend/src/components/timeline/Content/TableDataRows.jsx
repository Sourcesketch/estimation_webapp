import React from "react";
import {
  Box,
  Grid,
  FormControl,
  TextField,
  Button,
  textFieldClasses,
} from "@mui/material";
const TableDataRows = ({
  rowsData,
  rowsExtraData,
  deleteTableRows,
  handleChange,
  addSubRows,
  showExtraRow,
  handleExtraChange,
  deleteTableExtraRows,
  timelineData,
}) => {
    return (
      <>
        {timelineData.map((item, index) => {
          return (
            <>
              {item.screens.map((screen, index) => {
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
                            value={screen.screenName}
                          />
                        </FormControl>
                        <Button
                          className="secondary-button add-subRow"
                          onClick={() => addSubRows(index)}
                        >
                          +
                        </Button>
                        <td className="subRowInput">
                          <FormControl>
                            <TextField
                              type="text"
                              key={index}
                              variant="standard"
                              name="screenSections"
                              placeholder="Login Screen"
                              onChange={(evnt) =>
                                handleExtraChange(index, evnt)
                              }
                              value={screen.screenSections}
                            />
                          </FormControl>
                          <span
                            className="subdata"
                            onClick={(index) => deleteTableExtraRows(index)}
                          ></span>
                        </td>
                      </td>
                      <td>
                        <FormControl>
                          <TextField
                            variant="standard"
                            name="hours"
                            placeholder="2"
                            onChange={(evnt) => handleChange(index, evnt)}
                            value={screen.hours}
                          />
                        </FormControl>
                      </td>
                      <span
                        className="data"
                        onClick={(index) => deleteTableRows(index)}
                      ></span>
                    </tr>
                  </>
                );
              })}
            </>
          );
        })}
      </>
    );
};

export default TableDataRows;
