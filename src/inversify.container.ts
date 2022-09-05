import { Container } from 'inversify';
import SERVICE_IDENTIFIERS from './constants/service-identifiers';
import GreetingsService from './services/greetings-service';
import IGreetingsService from './services/interfaces/igreetings-service';

const container = new Container();
container.bind<IGreetingsService>(SERVICE_IDENTIFIERS.GREETINGS_SERVICE).to(GreetingsService);

export default container;