import javax.swing.JOptionPane;
public class Utilitario {
	public static void main(String[] args) {
		String meses=JOptionPane.showInputDialog("Informe a frase com delimitador : ");
		String array_mes[] = meses.split(";");
		/*int contador=0, posicao=0;
		String acumulador="";
		for (int i=0; i<meses.length();i++){
			if (meses.charAt(i)==';')
				contador++;
		}
		String array_mes[] = new String[contador];
		for (int i=0; i<meses.length();i++){
			if (meses.charAt(i)!=';')
				acumulador+=meses.charAt(i);
			else
			{
				array_mes[posicao]= acumulador;
				acumulador="";
				posicao++;
			}	
		}	*/
		for (int i=0; i<array_mes.length;i++){
			System.out.println(array_mes[i]);
		}
	}
}
