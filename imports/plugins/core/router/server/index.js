import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "authKeycloak"(options) {
    check(options, Object);
    this.setUserId(options.accountId); // Sets the userId for subsequent method calls
    return true;
  }
});
