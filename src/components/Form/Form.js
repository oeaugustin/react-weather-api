import React from 'react';
import './Form.css'

// class Form extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City ..."/>
//         <input type="text" name="country" placeholder="Country ..."/>
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// }

const Form = props => {
    return(
        <form className="form" onSubmit={props.getWeather}>
            <div className="form__input-wrapper">
                <input type="text" label="city" name="city" placeholder="City ..."/>
                <input type="text" label="country" name="country" placeholder="Country ..."/>
            </div>
            <button className="form__submit" type="submit">Get Weather</button>
        </form>
    );
}

export default Form;