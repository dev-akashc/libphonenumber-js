//
// importing system which is even uncapable of importing "*.json" files.
import metadata from '../../metadata.mobile.json.js'

import { AsYouType as _AsYouType } from '../../core/index.js'

export function AsYouType(country) {
	return _AsYouType.call(this, country, metadata)
}

AsYouType.prototype = Object.create(_AsYouType.prototype, {})
AsYouType.prototype.constructor = AsYouType