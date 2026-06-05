import {assertEquals} from "@std/assert";
import {Board} from "./board.ts";

Deno.test("Sind alle Zahlen noch verfügbar", () => {
    
    //Arrange
    const board = new Board();

    //Act
    const availableNumbers: number[] = board.getAvailableNumbers();
    //Assert
    assertEquals(availableNumbers, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
})