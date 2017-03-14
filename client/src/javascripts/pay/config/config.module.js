/**
 * Created by Ehbraheem on 14/03/2017.
 */

(function () {

    "use strict";

    angular
        .module("pay.config", [])
        .constant("pay.config.APP_CONFIG", {
            main_page_html : "pay/pages/main.html",
            product_html : "pay/product/product.html",
            product_list_html : "pay/product/product_list/product_list.html"
        });
})();