package Java;

import java.util.ArrayList;

public class Intersection {
    public static void main(String[] args) {
        System.out.println("hello");
        int[] arr={1,2,3,4};
        int[] barr={5,3,2,8};
        ArrayList<Integer> interSection = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            // interSection.add(arr[i]);
            for (int j = 0;j < barr.length; j++) {
                if (arr[i]==barr[j]) {
                    interSection.add(barr[j]);
                }
            }
        }
        
        System.out.println(interSection);
    }
}
    
    