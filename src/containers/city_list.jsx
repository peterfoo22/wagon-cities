import React, { Component } from 'react';
import City from './city'

class CityList extends Component {
  constructor(props){
    super(props)
  }
componentWillMount(){

}
render(){
  return(
    <div>
      {this.props.listofcities.map((city, index)=><City
        name = {city.name}
        address = {city.address}
        key = {index}
       />
    )}
    </div>
  )
 }
}

export default CityList;
