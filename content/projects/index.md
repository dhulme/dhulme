---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme';
import Projects from './Projects.vue';

const projects = [
  {
    avatar: '/images/spotify-playlists-logo.svg',
    name: 'Spotify Playlists',
    title: 'Manage your Spotify playlists',
    link: 'spotify-playlists',
  },
    {
      avatar: '/images/money-manager-logo.png',
      name: 'Money Manager',
      title: 'A desktop application for managing your personal finances',
      link: 'money-manager',
    },
    {
      avatar: '/images/creation-logo.jpg',
      name: 'Creation',
      title: '10 track instrumental album inspired by Creation',
      link: 'creation',
    },
  {
    avatar: '/images/standup-logo.svg',
    name: 'Standup',
    title: 'Tool for running daily stand-ups',
    link: 'standup',
  },
  {
    avatar: '/images/multitrack-player-logo.svg',
    name: 'Multitrack Player',
    title: 'Play multitracks in the browser',
    link: 'multitrack-player',
  },
  {
    avatar: '/images/spotify-stats-logo.svg',
    name: 'Spotify Stats',
    title: 'Insights on your Spotify playlists',
    link: 'spotify-stats',
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Projects
    </template>
    <!-- <template #lead>
      A selection of recent projects I have worked on
    </template> -->
  </VPTeamPageTitle>
  <Projects
    :members="projects" 
  />
</VPTeamPage>