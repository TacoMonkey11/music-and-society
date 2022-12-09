import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class InfoBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            info: props.info,
        }
    }

    render() {
        return (
            <div className="info-bubble">
                <h1>{this.state.title}</h1>
                {this.state.info}
            </div>
        )
    }
}

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <div className="info-1">
                    <InfoBubble title="What the heck even is Lo-Fi?" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat justo vitae metus gravida, vel lobortis nulla scelerisque. Phasellus non quam eros. Donec eleifend ipsum eros, in lacinia arcu vehicula id. Ut facilisis pretium ligula, et maximus eros pharetra aliquam. Quisque pharetra eget dolor et fringilla. Maecenas sed justo rutrum, tincidunt felis at, lobortis dui. Fusce dictum lectus in tempus accumsan. Maecenas ultricies tortor dolor, non molestie elit tincidunt at. Etiam nunc diam, varius eget malesuada quis, rhoncus nec nisi. Donec tristique tempor nulla eget scelerisque. Sed interdum nunc id arcu sollicitudin porttitor. Nullam molestie nisl sit amet convallis laoreet. Sed porta erat odio. Sed mi est, imperdiet sit amet euismod et, condimentum non nulla. Suspendisse ac eros aliquam, varius velit eget, efficitur nisl. Aliquam erat volutpat. "/>
                    <iframe width="700" height="386" src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?controls=0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainPage/>)