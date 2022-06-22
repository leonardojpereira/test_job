import java.util.Scanner;

public class Exercise5 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String string;
    
    System.out.print("Entrada: ");
    string = scanner.nextLine();
    
    System.out.printf("Saída: %s\n", reverseChar(string));

    scanner.close();
  }
  
  public static String reverseChar(String s) {
    int i, n;
    String auxString;
    
    auxString = "";
    n = s.length();
    for(i = (n-1); i >= 0; i--) {
      auxString = auxString + s.charAt(i);
    }
    
    return(auxString);
    
  }  
}