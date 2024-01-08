import { Sequelize, DataTypes, Model } from 'sequelize'

import Database from '../../config/Database.js'

const PokemonDetails = Database.PostgresDB.define("pokemon_details", {

    pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    species_name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    front_shiny: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    back_shiny: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    front_default: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    back_default: {
        type: DataTypes.TEXT,
        allowNull: true
    },weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },height: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});


PokemonDetails.sync().then(() => {
    console.log("PokemonDetails Model synced");
});
export default PokemonDetails;