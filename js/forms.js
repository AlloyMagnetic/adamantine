(function ($, Drupal) {

  Drupal.behaviors.select2 = {
    attach: function () {
      // In your Javascript (external .js resource or <script> tag)
      $(document).ready(function () {
        $('.form-select').select2();
      });
    }
  }

})(jQuery, Drupal);
