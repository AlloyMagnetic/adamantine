(function ($, Drupal) {
  Drupal.behaviors.static_overlay = {
    attach: function (context) {
      if (!once('adamantine-static-overlay', 'html').length) {
        $(window).on({
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
    }
  };
})(jQuery, Drupal);

