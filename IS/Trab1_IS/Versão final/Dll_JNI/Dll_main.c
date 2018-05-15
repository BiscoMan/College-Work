#include "Dll_main.h"

/*
* Class:     EnergyProduction
* Method:    energyProduction
* Signature: ()F
*/
JNIEXPORT jfloat JNICALL Java_EnergyProduction_energyProduction
(JNIEnv *pEnv, jclass jobj) {
	return 3942.8;
}

/*
* Class:     EnergyProduction
* Method:    turnOn
* Signature: (I)I
*/
JNIEXPORT jint JNICALL Java_EnergyProduction_turnOn
(JNIEnv *pEnv, jclass jobj, jint state) {
	int aux = 0;
	if (state == 1) {
		aux = 1;
	}
	else {
		if (state == 0) {
			aux = 0;
		}
	}
	return aux;
}

/*
* Class:     EnergyProduction
* Method:    isOn
* Signature: ()I
*/
JNIEXPORT jint JNICALL Java_EnergyProduction_isOn
(JNIEnv *pEnv, jclass jobj) {
	return 1;
}

/*
* Class:     EnergyProduction
* Method:    error
* Signature: ()Ljava/lang/String;
*/
JNIEXPORT jstring JNICALL Java_EnergyProduction_error
(JNIEnv *pEnv, jclass jobj) {
	char buf[] = "\nError, shutting down the facility!\n";
	return (*pEnv)->NewStringUTF(pEnv, buf);
}