import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    reduxState,
});

class addItemForm extends Component {
    state = {
        newItem: {
            description: '',
            url: '',
            user_id: 0,
        }
    }


    handleNameChange = (key) => (event) => {
        console.log('event happended')
        this.setState({
            newItem: {
                ...this.state.newItem,
                [key]: event.target.value,
            }
        });
    }

    addNewItem = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_SHELF', payload: this.state.newItem })
        this.setState({
            newItem: {
                description: '',
                url: '',
                user_id: 0
            }
        });
    }

    render() {
        return (
            <div>
               

                <form onSubmit={this.addNewItem}>
                    <Input placeholder='Description' type='text' value={this.state.newItem.description} onChange={this.handleNameChange('description')} />
                    <Input placeholder='url' type='text' value={this.state.newItem.url} onChange={this.handleNameChange('url')} />
                    <Input placeholder='user_id' type='text' value={this.state.newItem.user_id} onChange={this.handleNameChange('user_id')} />
                    <Button type='submit' value='Add New Item'>Add Item</Button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(addItemForm);
