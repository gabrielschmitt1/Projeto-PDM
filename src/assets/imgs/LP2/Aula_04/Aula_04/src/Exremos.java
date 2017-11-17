public class Exremos {
	public static void main(String[] args) {
		String maior = args[0];
		String menor = args[0];
		for (int i=0; i<args.length;i++){
			if (args[i].length()>maior.length()){
				maior = args[i];
			}
			if (args[i].length()<menor.length()){
				menor = args[i];
			}	
		}		
		System.out.println("A maior String é = "+maior+ " com tamanho = "+maior.length());
		System.out.println("A menor String é = "+menor+" com tamanho = "+menor.length());

	}

}
