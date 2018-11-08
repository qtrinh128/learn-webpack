import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <p id="text">
                    xin chao the gioi
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);