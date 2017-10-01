import React, { Component } from 'react';

class CategoryItem extends Component {      
    render() {
    return (
            <div className="card col-md-12 card-margin" key={this.props.category.id}>
            <div className="card-block">
                <h4 className="card-title">{this.props.category.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.category.subtitle}</h6>
                <p className="card-text">{this.props.category.description}</p>
            </div>
            </div>
       );
  }
}

export default CategoryItem;