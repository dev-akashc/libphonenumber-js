//
// importing system which is even uncapable of importing "*.json" files.
import metadata from '../../metadata.mobile.json.js'

import { PhoneNumberMatcher as _PhoneNumberMatcher } from '../../core/index.js'

export function PhoneNumberMatcher(text, options) {
	return _PhoneNumberMatcher.call(this, text, options, metadata)
}
PhoneNumberMatcher.prototype = Object.create(_PhoneNumberMatcher.prototype, {})
PhoneNumberMatcher.prototype.constructor = PhoneNumberMatcher
