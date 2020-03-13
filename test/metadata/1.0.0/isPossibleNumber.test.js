import metadata from './metadata.min.json'
import _isPossibleNumber from '../../../source/isPossibleNumber'

function isPossibleNumber(...parameters)
{
	parameters.push(metadata)
	return _isPossibleNumber.apply(this, parameters)
}

describe('isPossibleNumber', () =>
{
	it('should work in edge cases', function()
	{
		expect(() => isPossibleNumber({ phone: '1112223344', country: 'RU' })).to.throw('Missing "possibleLengths" in metadata.')
	})
})