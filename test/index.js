var expect = require("chai").expect;
var playEngine = require("../index.js");

describe("Play Engine", function() {

    describe("getPlayResult", function() {

        it("returns play results.", function() {

            var playResult = playEngine.getPlayResult();

            expect(playResult).to.equal("First Down!");

        });

    });

});
