angular.module("contact-list.controller",[]).controller("ContactListCtrl",["$http",function(a){this.contacts=[],a.get("/api/contacts").then(function(a){this.contacts=a.data}.bind(this)).catch(function(a){console.log(a)})}]);