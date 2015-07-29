var path = require('path');

var initShouldSinon = function(files) {
    var shouldSinonPath = path.dirname(require.resolve('should-sinon')) + path.sep + 'should-sinon.js';
    // var sinonPath = path.dirname(require.resolve('sinon')) + '/../pkg';

    var createPattern = function(file) {
    	return {pattern: file, included: true, served: true, watched: false};
	};

    files.unshift(createPattern(shouldSinonPath));
};

initShouldSinon.$inject = ['config.files'];

module.exports = {
    'framework:should-sinon': ['factory', initShouldSinon]
};
