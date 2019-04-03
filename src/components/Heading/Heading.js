import React from 'react';
import './Heading.css';

// class Heading extends React.Component {
//   render() {
//     return (
//       <div>

//         <h1>Weather Finder</h1>
//         <p>find out about the weather!</p>

//       </div>
//     );
//   }
// }

const Heading = () => {
    return (
        <div className="heading">
            <h1>Weather Finder</h1>
            <h2>Search the weather in your favorite cities:</h2>
        </div>
    );        
}

export default Heading;