package Pattern;

public class numberIncreasing {

    /*
     * 
     * 1
     * 1 2
     * 1 2 3
     * 1 2 3 4
     * 1 2 3 4 5
     * 
     */

    public static void main(String[] args) {
        System.out.println("hello");

        for (int row = 0; row < 5; row++) {
            for (int col = 1; col < 5 -row; col++) {
                System.out.print(col);
            }
            System.out.println();
        }

    }
}
