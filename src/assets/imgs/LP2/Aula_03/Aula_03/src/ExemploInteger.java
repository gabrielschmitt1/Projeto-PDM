import java.util.Scanner;

import javax.swing.JOptionPane;

public class ExemploInteger {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Informe o primeiro número:");
		Integer n1 = new Integer(entrada.nextInt());
		Integer n2 = new Integer(JOptionPane.showInputDialog("Informe o segundo número:"));
	
		System.out.println("a soma dos nrs =  "+(n1+n2));
	JOptionPane.showMessageDialog(null, "a soma dos nrs =  "+(n1+n2));

	}

}
