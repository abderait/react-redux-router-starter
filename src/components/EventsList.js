import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeItem from './partials/HomeItem';

class EventsList extends Component {
    render() { 
        return (
            <div className="container"> 
                <div className="row"> 
                    { 
                    this.props.events.map( 
                    evt => {
                        return (<HomeItem key={evt.email} item={evt} />)
                    })
                    }
                </div>
            </div>
            )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(EventsList);