import {assert} from "@std/assert";
import { rollDie, rollDice} from "./dice.ts";

Deno.test("Prüft ob gewürfelte Zahl zwischen 1-6 ist.", () => {
    
    //Arrange / Act
    const result = rollDie();

    //Assert
    assert(result >= 1 && result <= 6); 

})

Deno.test("Zwei Würfel würfeln", () => {
    
    const result = rollDice();

    assert(result.length == 2)
})