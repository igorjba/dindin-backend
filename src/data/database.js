module.exports = {
  bank: {
    name: 'Cubos Bank',
    number: '123',
    branch: '0001',
    password: 'Cubos123Bank'
  },
  accounts: [
    {
      number: "1",
      balance: 0,
      user: {
        name: 'Foo Bar',
        cpf: '00011122233',
        birthdate: '2021-03-15',
        phone: '71999998888',
        email: 'foo@bar.com',
        password: '1234'
      }
    },
    {
      number: "2",
      balance: 1000,
      user: {
        name: 'Foo Bar 2',
        cpf: '00011122234',
        birthdate: '2021-03-15',
        phone: '71999998888',
        email: 'foo@bar2.com',
        password: '12345'
      }
    }
  ],
  withdrawals: [],
  deposits: [],
  transfers: []
}