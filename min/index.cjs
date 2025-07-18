'use strict'

var metadata = require('../metadata.min.json')
var core = require('../core/index.cjs')

function call(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(metadata)
	return func.apply(this, args)
}

function parsePhoneNumberFromString() {
	return call(core.parsePhoneNumberFromString, arguments)
}

// ES5 `require()` "default" "interoperability" hack.
// An alternative approach:
// https://www.npmjs.com/package/babel-plugin-add-module-exports
exports = module.exports = parsePhoneNumberFromString
exports['default'] = parsePhoneNumberFromString

exports.PhoneNumber = function PhoneNumber(number) {
	return core.PhoneNumber.call(this, number, metadata)
}
exports.PhoneNumber.prototype = Object.create(core.PhoneNumber.prototype, {})
exports.PhoneNumber.prototype.constructor = exports.PhoneNumber

exports.ParseError = core.ParseError

function parsePhoneNumberWithError() {
	return call(core.parsePhoneNumberWithError, arguments)
}

// `parsePhoneNumber()` named export has been renamed to `parsePhoneNumberWithError()`.
exports.parsePhoneNumber = parsePhoneNumberWithError
exports.parsePhoneNumberWithError = parsePhoneNumberWithError

// `parsePhoneNumberFromString()` named export is now considered legacy:
// it has been promoted to a default export due to being too verbose.
exports.parsePhoneNumberFromString = parsePhoneNumberFromString

exports.isValidPhoneNumber = function isValidPhoneNumber() {
	return call(core.isValidPhoneNumber, arguments)
}

exports.isPossiblePhoneNumber = function isPossiblePhoneNumber() {
	return call(core.isPossiblePhoneNumber, arguments)
}

exports.validatePhoneNumberLength = function validatePhoneNumberLength() {
	return call(core.validatePhoneNumberLength, arguments)
}

exports.findNumbers = function findNumbers() {
	return call(core.findNumbers, arguments)
}

exports.searchNumbers = function searchNumbers() {
	return call(core.searchNumbers, arguments)
}

exports.findPhoneNumbersInText = function findPhoneNumbersInText() {
	return call(core.findPhoneNumbersInText, arguments)
}

exports.searchPhoneNumbersInText = function searchPhoneNumbersInText() {
	return call(core.searchPhoneNumbersInText, arguments)
}

exports.PhoneNumberMatcher = function PhoneNumberMatcher(text, options) {
	return core.PhoneNumberMatcher.call(this, text, options, metadata)
}
exports.PhoneNumberMatcher.prototype = Object.create(core.PhoneNumberMatcher.prototype, {})
exports.PhoneNumberMatcher.prototype.constructor = exports.PhoneNumberMatcher

exports.AsYouType = function AsYouType(country) {
	return core.AsYouType.call(this, country, metadata)
}
exports.AsYouType.prototype = Object.create(core.AsYouType.prototype, {})
exports.AsYouType.prototype.constructor = exports.AsYouType

exports.isSupportedCountry = function isSupportedCountry(country) {
	return call(core.isSupportedCountry, arguments)
}

exports.getCountries = function getCountries() {
	return call(core.getCountries, arguments)
}

exports.getCountryCallingCode = function getCountryCallingCode() {
	return call(core.getCountryCallingCode, arguments)
}

exports.getExtPrefix = function getExtPrefix(country) {
	return call(core.getExtPrefix, arguments)
}

exports.getExampleNumber = function getExampleNumber() {
	return call(core.getExampleNumber, arguments)
}

exports.Metadata = function Metadata() {
	return core.Metadata.call(this, metadata)
}
exports.Metadata.prototype = Object.create(core.Metadata.prototype, {})
exports.Metadata.prototype.constructor = exports.Metadata

exports.formatIncompletePhoneNumber = function formatIncompletePhoneNumber() {
	return call(core.formatIncompletePhoneNumber, arguments)
}

exports.parseIncompletePhoneNumber = core.parseIncompletePhoneNumber
exports.parsePhoneNumberCharacter = core.parsePhoneNumberCharacter
exports.parseDigits = core.parseDigits
exports.DIGIT_PLACEHOLDER = core.DIGIT_PLACEHOLDER

exports.parseRFC3966 = core.parseRFC3966
exports.formatRFC3966 = core.formatRFC3966
