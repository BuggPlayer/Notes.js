package Java.arrays;

import java.util.Arrays;

public class findDublicates {
    public static void main(String[] args) {
        int arr[] = { 1,3, 2, 6, 3, 4, 4, 5, 6, 3 };
        int counter = 0;
    
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 3) {
                counter++;
            }
        }
        int newarr []= new int[counter];
        int p=0;
      
        for (int i = 0; i < newarr.length; i++) {
            if (arr[i] == 3) {
            newarr[p] = i;
            p++;
            }
        }
        System.out.println(Arrays.toString(newarr));
    }
}
