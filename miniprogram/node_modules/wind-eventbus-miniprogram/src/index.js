class EventBus {
	constructor () {
		this.event = {}
	}

	on = (name, context, callback) => {
		const tuple = {
			context,
			callback
		}
		const callbacks = this.event[name]
		if (Array.isArray(callbacks)) {
			callbacks.push(tuple)
		} else {
			this.event[name] = [tuple]
		}
	}

	remove = (name, context) => {
		const callbacks = this.event[name]
		if (Array.isArray(callbacks)) {
			this.event[name] = callbacks.filter(item => {
				return item.context !== context
			})
		}
	}

	emit = (name, ...arg) => {
		const callbacks = this.event[name]
		if (Array.isArray(callbacks)) {
			callbacks.forEach(item => {
				item.callback.apply(item.context, arg)
			})
		}
	}
}

function fxCreateEventBus () {
	return new EventBus()
}

module.exports = {
	$fxEventBus: fxCreateEventBus(),
	$fxCreateEventBus: fxCreateEventBus
}
