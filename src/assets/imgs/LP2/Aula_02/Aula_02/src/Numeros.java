import javax.swing.JOptionPane;

public class Numeros {

	public static void main(String[] args) {
		double soma=0,media=0;
		double menor=Double.parseDouble(args[0]);
		double maior=Double.parseDouble(args[0]);
		for (int i=0; i<args.length;i++){
			if (Double.parseDouble(args[i])<menor)
				menor = Double.parseDouble(args[i]);
			
			if (Double.parseDouble(args[i])>maior)
				maior = Double.parseDouble(args[i]);
			
			soma+=Double.parseDouble(args[i]);
		}
		JOptionPane.showMessageDialog(null, "O maior = "+maior);
		JOptionPane.showMessageDialog(null, "O menor = "+menor);
		JOptionPane.showMessageDialog(null, "A soma = "+soma);	
		JOptionPane.showMessageDialog(null, "A media = "+soma/args.length);
	}

}
