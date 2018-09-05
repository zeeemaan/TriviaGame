var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "This colorful body of water separates Saudi Arabia from Africa",
  answers: ["Black Sea", "White Sea", "Red Sea", "Yellow Sea"],
  correctAnswer: "Red Sea"
}, {
  question: "The bowler and the fez are both types of these",
  answers: ["Characters", "Hats", "Shoes", "Foods"],
  correctAnswer: "Hats"
}, {
  question: "King Henry VIII married this many Catherines",
  answers: ["Two", "Three", "Seven", "Eleven"],
  correctAnswer: "Three"
}, {
  question: "It's the only mythological animal mentioned in a Harry Potter book titile",
  answers: ["Dragon", "Owl", "Centaur", "Phoenix"],
  correctAnswer: "Phoenix"
}, {
  question: "This U.S. state is the Land of Enchantment",
  answers: ["Colorado", "Florida", "New Mexico", "New Hampshire"],
  correctAnswer: "New Mexico"
}, {
  question: "In 1979 Bob was the first one of these to be given a male name",
  answers: ["Tornado", "Meteor", "Hurricane", "Star"],
  correctAnswer: "Hurricane"
}, {
  question: "The olfactory nerves affect this sense in the brain",
  answers: ["Smelling", "Hearing", "Feeling", "Tasting"],
  correctAnswer: "Smelling"
}, {
  question: "She made her solo flight across the Atlantic in 1932 in a record time of 14 hours and 56 minutes",
  answers: ["Amelia Earhart", "Elizabeth Taylor", "Jean Arthur", "Irene Dunn"],
  correctAnswer: "Amelia Earhart"
}];

var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 180,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});