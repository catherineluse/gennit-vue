<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup(){}
})
</script>
<template>
<div class="pt-8 pb-8 h-full">
    <form
      class="
        mx-auto
        max-w-4xl
        space-y-8
        divide-y
        border
        bg-white
        p-8
        shadow
        rounded
      "
    >
    <slot/>
    </form>
</div>
</template>