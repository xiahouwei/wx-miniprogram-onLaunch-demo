declare module WindEventBus {
    class EventBus {
        on (name: string, context: any, callback: Function): void
        remove (name: string, context: any): void
        emit (name: string, ...arg: any): void
    }
    function $fxCreateEventBus (): EventBus
    const $fxEventBus: EventBus
}


export = WindEventBus
