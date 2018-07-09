/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojinputtext','ojs/ojformlayout','ojs/ojtable', 'ojs/ojarraydataprovider'],
 function(oj, ko, $) {
  
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
var deptArray = [{TransactionCode: 3, TransactionDescription: 'ADFPM 1001 neverending', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 5, TransactionDescription: 'BB', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 10, TransactionDescription: 'Administration', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 20, TransactionDescription: 'Marketing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 30, TransactionDescription: 'Purchasing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 40, TransactionDescription: 'Human Resources1', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 50, TransactionDescription: 'Administration2', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 60, TransactionDescription: 'Marketing3', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 70, TransactionDescription: 'Purchasing4', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 80, TransactionDescription: 'Human Resources5', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 90, TransactionDescription: 'Human Resources11', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 100, TransactionDescription: 'Administration12', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 110, TransactionDescription: 'Marketing13', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 120, TransactionDescription: 'Purchasing14', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 130, TransactionDescription: 'Human Resources15', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 1001, TransactionDescription: 'ADFPM 1001 neverending', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 1009, TransactionDescription: 'BB', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 1011, TransactionDescription: 'Administration', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 2011, TransactionDescription: 'Marketing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 3011, TransactionDescription: 'Purchasing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 4011, TransactionDescription: 'Human Resources1', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 5011, TransactionDescription: 'Administration2', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 6011, TransactionDescription: 'Marketing3', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 7011, TransactionDescription: 'Purchasing4', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 8011, TransactionDescription: 'Human Resources5', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 9011, TransactionDescription: 'Human Resources11', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 10011, TransactionDescription: 'Administration12', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 11011, TransactionDescription: 'Marketing13', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 12011, TransactionDescription: 'Purchasing14', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 13011, TransactionDescription: 'Human Resources15', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 14011, TransactionDescription: 'ADFPM 1001 neverending', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 15011, TransactionDescription: 'BB', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 21022, TransactionDescription: 'Administration', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 22022, TransactionDescription: 'Marketing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 23022, TransactionDescription: 'Purchasing', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 24022, TransactionDescription: 'Human Resources1', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 25022, TransactionDescription: 'Administration2', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 26022, TransactionDescription: 'Marketing3', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 27022, TransactionDescription: 'Purchasing4', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 28022, TransactionDescription: 'Human Resources5', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 29022, TransactionDescription: 'Human Resources11', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 310022, TransactionDescription: 'Administration12', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 311022, TransactionDescription: 'Marketing13', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 312022, TransactionDescription: 'Purchasing14', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'},
        {TransactionCode: 313022, TransactionDescription: 'Human Resources15', NeedByDate: '07-September-2018', CurrentStatus: 'Order Placed'}];
    self.dataprovider = new oj.ArrayDataProvider(deptArray, {keyAttributes: 'TransactionCode', implicitSort: [{attribute: 'TransactionCode', direction: 'ascending'}]}); 
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CustomerViewModel();
  }
);
