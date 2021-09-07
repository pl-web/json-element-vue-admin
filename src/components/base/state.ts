type Action = () => void

export default interface BaseState {
    created?: string | string[] | Action
    beforeMount?: string | string[] | Action
    mounted?: string | string[] | Action
    beforeUpdate?: string | string[] | Action
    updated?: string | string[] | Action
    beforeDestroy?: string | string[] | Action
    destroyed?: string | string[] | Action
}
