/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojinputtext','ojs/ojformlayout','ojs/ojtable', 'ojs/ojarraydataprovider'],
 function(oj, ko, $) {
  
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
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
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
              this.columns = ko.computed(function() {
                return this.isLargeOrUp() ? 2 : 1;
              }, this);
              this.labelEdge = ko.computed(function() {
                return this.isSmall() ? "top" : "start";
              }, this);
var deptArray = [{ItemCode: 3, ItemDescription: 'ADFPM 1001 neverending', OnHandValue: 200, UOM: 300},
        {ItemCode: 5, ItemDescription: 'BB', OnHandValue: 200, UOM: 300},
        {ItemCode: 10, ItemDescription: 'Administration', OnHandValue: 200, UOM: 300},
        {ItemCode: 20, ItemDescription: 'Marketing', OnHandValue: 200, UOM: 300},
        {ItemCode: 30, ItemDescription: 'Purchasing', OnHandValue: 200, UOM: 300},
        {ItemCode: 40, ItemDescription: 'Human Resources1', OnHandValue: 200, UOM: 300},
        {ItemCode: 50, ItemDescription: 'Administration2', OnHandValue: 200, UOM: 300},
        {ItemCode: 60, ItemDescription: 'Marketing3', OnHandValue: 200, UOM: 300},
        {ItemCode: 70, ItemDescription: 'Purchasing4', OnHandValue: 200, UOM: 300},
        {ItemCode: 80, ItemDescription: 'Human Resources5', OnHandValue: 200, UOM: 300},
        {ItemCode: 90, ItemDescription: 'Human Resources11', OnHandValue: 200, UOM: 300},
        {ItemCode: 100, ItemDescription: 'Administration12', OnHandValue: 200, UOM: 300},
        {ItemCode: 110, ItemDescription: 'Marketing13', OnHandValue: 200, UOM: 300},
        {ItemCode: 120, ItemDescription: 'Purchasing14', OnHandValue: 200, UOM: 300},
        {ItemCode: 130, ItemDescription: 'Human Resources15', OnHandValue: 200, UOM: 300},
        {ItemCode: 1001, ItemDescription: 'ADFPM 1001 neverending', OnHandValue: 200, UOM: 300},
        {ItemCode: 1009, ItemDescription: 'BB', OnHandValue: 200, UOM: 300},
        {ItemCode: 1011, ItemDescription: 'Administration', OnHandValue: 200, UOM: 300},
        {ItemCode: 2011, ItemDescription: 'Marketing', OnHandValue: 200, UOM: 300},
        {ItemCode: 3011, ItemDescription: 'Purchasing', OnHandValue: 200, UOM: 300},
        {ItemCode: 4011, ItemDescription: 'Human Resources1', OnHandValue: 200, UOM: 300},
        {ItemCode: 5011, ItemDescription: 'Administration2', OnHandValue: 200, UOM: 300},
        {ItemCode: 6011, ItemDescription: 'Marketing3', OnHandValue: 200, UOM: 300},
        {ItemCode: 7011, ItemDescription: 'Purchasing4', OnHandValue: 200, UOM: 300},
        {ItemCode: 8011, ItemDescription: 'Human Resources5', OnHandValue: 200, UOM: 300},
        {ItemCode: 9011, ItemDescription: 'Human Resources11', OnHandValue: 200, UOM: 300},
        {ItemCode: 10011, ItemDescription: 'Administration12', OnHandValue: 200, UOM: 300},
        {ItemCode: 11011, ItemDescription: 'Marketing13', OnHandValue: 200, UOM: 300},
        {ItemCode: 12011, ItemDescription: 'Purchasing14', OnHandValue: 200, UOM: 300},
        {ItemCode: 13011, ItemDescription: 'Human Resources15', OnHandValue: 200, UOM: 300},
        {ItemCode: 14011, ItemDescription: 'ADFPM 1001 neverending', OnHandValue: 200, UOM: 300},
        {ItemCode: 15011, ItemDescription: 'BB', OnHandValue: 200, UOM: 300},
        {ItemCode: 21022, ItemDescription: 'Administration', OnHandValue: 200, UOM: 300},
        {ItemCode: 22022, ItemDescription: 'Marketing', OnHandValue: 200, UOM: 300},
        {ItemCode: 23022, ItemDescription: 'Purchasing', OnHandValue: 200, UOM: 300},
        {ItemCode: 24022, ItemDescription: 'Human Resources1', OnHandValue: 200, UOM: 300},
        {ItemCode: 25022, ItemDescription: 'Administration2', OnHandValue: 200, UOM: 300},
        {ItemCode: 26022, ItemDescription: 'Marketing3', OnHandValue: 200, UOM: 300},
        {ItemCode: 27022, ItemDescription: 'Purchasing4', OnHandValue: 200, UOM: 300},
        {ItemCode: 28022, ItemDescription: 'Human Resources5', OnHandValue: 200, UOM: 300},
        {ItemCode: 29022, ItemDescription: 'Human Resources11', OnHandValue: 200, UOM: 300},
        {ItemCode: 310022, ItemDescription: 'Administration12', OnHandValue: 200, UOM: 300},
        {ItemCode: 311022, ItemDescription: 'Marketing13', OnHandValue: 200, UOM: 300},
        {ItemCode: 312022, ItemDescription: 'Purchasing14', OnHandValue: 200, UOM: 300},
        {ItemCode: 313022, ItemDescription: 'Human Resources15', OnHandValue: 200, UOM: 300}];
    self.dataprovider = new oj.ArrayDataProvider(deptArray, {keyAttributes: 'ItemCode', implicitSort: [{attribute: 'ItemCode', direction: 'ascending'}]});
       
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
