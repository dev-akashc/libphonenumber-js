//
// importing system which is even uncapable of importing "*.json" files.
import metadata from '../../metadata.max.json.js'

export default function withMetadataArgument(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(metadata)
	return func.apply(this, args)
}