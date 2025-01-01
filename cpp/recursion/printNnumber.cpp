#include <iostream>
using namespace std;




/*
Print numbers from 1 to n without the help of loops.
 You only need to complete the function printNos() that takes n as a
  parameter and prints the number from 1 to n recursively.

Note: Don't print any newline, it will be added by the driver code.

Examples:

Input: n = 10
Output: 1 2 3 4 5 6 7 8 9 10
Input: n = 5
Output: 1 2 3 4 5
Input: n = 1
Output: 1

*/


void sum(int n){
int a=0;
if(n<1){
    return;
}
// for(int i=0;i<n; i++){
    a= a + n;
// }
// cout<<" "<<a;
    sum(n-1);
}


int main(){

        cout<<"Enter the N number";
        int n = 1;
        cin>> n;
        sum(n);

return 0;
}
