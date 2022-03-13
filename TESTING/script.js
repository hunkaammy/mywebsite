function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "tabs" }, /*#__PURE__*/
      React.createElement("h1", null, "React Tabs"), /*#__PURE__*/
      React.createElement(Tabs, null, /*#__PURE__*/
      React.createElement(Tab, { label: "Tab 1" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("h2", null, "New Location"), /*#__PURE__*/
      React.createElement("form", { id: "formLoc" }, /*#__PURE__*/
      React.createElement("label", null, "Name:"), /*#__PURE__*/React.createElement("input", { type: "text", id: "nameLoc" }), /*#__PURE__*/
      React.createElement("label", null, "Desc:"), /*#__PURE__*/React.createElement("input", { type: "text", id: "descLoc" }), /*#__PURE__*/
      React.createElement("input", { type: "submit", value: "send it", name: "submitLoc" })))), /*#__PURE__*/





      React.createElement(Tab, { label: "Tab 2" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw" }), /*#__PURE__*/
      React.createElement("p", null, "Tab 2 content"))), /*#__PURE__*/


      React.createElement(Tab, { label: "Tab 3" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7Y713wstirF-PvKJa6OioS83ozc-BeFAzjjyndv58ZnfyaZK0g" }), /*#__PURE__*/
      React.createElement("p", null, "Tab 3 content"))), /*#__PURE__*/


      React.createElement(Tab, { label: "Tab 4" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("img", { src: "http://choseneye.org/image/cache/catalog/SERVICES4-600x600.png" }), /*#__PURE__*/

      React.createElement("p", null, "Tab 4 content"))), /*#__PURE__*/


      React.createElement(Tab, { label: "Tab 5" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("img", { src: "https://iconcept.com.my/wp-content/uploads/2018/10/iStock-956508212-600x600.jpg" }), /*#__PURE__*/
      React.createElement("p", null, "Tab 5 content"))))));






  }}


class Tabs extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      activeTab: this.props.children[0].props.label });_defineProperty(this, "changeTab",

    tab => {

      this.setState({ activeTab: tab });
    });}
  render() {

    let content;
    let buttons = [];
    return /*#__PURE__*/(
      React.createElement("div", null,
      React.Children.map(this.props.children, child => {
        buttons.push(child.props.label);
        if (child.props.label === this.state.activeTab) content = child.props.children;
      }), /*#__PURE__*/

      React.createElement(TabButtons, { activeTab: this.state.activeTab, buttons: buttons, changeTab: this.changeTab }), /*#__PURE__*/
      React.createElement("div", { className: "tab-content" }, content)));



  }}


const TabButtons = ({ buttons, changeTab, activeTab }) => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "tab-buttons" },
    buttons.map(button => {
      return /*#__PURE__*/React.createElement("button", { className: button === activeTab ? 'active' : '', onClick: () => changeTab(button) }, button);
    })));


};

const Tab = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null,
    props.children));


};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));



var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('godown');
locRef.on('child_added', function (snap) {
  var locVal = snap.val();
  $('#locList').append(
  "<li>" + locVal.name + " " + locVal.desc + "</li>");

});


$("#formLoc").submit(function (e) {
  e.preventDefault();
  var x = {
    name: $('#nameLoc').val(),
    desc: $('#descLoc').val() };

  locRef.push(x);
});