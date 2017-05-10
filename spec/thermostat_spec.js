describe('Thermostat', function(){
  var britishGas;
  beforeEach(function() {
    britishGas = new Thermostat();
  });

  describe('checks temp, ', function() {
    it('returns 20.', function() {
      expect(britishGas._temp).toEqual(20);
    });
  });

  describe('it increases temp,', function() {
    it('returns 21.', function(){
      britishGas.up(1);
      expect(britishGas._temp).toEqual(21);
    });
  });

  describe('it decreases temp, ', function() {
    it('returns 19.', function() {
      britishGas.down(1);
      expect(britishGas._temp).toEqual(19);
    });
  });

  describe('minimum temp,', function() {
    it('is 10.', function() {
      expect(britishGas._minTemp).toEqual(10);
    });

    it('cannot lower anymore.', function(){
      britishGas.down(10)
      expect(function(){britishGas.down(1)}).toThrow('Minimum temp reached.');
    });

    it('can not be less than 10.', function() {
      expect(function() {britishGas.down(11)}).toThrow('Minimum temp exceeded');
    })
  });

  describe('power saving mode is on,', function() {
    it('maximum temp is 25.', function() {
      expect(britishGas._maxTemp).toEqual(25);
    });
  });

  describe('power saving mode is off,', function(){
    it('maximum is 32.', function(){
      britishGas.powerModeOff();
      expect(britishGas._maxTemp).toEqual(32);
    });

    it('power mode back on max temp 25.', function() {
      britishGas.powerModeOff();
      britishGas.powerModeOn();
      expect(britishGas._maxTemp).toEqual(25);
    });
  });

  describe('reset temp,', function(){
    it('temp is 20.', function(){
      britishGas.down(4);
      britishGas.resetTemp();
      expect(britishGas._temp).toEqual(20);
    });
  });

  describe('current energy usage', function() {
    it('less than 18 return "low usage"', function() {
      britishGas.down(5);
      expect(britishGas.energyUsage).toMatch('low-usage');
    });
    it('less than 25 returns "medium ussage"', function(){
      expect(britishGas.energyUsage).toMatch('medium-usage');
    });
    it('anything else is "high usage"', function() {
      britishGas.up(6)
      expect(britishGas.energyUsage).toMatch('high-usage');
    });
  });
});
