'use strict'

var min = require('./min/index.cjs')
var metadata = require('./metadata.min.json')

function withMetadataArgument(func, _arguments) {
    var args = Array.prototype.slice.call(_arguments)
    args.push(metadata)
    return func.apply(this, args)
}

exports = module.exports = min.parsePhoneNumberFromString
exports['default'] = min.parsePhoneNumberFromString

exports.parsePhoneNumberFromString = min.parsePhoneNumberFromString

exports.PhoneNumber = min.PhoneNumber
exports.ParseError = min.ParseError

exports.parsePhoneNumber = min.parsePhoneNumberWithError
exports.parsePhoneNumberWithError = min.parsePhoneNumberWithError

exports.isValidPhoneNumber = min.isValidPhoneNumber
exports.isPossiblePhoneNumber = min.isPossiblePhoneNumber
exports.validatePhoneNumberLength = min.validatePhoneNumberLength

var parse_ = require('./build/legacy/parse.js').default
exports.parse = function parse() {
    return withMetadataArgument(parse_, arguments)
}
exports.parseNumber = exports.parse

var format_ = require('./build/legacy/format.js').default
exports.format = function format() {
    return withMetadataArgument(format_, arguments)
}
exports.formatNumber = exports.format

var getNumberType_ = require('./build/legacy/getNumberType.js').default
exports.getNumberType = function getNumberType() {
    return withMetadataArgument(getNumberType_, arguments)
}

var isPossibleNumber_ = require('./build/legacy/isPossibleNumber.js').default
exports.isPossibleNumber = function isPossibleNumber() {
    return withMetadataArgument(isPossibleNumber_, arguments)
}

var isValidNumber_ = require('./build/legacy/isValidNumber.js').default
exports.isValidNumber = function isValidNumber() {
    return withMetadataArgument(isValidNumber_, arguments)
}

var isValidNumberForRegion_ = require('./build/legacy/isValidNumberForRegion.js').default
exports.isValidNumberForRegion = function isValidNumberForRegion() {
    return withMetadataArgument(isValidNumberForRegion_, arguments)
}

exports.getExampleNumber = min.getExampleNumber
exports.Metadata = min.Metadata

var findPhoneNumbers_ = require('./build/legacy/findPhoneNumbers.js').default
exports.findPhoneNumbers = function findPhoneNumbers() {
    return withMetadataArgument(findPhoneNumbers_, arguments)
}

var searchPhoneNumbers_ = require('./build/legacy/findPhoneNumbers.js').searchPhoneNumbers
exports.searchPhoneNumbers = function searchPhoneNumbers() {
    return withMetadataArgument(searchPhoneNumbers_, arguments)
}

var PhoneNumberSearch_ = require('./build/legacy/findPhoneNumbersInitialImplementation.js').PhoneNumberSearch
exports.PhoneNumberSearch = function PhoneNumberSearch(text, options) {
    return PhoneNumberSearch_.call(this, text, options, metadata)
}
exports.PhoneNumberSearch.prototype = Object.create(PhoneNumberSearch_.prototype, {})
exports.PhoneNumberSearch.prototype.constructor = exports.PhoneNumberSearch

exports.findNumbers = min.findNumbers
exports.searchNumbers = min.searchNumbers

exports.findPhoneNumbersInText = min.findPhoneNumbersInText
exports.searchPhoneNumbersInText = min.searchPhoneNumbersInText
exports.PhoneNumberMatcher = min.PhoneNumberMatcher

exports.AsYouType = min.AsYouType

exports.getCountries = min.getCountries
exports.getCountryCallingCode = min.getCountryCallingCode
exports.isSupportedCountry = min.isSupportedCountry
exports.getExtPrefix = min.getExtPrefix

exports.parseRFC3966 = min.parseRFC3966
exports.formatRFC3966 = min.formatRFC3966

exports.DIGITS = require('./build/helpers/parseDigits.js').DIGITS
exports.DIGIT_PLACEHOLDER = min.DIGIT_PLACEHOLDER

exports.getPhoneCode = min.getCountryCallingCode

exports.formatIncompletePhoneNumber = min.formatIncompletePhoneNumber
exports.parseIncompletePhoneNumber = min.parseIncompletePhoneNumber
exports.parsePhoneNumberCharacter = min.parsePhoneNumberCharacter
exports.parseDigits = min.parseDigits