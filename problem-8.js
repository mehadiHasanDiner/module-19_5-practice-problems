// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

// Naming Variables: Rules and Best Practices
// If you want to write clear, easy-to-follow, and easy-to-debug scripts (and who doesn't?), you can go a long way toward that goal by giving careful thought to the names you use for your variables. This section helps by running through the rules you need to follow and by giving you some tips and considerations for creating good variable names.

// Rules for Naming Variables
// JavaScript has only a few rules for variable names:

// The first character must be a letter or an underscore (_). You can't use a number as the first character.

// The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.

// As with the rest of JavaScript, variable names are case sensitive. That is, a variable named Interest_Rate is treated as an entirely different variable than one named interest_rate.

// There's no limit to the length of the variable name.

// You can't use one of JavaScript's reserved words as a variable name. All programming languages have a supply of words that are used internally by the language and that can't be used for variable names because doing so would cause confusion (or worse). Note, too, that JavaScript also has many keywords that should be avoided as well.

// For a list of JavaScript reserved words and keywords, see Appendix B, "JavaScript Reserved Words and Keywords."

// Ideas for Good Variable Names
// The process of declaring a variable doesn't take much thought, but that doesn't mean you should just type in any old variable name that comes to mind. Take a few extra seconds to come up with a good name by following these guidelines:

// Make your names descriptive. Sure, using names that are just a few characters long makes them easier to type, but I guarantee you that you won't remember what the variables represent when you look at the script down the road. If you want a variable to represent a user's name, use User_Name or UserName instead of un or usrnm.

// NOTE

// Although it's best to avoid single-letter variable names, such short names are accepted in some places, such as when constructing loops. See Chapter 7, "Controlling Your Code II: Looping."

// The best way to create a descriptive variable name is to use multiple words. However, because JavaScript doesn't take kindly to spaces in names, you need some way of separating the words to keep the name readable. The two standard conventions for overcoming this are to capitalize each word and cram them together (for example, LastName) or to separate each word with an underscore (for example, last_name). I prefer the latter style so I use it throughout this book.

// Because JavaScript is case sensitive, consider using all lowercase letters in your variable names. This ensures that you never run into errors because you misused uppercase and lowercase letters, plus it's easier on the typing fingers.

// Try to make your variable names look as different from JavaScript's keywords and other built-in terms (such as alert) as possible. This helps avoid the confusion that can arise when you look at a term and you can't remember if it's a variable or a JavaScript word. Here are some ways to do this:

// Use Multiple-Word Names - This helps a bit because most JavaScript terms are single words.

// Avoid "Inner Caps" - Many programmers like to use "inner caps" where the first letter of a multi-word name is lowercase and the first letter of each subsequent word is uppercase (for example, welcomeMessage or currentDateAndTime). Again, this has the potential to be confused with the multiple-word JavaScript terms that use the same convention (for example, onLoad and getHours).

// Separate Words with an Underscore - No JavaScript keywords contain the underscore character (_), so using it to separate words in variable names guarantees safe names and has the added advantage of making your names easier to read.

// Although short, cryptic variable names are to be shunned in favor of longer, descriptive names, that doesn't mean you should be using entire sentences. Extremely long names are inefficient because they take so long to type, and they're dangerous because the longer the name, the more likely you are to make a typo. Names of 2 to 4 words and 8 to 20 characters should be all you need.
