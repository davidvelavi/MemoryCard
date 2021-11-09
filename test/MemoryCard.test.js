import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';
import MemoryCard from '../src/MemoryCard.vue';
/**
 * @jest-environment node || jsdom
 */

describe('<MemoryCard />', ()=> {
  test('Default selected value false', ()=> {
    const { container } = render(MemoryCard, {
      props: {
        card: {
          frontImage: 'https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg',
          backImage: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg'
        },
        selected: false
      }
    });
    const memoryCard = container.querySelector('.memory-card');
    expect(memoryCard.dataset.selected).toBe('false');

  });

  test('Default selected value true', ()=> {
    const { container } = render(MemoryCard, {
      props: {
        card: {
          frontImage: 'https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg',
          backImage: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg'
        },
        selected: true
      }
    });
    const memoryCard = container.querySelector('.memory-card');
    expect(memoryCard.dataset.selected).toBe('true');
  });

  test('Click on card', async () => {
    const { container } = render(MemoryCard, {
      props: {
        card: {
          frontImage: 'https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg',
          backImage: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg'
        },
        selected: false
      }
    });
    const memoryCard = container.querySelector('.memory-card');
    console.log(memoryCard);
    await fireEvent.click(memoryCard);
    await fireEvent.click(memoryCard);
    expect(memoryCard.dataset.selected).toBe('true');

  });

  test('Prop selected change ', async ()=> {
    const { container, rerender } = render(MemoryCard, {
      props: {
        card: {
          frontImage: 'https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg',
          backImage: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg'
        },
        selected: false
      }
    });
    await rerender({ selected: true });
    const memoryCard = container.querySelector('.memory-card');
    expect(memoryCard.dataset.selected).toBe('true');
  });

});
