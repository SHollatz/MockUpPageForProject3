$(document).ready(function() {
  console.log("inside ready")
  $(document).on("click", ".btn", function(event) {
    event.preventDefault();
    console.log($("#address-search").val());
    console.log($("#activity_details_request_type").children("option:selected").text());
  })
})