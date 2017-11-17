import javax.swing.JOptionPane;

public class TrocaLetra {

	public static void main(String[] args) {
		String frase=JOptionPane.showInputDialog("Informe a frase: ");
		System.out.println("Frase original = "+frase);
		System.out.println("Frase trocada = "+frase.replaceAll("a","x"));
	
		/*StringBuffer frase2 = new StringBuffer(frase);

		if (!frase.toLowerCase().contains("a"))
			System.out.println("Não tem letra a");
		else{
			for (int i=0;i<frase.length();i++){
				if (frase.toLowerCase().charAt(i)=='a'){
					frase2.setCharAt(i, 'x');
				}
			}
			
			
		}
		System.out.println("Frase original = "+frase);
		System.out.println("Frase trocada = "+frase2);
		*/
	}

}
