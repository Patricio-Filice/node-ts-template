import { Request, Response } from "express";
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, request, response } from "inversify-express-utils";
import SERVICE_IDENTIFIERS from "../constants/service-identifiers";
import IGreetingsService from "../services/interfaces/igreetings-service";
 
@controller("/greetings")
export default class CommentsController extends BaseHttpController {

    constructor(@inject(SERVICE_IDENTIFIERS.GREETINGS_SERVICE) private readonly greetingsService: IGreetingsService) {
        super()
     }

    @httpGet("/")
    public async list(@request() _req: Request, @response() _res: Response) {
        const greetings = this.greetingsService.get();
        return this.ok({ message: greetings });
    }
}