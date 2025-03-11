import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router.get('', this.getBurgers)
    this.router.get('/test', this.getTest)
    this.router.post('', this.addBurger)
  }

  async getTest(request, response, next) {
    console.log('test success!')
    response.send("test sucess!")
  }

  getBurgers(request, response, next) {
    const burgers = burgersService.getBurgers()
    response.send(burgers)
  }

  addBurger(request, response, next) {
    console.log('adding burger', request.body)
    const burgerData = request.body
    const burger = burgersService.addBurger(burgerData)
    response.send(burger)

  }
}