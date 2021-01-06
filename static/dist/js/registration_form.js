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
            <div class="form-group">
              <label for="id_first_name">First Name</label>
              <input type="text" name="first_name" class="form-control" maxlength="32" required id="id_first_name" autocomplete="off"/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="form-group">
              <label htmlFor="id_first_name">First Name</label>
              <input type="text" name="first_name" className="form-control" maxLength="32" required id="id_first_name"
                     autoComplete="off"/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="form-group">
              <label htmlFor="id_length">Length</label>
              <input type="number" name="length" className="form-control" step="any" required="" id="id_length"/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="form-group">
              <label htmlFor="id_width">Width</label>
              <input type="number" name="width" className="form-control" step="any" required="" id="id_width"/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="form-group">
              <label htmlFor="id_height">Height</label>
              <input type="number" name="height" className="form-control" step="any" required="" id="id_height"/>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" name="action" value="search">Next</button>
        <button type="submit" className="btn btn-primary" name="action" value="search">Search</button>
      </form>
    );
  }
}

// const domContainer = document.querySelector('#registration_form');
ReactDOM.render(<MyForm/>, document.getElementById('registration_form'));
