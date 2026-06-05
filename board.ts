export class Board {

    private availableNumbers: number[] = [1,2,3,4,5,6,7,8,9];
    private flippedNumbers: number[] = [];

    getAvailableNumbers(): number[] {
        return this.availableNumbers;
    }


    flipNumber(numbers: number[]): void{
        
        for(let i = 0; i < numbers.length; i++){
            for(let j = 0; j < this.availableNumbers.length; j++){
                if(numbers[i] == this.availableNumbers[j]){
                    this.flippedNumbers.push(numbers[i])
                    this.availableNumbers.splice(j, 1)
                }
            }
        }
    }
}