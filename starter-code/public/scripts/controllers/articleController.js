'use strict';

Article.fetchAll(articleView.initIndexPage);

(function(module) {
  const articleController = {};

  articleController.logview = function() {
    console.log('From articleController');
  }

  articleController.render = function() {
    $('#about').hide();
    $('#articles').fadeIn();
  }

  module.articleController = articleController;
})(window);

  // Done/TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section: