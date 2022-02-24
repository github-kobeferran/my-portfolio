<template>
    <button class="btn" :class="hamburger ? 'hamburger btn-primary' : ''">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props :{
        hamburger : Boolean
    }
}
</script>