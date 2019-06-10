// Google's tests:

// import metadata from '../metadata.min.json' assert { type: 'json' }

// import formatPhoneNumberForMobileDialing from './formatPhoneNumberForMobileDialing.js'

// describe('formatPhoneNumberForMobileDialing', () =>
// {
// 	it('should format for mobile dialing', () =>
// 	{
// 		formatPhoneNumberForMobileDialing({ phone: '8005553535', country: 'RU' }, 'US', true, metadata).should.equal('+7 800 555 3535')
// 		formatPhoneNumberForMobileDialing({ phone: '8005553535', country: 'RU' }, 'US', false, metadata).should.equal('+78005553535')
// 		formatPhoneNumberForMobileDialing({ phone: '8005553535', country: 'RU' }, 'RU', false, metadata).should.equal('8005553535')
// 	})
// })