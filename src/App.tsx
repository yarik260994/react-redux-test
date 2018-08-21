import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Chat from "./Chat/Chat";

const usersState = ['@Ama-gama', '@Tutorchick', '@Gusenitca'];

const reduser = (state: any = usersState, action: any) => {

  if (action.type === "ADD_NEW_USER") {
    return state.concat(action.userName);
  }
  
  return state;
}

const store = createStore(reduser);
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chat />
          hello world
        </div>
      </Provider>
    );
  }
}

export default App;
