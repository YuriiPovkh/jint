// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator x >>> y uses GetValue
 *
 * @path ch11/11.7/11.7.3/S11.7.3_A2.1_T2.js
 * @description If GetBase(x) is null, throw ReferenceError
 */

//CHECK#1
try {
  x >>> 1;
  $ERROR('#1.1: x >>> 1 throw ReferenceError. Actual: ' + (x >>> 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x >>> 1 throw ReferenceError. Actual: ' + (e));  
  }
}


