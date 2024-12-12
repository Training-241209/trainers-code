namespace ExpenseTracker;

class Program
{
    static void Main(string[] args)
    {
        Greeting();

        DisplayOptions();
        int selectedOption = getUserOption();

        // execute methods according to user selection

        switch(selectedOption){

            case 1:
                Console.WriteLine("User selected to add an expense");
                break;
            case 2:
                 Console.WriteLine("User selected to view all expenses");
                break;
            case 3:
                Console.WriteLine("User selected to edit an expense");
                break;
            case 4:
                Console.WriteLine("User selected to delete an expense");
                break;
            case 5:
                Console.WriteLine("Saving to a file...");
                break;
            case 6:
                Console.WriteLine("Exiting the program...");
                 break;
            default:
                Console.WriteLine("Invalid option! Please try again");
                break;
            
        }
    }


    public static void Greeting(){

        Console.WriteLine("Welcome to the ExpenseTracker!");
        Thread.Sleep(1500);
        Console.WriteLine("Select on of the following options: \n");
        Thread.Sleep(1500);

    }


    public static void DisplayOptions(){

        Console.WriteLine("1. Add Expense");
        Console.WriteLine("2. View Expenses");
        Console.WriteLine("3. Edit Expenses");
        Console.WriteLine("4. Delete Expenses");
        Console.WriteLine("5. Save to a file");
        Console.WriteLine("6. Exit");
    }


    public static int getUserOption(){

        Console.WriteLine("Select the option: \n");
        string? userInput = Console.ReadLine(); // ? marks that our userInput might be null

        // Exception handling
        try{
            return Int32.Parse(userInput);
        }
        catch(FormatException e){
            Console.WriteLine("Invalid input! Make sure you typed a number");
            return getUserOption();
        }

    }

}
