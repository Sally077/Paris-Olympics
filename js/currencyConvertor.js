
    var data3=selectNumberStringvalue=eurkey="";
    var finalcal=0;
  //  APIKEY1="rKYJpxskSyUuuicyEbuZ8Q3B2ZEI4XpwVr7fhzCY";
	APIKEY1="yjH4j6cBWEnk8Y00yUnP6MC3rpBiGOM4jGPPxdza";
$(document).ready(function() {
    $.ajax({
  url: 'https://api.freecurrencyapi.com/v1/latest?apikey='+ APIKEY1,
  type: 'GET',
  success: function(data2) {
    
    $.each(data2.data, function(key, value) {
        data3=data2;
        $('#base-currencies').append($("<option></option>")
            .attr("value", key)
            .text(key));
    //    console.log(value);

    });
  }
});
});

$('#convert').click(function() {
  $("#euros").val("");
    var inputValue = $("#amount").val();
    var inputNumber = parseFloat(inputValue);

    var selectValue = $("#base-currencies").val();
    var selectNumberString = selectValue.toString();

    // console.log(inputNumber,selectNumberString);


    $.ajax({
  url: 'https://api.freecurrencyapi.com/v1/latest?apikey='+ APIKEY1,
  type: 'GET',
  success: function(data2) {
  
    
    $.each(data2.data, function(key, value) {
            if ((key==selectNumberString) || (key=="EUR")){
                    if (key=="EUR") {
                         eurkey=value;
                    }
                    if (key==selectNumberString) {
                         selectNumberStringvalue=value;
                    }
                    // console.log(key,value)
              
            } else {
                
            }
                finalcal=(eurkey/selectNumberStringvalue)*inputValue ;
                $("#euros").val(finalcal);
    });
  }
});

    });