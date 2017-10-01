import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './partials/CategoryItem';

class CategoriesList extends Component {
    render() { 
            return (
                <div className="container">
                    <div className="row">
                    { 
                        this.props.categories.map( 
                            category => {
                            return (<CategoryItem key={category.id} category={category} />)
                        } 
                    )}
                </div>
                </div>
            )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(CategoriesList);