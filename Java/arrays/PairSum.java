package Java.arrays;

public class PairSum {
 public static void pairsum02(){
  System.out.println("hello");
        // sum of 2 pair equal to 9
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        for (int i = 0; i < arr.length; i++) {

            for (int j = i+1; j < arr.length; j++) {
                if (arr[i]+arr[j]==9){
                    System.out.println(" " + arr[i] + arr[j]);
                }
            }

        }
 }
 


    public static void main(String[] args) {
      
        pairsum02();
    }
}