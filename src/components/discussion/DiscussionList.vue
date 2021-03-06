<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import DiscussionPreview from "./DiscussionPreview.vue";
import DiscussionListItem from "./DiscussionListItem.vue";
import { DiscussionData } from "../../types/discussionTypes";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const channelId = computed(() => {
      return JSON.stringify(route.params.channelId) || "";
    });
    return {
      selectedDiscussion: {} as DiscussionData,
      channelId,
    };
  },
  props: {
    discussions: {
      type: Array as PropType<Array<DiscussionData>>,
      default: () => {
        return [];
      },
    },
    searchInput: {
      type: String,
      default: "",
    },
    selectedTags: {
      type: Array as PropType<Array<String>>,
      default: () => {
        return [];
      },
    },
    selectedChannels: {
      type: Array as PropType<Array<String>>,
      default: () => {
        return [];
      },
    }
  },
  data() {
    return {
      previewIsOpen: false,
    };
  },
  components: {
    DiscussionPreview,
    DiscussionListItem,
  },
  methods: {
    openPreview(data: DiscussionData) {
      this.previewIsOpen = true;
      this.selectedDiscussion = data;
    },
    closePreview() {
      this.previewIsOpen = false;
    },
    filterByTag(tag: string) {
      this.$emit("filterByTag", tag);
    },
  },
  inheritAttrs: false,
});
</script>
<template>
<div :class="['bg-white sm:rounded-md divide-y divide-gray-200 max-w-5xl']">
    <p v-if="discussions.length === 0" class="px-8">There are no results.</p>
    <ul v-else role="list" class="divide-y divide-gray-200 relative">
      <DiscussionListItem
        v-for="discussion in discussions"
        :key="discussion.id"
        :discussion="discussion"
        :current-channel-id="channelId"
        :search-input="searchInput"
        :selected-tags="selectedTags"
        :selected-channels="selectedChannels"
        @openDiscussionPreview="openPreview"
        @filterByTag="filterByTag"
      />
      <DiscussionPreview
        :isOpen="previewIsOpen"
        :discussion="selectedDiscussion"
        @closePreview="closePreview"
      />
    </ul>
  </div>
</template>
