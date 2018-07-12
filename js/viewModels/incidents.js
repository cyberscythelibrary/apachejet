/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojformlayout', 'ojs/ojtable', 'ojs/ojarraydataprovider'],
        function (oj, ko, $) {

            function IncidentsViewModel() {
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
                self.highlightChars = [];


                self.handleValueChanged = function ()
                {
                    console.log("Value Changed for search START");
                    self.highlightChars = [];
                    var filter = document.getElementById('filter').rawValue;
                    if (filter.length == 0)
                    {
                        self.clearClick();
                        return;
                    }
                    var deptArray = [];
                    var i, id;
                    for (i = self.myjsonArray.length - 1; i >= 0; i--)
                    {
                        id = self.myjsonArray[i].ItemCode;
                        Object.keys(self.myjsonArray[i]).forEach(function (field)
                        {
                            if (self.myjsonArray[i][field].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0)
                            {
                                self.highlightChars[id] = self.highlightChars[id] || {};
                                self.highlightChars[id][field] = getHighlightCharIndexes(filter, self.myjsonArray[i][field]);
                                if (deptArray.indexOf(self.myjsonArray[i]) < 0)
                                {
                                    deptArray.push(self.myjsonArray[i]);
                                }
                            }
                        });
                    }
                    deptArray.reverse();
                    self.dataprovider(new oj.ArrayDataProvider(deptArray, {keyAttributes: 'ItemCode', implicitSort: [{attribute: 'ItemCode', direction: 'ascending'}]}));

                    function getHighlightCharIndexes(highlightChars, text)
                    {
                        console.log("---highlightChars START---");
                        console.log(highlightChars);
                        console.log(text);
                        var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
                        console.log("---highlightChars END---");
                        return {startIndex: highlightCharStartIndex, length: highlightChars.length};
                    }
                    ;
                    console.log("Value Changed for search END");
                };
                self.clearClick = function (event) {
                    self.filter('');
                    self.dataprovider(new oj.ArrayDataProvider(self.myjsonArray, {keyAttributes: 'ItemCode', implicitSort: [{attribute: 'ItemCode', direction: 'ascending'}]}));
                    self.highlightChars = [];
                    document.getElementById('filter').value = "";
                    return true;
                }
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



                var inventoryURL = "http://demo4349961.mockable.io/inventory";
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


                self.myjsonArray = myjson;
                self.dataprovider = new ko.observable(new oj.ArrayDataProvider(self.myjsonArray, {keyAttributes: 'ItemCode', implicitSort: [{attribute: 'ItemCode', direction: 'ascending'}]}));

//$.getJSON(flickerURL, function(json){
//    console.log(JSON.stringify(json));
//    alert(JSON.stringify(json));
//});

            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new IncidentsViewModel();
        }
);
