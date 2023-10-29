import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../constants/Enum.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import MESSAGE from '../constants/Message.js';
import ConsoleInput from '../io/ConsoleInput.js';

class InputManager {
  static getCarNames(input) {
    return input.split(',');
  }

  static async inputRacingCarNames() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_RACING_CAR_NAMES);
    const cars = InputManager.getCarNames(input);
    InputManager.validateCarName(cars);

    return cars;
  }

  static validateCarName(cars) {
    InputManager.#validateNotMoreThanFiveChar(cars);
    InputManager.#validateNotLessThanOneChar(cars);
    return cars;
  }

  static #validateNotMoreThanFiveChar(cars) {
    if (cars.find((car) => car.length > NAME_MAX_LENGTH) !== undefined) {
      throw Error(ERROR_MESSAGE.INCLUDE_MORE_THAN_FIVE_CHAR);
    }

    return cars;
  }

  static #validateNotLessThanOneChar(cars) {
    if (cars.find((car) => car.length < NAME_MIN_LENGTH) !== undefined) {
      throw Error(ERROR_MESSAGE.INCLUDE_LESS_THEN_ONE_CHAR);
    }

    return cars;
  }
}

export default InputManager;
