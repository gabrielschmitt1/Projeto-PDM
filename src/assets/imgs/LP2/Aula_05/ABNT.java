import javax.swing.JOptionPane;

public class ABNT {

	public static void main(String[] args) {
		String nome=JOptionPane.showInputDialog("Informe o nome completo: ");
		String nomes[] = nome.split(" ");
		StringBuffer nome_abnt=new StringBuffer();
		
		nome_abnt.append(nomes[nomes.length-1].toUpperCase());
		nome_abnt.append(", ");
		for(int i =0; i<nomes.length-1;i++)
			nome_abnt.append(nomes[i].toUpperCase().charAt(0)+". ");
			

		JOptionPane.showMessageDialog(null, nome_abnt);
		
	}

}
