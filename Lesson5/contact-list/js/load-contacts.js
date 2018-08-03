var contactList = '';
var contactsListElements = document.getElementsByClassName('contacts-list')[0];

var contactArr = JSON.parse(loadContacts());

contactArr.forEach(function(item,i,contactArr) {
    contactList = contactList + `<li data-email="${item.email}" data-phone="${item.phone}"> <strong>${item.name}</strong> </li>`;
});
contactsListElements.innerHTML = contactList;