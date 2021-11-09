import { ref, watch } from 'vue';
export default {
  name: 'MemoryCard',
  emits: ['cardSelected'],
  props: {
    card: {
      type: Object
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const isSelected = ref(props.selected);
    const flipCard = () => {
      if (!isSelected.value) {
        isSelected.value = true;
        context.emit('cardSelected', props.card);
      }
    };

    watch(() => props.selected, (newValue) => {
      isSelected.value = newValue;
    });

    return {
      isSelected,
      flipCard
    };
  }
};
