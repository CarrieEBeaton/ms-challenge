function swap(arr: number[], left: number, right:number){
    const temp: number = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}