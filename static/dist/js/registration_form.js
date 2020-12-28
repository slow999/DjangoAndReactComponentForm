'use strict';

const e = React.createElement;

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  render() {
    return (
      <form id="" class="form" method="get" action="">
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <input type='text' />
            </div>
            <div className="col-lg-3 col-md-3">
                <input type='text' />
            </div>
            <div className="col-lg-3 col-md-3">
                <input type='text' />
            </div>
        </div>
          <button onClick={() => this.setState({liked: true})}>
            Like
          </button>
      </form>
    );
  }
}

// const domContainer = document.querySelector('#registration_form');
ReactDOM.render(<MyForm/>, document.getElementById('registration_form'));
