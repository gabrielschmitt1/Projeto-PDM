import java.util.Scanner;

import javax.swing.JOptionPane;

public class Inverte {

	public static void main(String[] args) {
		//Scanner entrada = new Scanner (System.in);
		//System.out.println("Informe a String:");
		//String palavra = entrada.nextLine();
		String palavra=JOptionPane.showInputDialog("Informe a frase:");
		StringBuffer palavra2 =new StringBuffer(palavra);
		//System.out.print(palavra2.reverse());
		//System.out.println("");
		//System.out.print(palavra2.reverse());
		//System.out.println("");
		for (int i = palavra.length()-1;i>=0; i--){
			System.out.print(""+palavra2.charAt(i));
		}

	}

}
