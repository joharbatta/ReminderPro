import React,{Component} from 'react';
import "../App.css";
import {connect} from 'react-redux';
import {addReminder} from '../actions';


class App extends Component {

  state={
    text:'',
  }
  update=event=>{
      this.setState({text:event.target.value});
  }
  addReminderr=()=>
  {
    // console.log(this);
    this.props.addReminder(this.state.text);
  }
  renderReminder()
  {
    const {reminderzz}=this.props;

    return(
      <ul className="list-group col-sm-4">
      {
        reminderzz.map(reminder=>{
          return(
            <li key={reminder.id} className="list-group-item">
            <div>{reminder.text}</div>
            </li>
          )
        })
      }
      </ul>
    )
  }

  render()
  {
    // console.log(this.props);
    
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
          onChange={this.update}
          />
        </div>
     
        <button
          type="button"
          className="btn btn-success"
          onClick={this.addReminderr}
          >Add Reminder</button>
        </div>
        {this.renderReminder()}
      </div>
    )
  }
}

function mapStateToProps(state)
{
  return{
    reminderzz:state,
  }
}
export default connect(mapStateToProps,{addReminder})(App);