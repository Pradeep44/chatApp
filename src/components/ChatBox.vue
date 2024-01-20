<template>
  <form class='chat-box' @submit='onSubmit($event)'>
    <input
        v-model='text'
        placeholder='Write a message..'
        type='text'
    />
    <button :disabled='text === ""'>Send</button>
  </form>
</template>

<script>
export default {
  name: 'ChatBox',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit(event) {
      this.$emit("submit", event, this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  display: flex;
}

input {
  width: 80%;
  height: 40px;
  margin-right: 10px;
}

button:disabled {
  opacity: 0.5;
}

button {
    width: 20%;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
}
</style>