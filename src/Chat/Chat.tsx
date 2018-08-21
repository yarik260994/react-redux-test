import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {internet} from 'faker';
// interface IState{

// }

interface IProps{
    users:string[];
}

class Chat extends React.Component<IProps & DispatchProp<any>> {

    public myRedux=()=>{
        let userName=`@${internet.userName().toLowerCase()}`;
        this.props.dispatch({type:'ADD_NEW_USER',userName})
    }

  public render() {
    return (
   <div>
       <button onClick={this.myRedux}>ddd</button>
       <h1>{this.props.users.map(n => <p key={n}>{n}</p>)}</h1>
   </div>
    );
  }
}

export default connect(state=>{
    return {
        users:state
    }}
)(Chat)