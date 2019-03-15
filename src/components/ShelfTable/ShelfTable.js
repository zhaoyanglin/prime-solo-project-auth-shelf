import React, { Component } from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';

class ShelfTable extends Component {
componentDidMount(){
    this.props.dispatch({ type: 'FETCH_SHELF' });

}
    deleteItem = () => {
        this.props.dispatch({ type: 'DELETE_SHELF' });

    }
    render() {
        console.log(this.props.reduxState.itemReducer)

        return (
            <div></div>
            // <Table>
            //     <TableHead className='table'>
            //         <tr>
            //             <th>Description</th>
            //             <th>Image_url</th>
            //             <th>User_id</th>
            //         </tr>
            //     </TableHead>
            //     {
            //     //     // this.props.reduxState.itemReducer.map((item) => (
            //     //         <TableBody>
            //     //             <TableRow>
            //     //                 <TableCell>{item.description}</TableCell>
            //     //                 <TableCell>{item.url}</TableCell>
            //     //                 <TableCell>{item.user_id}</TableCell>
            //     //                 <TableCell><Button value={item.id} onClick={this.deleteItem}>Delete</Button>
            //     //                 </TableCell>
            //     //             </TableRow>
            //     //         </TableBody>
            //     //     // ))
            //     // }
            // </Table >
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ShelfTable);