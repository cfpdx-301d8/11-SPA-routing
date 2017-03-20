'use strict';

(function(module) {
  const articleController = {};
  // DONE TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.render = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('.tab-content').hide();
    $('#articles').fadeIn();
  }

  module.articleController = articleController;
})(window);
