'use strict';

const e = React.createElement;

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.goToNextClick = this.goToNextClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  goToNextClick() {

  }

  handleSubmit(event) {
    alert('submitting stuff');
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" method="post" onSubmit={this.handleSubmit}>
        <CSRFToken />
        <div className="row">
          <div className="col-lg-3 col-md-3 first-name-wrapper">
            <div className="form-group">
              <label htmlFor="id_first_name">First Name</label>
              <input type="text" name="firstName" className="form-control" maxLength="32" required id="id_first_name"
                     autoComplete="off" value={this.state.firstName} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 last-name-wrapper">
            <div className="form-group">
              <label htmlFor="id_last_name">Last Name</label>
              <input type="text" name="lastName" className="form-control" maxLength="32" required id="id_last_name"
                     autoComplete="off" defaultValue={this.state.lastName}/>
            </div>
          </div>
        </div>
        <button className="btn btn-info" name="go-back" onClick={this.goToNextClick}>Go back</button>
        <button className="btn btn-info" name="go-to-next">Next</button>
        <button type="submit" className="btn btn-primary" name="action" value="submit">Submit</button>
      </form>
    );
  }
}

// const domContainer = document.querySelector('#registration_form');
ReactDOM.render(<MyForm/>, document.getElementById('registration_form'));
