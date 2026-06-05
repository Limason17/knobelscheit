import {assert} from "@std/assert";
import { rollDie } from "./dice.ts";

Deno.test("Prüft ob gewürfelte Zahl zwischen 1-6 ist.", () => {
    
    //Arrange / Act
    const result = rollDie();

    //Assert
    assert(result >= 1 && result <= 6); 

})