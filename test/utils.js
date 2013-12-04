describe('utils', function () {

  before(function () {
    this.utils = require('../lib/utils');
  });

  describe('#endswith(str, end)', function () {

    it('returns true if `str` ends with `end`', function () {
      this.utils.endswith('wow. such test', 'test').should.equal(true);
    });

    it('returns false if `str` does not end with `end`', function () {
      this.utils.endswith('beautiful doge', 'wow').should.equal(false);
    });

    it('returns true if `end` is empty', function () {
      this.utils.endswith('wow', '').should.equal(true);
    });

  });

});
