import logo from "../images/React.png";
function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ background: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 text-while-50">React Course - TaskOPedia</span>
    </div>
  );
}
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
};
function SubHeader() {
  return <p style={subHeaderStyle} className="text-center">This will be an exciting course.</p>;
}
const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader fullName="Shibu" />
    </div>
  );
}
export default Header;
