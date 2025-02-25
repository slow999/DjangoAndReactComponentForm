'use strict';

const e = React.createElement;


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      current_step: 1,
      total_steps: 2,
    };
    this.goToNextClick = this.goToNextClick.bind(this);
    this.goToPreviousClick = this.goToPreviousClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  goToNextClick() {
    event.preventDefault();
    this.setState({current_step: this.state.current_step + 1});
  }

  goToPreviousClick() {
    event.preventDefault();
    this.setState({current_step: this.state.current_step - 1});
  }

  handleSubmit(event) {
    console.log('submitting stuff');
  }

  render() {
    const current_step = this.state.current_step;
    const total_steps = this.state.total_steps;

    let visiableFields;
    visiableFields =
      <div className="row">
        <div className={"col-lg-3 col-md-3 first-name-wrapper " + (current_step === 1 ? null : 'd-none')}>
          <div className="form-group">
            <label htmlFor="id_first_name">First Name</label>
            <input type="text" name="first_name" className="form-control" maxLength="32" required id="id_first_name"
                   autoComplete="off" value={this.state.firstName} onChange={this.handleChange}/>
          </div>
        </div>
        <div className={"col-lg-3 col-md-3 last-name-wrapper " + (current_step === 1 ? null : 'd-none')}>
          <div className="form-group">
            <label htmlFor="id_last_name">Last Name</label>
            <input type="text" name="last_name" className="form-control" maxLength="32" required id="id_last_name"
                   autoComplete="off" value={this.state.lastName} onChange={this.handleChange}/>
          </div>
        </div>
        <div className={"col-lg-3 col-md-3 email-wrapper " + (current_step === 2 ? null : 'd-none')}>
          <div className="form-group">
            <label htmlFor="id_email">Email</label>
            <input type="text" name="email" className="form-control" maxLength="128" required id="id_email"
                   autoComplete="off" value={this.state.email} onChange={this.handleChange}/>
          </div>
        </div>
      </div>

    return (
      <form className="form" method="post" onSubmit={this.handleSubmit}>
        <CSRFToken/>
        {visiableFields}
        <button className="btn btn-info" disabled={current_step === 1} name="go-back" onClick={this.goToPreviousClick}>Go back</button>
        <button className="btn btn-info" disabled={current_step === total_steps} name="go-to-next" onClick={this.goToNextClick}>Next</button>
        <button type="submit" className="btn btn-primary" name="action" value="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<MyForm/>, document.getElementById('registration_form'));
