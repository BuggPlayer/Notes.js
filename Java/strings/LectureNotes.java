package Java.strings;

public class LectureNotes {

    public static void Notes(){
        // name address usrename , password
        String str= "hello";
        System.out.println(str);

        //accesing random access
        System.out.println(str.charAt(1)); //e
        //TODO STACK AND HEAP explore


        // up     date --> String are immutibale(cannt be modify oe changed)
        String s1 = "abc";
        String s2 = "abc";

        s2= s2+ "def";
        System.out.println(s2); //abcdef

        System.out.println(s1); //abc

    }
    public static void methods(){
        String str= "hello";
        System.out.println(str.length()); //5

        System.out.println(str.charAt(2)); // l

        System.out.println(str.indexOf('e'));
        System.out.println(str.indexOf("lo"));
        System.out.println(str.indexOf("abc")); //-1
        System.out.println(str.lastIndexOf('l')); //last in string

        // contains
        System.out.println(str.contains("lo")); // checking present or not // true or false

        // lowercase
        String str1="HELLO";
        System.out.println(str1.toLowerCase());//hello // generate a copy not modify original one

        //touppercase
        System.out.println(str.toUpperCase()); // HELLO

        //repalce
        String str2= "i love java";
        System.out.println(str2.replace("java" , "javascript"));

        // substring
        System.out.println(str2.substring(7)); //java -> start from 7 as start value
        System.out.println(str2.substring(2,4)); // lo --> start from 2 and end on lessthen end value


    }
    public static void main(String[] args) {
        methods();
    }
}


rafce
rfce