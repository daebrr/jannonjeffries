function passWord() {
  var testV = 1;
  var pass1 = prompt("Please Enter Your Password", " ");
  var projects = document.getElementById("projects");
  var bodyBackground = document.getElementById("bodyBackground");
  var button = document.getElementById("button");
  var about = document.getElementById("about");

  while (testV < 3) {
    if (!pass1) history.go(-1);
    if (pass1.toLowerCase() == "jlj1203!") {
      alert("You can now view Jannon's projects");

      // window.open('protectpage.html');
      projects.classList.remove("hide");
      bodyBackground.classList.remove("body-background");
      about.classList.add("new-background");
      button.classList.add("hide");

      break;
    }
    testV += 1;
    var pass1 = prompt(
      "Access Denied - Password Incorrect, Please Try Again.",
      "Password"
    );
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}

// Icon hover effect

$(document).ready(function () {
  $("#resume").hover(
    function () {
      $("#resumeIcon")
        .removeClass("material-icons")
        .addClass("material-icons-outlined");
    },
    function () {
      $("#resumeIcon")
        .removeClass("material-icons-outlined")
        .addClass("material-icons");
    }
  );
  // $("#email").hover(
  //   function () {
  //     $("#emailIcon")
  //       .removeClass("material-icons")
  //       .addClass("material-icons-outlined");
  //   },
  //   function () {
  //     $("#emailIcon")
  //       .removeClass("material-icons-outlined")
  //       .addClass("material-icons");
  //   }
  // );
});

// Lightbox

// House rules functions

$(document).ready(function () {
  $("#houseRulesClosed").click(function () {
    $("#houseRulesOpened").removeClass("hide");
    $("#houseRulesOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#houseRulesOpened").removeClass("hide");
  //   $("#houseRulesOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#houseRulesOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#houseRulesOpened").addClass("hide");
  });
});

// Decline flow functions

$(document).ready(function () {
  $("#declineFlowClosed").click(function () {
    $("#declineFlowOpened").removeClass("hide");
    $("#declineFlowOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#declineFlowOpened").removeClass("hide");
  //   $("#declineFlowOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#declineFlowOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#declineFlowOpened").addClass("hide");
  });
});

// Cancel change functions

$(document).ready(function () {
  $("#cancelChangeClosed").click(function () {
    $("#cancelChangeOpened").removeClass("hide");
    $("#cancelChangeOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#cancelChangeOpened").removeClass("hide");
  //   $("#cancelChangeOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#cancelChangeOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#cancelChangeOpened").addClass("hide");
  });
});

// Inbox functions

$(document).ready(function () {
  $("#inboxClosed").click(function () {
    $("#inboxOpened").removeClass("hide");
    $("#inboxOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#inboxOpened").removeClass("hide");
  //   $("#inboxOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#inboxOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#inboxOpened").addClass("hide");
  });
});

// Flow Builder functions

$(document).ready(function () {
  $("#flowBuilderClosed").click(function () {
    $("#flowBuilderOpened").removeClass("hide");
    $("#flowBuilderOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#flowBuilderOpened").removeClass("hide");
  //   $("#flowBuilderOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#flowBuilderOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#flowBuilderOpened").addClass("hide");
  });
});

// Variant functions

$(document).ready(function () {
  $("#variantClosed").click(function () {
    $("#variantOpened").removeClass("hide");
    $("#variantOpened .lightbox_content").scrollTop(0);
  });
  // $(".project-name").click(function () {
  //   $("#variantOpened").removeClass("hide");
  //   $("#variantOpened .lightbox_content").scrollTop(0);
  // });
  $(".close").click(function () {
    $("#variantOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#variantOpened").addClass("hide");
  });
});

// Versioning functions

$(document).ready(function () {
  $("#versioningClosed").click(function () {
    $("#versioningOpened").removeClass("hide");
    $("#versioningOpened .lightbox_content").scrollTop(0);
  });
  $(".close").click(function () {
    $("#versioningOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#versioningOpened").addClass("hide");
  });
});

// Workshops functions

$(document).ready(function () {
  $("#workshopsClosed").click(function () {
    $("#workshopsOpened").removeClass("hide");
    $("#workshopsOpened .lightbox_content").scrollTop(0);
  });
  $(".close").click(function () {
    $("#workshopsOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#workshopsOpened").addClass("hide");
  });
});

// Infinity testing

$(document).ready(function () {
  $("#infinityTestingClosed").click(function () {
    $("#infinityTestingOpened").removeClass("hide");
    $("#infinityTestingOpened .lightbox_content").scrollTop(0);
  });
  $(".close").click(function () {
    $("#infinityTestingOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#infinityTestingOpened").addClass("hide");
  });
});

// Optimized A/B

$(document).ready(function () {
  $("#optimizedABClosed").click(function () {
    $("#optimizedABOpened").removeClass("hide");
    $("#optimizedABOpened .lightbox_content").scrollTop(0);
  });
  $(".close").click(function () {
    $("#optimizedABOpened").addClass("hide");
  });
  $(".back-to-projects").click(function () {
    $("#optimizedABOpened").addClass("hide");
  });
});
