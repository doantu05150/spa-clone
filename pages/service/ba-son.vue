<template>
  <branch-menu branch="BaSon" :type="query.type" />
</template>

<script>
import BranchMenu from '~/components/Service/Services/branch'

export default {
  asyncData({ query }) {
    return { query }
  },
  components: {
    BranchMenu,
  },
}
</script>
