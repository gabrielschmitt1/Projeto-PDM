import javax.swing.JOptionPane;

public class ValorChar {

	public static void main(String[] args) {
		String frase="";
		
		for(int i =32 ; i<150; i++){
			
			frase+="O valor de i "+i+" = "+(char) i+"     ";
			if (i%3==0){
				frase+="\n";
			}
		}
		JOptionPane.showMessageDialog(null, frase);
	}

}
