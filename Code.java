import java.util.Arrays;
public class Code {
    public static void main(String[] args) {
    int []arr = { 2  ,5, 1, 2, 3, 4, 5 ,3 ,4 ,3, 2};
    int cntE=0;
    int cntO=0;
    for (int i = 0; i < arr.length; i++) {
        if(arr[i]%2 ==1 ){
            cntO++;
        }else {
            cntE++;
        }
    }
    int [] arrEven=new int[cntE];
    int [] arrOdd= new int[cntO];
    int evenPointer=0;
    int oddPointer=0;
    for (int i = 0; i < arr.length; i++) {
        if(arr[i] %2 ==1){
            arrOdd[oddPointer] = arr[i];
            oddPointer ++;
        }else{
            arrEven[evenPointer] =arr[i];
            evenPointer++;
        }
    }
        System.out.println(Arrays.toString(arrEven));
        System.out.println(Arrays.toString(arrOdd));

    }
}
