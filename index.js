const crypto = require("crypto-js");

const SECURITY = "aquabluewhite";

let token = crypto.SHA256(SECURITY);

console.log(token.toString());

let sign = crypto.HmacSHA256(time, SECURITY);

console.log(sign.toString());
