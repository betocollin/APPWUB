/*
 * File: app/store/HomeListStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.HomeListStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.HomeListModel'
    ],

    config: {
        data: [
            {
                name: 'Restaurants'
            },
            {
                name: 'Cinemas'
            },
            {
                name: 'Events'
            },
            {
                name: 'Crop Over Bands'
            },
            {
                name: 'Concerts'
            }
        ],
        model: 'MyApp.model.HomeListModel',
        storeId: 'HomeListStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        }
    }
});