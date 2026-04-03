<script setup lang="ts">
import type { Article } from '~/types/news'

defineProps<{
  article: Article
}>()
</script>

<template>
  <NuxtLink :to="`/news/${article.article_id}`" class="article-card">
    <div class="article-card__image-wrap">
      <img
        v-if="article.image_url"
        :src="article.image_url"
        :alt="article.title ?? ''"
        class="article-card__image"
        loading="lazy"
      />
      <div v-else class="article-card__image-placeholder">
        <span class="article-card__image-placeholder-icon">N</span>
      </div>
    </div>

    <div class="article-card__body">
      <div class="article-card__meta">
        <span class="article-card__source">{{ article.source_name }}</span>
        <span class="article-card__dot">·</span>
        <time class="article-card__date">{{ article.pubDate.slice(0, 10) }}</time>
      </div>
      <h2 class="article-card__title">{{ article.title }}</h2>
      <div class="article-card__categories">
        <span
          v-for="cat in article.category.slice(0, 2)"
          :key="cat"
          class="article-card__category"
        >
          {{ cat }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  height: 100%;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: #d1d5db;
  }
}

.article-card__image-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #f4f5f7;
  flex-shrink: 0;
}

.article-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  .article-card:hover & {
    transform: scale(1.03);
  }
}

.article-card__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%);
}

.article-card__image-placeholder-icon {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.15);
}

.article-card__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  flex: 1;
}

.article-card__meta {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.article-card__source {
  font-size: 0.75rem;
  font-weight: 600;
  color: #e94560;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.article-card__dot {
  color: #9ca3af;
  font-size: 0.75rem;
}

.article-card__date {
  font-size: 0.75rem;
  color: #9ca3af;
}

.article-card__title {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-card__categories {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: auto;
}

.article-card__category {
  font-size: 0.75rem;
  color: #6b7280;
  background-color: #f4f5f7;
  padding: 2px 8px;
  border-radius: 6px;
  text-transform: capitalize;
}
</style>
