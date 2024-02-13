package Java.twodarrays;
import java.util.Scanner;

public class WaveArray {
    public static void waveForm() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the row");
        int row = sc.nextInt();
        int[][] arr = new int[row][];

        for (int i = 0; i < row; i++) {

            System.out.println("Cols in " + i + " row");
            int col = sc.nextInt();
 
            arr[i] = new int[col];

            for (int j = 0; j < col; j++) {
                arr[i][j] = sc.nextInt();
            }
 
        }
        // System.out.println(Arrays.toString(arr));
        int cols = arr[0].length;
        int rows = arr.length;
        for (int i  = 0; i < cols; i++) {
            if (i % 2 == 0) {
                for (int j2 = cols-1; j2 >= 0; j2--) {
                    System.out.println(" " + arr[rows][cols]);

                }
            } else {
                for (int j2 = 0; j2 < row; j2++) {
                    System.out.println(" " + arr[rows][cols]);
                }
            }

        }

    }
    
    public static void main(String[] args) {
        waveForm();
    }

}
