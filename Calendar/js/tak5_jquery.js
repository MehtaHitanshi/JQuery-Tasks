var curr_date = new Date();
var d = new Date();

var monthsName = ['JANUARY ', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE ', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
var monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var color_date = 0;

$(document).ready(function () {

  // calendar
  function cal() {
    console.log(color_date);

    var date = d.getDate();
    var month = d.getMonth() + 1;
    var first_month = d.getMonth();
    var year = d.getFullYear();

    var thisMonthLastDate = monthsdays[month - 1];

    $(".month_year h3").text(monthsName[month - 1] + ' - ' + year);
    $(".month_year h3").appendTo('');

    var highlightdate = new Date();

    if (d.getMonth() + 1 == month && d.getFullYear() == year) {
      highlightdate = date;
    }

    if (month === 2) {
      if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
        thisMonthLastDate = 29;
        console.log(thisMonthLastDate);
      }
    }

    var todaydateColor = new Date();
    var firstDay = new Date(year, first_month, 1);
    var start = firstDay.getDay();
    // var lastDay = new Date(year, month, 0);
    var count = 0, count_1 = 0;

    for (i = 0; i < 6; i++) {
      $("#cal_dates").append(`<tr>`);
      for (j = 0; j < 7; j++) {
        count++;

        if (thisMonthLastDate == count_1) {
          $("#cal_dates").append(`<td></td>`);
        }
        else if (count > start) {
          count_1++;
          if (count_1 == todaydateColor.getDate() && todaydateColor.getMonth() == d.getMonth() && todaydateColor.getFullYear() == d.getFullYear()) {
            $("#cal_dates").append(`<td class=present>${count_1}</td>`);
          }else if(color_date == count_1){
            $("#cal_dates").append(`<td class=finddateColor>${count_1}</td>`);
          }
          else {
            $("#cal_dates").append(`<td>${count_1}</td>`);
          }
        }
        else {
          $("#cal_dates").append(`<td></td>`);
        }
      }
      $("#cal_dates").append(`</tr>`);
    }
  }

  // today btn
  $('#today_btn').click(function () {
    d = new Date();
    clearCal();
    cal();
    $(".finddateColor").css({"background":"none"});
  });

  // get dates
  $("#month_btn").change(function () {
    $("#date_btn").empty();
    getmonthsDate();
  });

  function getmonthsDate() {
    var getyear = $("#year_btn").val();
    var getmonth = $("#month_btn").val();

    var getday = new Date(getyear, getmonth, 0).getDate();
    $("#date_btn").append(`<option>DATE</option>`);

    for (var fdate = 1; fdate <= getday; fdate++) {
      $("#date_btn").append(`<option>${fdate}</option>`);
    }
  }

  // find btn
  var fyear, fmonth, fdate;
  $("#find_btn").click(function () {    
    findDate();
  });

  function findDate() {
    fyear = $("#year_btn").val();
    fmonth = $("#month_btn").val();
    fdate = $("#date_btn").val();
    d = new Date(fyear, fmonth - 1);
    color_date=fdate;
    clearCal();
    cal();
  }

  // year
  for (var years = 1970; years <= 2070; years++) {
    $("#year_btn").append(`<option>${years}</option>`);
  }

  // month
  for (var months = 0; months < 12; months++) {
    $("#month_btn").append(`<option value = ${months + 1}>${monthsName[months]}</option>`);
  }

  // dates
  for (var dates = 1; dates <= 31; dates++) {
    $("#date_btn").append(`<option>${dates}</option>`);
  }

  // prev arrow
  $('.back').click(function () {
    d.setMonth(d.getMonth() - 1);
    clearCal();
    cal();
    $(".finddateColor").css({"background":"none"});
  });

  // next arrow
  $('.next').click(function () {
    d.setMonth(d.getMonth() + 1);
    clearCal();
    cal();
    $(".finddateColor").css({"background":"none"});

  });

  // clear calendar
  function clearCal() {
    $(".month_year h3").empty();
    $("#cal_dates").empty();
  }

  cal();
});