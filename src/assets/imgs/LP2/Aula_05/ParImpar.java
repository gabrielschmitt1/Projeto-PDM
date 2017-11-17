import javax.swing.JOptionPane;

public class ParImpar {

	public static void main(String[] args) {
		String nome=JOptionPane.showInputDialog("Informe o nome: ");
		if (nome.length()%2==0){
			for (int i=0;i<nome.length();i++){
				System.out.println(nome);
				
				}
		}
		else
		{
			StringBuffer nomeb = new StringBuffer();
			for (int i=0;i<nome.length();i++){
				nomeb.append(nome.charAt(i));
			     System.out.println(nomeb);
			     
			}
			
		}

	}

}
