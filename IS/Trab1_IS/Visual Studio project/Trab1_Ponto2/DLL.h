#pragma once
#ifndef DLLDIR_EXPORT
#define DLLDIR_EXPORT 
	/*
	* Class:     Trab1_Class
	* Method:    energyProduction
	* Signature: (F)
	*/
	__declspec(dllexport) float energyProduction();
	/*
	* Class:     Trab1_Class
	* Method:    turnOn
	* Signature: (I)I
	*/
	__declspec(dllexport) int turnOn(int state);
	/*
	* Class:     Trab1_Class
	* Method:    isOn
	* Signature: (I)
	*/
	__declspec(dllexport) int isOn();
	/*
	* Class:     Trab1_Class
	* Method:    error
	* Signature: (char*)
	*/
	__declspec(dllexport) char* error();
#endif
