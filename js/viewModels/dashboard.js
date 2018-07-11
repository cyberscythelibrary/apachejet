/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',  'ojs/ojinputnumber','ojs/ojchart', 'ojs/ojselectcombobox','ojs/ojinputtext', 'ojs/ojlabel','ojs/ojbutton','ojs/ojdialog','ojs/ojmessages', 'ojs/ojmessage'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
        self.innerRadius = ko.observable(0.5);
        self.centerLabel = ko.observable('Customer Order');
        self.labelStyle = ko.observable('font-size:20px;color:#999999;');

        /* chart data */
        var pieSeries = [{name: "Order Placed", items: [42]},
                         {name: "Design", items: [55]},
                         {name: "Development", items: [36]},
                         {name: "Packaging & Distribution", items: [22]},
                         {name: "Feedback & Completion", items: [22]}];
        var pieGroups = ["Group A"];
        this.pieSeriesValue = ko.observableArray(pieSeries);
        this.pieGroupsValue = ko.observableArray(pieGroups);
        
      self.name = ko.observable();
      

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
      
      self.submit = function(){
        alert('Name entered is  ' + self.name());
    }
    }
    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
