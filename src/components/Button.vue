<template>
    <button class="btn" :class="[hamburger ? 'hamburger btn-primary' : '', active ? 'active': '']">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props :{
        hamburger : Boolean,
        active : Boolean
    }
}
</script>