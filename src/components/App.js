import React,{Component} from 'react';
import "../App.css";
class App extends Component {
  render()
  {

    
    return (
      <div className="App">
        <div className="title">
        Reminder Pro
        </div>
        <div className="form-inline">
        <div className="from-group">
        <input
          className="form-control"
          placeholder="MISSION>"
          />
        </div>

        <button
          type="button"
          className="btn btn-success"
          >Add Reminder</button>
        </div>
      </div>
    )
  }
}

export default App;
