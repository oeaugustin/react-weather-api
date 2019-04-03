import React from 'react';
import './Weather.css';

// class Weather extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.city && <p> Location: <span>{this.props.city}, {this.props.country}</span></p>}
//         {this.props.temperature && <p> Temperature: <span>{this.props.temperature}&deg;</span></p>}
//         {this.props.hiTemp && <p> High: <span>{this.props.hiTemp}&deg;</span></p>}
//         {this.props.loTemp && <p> Low: <span>{this.props.loTemp}&deg;</span> </p>}
//         {this.props.humidity && <p> Humidity: <span>{this.props.humidity}%</span> </p>}
//         {this.props.description && <p> Conditions: {this.props.description} </p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     );
//   }
// }

const Weather = props => {
    return(
        <div className="weather__wrapper">
            {props.city && <p className="weather__results"> Location: <span>{props.city}, {props.country}</span></p>}
            {props.temperature && <p className="weather__results"> Temperature: <span>{props.temperature}&deg;</span></p>}
            {props.hiTemp && <p className="weather__results"> High: <span>{props.hiTemp}&deg;</span></p>}
            {props.loTemp && <p className="weather__results"> Low: <span>{props.loTemp}&deg;</span></p>}
            {props.humidity && <p className="weather__results"> Humidity: <span>{props.humidity}%</span></p>}
            {props.description && <p className="weather__results"> Conditions: <span>{props.description}</span></p>}
            {props.error && <p className="weather__results">{props.error}</p>}
        </div>
    );
}

export default Weather; 