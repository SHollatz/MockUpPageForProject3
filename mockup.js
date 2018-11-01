$(document).ready(function() {
  console.log("document has loaded")
  $(document).on("click", ".btn", function(event) {
    event.preventDefault();
    console.log("submit button was clicked")
    console.log("Location: ", $("#address-search").val());
    console.log($("Selected value from dropdown", "#activity_details_request_type").children("option:selected").text());
  })
})