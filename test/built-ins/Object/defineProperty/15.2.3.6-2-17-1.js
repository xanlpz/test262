// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-2-17-1
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, 1, {});

        return obj.hasOwnProperty("1");

    }
runTestCase(testcase);