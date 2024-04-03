// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import { Table } from '@mui/material';
// import { TableRow } from '@mui/material';
// import { TableCell } from '@mui/material';
// import { TableHead } from '@mui/material';
// import { TableBody } from '@mui/material';

// // const  theme  = getMuiTheme ({
// //   palette: {
// //     primary1Color : blue500,
// //     primary2Color : blue700,
// //   },
// // })

// import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';

// //  Component which uses drag-n-drop activation when clicking inside the component
// const DragHandle = SortableHandle(({ style }) => (
//   <span style={{ ...style, ...{ cursor: 'move' } }}> {'::::'} </span>)
// )

// // Universal component for turning a TableBody into a sortable container
// const TableBodySortable = SortableContainer(({ children, displayRowCheckbox }) => (
//   <TableBody displayRowCheckbox={displayRowCheckbox} >
//     {children}
//   </TableBody >
// ))

// // The string is necessary for our custom body to be perceived as a TableBody and in this case there will be no error
// TableBodySortable.muiName = 'TableBody'

// // Component of a row of a table wrapped in a sortable element
// const Row = SortableElement(({ data, ...other }) => {
//   return (
//     <TableRow {...other}>
//       {other.children[0]}
//       <TableCell style={{ width: '5%' }} >
//         <DragHandle />
//       </TableCell>
//       <TableCell>
//         {data.id}
//       </TableCell>
//       <TableCell>
//         {data.name}
//       </TableCell>
//       <TableCell>
//         {data.status}
//       </TableCell>
//     </TableRow >
//   )
// })

// export default class SortableTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       peoples: [
//         {
//           id: 1,
//           name: 'People 1',
//           status: 'enabled'
//         },
//         {
//           id: 2,
//           name: 'People 2',
//           status: 'disabled'
//         },
//         {
//           id: 3,
//           name: 'People 1',
//           status: 'enabled'
//         }
//       ]
//     }
//   }

//   // Handler for traversing completion, helper arrayMove is used
//   onSortEnd = ({ oldIndex, newIndex }) => {
//     this.setState({
//       peoples: arrayMove(this.state.peoples, oldIndex, newIndex),
//     });
//   };

//   render() {
//     return (
//       <Table>
//         <TableHead displaySelectAll={false} adjustForCheckbox={false}>
//           <TableRow>
//             <TableCell style={{ width: '5%' }}>&nbsp; </TableCell>
//             <TableCell>Id</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBodySortable onSortEnd={this.onSortEnd} useDragHandle displayRowCheckbox={false}>
//           {this.state.peoples.map((row, index) => {
//             return (
//               <Row
//                 index={index}
//                 key={row.id}
//                 data={row}
//               />
//             )
//           })}
//         </TableBodySortable>
//       </Table>
//     )
//   }
// }
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

let data = [
  {
    "name": "Jeevan",
    "age": 21,
    "gender": "male"
  },
  {
    "name": "Piyush",
    "age": 17,
    "gender": "male"
  },
  {
    "name": "Arti",
    "age": 22,
    "gender": "female"
  },
  {
    "name": "Subham",
    "age": 21,
    "gender": "male"
  },
  {
    "name": "Yuvraj",
    "age": 23,
    "gender": "male"
  }
]





// import "bootstrap/dist/css/bootstrap.min.css";
// import userdata from "./tempData.json";

export default function Table() {
  const [users, setUsers] = useState(data);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };
  return (
    <div className="App mt-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table borderd">
          <thead>
            <tr>
              <th />
              <th>Username</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <Droppable droppableId="droppable-1">
            {(provider) => (
              <tbody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
              >
                {users?.map((user, index) => (
                  <Draggable
                    key={user.name}
                    draggableId={user.name}
                    index={index}
                  >
                    {(provider) => (
                      <tr {...provider.draggableProps} ref={provider.innerRef}>
                        {/* <td {...provider.dragHandleProps}> = </td> */}
                        <td {...provider.dragHandleProps}> = {user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>
    </div>
  );
}




