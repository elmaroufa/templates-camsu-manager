$(document).ready(function() {
    $("#testModalButton").click(testModal);
  })
  
  var testModal = function() {
    try {
      $("#exampleModalCenter").modal();
    }
    catch (e) {
      alert(e);
    }
  }