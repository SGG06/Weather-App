#include <bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int a,b,c;
        cin>>a>>b>>c;
        if(a==b || b==c) {cout<<0<<endl;continue;}
        int ans=0;
        int maxi=max(a,max(b,c));
        int mini=min(a,min(b,c));
        int middle= a+b+c-maxi-mini;
        int mindiff= min(maxi-middle, middle-mini);
        cout<<mindiff<<endl;
    }
}