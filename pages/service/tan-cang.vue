<template>
  <branch-menu branch="Tân Cảng" :type="query.type" />
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
