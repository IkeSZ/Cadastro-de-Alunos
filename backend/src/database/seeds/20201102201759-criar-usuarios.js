const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'Isaac',
      email: 'isaac@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      nome: 'Danilo',
      email: 'danilo@gmail.com',
      password_hash: await bcryptjs.hash('danilo', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      nome: 'Wallace',
      email: 'wallace@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async () => {},
};
