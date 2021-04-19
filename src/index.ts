import { DBManager } from './db';
import { Command } from './command';
import * as Data from './main';

// Command
const userCommand = Command.getCommandInstance();
userCommand.setRestaurantCarte(Data.carteInstance);
userCommand.promptStart();
const manager = new DBManager('user command', userCommand);