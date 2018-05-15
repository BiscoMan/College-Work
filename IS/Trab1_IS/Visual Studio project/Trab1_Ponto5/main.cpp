#include "DLL.h"

int main()
{
	__declspec(dllexport) float energyProduction();
	__declspec(dllexport) int turnOn(int state);
	__declspec(dllexport) int isOn();
	__declspec(dllexport) char* error();

	return true;
}