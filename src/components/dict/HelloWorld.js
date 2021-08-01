import React from "react";
import StateSample from "./StateSample";
import DataBindingSamp from "./DataBindingSamp";

//class-base component
//HelloWorld is component name
//PascalBase Naming convention
class HelloWorld extends React.Component {
  render() {
    let isAnonymous = false;

    const name = "Mon";

    const items = ["rice", "chicken", "vegetable"];

    let ulItems = items.map((x) => {
      return <li>{x}</li>;
    });

    let clickHandler = (val) => {
      alert(val);
    };

    return (
      // return in one parent element only
      // <div>
      <div>
        <div>Hello World {name}!</div>
        <hr />
        {isAnonymous ? <div>Welcome {name}!</div> : <div>FALSE ternary</div>}
        <hr />
        <div>Array: {items}</div>
        <hr />
        {/* inline render with map/element */}
        render in method
        <ol>
          {items.map((x) => {
            return <li>{x}</li>;
          })}
        </ol>
        <hr />
        {/* call function render with map/element */}
        <ul>
          render in jsx
          {ulItems}
        </ul>
        <hr />
        {/* function with value */}
        <button type="button" onClick={() => clickHandler("test")}>
          Click me!
        </button>
        <hr />
        <div>
          Sample: PARENT to CHILD
          <br />
          with props (data in method)
          <br /> as "props/properties" {this.props.data}
        </div>
        <hr />
        State Sample
        <div>
          <StateSample />
        </div>
        Data Binding
        <div>
          <DataBindingSamp />
        </div>
      </div>
    );
  }
}

export default HelloWorld;

// .map function
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// expected output: Array [2, 8, 18, 32]
