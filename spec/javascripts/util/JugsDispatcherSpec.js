describe("Util", function () {
  describe("juggernaut  dispatcher", function () {
    describe("attaching to an event action for a token", function () {
      it("should subscribe to the tokens channel and forward any messages for the corresponding event action", function () {
        var simonTempler = jasmine.createSpy("simonTempler");

        var token = "12345";
        jugsDispatcher.subscribe(token, 'service_added', simonTempler);

        window.triggerJugs(token, {
          action:'service_added',
          data:{ message:'hi!' }
        });

        expect(simonTempler).toHaveBeenCalledWith({ message:'hi!' });

        simonTempler.reset();
        window.triggerJugs(token, {
          action:'service_not_added',
          data:{ message:'boo' }
        });

        expect(simonTempler).not.toHaveBeenCalled();

        simonTempler.reset();

        window.triggerJugs("891011", {
          action:'service_added',
          data:{ message:'hi' }
        });

        expect(simonTempler).not.toHaveBeenCalled();
      });
    });
  });

});