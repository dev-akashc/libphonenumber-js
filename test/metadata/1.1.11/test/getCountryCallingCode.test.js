import metadata from '../metadata.min.json'

import getCountryCallingCode from '../../../../source/getCountryCallingCode'

describe('getCountryCallingCode', () =>
{
	it('should get country calling code', () =>
	{
		getCountryCallingCode('US', metadata).should.equal('1')
	})

	it('should throw if country is unknown', () =>
	{
		expect(() => getCountryCallingCode('ZZ', metadata)).to.throw('Unknown country: ZZ')
	})
})