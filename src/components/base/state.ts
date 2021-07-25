export default interface BaseState {
    created?: string | string[] | Function
    beforeMount?: string | string[] | Function
    mounted?: string | string[] | Function
    beforeUpdate?: string | string[] | Function
    updated?: string | string[] | Function
    beforeDestroy?: string | string[] | Function
    destroyed?: string | string[] | Function
}