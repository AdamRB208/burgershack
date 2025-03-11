
const FAKEDB = {
  burgers: [
    {
      name: 'Hamburger',
      price: 5.00
    },
    {
      name: 'Cheese Burger',
      price: 5.50
    },
    {
      name: 'Bacon Burger',
      price: 6.00
    },
  ]
}
class BurgersService {
  addBurger() {
    FAKEDB.burgers.push(burgerData)
  }
  getBurgers() {
    const burgers = FAKEDB.burgers
    return burgers
  }
}

export const burgersService = new BurgersService()
