import java.util.Vector;

public class PilhaVector {
	private Vector pilha;
	public PilhaVector(){
		pilha = new Vector();
	}
	public void insere (Object param){
		pilha.add(param);
	}
	public int tamanhoVector(){
		return pilha.size();
	}
	public void removeUm(){
		//fila.remove(0);
		pilha.remove(pilha.size()-1);
	}
	
	public static void main(String[] args) {
		
		PilhaVector p1 = new PilhaVector();
		p1.insere("Fernando");
		p1.insere("Maria");
		p1.insere("Eduardo");
		p1.insere("José");
		p1.removeUm();
		System.out.println("Vetor de tamanho = "+ p1.tamanhoVector());
		

	}

}
