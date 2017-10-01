import React, { Component } from 'react';
import Navbar from './partials/Navbar';
import Jumbotron from './partials/Jumbotron';
import  EventsList  from './EventsList';

class LayoutHome extends Component {  

    render() {
    return (
            <div id="home">
                <Navbar />
                <Jumbotron title="Users Api" description="Mollit quis excepteur mollit ullamco ea minim id nisi enim ex do eiusmod. Incididunt velit laborum aliqua sint ex ullamco ullamco. Aute irure consectetur non in id laborum nisi laborum sit ipsum." />
                <EventsList />
            </div>
       );
  }
}

export default LayoutHome;