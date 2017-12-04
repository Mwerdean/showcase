import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(){
    super()
    this.state={
      number1:0,
      number2:0,
      sum:null
    } 
  }
  updateNum1(val){
    this.setState({number1:parseInt(val,10)})
  }
  updateNum2(val){
    this.setState({number2:parseInt(val,10)})
  }
  add(number1, number2) {
    this.setState({ sum: number1 + number2 });
  }

  render() {
    return (
      <div className='puzzleBox sumPB'>
      <h4>Sum</h4>
        <input className='inputLine' type='number' onChange={(element)=>this.updateNumber1(element.target.value)}></input>
        <input className='inputLine' type='number' onChange={(element)=>this.updateNumber2(element.target.value)}></input>
        <button className='confirmationButton' onClick={()=>this.add(this.add(this.state.number1, this.state.number2))}> Solve</button>
        <span className='resultsBox'></span>
      </div>
    )
  }
}