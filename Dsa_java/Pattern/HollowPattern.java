package Pattern;

public class HollowPattern {
    public static void main(String[] args) {
        /*
         * * * * * *
         * * *
         * * * * * *
         * obse : row 3 and col= 5
         * row 0 and row last row print 5*
         * middle row start with * and end with *
         * remaing space
         */
        for (int row = 0; row < 3; row++) {
            if (row == 0 || row == 2) {
                for (int col = 0; col < 5; col++) {
                    System.out.print("* ");
                }

            } else {

                System.out.print("* ");
                for (int i = 0; i < 3; i++) {
                    System.out.print("1 ");

                }
                System.out.print("* ");
            }
            System.out.println("");
        }
    }
}
