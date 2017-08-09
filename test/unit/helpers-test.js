import utils from 'utils/helpers';

describe('helpers', function() {

    it('helpers foreach test', function() {
        var aData = { hello: 'hi' };
        var tester = [];

        function fnEach(key, val) {
            tester.push(key);
            tester.push(val);
        }

        utils.foreach(aData, fnEach);

        assert.equal(tester[0], 'hello');
        assert.equal(tester[1], 'hi');
    });

    it('log will not throw if console is cleared', function() {
        var tmpConsole = console.log;

        console.log = null;

        // this should not break
        expect(function() {
            utils.log('testing');
        }).to.not.throw();

        console.log = tmpConsole;
    });
});

