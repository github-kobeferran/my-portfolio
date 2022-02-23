<template>
  <Navigation />
  <Content />
</template>

<script>
import Navigation from './components/Navigation'
import Content from './components/Content'

export default {
    name: 'App',
    components: {
      Navigation,
      Content
    }
}
</script>

