describe('App functions', function () {
  beforeEach(function () {
    onDeviceReady = jasmine.createSpy();
  });

  describe("On Device", function () {
    beforeEach(function () {
      jasmine.Cordova.useMock(null);
    });

    afterEach(function () {
      jasmine.Cordova.reset();
    });

    it("should do something", function () {
      onBodyLoad();
      expect(onDeviceReady).not.toHaveBeenCalled();

      jasmine.Cordova.deviceIsReady();

      expect(onDeviceReady).toHaveBeenCalled();
    });
  });
});
