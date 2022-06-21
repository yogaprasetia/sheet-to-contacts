  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Rsud');
  var headerRows = 1;
  var MaxRow = sheet.getLastRow();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();     
  data.splice(0, headerRows);           

  function addContact() {
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      var firstName = row[0];
      var lastName = row[1];
      var email = row[1];
      var phone = row[2];
      var group = row[1];
      contact = ContactsApp.createContact(firstName, lastName, email);
      contact.addPhone(ContactsApp.Field.MOBILE_PHONE, phone);
      var group = ContactsApp.getContactGroup("System Group: My Contacts");
      group.addContact(contact);
    }
  }