'use strict';

(function(module) {
  const aboutController = {};

  // DONE TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.showAbout = function(){
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  }
  module.aboutController = aboutController;
})(window);
