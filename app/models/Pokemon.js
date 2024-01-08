import { Sequelize, DataTypes, Model } from 'sequelize'
import Database from '../../config/Database.js'


const Pokemon = Database.PostgresDB.define("pokemon", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


Pokemon.sync().then(() => {
    console.log("Pokemon Model synced");
});
export default Pokemon;