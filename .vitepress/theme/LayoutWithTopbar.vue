<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <div class="announcement-bar">
        此处的文档已经归档，请移步
        <a href="https://docs.nya.one" class="link">新的文档站</a>
        ，非常感谢您的理解与支持。
      </div>
    </template>
  </Layout>
</template>

<style>
html {
  /* Leave space for notification bar */
  --vp-layout-top-height: 40px;
}
</style>

<style scoped>
.announcement-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);
  text-align: center;
  padding: 8px;
  color: oklch(47.3% 0.137 46.201);
  background-color: oklch(96.2% 0.059 95.617);
}

.link {
  text-decoration: underline;
}
</style>
