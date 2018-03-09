


var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },


  onfirstNameChange: function(e) {
   this.props.onChange(Object.assign({}, this.props.value, {firstname: e.target.value}));
 },

 onlastNameChange: function(e) {
  this.props.onChange(Object.assign({}, this.props.value, {lastname: e.target.value}));
},
 onEmailChange: function(e) {
   this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
 },

 onSubmit: function(e) {
   e.preventDefault();
   this.props.onSubmit();
 },

  render: function() {

     var errors = this.props.contact.errors || {};

    return (

  React.createElement('form', {onSubmit: this.onSubmit, className: 'contactForm', noValidate: true},
    React.createElement('input', {
      type: 'text',
      className: errors.name && 'contactForm-error',
      placeholder: 'firstName (required)',
      value: this.props.contact.firstname,
      onChange: this.onNameChange,
    }),
    React.createElement('input', {
      type: 'text',
      className: errors.name && 'contactForm-error',
      placeholder: 'lastName (required)',
      value: this.props.contact.lastname,
      onChange: this.onNameChange,
    }),
    React.createElement('input', {
      type: 'email',
      className: errors.email && 'contactForm-error',
      placeholder: 'Email (required)',
      value: this.props.contact.email,
      onChange: this.onEmailChange,
    }),

    React.createElement('button', {type: 'submit', className: "btn"}, "Add Contact")
  )
);
},
});
