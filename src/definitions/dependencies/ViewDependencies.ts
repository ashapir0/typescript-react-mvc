import { ControllerRegistry } from "../../controllers/ControllerRegistry";
import { StateRegistry } from "../../states/StateRegistry";

/**
 * Views need to invoke calls on the controller.
 * Views need to access state to display values.
 */
export interface ViewDependencies {
  controllerRegistry: ControllerRegistry;
  stateRegistry: StateRegistry;
}