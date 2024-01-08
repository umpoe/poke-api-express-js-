import Pokemon from './Pokemon.js'
import PokemonDetails from './PokemonDetails.js'

Pokemon.hasOne(PokemonDetails, { foreignKey: 'pokemon_id', as: 'pokemon_detail' });
PokemonDetails.belongsTo(Pokemon, { foreignKey: 'pokemon_id', as: 'pokemon_detail' });
