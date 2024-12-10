namespace Magic_Ball;


// Magic Ball
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the Magic Ball!");
        Console.WriteLine("Think about your question, and type something!");

        string? userInput = Console.ReadLine();

        if(!string.IsNullOrEmpty(userInput)){

            Console.WriteLine("The magic ball says:\n");
            Console.Write(GetPrediction());
        }
        else{
            Console.WriteLine("Type something!");
            Main(args);
        }

    }


    // Method for prediction

    public static string GetPrediction(){

        // This is how we mark our variable of a string array data type
        string[] predictions = {
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes, definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        };

        // Genereate a random number using Random built-in class
        Random myRandomNumber = new Random();
        int randomIndex = myRandomNumber.Next(0, predictions.Length);

        return predictions[randomIndex];

    }
}
