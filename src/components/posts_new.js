import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
class PostsNew extends Component {
  renderField(field){ //the field argument is responsible for making sure
                          //that the Field component listed below is responsible for the input
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} //field.input is responsible for handling event handlers
        />
      </div>
    );
  }

// field is similar to an input
  render(){
    return(
      <div>
      <form>
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
    errors.title="Enter some content";
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