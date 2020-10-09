module.exports = function(sequelize, DataTypes) {
    // Creates a "Book" model that matches up with DB
    var Battler = sequelize.define("battler_db", {
        name: Sequelize.STRING,
        hitPoints: Sequelize.INTEGER,
        attack: Sequelize.INTEGER,
        defense: Sequelize.INTEGER,
        damage: Sequelize.INTEGER,
        speed: Sequelize.INTEGER,
        player: Sequelize.BOOLEAN,

    // Syncs with DB
    Battler.sync();
}

    // Makes the Book Model available for other files (will also create a table)
    module.exports = Battler;
    // module.exports = Character;
