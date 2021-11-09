<template lang='pug'>
div.memory-card(:data-selected='isSelected' @click='flipCard($event)')
   div.memory-card-image.memory-card-front(:style="{backgroundImage: 'url('+card.frontImage+')'}")
   div.memory-card-image.memory-card-back(:style="{backgroundImage: 'url('+card.backImage+')'}")
</template>
<script src='./MemoryCard.js'></script>
<style lang="scss" scoped>
   @import './MemoryCard.scss';
</style>