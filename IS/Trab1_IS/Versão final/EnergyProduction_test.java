/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.IOException;
/**
 *
 * @author Gonçalo
 */
public class EnergyProduction_test {

    /**
     * @param args the command line arguments
     */
    static{
		System.load("C:\\tmp_meu\\Dll_JNI\\x64\\Debug\\Dll_JNI.dll");
	}
	
	static void hud(){
		System.out.println("WELCOME TO THE POWER STATION");
		System.out.println("What do you wish to know?");
		System.out.println("O - Turn on the station");
		System.out.println("F - Turn off the station");
		System.out.println("P - Energy production");
		System.out.println("R - Error");
		System.out.println("E - Exit");
		System.out.println("Enter your option:");
	}
    public static void main(String[] args) throws IOException{
        // TODO code application logic here
        EnergyProduction t1cObj = new EnergyProduction ();
		float energy = t1cObj.energyProduction();
		int out = 0;
		int state = 0;
		int state_aux = 0;
		int led = 0;
		
		hud();
		
		while(out == 0){
            int option = System.in.read();
			
			switch(option){
			case'O': case'o':
				if(state == 0){
					state = 1;
					state_aux = t1cObj.turnOn(state);
					if(state_aux == 1){
						System.out.println("\nStation turning on...");
						led = t1cObj.isOn();
						System.out.println("System state "+led+ "\n");
					}
				}else
					System.out.println("\nSystem is already running...\n");
				hud();
				break;
			case'F': case'f':
				if(state == 1){
					state = 0;
					state_aux = t1cObj.turnOn(state);
					if(state_aux == 0){
						System.out.println("\nStation turning off...\n");
					}
				}else
					System.out.println("\nSystem is already off...\n");
				hud();
				break;
			case'P': case'p':
				System.out.println("\nThe energy production is "+energy+"kW/h.\n");
				hud();
				break;
			case'R': case'r':
				System.out.println(t1cObj.error());
				hud();
				break;
			case'E': case'e':
				out = 1;
				break;
			}
		}
    }
    
}
