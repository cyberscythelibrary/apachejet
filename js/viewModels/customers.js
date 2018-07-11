/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojformlayout', 'ojs/ojtable', 'ojs/ojarraydataprovider'],
        function (oj, ko, $) {

            function CustomerViewModel() {
                var self = this;
                // Below are a set of the ViewModel methods invoked by the oj-module component.
                // Please reference the oj-module jsDoc for additional information.

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here. 
                 * This method might be called multiple times - after the View is created 
                 * and inserted into the DOM and after the View is reconnected 
                 * after being disconnected.
                 */
                self.connected = function () {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is disconnected from the DOM.
                 */
                self.disconnected = function () {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after transition to the new View is complete.
                 * That includes any possible animation between the old and the new View.
                 */
                self.transitionCompleted = function () {
                    // Implement if needed
                };

                self.filter = ko.observable();

                this.isSmall = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
                        oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));
                this.isLargeOrUp = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
                        oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP));

                // For small screens: 1 column and labels on top
                // For medium screens: 1 columns and labels inline
                // For large screens or bigger: 2 columns and labels inline
                this.columns = ko.computed(function () {
                    return this.isLargeOrUp() ? 2 : 1;
                }, this);
                this.labelEdge = ko.computed(function () {
                    return this.isSmall() ? "top" : "start";
                }, this);


//http://demo4349961.mockable.io/customerorders

                var inventoryURL = "http://demo4349961.mockable.io/customerorders";
                var myjson = [];

                $.ajaxSetup({
                    async: false
                });
                
                $.getJSON(inventoryURL, {
                    tags: "mount rainier",
                    tagmode: "any",
                    format: "json"
                }).done(function (data) {
                    myjson = data;
//alert(JSON.stringify(data));
                });

                self.dataprovider = new oj.ArrayDataProvider(myjson, {keyAttributes: 'TransactionCode', implicitSort: [{attribute: 'TransactionCode', direction: 'ascending'}]});
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CustomerViewModel();
        }
);
