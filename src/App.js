import { useEffect } from 'react';
import { connect } from 'react-redux';

import { PokemonList } from './components/PokemonList';
import { Search } from './components/Search';
import { getPokemon } from './api';

import './App.css';
import logo from './statics/logo.svg'
import { Col } from 'antd';
import { setPokemons as setPokemonsActions } from './actions';

function App({pokemons, setPokemons}) {
  useEffect(() => {
    const fetchPokemons = async () => { 
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes); 
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons:state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
