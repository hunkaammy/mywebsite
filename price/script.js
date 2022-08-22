jQuery(document).ready(function () {
  let minPrice = jQuery("#minPrice");
  let maxPrice = jQuery("#maxPrice");

  function filterPrices() {
    jQuery(".container .item").each(function () {
      let itemPrice = jQuery(this).children("#price").html();
      itemPrice = +itemPrice.slice(1);

      if (minPrice.val() <= +itemPrice && maxPrice.val() >= +itemPrice) {
        jQuery(this).css("display", "block");
      } else if (!minPrice.val() || !maxPrice.val()) {
        jQuery(this).css("display", "block");
      } else {
        jQuery(this).css("display", "none");
      }
    });
  }

  jQuery(minPrice).keyup(function () {
    filterPrices();
  });

  jQuery(maxPrice).keyup(function () {
    filterPrices();
  });
});