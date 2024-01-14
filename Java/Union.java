package Java;

import java.util.ArrayList;

public class Union {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4 };
        int[] barr = { 3, 6,4, 7,  };
        // unionarray <Integer> = new

        // Declaring the ArrayList
        ArrayList<Integer> unionArr = new ArrayList<Integer>();

        for (int i = 0; i < arr.length; i++) {
            unionArr.add(arr[i]);

        }
        for (int i = 0; i < barr.length; i++) {
            unionArr.add(barr[i]);

        }
        // remove common  elemet 

        System.out.print(unionArr);
    }
}
