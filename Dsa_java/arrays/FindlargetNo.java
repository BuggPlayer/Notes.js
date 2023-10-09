package arrays;

import java.util.Arrays;

public class FindlargetNo {
    public static void main(String[] args) {
        
        int arr[] = { 3, 5, 9, 7, 5, 3 };
        Arrays.sort(arr);
        System.out.println("soredted arr"+ arr[arr.length-1]);

        // for (int index = 0; index < arr.length; index++) {
        //     System.out.println(arr[index]);
        // }
    }
}
