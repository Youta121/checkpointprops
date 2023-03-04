import React, { fullName } from './fullName';
class HandleName extends Component {
    handleEvent = () => {
      alert(`${item.name}`);
    };
  
    render() {
      return (
        <button onClick={handleEvent}>Click on me</button>
      );
    }
  }
  
  export default HandleName;