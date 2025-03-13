import PokemonPage from '@/modules/Pokemons/pages/PokemonPage.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';

describe('<PokemonPage/>', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        // RouterLink: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('should be render the component correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
  });

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    // console.log(wrapper.html());
    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } });
  });
});
