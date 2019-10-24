// Copyright 2019 Igalia S.L.. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Syntax error if a private name follows a question dot operator (optional chaining)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-private]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    MemberExpression : MemberExpression.PrivateIdentifier
    1. Let baseReference be the result of evaluating MemberExpression.
    2. Let baseValue be ? GetValue(baseReference).
    3. Let bv be ? RequireObjectCoercible(baseValue).
    4. Let fieldNameString be the StringValue of PrivateIdentifier.
    5. Return MakePrivateReference(bv, fieldNameString).
---*/


$DONOTEVALUATE();

var C = class {
  #x = 0;
  foo() {
    return this?.#foo;
  }
}
