<template>
  <div>
    <Counter name="Counter 1" :initCount="5" @emitUp="getEvent"/>
    <Counter name="Counter 2" :initCount="10" @emitUp="getEvent" />
    <p>{{ count }}</p>
    <p>{{ globalCount }}</p>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import { mapState } from "vuex"

export default {
  components: {
    Counter
  },
  // data(){
  //   return {
  //     stack: []
  //   }
  // },
  methods: {
    // ほえー
    // こうやって勝手に引数に入るんだ....
    getEvent(){
      // storeへのデータ書き込みはmutations経由
      this.$store.commit("globalIncrement")
    },
    // 注. できるけどやらない
    shouldNotThis(){
      this.$store.state.globalCount++;
    }
  },
  computed: {
    // 1. storeからstateを参照する方法
    count(){
      return this.$store.state.globalCount
    },
    // 2. mapStateを使うとまとめてアサイン可能
    ...mapState(["globalCount"])
  }
}
</script>
