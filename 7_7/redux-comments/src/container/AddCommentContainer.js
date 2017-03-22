import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddComment from '../presentation/AddComment';
import {addComment} from '../actions/actions'

class AddCommentContainer extends Component {
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
    }
    add(text){
        this.props.dispatch(addComment(text))
    }
    render(){
        return(
            <div>
                <AddComment addComment={this.add} />
            </div>
        )
    }
}

const mapStateToProps = function (store){
    return {
        state: store.comments
    };
};

export default connect(mapStateToProps)(AddCommentContainer);