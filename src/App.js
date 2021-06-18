import "./App.css";
import Main from "./components/Main/main";
import MessageBox from "./components/MessageBox/messageBox";
import { useSelector } from "react-redux";
function App() {
  const showMessage = useSelector((state) => state.message);

  return (
    <div className="App">
      {showMessage.isMessage ? (
        <MessageBox message={showMessage.message} />
      ) : (
        ""
      )}
      <Main />
    </div>
  );
}

export default App;
