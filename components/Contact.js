
var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};


var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
        }),
        React.createElement('div', {className: 'contactDetails'},
        React.createElement('p', {className: 'contactLabel'}, 'First name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mail to:' + this.props.item.email},
          this.props.item.email
        )
       )
      )
    );
  },
});


// var NewContact = React.createClass({
//   propTypes: {
//     firstname: React.PropTypes.string.isRequired,
//     lastname: React.PropTypes.string.isRequired,
//     email: React.PropTypes.string.isRequired
//   },
//
//   render: function() {
//     return (
//       React.createElement('li', {className: 'contactItem'},
//             React.createElement('div', {className: 'contactDetails'},
//             React.createElement('p', {className: 'contactLabel'}, this.props.firstname),
//             React.createElement('p', {className: 'contactLabel'}, this.props.lasttname),
//             React.createElement('a', {className: 'contactEmail', href: 'mailto:'+ this.props.email}, this.props.email)
//        )
//       )
//     );
//   },
// });
