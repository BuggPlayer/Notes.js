#include <iostream>
using namespace std;


void largetEle(){
    //  int arr[] = {8,10,5,7,9};
    int arr1[] = {2,5,1,3,0};

    int n=5;
    int max=0;
     for (int i = 0; i < n; i++)
     {
        
        if(arr1[i]> max){
            max= arr1[i];
        }
     }
     cout<<"max" <<max;
     
}


void secondlargetEle(){
  
    int arr[]= {1,2,4,7,7,5};
    int n= 6;
    int max1=0 ;
    int max2=-1;

    for (int i = 0; i < n; i++){
     if(arr[i]> max1){
        max1= arr[i];

     }
    }

    for (int i = 0; i < n; i++){
     if(arr[i]> max2 && arr[i] != max1){
        max2= arr[i];

     }
    }
    cout<<"max1 " << max1 << "max2 "<< max2;
}

int main(){
// largetEle();
secondlargetEle();

    return 0;
}