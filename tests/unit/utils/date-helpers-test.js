import dateHelpers from 'borrowers/utils/date-helpers';
import { module, test } from 'qunit';

module('Unit | Utility | date helpers');


test('formats a date object', function(assert){
	var date = new Date("7/21/2016");
	console.log(date);
	var result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');

	assert.equal(result, 'Thu Jul 21 2016', 'returns a readable string');
});
