# gennit-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Set up Back End with Test Data

```sh
docker run -it -p 8080:8080 dgraph/standalone:master

curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'

# The commands below create test data

# Create channels
curl --request POST \
  --url http://localhost:8080/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  addChannel(input: [\n    {\n      name: \"Phoenix Music\"\n      uniqueName: \"phx_music\"\n      Admins: [{\n        username: \"cluse\"\n\t\t\t}]\n\t\t\tdescription: \"Live music in Phoenix\"\n\t\t\tTags: { text: \"music\" }\n    },\n\t\t{\n      name: \"Phoenix Concerts\"\n      uniqueName: \"phx_concerts\"\n      Admins: [{\n        username: \"cluse\"\n\t\t\t}]\n\t\t\tdescription: \"Concerts in Phoenix\"\n\t\t\tTags: { text: \"music\" }\n    }\n    {\n      name: \"cats\",\n      uniqueName: \"cats\",\n      Admins: [{\n         username: \"alice\"\n\t\t\t}],\n\t\t\tdescription: \"All about cats\"\n\t\t\tTags: [{text: \"cats\"},{text: \"pets\"}]\n    }, {\n      name: \"dogs\",\n      uniqueName: \"dogs\",\n      Admins: [{\n        username: \"alice\"\n\t\t\t}]\n\t\t\tdescription: \"We are dog people\"\n\t\t\tTags: [{text: \"pets\"}]\n    }\n  ]) {\n    channel {\n      description\n      name\n      uniqueName\n      Admins {\n        username\n\t\t\t}\n    }\n  }\n}\n"}'

# Create events
curl --request POST \
  --url http://localhost:8080/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  addEvent(input: [\n    {\n      title: \"New Year'\''s Eve Block Party at Hance Park\",\n      startTime: \"2021-12-31T02:21:37.146Z\",\n      endTime: \"2021-12-31T02:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.462260\n        longitude: -112.074480\n      }\n      locationName: \"Margaret T. Hance Park\"\n      address: \"67 W Culver St., Phoenix, AZ, 85003\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$15\"\n      startTimeYear: \"2021\"\n      startTimeMonth: \"12\"\n      startTimeDayOfMonth: \"31\"\n      startTimeDayOfWeek: \"Friday\"\n      startTimeHourOfDay: 20\n      canceled: false\n\t\t\tTags: [{ text: \"newYears\"}]\n    },\n    {\n      title: \"Selena Night\",\n      startTime: \"2022-01-01T02:21:37.146Z\",\n      endTime: \"2022-01-01T02:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.448711\n        longitude: -112.083603\n      }\n      locationName: \"Crescent Ballroom\"\n      address: \"308 N 2nd Ave, Phoenix, AZ 85003\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$15\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"1\"\n      startTimeDayOfWeek: \"Saturday\"\n      startTimeHourOfDay: 20\n      canceled: false\n\t\t\tTags: [{ text: \"Selena \"}]\n    },\n    {\n      title: \"The Unlikely Candidates\",\n      description: \"The Criticals, The Deadbeat Cousins\"\n      startTime: \"2022-01-04T05:21:37.146Z\",\n      endTime: \"2022-01-04T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.448711\n        longitude: -112.083603\n      }\n      locationName: \"Crescent Ballroom\"\n      address: \"308 N 2nd Ave, Phoenix, AZ 85003\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$18, $5 service fee\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"4\"\n      startTimeDayOfWeek: \"Tuesday\"\n      startTimeHourOfDay: 19\n      canceled: false\n    },\n    {\n      title: \"Club Placebo Benefit Show\",\n      startTime: \"2022-01-08T05:21:37.146Z\",\n      endTime: \"2022-01-08T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.448711\n        longitude: -112.083603\n      }\n      locationName: \"Crescent Ballroom\"\n      address: \"308 N 2nd Ave, Phoenix, AZ 85003\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$10, $5 service fee\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"8\"\n      startTimeDayOfWeek: \"Saturday\"\n      startTimeHourOfDay: 16\n      canceled: false\n\t\t\tTags: [{text: \"music\"}, {text: \"charityEvent\"}]\n    },\n    {\n      title: \"Seinfeld Trivia: Festivus Edition\",\n      description: \"Hosted by Emily the Lewis\",\n      startTime: \"2021-12-23T05:21:37.146Z\",\n      endTime: \"2022-12-23T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.449990\n        longitude: -112.074080\n      }\n      locationName: \"Valley Bar\"\n      address: \"130 N. Central Avenue, Phoenix, AZ, 85004\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$10, $5 service fee\"\n      startTimeYear: \"2021\"\n      startTimeMonth: \"12\"\n      startTimeDayOfMonth: \"23\"\n      startTimeDayOfWeek: \"Thursday\"\n      startTimeHourOfDay: 19\n      canceled: false\n\t\t\tTags: { text: \"trivia\"}\n    },\n    {\n      title: \"MOST NECESSARY HIP HOP\",\n      description: \"2015-PRESENT HIP HOP/TRAP\",\n      startTime: \"2021-12-25T05:21:37.146Z\",\n      endTime: \"2022-12-25T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.449990\n        longitude: -112.074080\n      }\n      locationName: \"Valley Bar\"\n      address: \"130 N. Central Avenue, Phoenix, AZ, 85004\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"Free\"\n      startTimeYear: \"2021\"\n      startTimeMonth: \"12\"\n      startTimeDayOfMonth: \"25\"\n      startTimeDayOfWeek: \"Saturday\"\n      startTimeHourOfDay: 22\n      canceled: false\n    },\n    {\n      title: \"NEW YEARS EVE with PAO!\",\n      description: \"DJ Lady Staliet\",\n      startTime: \"2021-12-31T05:21:37.146Z\",\n      endTime: \"2021-12-31T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.449990\n        longitude: -112.074080\n      }\n      locationName: \"Valley Bar\"\n      address: \"130 N. Central Avenue, Phoenix, AZ, 85004\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$15, $5 service fee\"\n      startTimeYear: \"2021\"\n      startTimeMonth: \"12\"\n      startTimeDayOfMonth: \"31\"\n      startTimeDayOfWeek: \"Friday\"\n      startTimeHourOfDay: 20\n      canceled: false\n    },\n    {\n      title: \"GATHERING OF BONES\",\n      description: \"with Arsenic Kitchen, Commiserate, Killing Sunday\",\n      startTime: \"2022-01-20T05:21:37.146Z\",\n      endTime: \"2022-01-20T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      },{\n        name: \"Phoenix Music\",\n        url: \"phx_music\"\n\t\t\t}],\n\t\t\tCommentSections: [\n\t\t\t\t{ \n\t\t\t\t\tChannel: { url: \"phx_concerts\" }\n\t\t\t\t\tComments: [\n\t\t\t\t    { \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment1\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{ \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment2\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t}\n\t\t\t    ]\n\t\t\t\t}]\n      location: {\n        latitude: 33.392620\n        longitude: -111.940498\n      }\n      locationName: \"Yucca Tap Room\"\n      address: \"29 W Southern Ave, Tempe, AZ 85282\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"Free\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"20\"\n      startTimeDayOfWeek: \"Thursday\"\n      startTimeHourOfDay: 20\n      canceled: false\n    },\n    {\n      title: \"Desert Tails Benefit Show\",\n      description: \"feat. Ischemia, Atoll, Show-N-Tell, Nooses\",\n      startTime: \"2022-01-29T05:21:37.146Z\",\n      endTime: \"2022-01-20T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      },{\n        name: \"Phoenix Music\",\n        url: \"phx_music\"\n      }]\n\t\t\tCommentSections: [\n\t\t\t\t{ \n\t\t\t\t\tChannel: { url: \"phx_concerts\" }\n\t\t\t\t\tComments: [\n\t\t\t\t    { \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment1\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{ \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment2\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t}\n\t\t\t    ]\n\t\t\t\t}]\n      location: {\n        latitude: 33.392620\n        longitude: -111.940498\n      }\n      locationName: \"Yucca Tap Room\"\n      address: \"29 W Southern Ave, Tempe, AZ 85282\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"DONTATIONS ENCOURAGED!\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"29\"\n      startTimeDayOfWeek: \"Saturday\"\n      startTimeHourOfDay: 20\n      canceled: false\n    },\n    {\n      title: \"OPEN MIC NIGHT\",\n      description: \"hosted by Haley Green, 8PM sign-up, 9PM music\",\n      startTime: \"2022-01-31T05:21:37.146Z\",\n      endTime: \"2022-01-31T05:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Music\",\n        url: \"phx_music\"\n      }]\n      location: {\n        latitude: 33.392620\n        longitude: -111.940498\n      }\n      locationName: \"Yucca Tap Room\"\n      address: \"29 W Southern Ave, Tempe, AZ 85282\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"0\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"1\"\n      startTimeDayOfMonth: \"31\"\n      startTimeDayOfWeek: \"Monday\"\n      startTimeHourOfDay: 21\n      canceled: false\n    },\n    {\n      title: \"STRFKR, The Undercover Dream Lovers, Das Kope\",\n      startTime: \"2022-02-25T02:20:00.146Z\",\n      endTime: \"2022-02-25T02:20:00.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      Tags: [{text: \"music\"}]\n      location: {\n        latitude: 33.451130\n        longitude: -112.079193\n      }\n      locationName: \"The Van Buren\"\n      address: \"401 W Van Buren St, Phoenix, AZ 85003\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"unknown\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"2\"\n      startTimeDayOfMonth: \"25\"\n      startTimeDayOfWeek: \"Friday\"\n      startTimeHourOfDay: 20\n      canceled: false\n    },\n    {\n      title: \"We Were Promised Jetpacks\",\n      startTime: \"2022-03-21T02:21:37.146Z\",\n      endTime: \"2022-03-21T02:21:37.146Z\",\n      Channels: [{\n        name: \"Phoenix Concerts\"\n        url: \"phx_concerts\"\n      }]\n      location: {\n        latitude: 33.494540\n        longitude: -112.032100\n      }\n      locationName: \"The Rebel Lounge\"\n      address: \"2303 E Indian School Rd, Phoenix, AZ 85016\"\n      Poster: {\n        username: \"alice\"\n      }\n      cost: \"$20\"\n      startTimeYear: \"2022\"\n      startTimeMonth: \"3\"\n      startTimeDayOfMonth: \"21\"\n      startTimeDayOfWeek: \"Monday\"\n      startTimeHourOfDay: 20\n      canceled: false\n\t\t},\n\t\t{\n\t\t  title: \"Test free/virtual event\"\n\t\t\tstartTime: \"2022-04-21T02:21:37.146Z\"\n\t\t\tendTime: \"2022-04-21T02:21:37.146Z\"\n\t\t\tChannels: [{ url: \"cats\" }]\n\t\t\tvirtualEventUrl: \"example.com\"\n\t\t\tPoster: {username: \"cluse\"}\n\t\t\tcost: \"0\"\n\t\t\tcanceled: false\n\t\t\tstartTimeYear: \"2022\"\n\t\t\tstartTimeMonth: \"April\"\n\t\t\tstartTimeDayOfMonth: \"21\"\n\t\t\tstartTimeDayOfWeek: \"Wednesday\"\n\t\t\tstartTimeHourOfDay: 20\n\t\t}\n  ]) {\n    event {\n      id\n      title\n      description\n      Channels {\n        url\n      }\n      Poster {\n        username\n      }\n      startTime\n      isInPrivateResidence\n      cost\n    }\n  }\n}\n"}'

# Create discussions
curl --request POST \
  --url http://localhost:8080/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  addDiscussion(input: [\n    {\n      createdDate: \"2021-07-04T09:22:31.544-07:00\",\n      title: \"test post\",\n      body: \"test\"\n      Channels: [{\n        url: \"cats\"\n\t\t\t}]\n\t\t\tTags: [{ text: \"cats\"}, {text: \"something\"}]\n\t\t\tCommentSections: [\n\t\t\t\t{ \n\t\t\t\t\tChannel: { url: \"cats\" }\n\t\t\t\t\tComments: [\n\t\t\t\t    { \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment1\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{ \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment2\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t}\n\t\t\t    ]\n\t\t\t\t}]\n      Author: {\n        username: \"cluse\"\n      }\n\t\t},\n\t\t{\n      createdDate: \"2021-07-04T09:22:31.544-07:00\",\n      title: \"test post\",\n      body: \"test\"\n      Channels: [{\n        url: \"dogs\"\n\t\t\t}]\n\t\t\tTags: [{ text: \"dogs\"}, {text: \"something\"}]\n\t\t\tCommentSections: [\n\t\t\t\t{ \n\t\t\t\t\tChannel: { url: \"dogs\" }\n\t\t\t\t\tComments: [\n\t\t\t\t    { \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment A\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{ \n\t\t\t\t\t\t\tUserAuthor: {\n\t\t\t\t\t\t\t  username: \"cluse\"\n\t\t\t\t\t\t  },\n\t\t\t\t\t\t\ttext: \"Comment B\"\n\t\t\t\t\t\t\tisRootComment: true\n\t\t\t\t\t\t}\n\t\t\t    ]\n\t\t\t\t}]\n      Author: {\n        username: \"cluse\"\n      }\n    }\n  ]) {\n    discussion {\n      id\n      title\n      body\n      Channels {\n        url\n      }\n      Author {\n        username\n      }\n      CommentSections {\n        id\n        Discussion {\n          title\n        }\n        Comments {\n          text\n        }\n      }\n    }\n  }\n}"}'
```