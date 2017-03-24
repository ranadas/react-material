/** @jsx React.DOM */
var App = React.createClass({

    render: function () {
        return (
            <div className="main-wrapper">
                <div className="btn">Click me</div>
            </div>
        );
    }
});

React.renderComponent(<App />, document.body);