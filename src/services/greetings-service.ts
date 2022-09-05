import { injectable } from "inversify";
import IGreetingsService from "./interfaces/igreetings-service";

@injectable()
export default class GreetingsService implements IGreetingsService {
    get(): string {
        return "Hello World!";
    }
}