<script lang="ts">
import ChannelTabs from "./ChannelTabs.vue";
import Breadcrumbs from "../nav/Breadcrumbs.vue";
import { useRoute } from "vue-router";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    ChannelTabs,
    Breadcrumbs,
  },
  setup() {
    const route = useRoute();

    const channelId = computed(() => {
      return route.params.channelId;
    });

    const discussionId = computed(() => {
      return route.params.discussionId;
    });

    const eventId = computed(() => {
      return route.params.eventId;
    });

    const links = computed(() => {
      const { channelId, discussionId, eventId } = route.params;

      let channelBreadcrumbs = [
        {
          label: "Channels",
          path: "channels",
        },
        {
          label: channelId,
          path: `channels/c/${channelId}`,
        },
      ];

      if (route.path.includes("events")) {
        channelBreadcrumbs.push({
          label: "Events",
          path: `channels/c/${channelId}/events`,
        });
      }

      if (route.path.includes("discussions")) {
        channelBreadcrumbs.push({
          label: "Discussions",
          path: `channels/c/${channelId}/discussions`,
        });
      }

      if (discussionId) {
        channelBreadcrumbs.push({
          label: "Discussion",
          path: `channels/c/${channelId}/discussions/d/${discussionId}`,
        });
      }

      if (eventId) {
        channelBreadcrumbs.push({
          label: "Event",
          path: `channels/c/${channelId}/events/e/${eventId}`,
        });
      }
      return channelBreadcrumbs;
    });

    return {
      channelId,
      discussionId,
      eventId,
      links,
    };
  },
});
</script>

<template>
  <div class="flex-1 px-10">
    <Breadcrumbs :links="links" />
  </div>
  <div v-if="!discussionId || !eventId">
    <h1 class="pl-10 text-xl inline-flex mt-3 text-black">
      {{ channelId }}
    </h1>
    <ChannelTabs />
  </div>
  <router-view></router-view>
</template>
