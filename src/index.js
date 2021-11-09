import { createApp } from 'vue';
import MemoryCard from './MemoryCard.vue';

const app = createApp(MemoryCard, {
  card: {
    frontImage: 'https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg',
    backImage: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg'
  },
  selected: false
});
app.mount('#app');

