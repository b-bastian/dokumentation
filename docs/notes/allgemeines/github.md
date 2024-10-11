---
title: GitHub
order: 500
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://github.com/b-bastian.png',
    name: 'Brugger Bastian',
    title: 'Schüler an der BHAK Zell am See',
    links: [
      { icon: 'github', link: 'https://github.com/b-bastian' },
    ]
  }
]
</script>

# Mein GitHub-Profil

<VPTeamMembers size="small" :members="members" />
