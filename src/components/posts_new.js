import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
class PostsNew extends Component {
  renderField(field){ //the field argument is responsible for making sure
    const {meta: {touched, error}} = field;
    const className=`form-group ${touched && error ? "has-danger": ""}`                      //that the Field component listed below is responsible for the input
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} //field.input is responsible for handling event handlers
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  formSubmit = (values) => {
    console.log(values);
  }

// Field is similar to an input
  render(){
    const {handleSubmit} = this.props;

    return(
      <div>
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          label="Title"
          // the name property specifies the specific state this field will produce
          name="title"
          // the component prop displays the field as JSX
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/"> Cancel </Link>
      </form>
      </div>

    );
  }
}

function validate(values){
  // console.log() = {title: "nkr", categories: 'vvefv', content: "rbgf"}
  const errors = {};

  //validate inputs from "values"
  if(!values.title){
    errors.title="Enter a title";
  }
  if(!values.categories){
    errors.categories="Enter a category";
  }
  if(!values.content){
    errors.content="Enter some content";
  }


  // if errors is empty the form is fine to submit
  // if erros has any properties redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // validate : validate
  // this allows our component to contact the form reducer in the store
  form: "PostsNewForm"
})(PostsNew);
