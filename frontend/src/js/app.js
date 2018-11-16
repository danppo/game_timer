var countdown;
var countdown_number;
var countup_blue = 0;
var countup_red = 0;
var active_blue = false;
var active_red = false;
var timer_running = false;
var timer_inprogress = false;
var set_time = 5;
var time = 0;

// TODO
/*
reset button resets timer and countups
input screen
results screen
random timer (between values)
when timer running change start to pause 
on pause leave team selected 
modal for pause, continue, clear team selection, stop
stop button displays results
in results screen reset button
  resets timer, and team results
 sort out responsiveness
 pull project out of codepen and into repo
 



*/

$(".start").on('click', function () {
  if (timer_running) {
    clearTimeout(countdown);
    timer_running = false;
    $(this).text("Restart");
  } else {
    if (timer_inprogress == false) {
      time = set_time;
    }
    countdown_trigger();
    timer_running = true;
    $(this).text("Pause");
    timer_inprogress = true;
    $(".config").addClass("disabled");

  }
});

function countdown_trigger() {
  if (time > -1) {
    if (active_blue) {
      countup_blue++;
      $('.countup_blue').text(format_time(countup_blue));
    }
    if (active_red) {
      countup_red++;
      $('.countup_red').text(format_time(countup_red));
    }
    $('.countdown_text').text(format_time(time));
    time--;
    if (time > -1) {
      countdown = setTimeout('countdown_trigger()', 1000);
    } else {
      console.log('happends now');
      end_screen();
      timer_running = false;
      $('.countdown-wrapper').css("background-color", "white");
    }
  }
}

$('.stop').on('click', function () {
  end_screen();


});
$('.reset').on('click', function () {
  time = set_time;
  countup_blue = 0;
  countup_red = 0;
  $('.countup_red').text(format_time(countup_red));
  $('.countup_blue').text(format_time(countup_blue));
  $(".modal_results").hide();
  $(".modal_wrapper").hide();
})


$(".blue").on("click", function () {
  if (timer_running) {
    active_blue = true;
    active_red = false;
    $('.countdown-wrapper').css("background-color", "lightblue");
  }
});
$(".red").on("click", function () {
  if (timer_running) {
    active_red = true;
    active_blue = false;
    $('.countdown-wrapper').css("background-color", "pink");
  }
});
$(".save").on("click", function () {
  // set_time = (1 * $(".game_time").val())
  console.log($(".game_time").val());
  format_time(set_time)
  $('.countdown_text')
    .text(format_time(set_time));
  $(".modal").hide();
  $(".modal_wrapper").hide();



  //set_time = $(".game_time option:selected").
});

$(".config").on("click", function () {
  if (!timer_inprogress) {
    $(".modal_wrapper").show();
    $(".modal").show();
  }
  //set_time = $(".game_time option:selected").
});



$(".input_teams").on("change", function () {
  $(".output").text(this.value);
  if (this.value == 2) {
    $(".three").hide();
    $(".four").hide();
    $(".five").hide();
    $(".six").hide();
  } else if (this.value == 3) {
    $(".three").show();
    $(".four").hide();
    $(".five").hide();
    $(".six").hide();
  } else if (this.value == 4) {
    $(".three").show();
    $(".four").show();
    $(".five").hide();
    $(".six").hide();
  } else if (this.value == 5) {
    $(".three").show();
    $(".four").show();
    $(".five").show();
    $(".six").hide();
  } else if (this.value == 6) {
    $(".three").show();
    $(".four").show();
    $(".five").show();
    $(".six").show();
  }
});



function format_time(input_time) {
  var minutes = Math.floor(input_time / 60);
  var seconds = (input_time - (minutes * 60));
  var formattedMinutes = '' + minutes;
  var formattedSeconds = '' + seconds;
  if (formattedMinutes.length < 2) {
    formattedMinutes = '0' + formattedMinutes;
  }
  if (formattedSeconds.length < 2) {
    formattedSeconds = '0' + formattedSeconds;
  }
  return formattedMinutes + ":" + formattedSeconds;
}

function end_screen() {
  clearTimeout(countdown);
  $('.countdown-wrapper').css("background-color", "white");
  timer_running = false;
  timer_inprogress = false;
  $(".config").removeClass("disabled");
  $('.countdown_text')
    .text(format_time(set_time));
  var game_length = set_time - time - 1;
  $(".game_time").text(format_time(game_length));
  // if (countup_red != 0){
  //   countup_red--
  // }
  //  if (countup_blue != 0){
  //   countup_blue--
  // }
  $(".red_time").text(format_time(countup_red));
  $(".blue_time").text(format_time(countup_blue));

  $('.start').text("Start");
  active_blue = false;
  active_red = false;
  $(".modal_results").show();
  $(".modal_wrapper").show();
}


//https://github.com/richtr/NoSleep.js