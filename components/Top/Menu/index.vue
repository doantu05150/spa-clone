<template>
  <div class="top-menu">
    <b-container>
      <b-row>
        <search-bar />
        <additional-info />
        <switch-lang />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
import AdditionalInfo from './AdditionalInfo'
import SwitchLang from './SwitchLang'

export default {
  components: {
    SearchBar,
    AdditionalInfo,
    SwitchLang,
  },
}
</script>

<style lang="stylus">
.top-menu {
  background: #959699;
  width: 100%;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .top-menu {
    height: 50px;

    .searchbar {
      width: 70%;
      padding: 0 15px;
    }
  }
}
</style>
