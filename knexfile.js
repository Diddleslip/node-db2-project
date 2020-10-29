// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true, // for SQLite only
  },

  // Production server (perhaps heroku)
  production: {
      client: 'sqlite3',
      connection: {
        filename: './data/car-dealer.db3'
      },
      useNullAsDefault: true, // for SQLite only
  }
};
