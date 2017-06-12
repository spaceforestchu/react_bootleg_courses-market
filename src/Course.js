import React, { Component } from 'react';


class Course extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: false
    };

  }

  buyMe = () => {

    this.setState({
      active: true
    });
    this.props.sumPrice(this.props.price);
    console.log(this.state.active);
  }

  dontBuyMe = () => {
    console.log(this.state.active);
    this.setState({
      active: false
    });
    this.props.sumPrice(-this.props.price);

  }

  render() {

    return (
      <div>
        <p>
          {this.props.name}
          <b style={{marginRight: 5 + 'px'}}>$ {this.props.price}</b>
          <button onClick={this.buyMe} style={{marginRight: 5 + 'px'}}>Buy Me</button>
          <button onClick={this.dontBuyMe} style={styles.marginRight}>Don't buy me</button>
        </p>

      </div>
    );
  }
}

const styles = {
  marginToRight: {
    marginRight: '5px'
  }
}

export default Course;
