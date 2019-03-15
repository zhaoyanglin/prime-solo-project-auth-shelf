import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';



class AddItemForm extends Component {
    state = {
        newItem: {
            description: '',
            url: '',
            user_id: this.props.user.id,
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
                ...this.state.newItem,
                description: '',
                url: '',
                user_id: this.props.user.id
            }
        });
    }

    render() {
        console.log(this.props.user.id);
        console.log(this.state.newItem);
        
        return (
            <div>
               

                <form onSubmit={this.addNewItem}>
                    <Input placeholder='Description' type='text' value={this.state.newItem.description} onChange={this.handleNameChange('description')} />
                    <Input placeholder='url' type='text' value={this.state.newItem.url} onChange={this.handleNameChange('url')} />
                    <Button type='submit' value='Add New Item'>Add Item</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddItemForm);
