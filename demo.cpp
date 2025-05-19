#include<iostream>
using namespace std;
class HelloWorld
{
public:
    void greet()
    {
        cout << "Hello,man" << endl;
    }
};
int main()
{
    HelloWorld obj;
    obj.greet();
    return 0;
}