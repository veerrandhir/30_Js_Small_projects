// const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById('newQuote')
const tweet = document.getElementById('tweet');

tweet.addEventListener('click', () => {});
newQuote.addEventListener('click',()=>{
    // console.log("Next button triggered");
    
    // randomBy()
    let id = randomBy()
    quote.innerHTML = quotes[id].quote 
    author.innerHTML = quotes[id].author 

});



const quotes = [
    { id: 1, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { id: 2, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { id: 3, quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { id: 4, quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { id: 5, quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { id: 6, quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { id: 7, quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { id: 8, quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { id: 9, quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { id: 10, quote: "Change the world by being yourself.", author: "Amy Poehler" },
    { id: 11, quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { id: 12, quote: "Never regret anything that made you smile.", author: "Mark Twain" },
    { id: 13, quote: "Die with memories, not dreams.", author: "Anonymous" },
    { id: 14, quote: "Aspire to inspire before we expire.", author: "Anonymous" },
    { id: 15, quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { id: 16, quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { id: 17, quote: "Whatever you do, do it well.", author: "Walt Disney" },
    { id: 18, quote: "What we think, we become.", author: "Buddha" },
    { id: 19, quote: "All limitations are self-imposed.", author: "Oliver Wendell Holmes" },
    { id: 20, quote: "Tough times never last but tough people do.", author: "Robert H. Schuller" },
    { id: 21, quote: "Strive for greatness.", author: "LeBron James" },
    { id: 22, quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { id: 23, quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { id: 24, quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { id: 25, quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { id: 26, quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { id: 27, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { id: 28, quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { id: 29, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { id: 30, quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { id: 31, quote: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    { id: 32, quote: "When you have a dream, you've got to grab it and never let go.", author: "Carol Burnett" },
    { id: 33, quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
    { id: 34, quote: "No matter what people tell you, words and ideas can change the world.", author: "Robin Williams" },
    { id: 35, quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { id: 36, quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { id: 37, quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { id: 38, quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { id: 39, quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { id: 40, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 41, quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { id: 42, quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { id: 43, quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { id: 44, quote: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
    { id: 45, quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
    { id: 46, quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { id: 47, quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
    { id: 48, quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { id: 49, quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { id: 50, quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { id: 51, quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { id: 52, quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { id: 53, quote: "Impossible is just an opinion.", author: "Paulo Coelho" },
    { id: 54, quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { id: 55, quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    { id: 56, quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { id: 57, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { id: 58, quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { id: 59, quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { id: 60, quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { id: 61, quote: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
    { id: 62, quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { id: 63, quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { id: 64, quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 65, quote: "Keep going. Be all in.", author: "Bryan Hutchinson" },
    { id: 66, quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { id: 67, quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { id: 68, quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.", author: "Earl Nightingale" },
    { id: 69, quote: "Don’t let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { id: 70, quote: "Courage is one step ahead of fear.", author: "Coleman Young" },
    { id: 71, quote: "Do what you feel in your heart to be right—for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { id: 72, quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { id: 73, quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { id: 74, quote: "I never dreamed about success. I worked for it.", author: "Estee Lauder" },
    { id: 75, quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { id: 76, quote: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
    { id: 77, quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { id: 78, quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { id: 79, quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    { id: 80, quote: "Dream big dreams, commit to your true passion, and you will learn to fly.", author: "Vikram Patel" },
    { id: 81, quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { id: 82, quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { id: 83, quote: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
    { id: 84, quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { id: 85, quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { id: 86, quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { id: 87, quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { id: 88, quote: "You don’t need to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
    { id: 89, quote: "Your limitation—it’s only your imagination.", author: "Anonymous" },
    { id: 90, quote: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
    { id: 91, quote: "Great things never come from comfort zones.", author: "Anonymous" },
    { id: 92, quote: "Dream it. Wish it. Do it.", author: "Anonymous" },
    { id: 93, quote: "Success doesn’t just find you. You have to go out and get it.", author: "Anonymous" },
    { id: 94, quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { id: 95, quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Anonymous" },
    { id: 96, quote: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
    { id: 97, quote: "Do something today that your future self will thank you for.", author: "Anonymous" },
    { id: 98, quote: "Little things make big days.", author: "Anonymous" },
    { id: 99, quote: "It’s going to be hard, but hard does not mean impossible.", author: "Anonymous" },
    { id: 100, quote: "Don’t wait for the perfect moment. Take the moment and make it perfect.", author: "Anonymous" },
    { id: 101, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 102, quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { id: 103, quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { id: 104, quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { id: 105, quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { id: 106, quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { id: 107, quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { id: 108, quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { id: 109, quote: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
    { id: 110, quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { id: 111, quote: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { id: 112, quote: "Don’t be afraid to fail. Be afraid not to try.", author: "Michael Jordan" },
    { id: 113, quote: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
    { id: 114, quote: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { id: 115, quote: "You don’t have to be perfect to be amazing.", author: "Anonymous" },
    { id: 116, quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { id: 117, quote: "Don’t let the noise of others’ opinions drown out your own inner voice.", author: "Steve Jobs" },
    { id: 118, quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { id: 119, quote: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
    { id: 120, quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { id: 121, quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { id: 122, quote: "It’s not the years in your life that count. It’s the life in your years.", author: "Abraham Lincoln" },
    { id: 123, quote: "A winner is a dreamer who never gives up.", author: "Nelson Mandela" },
    { id: 124, quote: "Don’t limit your challenges. Challenge your limits.", author: "Anonymous" },
    { id: 125, quote: "Great things take time.", author: "Anonymous" },
    { id: 126, quote: "Every day may not be good, but there’s something good in every day.", author: "Alice Morse Earle" },
    { id: 127, quote: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
    { id: 128, quote: "Believe you can, and you’re halfway there.", author: "Theodore Roosevelt" },
    { id: 129, quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { id: 130, quote: "Only those who dare to fail greatly can ever achieve greatly.", author: "Robert F. Kennedy" },
    { id: 131, quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
    { id: 132, quote: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { id: 133, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { id: 134, quote: "Don’t let the past steal your present.", author: "Cherralea Morgen" },
    { id: 135, quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { id: 136, quote: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
    { id: 137, quote: "Do what is right, not what is easy nor what is popular.", author: "Roy T. Bennett" },
    { id: 138, quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { id: 139, quote: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Anonymous" },
    { id: 140, quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { id: 141, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { id: 142, quote: "Arise, awake, and stop not until the goal is achieved.", author: "Swami Vivekananda" },
    { id: 143, quote: "Take risks in your life. If you win, you can lead; if you lose, you can guide.", author: "Swami Vivekananda" },
    { id: 144, quote: "The greatest religion is to be true to your own nature. Have faith in yourselves.", author: "Swami Vivekananda" },
    { id: 145, quote: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
    { id: 146, quote: "A man is but the product of his thoughts. What he thinks, he becomes.", author: "Mahatma Gandhi" },
    { id: 147, quote: "Knowledge without action is useless and irrelevant.", author: "Abdul Kalam" },
    { id: 148, quote: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.", author: "A.P.J. Abdul Kalam" },
    { id: 149, quote: "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", author: "A.P.J. Abdul Kalam" },
    { id: 150, quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { id: 151, quote: "Look at the sparrows; they do not know what they will do in the next moment. Let us literally live from moment to moment.", author: "Mahatma Gandhi" },
    { id: 152, quote: "You cannot believe in God until you believe in yourself.", author: "Swami Vivekananda" },
    { id: 153, quote: "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world.", author: "Swami Vivekananda" },
    { id: 154, quote: "A moment comes, which comes but rarely in history, when we step out from the old to the new.", author: "Jawaharlal Nehru" },
    { id: 155, quote: "Faith is the bird that feels the light when the dawn is still dark.", author: "Rabindranath Tagore" },
    { id: 156, quote: "You can’t cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
    { id: 157, quote: "Love does not claim possession, but gives freedom.", author: "Rabindranath Tagore" },
    { id: 158, quote: "A leader is the one who knows the way, goes the way, and shows the way.", author: "Chanakya" },
    { id: 159, quote: "Before you start some work, always ask yourself three questions: Why am I doing it, what the results might be, and will I be successful. Only when you think deeply and find satisfactory answers to these questions, go ahead.", author: "Chanakya" },
    { id: 160, quote: "Learn from the mistakes of others... you can’t live long enough to make them all yourselves.", author: "Chanakya" },
    { id: 161, quote: "Even if a snake is not poisonous, it should pretend to be venomous.", author: "Chanakya" },
    { id: 162, quote: "The power to question is the basis of all human progress.", author: "Indira Gandhi" },
    { id: 163, quote: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi" },
    { id: 164, quote: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi" },
    { id: 165, quote: "Purity, patience, and perseverance are the three essentials to success, and above all, love.", author: "Swami Vivekananda" },
    { id: 166, quote: "When the mind is pure, joy follows like a shadow that never leaves.", author: "Buddha" },
    { id: 167, quote: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { id: 168, quote: "Holding on to anger is like drinking poison and expecting the other person to die.", author: "Buddha" },
    { id: 169, quote: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", author: "Buddha" },
    { id: 170, quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { id: 171, quote: "An ounce of practice is worth more than tons of preaching.", author: "Mahatma Gandhi" },
    { id: 172, quote: "Freedom is not worth having if it does not include the freedom to make mistakes.", author: "Mahatma Gandhi" },
    { id: 173, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { id: 174, quote: "Life’s battles don’t always go to the stronger or faster man, but sooner or later, the man who wins is the man who thinks he can.", author: "Vince Lombardi" },
    { id: 175, quote: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" }
];

let randomBy = function (){
    const id = Math.floor(Math.random()*175)+1;
    return id;
}


//As we have decleared our own Api no need to use API link and also it's won't working.

// try {
    
//     async function getQuote() {
//         const response = await fetch(api_url);
//         let data = await response.json();
//         console.log(data);
        
//     }
//     const newQuotes = quote.innerHTML = "<h2>All power is within You</h2>";
//     newQuote.appendChild(newQuotes);
//     author.innerHTML = data.content;
//     getQuote(api_url)

    
// } catch (error) {
//     console.log('Unable to fatch api ', error);
    
// }