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
          '<td><button class="editBtn" data-index="' +
          index +
          '">Edit</button> ' +
          '<button class="deleteBtn" data-index="' +
          index +
          '">Delete</button></td>' +
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
      $("#addBtn").text("Add Contact");
    }
    displayContacts();
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
  });

  $("#contactList").on("click", ".deleteBtn", function () {
    var index = $(this).data("index");
    contacts.splice(index, 1);
    displayContacts();
  });

  $("#contactList").on("click", ".editBtn", function () {
    var index = $(this).data("index");
    $("#name").val(contacts[index].name);
    $("#phone").val(contacts[index].phone);
    $("#email").val(contacts[index].email);

    editIndex = index;
    $("#addBtn").text("Update Contact");
  });
});
