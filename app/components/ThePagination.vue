<script setup lang="ts">
defineProps<{
  canGoPrev: boolean
  canGoNext: boolean
}>()

defineEmits<{
  prev: []
  next: []
}>()
</script>

<template>
  <div class="pagination">
    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--disabled': !canGoPrev }"
      :disabled="!canGoPrev"
      @click="$emit('prev')"
    >
      <span class="pagination__arrow">←</span>
      Prev
    </button>

    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--disabled': !canGoNext }"
      :disabled="!canGoNext"
      @click="$emit('next')"
    >
      Next
      <span class="pagination__arrow">→</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 0;
}

.pagination__btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 24px;
  background-color: #ffffff;
  color: #1a1a2e;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    color 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #1a1a2e;
    border-color: #1a1a2e;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  &--disabled,
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.pagination__arrow {
  font-size: 1rem;
  line-height: 1;
}
</style>
