const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a nested H1 tag!"),
    React.createElement("h2", {}, "I am nested sibling"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a nested H1 tag!"),
    React.createElement("h2", {}, "I am nested sibling"),
  ]),
]);

const attributes = {
  id: "heading",
};

const heading = React.createElement("h1", attributes, "Hello React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

console.log(parent);
