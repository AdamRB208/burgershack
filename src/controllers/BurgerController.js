import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router.get('', this.getBurgers)
    this.router.get('/test', this.getTest)
  }

  async getTest(request, response, next) {
    console.log('test success!')
    response.send("test sucess!")
  }

  getBurgers(request, response, next) {
    const burgers = burgersService.getBurgers()
    response.send(burgers)
  }
}