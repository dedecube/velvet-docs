---
title: Release notes
---

# Release notes

::: warning
Currently the Velvet framework is in the early stages of development.
Because of that, the changes are not yet stable and may be subject to change.
:::

::: info
The first stable release is expected to be released in the first quarter of 2025.
:::

## Changelog

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import markdown from 'markdown-it'

const md = markdown()

const changelogs = ref('');
const things = useData();

onMounted(() => {
    fetch('https://raw.githubusercontent.com/dedecube/velvet/main/CHANGELOG.md')
        .then(response => response.text())
        .then(data => changelogs.value = md.render(data.split('# Change Log')[1]))
        .catch(error => console.error(error));
});
</script>

<div v-html="changelogs"></div>
