import java.util.Scanner;

public class ExSomaInt {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int tam=0;
		System.out.println("Informe o tamanho do array:");
		tam = entrada.nextInt();
		
		int [] x = new int [tam];
		int soma=0;
		for (int i=0; i<x.length; i++){
			System.out.println("Informe "+(i+1)+ "o. numero:");
			x[i] = entrada.nextInt();
			soma+=x[i];
		}
		System.out.println("Soma é igual: "+soma);
	}

}
