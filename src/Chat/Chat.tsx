import * as React from 'react';
import {connect} from 'react-redux';
import {internet} from 'faker';
import './Chat.css'
import 'bootstrap/dist/css/bootstrap.min.css';


interface IState{
    addNewUser:any
}

interface IProps{
    users:string[];
}

class Chat extends React.Component<IProps & IState> {

    public myRedux=()=>{
        let userName=`@${internet.userName().toLowerCase()}`;
        this.props.addNewUser({type:'ADD_NEW_USER',userName});
    }

  public render() {
    return (
   <div className="chat">
   <div className="coll-sc-12">
        
   </div>
       <button onClick={this.myRedux}>ddd</button>
       <h1>{this.props.users.map(n => <p key={n}>{n}</p>)}</h1>
   </div>
    );
  }
}

const mapStateToProps=(state:IProps)=>{
    return  {users:state}
}

const mapDispatchToProps=(dispatch:any)=>{
    return  {addNewUser:(userName:string)=>dispatch({type:'ADD_NEW_USER',userName})}
}

export default connect(mapStateToProps,mapDispatchToProps
)(Chat)