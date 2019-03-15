import React, { Component } from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';

class ShelfTable extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHELF' });

    }
    deleteItem = (key) => {
        this.props.dispatch({ type: 'DELETE_SHELF', payload: key });

    }
    render() {

        return (
            <div>
                <Table>
                    <TableHead className='table'>
                        <tr>
                            <th>Description</th>
                            <th>Image_url</th>
                            <th>User_id</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                    {
                        this.props.itemReducer.map((item,i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.description}</TableCell>
                                <TableCell><img src={item.url} alt='item.description' height="50" width="50"/></TableCell>
                                    <TableCell>{item.user_id}</TableCell>
                                    <TableCell><Button value={item.id} onClick={ () => this.deleteItem(item.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                        ))
                    }
                    </TableBody>
                </Table >
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemReducer: state.itemReducer
});
export default connect(mapStateToProps)(ShelfTable);