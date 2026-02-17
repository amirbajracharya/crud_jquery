$(document).ready(function () {
  var contacts = [];
  var editIndex = -1;

  function displayContacts() {
    var contactList = $('#contactList');
    contactList.empty();
    contacts.forEach(function(contact, index) {
      contactList.append(
        '<tr>' +
        '<td>' + contact.name + '</td>' +
        '<td>' + contact.phone + '</td>' +
        '<td>' + contact.email + '</td>' +
        '<td><button onclick="editContact(' + index + ')">Edit</button> ' +
            '<button onclick="deleteContact(' + index + ')">Delete</button></td>' +
        '</tr>'
      );
    });
  }