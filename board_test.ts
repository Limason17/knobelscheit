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

Deno.test("Zahl kann umgeklapt werden.", () => {
    //Arrange
    const board = new Board();

    //Act
    board.flipNumber([3]);

    //Assert
    assertEquals(board.getAvailableNumbers(), [1, 2, 4, 5, 6, 7, 8, 9])
})

Deno.test("Falsche Zahl flippen", () => {

    //Arrange
    const board = new Board();

    board.flipNumber([3]);
    board.flipNumber([3]);

    //Assert
    assertEquals(board.getAvailableNumbers(), [1, 2, 4, 5, 6, 7, 8, 9])

})

Deno.test("Geflippte Zahlen anzeigen", () => {
    //Arrange
    const board = new Board();

    //Act
    board.flipNumber([3])

    //Assert
    assertEquals(board.getFlippedNumbers(), [3]);
})