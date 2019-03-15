import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';
import ShelfTable from '../ShelfTable/ShelfTable';

class Shelf extends Component {

  render() {
    return (
      <>
      <div>
        < AddItemForm />
      </div>
      <div>
        < ShelfTable />
      </div>
     </>
  )}
}

export default connect()(Shelf);