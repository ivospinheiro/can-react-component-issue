import Component from "can-component";
import canReactComponent from "can-react-component";
import React from "react";
import ReactDOM from "react-dom";
import stache from "can-stache";

const CanJSComponent = Component.extend("InnerComponent", {
    tag: "inner-component",
    view: stache("<div class='inner' style='border: solid 1px red;'>Inner text: {{text}}</div>"),
    ViewModel: {
        text: {
            type: "string"
        }
    }
});

const ReactComponent = canReactComponent(CanJSComponent);

class AppComponent extends React.Component {
    render() {
        const text = "hello world";
        return ( <ReactComponent text={text} />);
    }
}

ReactDOM.render( <AppComponent /> ,
    document.getElementById("root")
);