import "./App.css";
import Typography from "./components/atom/typography/Typography";

function App() {
  return (
    <>
      <Typography 
      text="welcom to hafeex" 
      tag="h1" className="title" 
      style={{ fontSize: "50px", color: "green" }} 
      role="heading" 
      ariaLabel="Welcome to Hafeex"  
      ariaLabelledBy="title" />
      
      <Typography text="This is a paragraph" tag="h3" />
      <Typography text="This is the lorem ipsum text and anything people always use" tag="p" />
    </>
  );
}

export default App;