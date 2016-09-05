/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'Magento_Ui/js/form/element/abstract'
], function (Abstract) {
    'use strict';

    return Abstract.extend({
        defaults: {
            elementTmpl: 'Magento_Catalog/form/element/price-input'
        },

        /**
         * Callback that fires when 'input' event is performed
         *
         * @param {Object} data
         * @param {Object} event
         */
        onInput: function (data, event) { }
    });
});
