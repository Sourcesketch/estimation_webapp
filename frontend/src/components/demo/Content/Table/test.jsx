
// import  React , { Component } from  'react';
// import  ReactDOM  from  'react-dom';
// import { MuiThemeProvider } from  'material-ui/styles';
// import { blue500 , blue700 } from  'material-ui/styles/colors';
// import  getMuiTheme  from  'material-ui/styles/getMuiTheme';

// import {
//   Table,
//   TableRow,
//   TableHeader,
//   TableHeaderColumn,
//   TableRowColumn,
//   TableBody,
// } from  'material-ui/Table' ;

// const  theme  = getMuiTheme ({
//   palette: {
//     primary1Color : blue500,
//     primary2Color : blue700,
//   },
// })

// import { SortableContainer , SortableHandle , SortableElement , arrayMove } from  'react-sortable-hoc'

// //  Component which uses drag-n-drop activation when clicking inside the component
// const  DragHandle = SortableHandle(({style}) => (
//   <span style={{ ...style, ...{cursor : 'move' }}}> { '::::' } </span>)
// )

// // Universal component for turning a TableBody into a sortable container
// const  TableBodySortable  =  SortableContainer(({children, displayRowCheckbox}) => (
//   <TableBody displayRowCheckbox={displayRowCheckbox} >
//     {children}
//   </TableBody >
// ))

// // The string is necessary for our custom body to be perceived as a TableBody and in this case there will be no error
// TableBodySortable.muiName  =  'TableBody'

// // Component of a row of a table wrapped in a sortable element
// const  Row  =  SortableElement(({data, ...other}) => {
//   return (
//     <TableRow {...other}>
//       { other.children[0]}
//       <TableRowColumn style={{width :  '5%' }} >
//         <DragHandle/>
//       </TableRowColumn>
//       <TableRowColumn>
//         {data.id}
//       </TableRowColumn>
//       <TableRowColumn>
//         {data.name}
//       </TableRowColumn>
//       <TableRowColumn>
//         {data.status}
//       </TableRowColumn>
//     </TableRow >
//   )
// })

// class  SortableTable  extends  Component {
//   constructor ( props ) {
//     super (props);
//     this.state  = {
//       peoples : [
//        {
//         id :  1 ,
//         name :  'People 1' ,
//         status :  'enabled'
//        },
//        {
//         id :  2 ,
//         name :  'People 2' ,
//         status :  'disabled' 
//        },
//        {
//         id :  3 ,
//         name :  'People 1' ,
//         status :  'enabled'
//        }
//      ]
//    }
//   }
  
//   // Handler for traversing completion, helper arrayMove is used
//   onSortEnd  = ({oldIndex, newIndex}) => {
//     this.setState ({
//       peoples : arrayMove(this.state.peoples , oldIndex, newIndex),
//     });
//   };
  
//   render () {
//      return (
//        <Table>
//         <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
//             <TableRow>
//                 <TableHeaderColumn style={{width : '5%' }}>&nbsp; </TableHeaderColumn>
//                 <TableHeaderColumn>Id</TableHeaderColumn>
//                 <TableHeaderColumn>Name</TableHeaderColumn>
//                 <TableHeaderColumn>Status</TableHeaderColumn>
//             </TableRow>
//         </TableHeader>
//         <TableBodySortable onSortEnd = {this.onSortEnd} useDragHandle displayRowCheckbox={false}>
//             {this.state.peoples.map((row,index) => {
//                 return (
//                     <Row
//                         index={index}
//                         key={row.id}
//                         data={row}
//                     />
//                 )
//             })}
//         </TableBodySortable>
//       </Table>
//      )
//   }
// }

// const  App =()=> {
//   return (
//     <MuiThemeProvider muiTheme={theme} >
//       <div>
//         <h3> Material A - ui sortable by the Table component with rows the drag - n - drop support </h3>
//         <SortableTable/>
//       </div>  
//     </MuiThemeProvider>
//   )
// }

// ReactDOM.render( <App/>, document.getElementById('root'));