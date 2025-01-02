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


bool issorted(){
int arr[] = {1,2,6,3,4,5};
int n=5;
for (int i = 0; i < n; i++){
for (int j = i+1; j< n; j++){

   if(arr[j]< arr[i]){
    return false;
   }

}
}
return true;

}


void removeDuplicate(){
    // Input: nums = [0,0,1,1,1,2,2,3,3,4]
    int arr [] = {0,0,1,1,1,2,2,3,3,4};
    int n= 10;

    int temp=arr[0];
    
    for(int i = 1; i < n; i++)
    {
     if(temp == arr[i]){
        i++;

     }  else {

     }
    }
    

}

int main(){
// largetEle();
// secondlargetEle();
int val= issorted();
cout<<"val "<< val;

return 0;
}