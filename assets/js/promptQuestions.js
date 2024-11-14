//prompt question when a user is stack on your journaling
let questions = [
	"What are your favorite memories from childhood? Why do they stand out to you?",
	"Who were the most 'present' adults in your life when you were growing up? What did you learn from them?",
	"What did you wish was different about your childhood? How has that impacted who you are today?",
	"What 5 lessons would you tell your 18-year-old self?",
	"What goals did you have, say, 5 years ago? Do you still want the same things?",
	"Would your younger self be proud of you?",
	"What are the biggest challenges you’ve overcome in your life? How did you do it?",
	"What are your biggest strengths? How can you use them to achieve your goals?",
	"What are your biggest weaknesses? How can you work to overcome them?",
	"What are your biggest accomplishments? How did you achieve them?",
	"What are your biggest regrets? How can you learn from them?",
	"What is your biggest source of stress? How can you manage it?",
	"How do you typically deal with negative emotions? Do you have a healthy outlet or is it more of a coping mechanism?",
	"What is your biggest source of joy? How can you cultivate more of it?",
	"Do you keep a gratitude journal? What are you most grateful for in your life?",
	"What are the biggest challenges you’re facing right now? How can you work to overcome them?",
	"What are the most important things you have learned in life so far?",
	"Write down all of the reasons why you are proud of yourself.",
	"What is your relationship with yourself? How can you cultivate more self-love and acceptance?",
	"Have there been any significant changes in your life in the last year? Have they had a lingering impact on you and your life?",
	"What feels good about your life right now?",
	"What are you struggling with right now?",
	"What are your core values? How do they shape your choices and actions?",
	"What are your daily habits? How do they contribute to your overall well-being?",
	"What are your non-negotiables in life? In relationships? In your personal habits? At work? At home?",
	"What is your biggest fear?",
	"What is your relationship with others? Do you have a loving support system, or are you feeling alone and lonely?",
	"Who are the people that you want to do life with?",
	"Do you feel like you are missing something in your social life or is your sense of community feeling weak? If this is something you are struggling with, what can you do to change that?",
	"Who do you want to be like when you grow up?",
	"What does success mean to you?",
	"What does happiness mean to you?",
	"Think of your life 15-20 years from now. What do you NOT want it to look like?",
	"Do you feel like your life is moving in the right direction, or the direction you want it to move towards?",
	"Imagine that you are living your dream life right now. Describe your day and activities in detail. What does your day’s schedule look like? What are you wearing? Who are the people around you? What are you eating/cooking?",
	"How far off from your current life and daily routine is this vision of your dream life you just described?",
	"Have you found your purpose in life? If yes, what are you doing about it? If not, does that bother you? And if so, what are you doing about it?",
	"What is holding you back from achieving your goals or living your dream life?",
	"What are your limiting beliefs about yourself? Explore them in depth – try to find out why they’ve taken root in your mind.",
	"What are your top 4-5 goals for this year? Why do they matter to you?",
	"This time next year – what has remained the same and what has changed? Or what do you hope it would be like?",
	"What are your goals for the next 5 years?",
	"What are your goals for the next 10 years?",
	"How do you feel about your physical health? What is one thing you could do today/this week/month/year to improve your physical health?",
	"How do you feel about your mental health? What is one thing you could do today/this week/month/year to improve your mental health?",
	"Are there any mindfulness/spiritual practices that you do currently? Why, or why not?",
	"What is your relationship with social media? Does it impact you in a positive way, or does it leave you feeling drained?",
	"What is one area of your life that could use more organization? How can you improve it?",
	"What is one relationship in your life that could use more attention or nurturing? How can you improve it?",
	"What is one thing you can do to step outside of your comfort zone today/this week/month/year?",
	"What is one area of your life where you could use more self-discipline? How can you cultivate it?",
	"What is one habit or behavior that is not serving you? How can you let go of it? Think of any bad habits you might have already overcome – what did you do to get rid of them?",
	"Are there any new habits you want to incorporate into your life?",
	"Do you feel threatened by AI in your job/business? What do you bring to the table that cannot be done in the same manner as AI?",
	"Are you actively trying to learn to use AI to complement your work? Or are you trying to learn more unique skills that cannot be easily replicated by AI?",
	"What do you want your legacy to be?",
	"How are you making the world a better place for those who come after you?",
];

//retrieve the part we want to change on button click
let promptQuestion = document.querySelector(".promptQuestion");
let promptMessage = document.querySelector(".promptMessage");
let stuckButton = document.querySelector(".stuckButton");

stuckButton.addEventListener("click", () => {
	//pick a random question from the array
	let randomQuestion = Math.floor(Math.random() * questions.length);
	//change the DOM text
	promptQuestion.innerText = questions[randomQuestion];
	promptMessage.innerText = "Your Answer";
});
