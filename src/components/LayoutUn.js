import React, { Component } from 'react';
import Navbar from './partials/Navbar';
import Jumbotron from './partials/Jumbotron';
import  CategoriesList  from './CategoriesList';


class LayoutUn extends Component {  
  render() {
    return (
            <div id="page">
                <Navbar />
                <Jumbotron title="CategoryList via json file" description="Aliquip nulla irure sit culpa ad ex veniam exercitation nostrud velit adipisicing sint. Eu tempor ut proident aliqua proident incididunt voluptate ipsum mollit irure. Qui cupidatat esse ea incididunt magna nostrud nostrud reprehenderit velit eiusmod occaecat enim consequat. Ad proident reprehenderit Lorem Lorem velit aute ipsum aliquip ea qui. Est ut aute officia consectetur excepteur aliqua voluptate ex cupidatat sit reprehenderit. Minim eiusmod eiusmod deserunt nostrud. Tempor excepteur adipisicing excepteur esse velit excepteur laborum qui commodo aute culpa eu dolor." />
                <CategoriesList />
            </div>
       );
  }
}

export default LayoutUn;