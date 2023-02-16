var data1=0;
  $(document).ready(function() {
    var endpoint = "https://restcountries.com/v3.1/all";
    $.ajax({
      url: endpoint,
      success: function(data) {
        data1=data;
        $.each(data, function(index, country) {
          $("#countries").append(`<option value="${country.flags.png}" data-name="${country.flags.png}">${country.name.common}</option>`);
        });
      }
    });
    $("#flag").attr("src", "https://flagcdn.com/w320/ae.png");
  });
    $("#countries").on("change", function() {
      $("#flag").attr("src", $(this).val());
      // $("#flag").attr("alt", $(this).find(":selected").data("name"));
    });
    function sortflag() {
      var select = $('#countries');
      select.html(select.find('option').sort(function(x, y) {
       // console.log($(x).text(),$(y).text(),$(x).text() > $(y).text());
       //OUTPUT FOR THE ABOVE CODE Bouvet Island United Arab Emirates false
        return $(x).text() > $(y).text() ? 1 : -1;
      }));
    }
    setTimeout(sortflag, 2000);