import 'reflect-metadata';
import GreetingsService from '../greetings-service';


describe("Greetings Service", () => {
    let greetingsService: GreetingsService;
    
    beforeEach(() => {
        greetingsService = new GreetingsService();
    })

    it("should get greetings", async () => {
        expect(greetingsService.get()).toEqual("Hello World!");
    });
})