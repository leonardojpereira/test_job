public class Exercise4 {
    public static void main(String[] args) {
        double sp = 67.83643;
        double rj = 36.67866;
        double mg = 29.22988;
        double es = 27.16548;
        double outros = 19.84953;
        double total = sp + rj + mg + es + outros;
    
        double psp = (sp / total) * 100;
        double prj = (rj / total) * 100;
        double pmg = (mg / total) * 100;
        double pes = (es / total) * 100;
        double poutros = (outros / total) * 100;


        System.out.printf("Porcentagem de SP: %.2f  %n", psp);
        System.out.printf("Porcentagem de RJ: %.2f  %n", prj);
        System.out.printf("Porcentagem de MG: %.2f  %n", pmg);
        System.out.printf("Porcentagem de ES: %.2f  %n", pes);
        System.out.printf("Porcentagem de Outros: %.2f  %n", poutros);
    }
}