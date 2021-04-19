import { DBManager } from './db';
import { Command } from './command';
import * as Data from './main';

// Command
const userCommand = Command.getCommandInstance();
userCommand.setRestaurantCarte(Data.carteInstance);
userCommand.promptStart();

// DB Manager
const manager = new DBManager('user command', userCommand);