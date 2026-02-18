$(document).ready(function () {
  var contacts = [];
  var editIndex = -1;

  function displayContacts() {
    var contactList = $("#contactList");
    contactList.empty();
    contacts.forEach(function (contact, index) {
      contactList.append(
        "<tr>" +
          "<td>" +
          contact.name +
          "</td>" +
          "<td>" +
          contact.phone +
          "</td>" +
          "<td>" +
          contact.email +
          "</td>" +
          '<td><button onclick="editContact(' +
          index +
          ')">Edit</button> ' +
          '<button onclick="deleteContact(' +
          index +
          ')">Delete</button></td>' +
          "</tr>",
      );
    });
  }

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    if (name == "" || phone == "" || email == "") {
      alert("Please fill in all fields");
      return;
    }
    if (editIndex === -1) {
      var contact = { name: name, phone: phone, email: email };
      contacts.push(contact);
    } else {
      contacts[editIndex] = { name: name, phone: phone, email: email };
      editIndex = -1;
    }
    displayContacts();
    $("#contactForm")[0].reset();
  });
});

editIndex = index;
$("#name").val(contacts[index].name);
$("#phone").val(contacts[index].phone);
$("#email").val(contacts[index].email);
