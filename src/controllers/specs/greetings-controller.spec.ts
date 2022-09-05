import 'reflect-metadata';
import { mock, MockProxy } from 'jest-mock-extended';
import { Request, Response } from 'express';
import { OkNegotiatedContentResult } from 'inversify-express-utils/lib/results';
import IGreetingsService from '../../services/interfaces/igreetings-service';
import GreetingsController from '../greetings-controller';

describe("Greetings Controller", () => {
    let greetingsService: MockProxy<IGreetingsService>;
    let request: MockProxy<Request>;  
    let response: MockProxy<Response>;
    let commentsController: GreetingsController;

    beforeEach(() => {
        greetingsService = mock<IGreetingsService>();
        request = mock<Request>();
        response = mock<Response>();
        commentsController = new GreetingsController(greetingsService);
    })

    it("should get greetings", async () => {
        greetingsService.get
                        .mockReturnValue("Hello World!")
        
        const result = await commentsController.list(request, response);
        
        expect(result).toBeInstanceOf(OkNegotiatedContentResult);
        expect(result['content']).toEqual(expect.objectContaining({ message: "Hello World!" }));

        expect(greetingsService.get).toBeCalledTimes(1);
    });
})