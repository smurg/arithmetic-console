import React from 'react';
import ConsoleInput from './ConsoleInput';
import './Console.css';

class Console extends React.Component {
  state = {
    command: '',
    commandIndex: 0,
    commandList: [],
    executedList: []
  }
  
  handleCommand = () => {
    let { command } = this.state;
    let result;
    try {
      result = eval(command); // this is the solution I found quickly
      /* executing eval is never safe, we could create XSS (Cross Site Scripting) attacks
      Possible solutions:
      - we need to sanityze this variable before executing the eval command
      - we can use math.eval from http://mathjs.org/docs/expressions/parsing.html
       
      */
    } catch(error) {
      result = 'Syntax invalid, please check the operation';
    }
    let { commandList, commandIndex, executedList } = this.state;
    commandList.push(command);
    commandIndex = commandList.length-1;
    executedList.push(result);
    this.setState({ executedList, commandList, commandIndex });
  }
  
  updateCommand = (event) => {
    this.setState({ command: event.target.value });
  }
  
  changeCommand = (event) => {
    const keypressed = event.keyCode;
    let { command, commandIndex, commandList } = this.state;
    if (keypressed === 38) {
      if(commandIndex-1 >= 0) {
        command = commandList[commandIndex-1];
        this.setState({ command, commandIndex: commandIndex-1 });  
      }
    }
    if (keypressed === 40) {
      if(commandIndex+1 < commandList.length) {
        command = commandList[commandIndex+1];
        this.setState({ command, commandIndex: commandIndex+1 });  
      }
    } if (keypressed === 13) {
      this.handleCommand();
    }
  }
  
  render () {
    const commandInUse = this.state.command;
    const { executedList } = this.state;
   return (
    <div>
      <div className="terminal">
        {executedList.map((exec, idx)=>(
          // not good practice to use index as keys
          <span key={idx}>{exec}</span>
        ))}
      </div> 
      <ConsoleInput 
        command={commandInUse}
        updateCommand={this.updateCommand}
        keyPressed={this.changeCommand}
        process={this.handleCommand} />
      </div>
   )
  }
}

export default Console;