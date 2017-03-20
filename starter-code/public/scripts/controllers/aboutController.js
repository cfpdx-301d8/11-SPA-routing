'use strict';

(function (module) {
  const aboutController = {};

  // DONE TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.render = function () {
    $('.tab-content').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(window);
