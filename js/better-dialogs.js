(function ($, Drupal) {
  Drupal.behaviors.static_overlay = {
    attach: function (context) {
      $(once('adamantine-static-overlay', window))
        .on({
          'dialog:aftercreate': function (event, dialog, $element, settings) {
            if (settings.modal) {
              $('body').addClass('adamantine-no-overflow');
            }
          },
          'dialog:afterclose': function (event, dialog, $element) {
            if ($element.attr('id') == 'drupal-modal') {
              $('body').removeClass('adamantine-no-overflow');
            }
          }
        });
    }
  };
})(jQuery, Drupal);
