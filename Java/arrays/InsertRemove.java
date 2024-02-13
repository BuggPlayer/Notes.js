package Java.arrays;

import java.util.Arrays;
import java.util.Scanner;

public class InsertRemove {
    public static int[] InsertEle(int[] arr, int size) {
        int ptn = 3;
        int value = 20;
        for (int i = size - 1; i >= ptn - 1; i--) {
            System.out.println("i " + i);
            arr[i + 1] = arr[i];
        }
        arr[ptn] = value;
        return arr;

    }

    public static void RemoveEle() {
        int[] arr = { 1, 2, 3, 4, 5, 6 };
        int removeael = 3;
        // remove 2nd postion
        for (int i = 0; i < arr.length-1; i++) {
            if (arr[i] == removeael) {
                for (int j = i; j < arr.length-2; j++) {
                arr[j]=arr[j + 1] ;
                }
                
            }
        }
        System.out.println(Arrays.toString(arr));

    }

    public static void main(String[] args) {
        // // InsertEle();
        // Scanner sc = new Scanner(System.in);

        // int size = sc.nextInt();
        // int arr[] = new int[size + 1];

        // for (int i = 0; i < size; i++) {
        //     arr[i] = sc.nextInt();
        // }
        // System.out.println(Arrays.toString(arr));
        // System.out.println(Arrays.toString(InsertEle(arr, size)));

        RemoveEle();

    }
}
