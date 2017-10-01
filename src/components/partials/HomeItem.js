import React, { Component } from 'react';

class HomeItem extends Component {      
    render() {
    return (
        <div className="card col-md-3" style={{marginBottom: 20 + 'px'}}> 
            <img className="card-img-top" src={this.props.item.picture.large} alt={this.props.item.name.first} />
            <div className="card-block">
                <h4 className="card-title">{this.props.item.name.first} {this.props.item.name.last}</h4>
                <p className="card-text">{this.props.item.cell}</p>
                <p className="card-text"><small className="text-muted">{this.props.item.email}</small></p>
            </div> 
        </div>
       );
  }
}

export default HomeItem;