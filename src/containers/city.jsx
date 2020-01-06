import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setActiveCity} from '../actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';



class City extends Component {
  constructor(props){
    super(props)
  }

handleClick = () =>{
  console.log(this.props.select)
}

  render(){
    return (
      <div className = "app cities" onClick = {this.handleClick}>
        <div>{this.props.name}</div>
        <div>{this.props.address}</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveCity }, dispatch);

}

export default connect(mapDispatchToProps)(City);
