import isValidNumber from '../isValid.js'

/**
 * Checks if a given phone number is valid within a given region.
 * Is just an alias for `phoneNumber.isValid() && phoneNumber.country === country`.
 */
export default function isValidNumberForRegion(input, country, options, metadata) {
	// If assigning the `{}` default value is moved to the arguments above,
	// code coverage would decrease for some weird reason.
	options = options || {}
	return input.country === country && isValidNumber(input, options, metadata)
}