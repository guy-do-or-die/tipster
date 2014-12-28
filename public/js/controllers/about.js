function AboutController($scope, $routeParams, $location, Global) {
	$scope.global = Global;

    $scope.parts = [
        {title: "About Tiiipster", content: "<p>In the world of a thousand possibilities it’s importaint not to get lost. Tiiipster is your best friend and counselor when it comes to discovering new events in your city, keeping your plans in order and having a great time.<br/>" +
            "We have developed a service that takes you back to the basics - good ol’ sharing. A team of tiiipsters is responsible for coming up with a timetable of events, for a week starting today. In a ‘if you like this, then you might like this’ manner we give you the events a certain type of people could enjoy, and rely on a human approach to really make things interesting.</p>"},
        {title: "How is Tiiipster different?", content: "<p>Tiiipster has a human soul. There are real people behind each timetable, working hard, sharing their interests and plans. We don’t pretend that machines know better.</p>" +
            "<p>No matter where you find yourself, you can immerse into local life, never again having to wonder where all the underground events are taking place. Now you have a personal guide anywhere.</p>" +
            "<p>Tiiipster is all about new experiences. We like to think that the service not only helps keep your timetable tidy but pushes you to try new things with new people — maybe things you’d have never imagined yourself doing.</p>"},
        {title: "How do I use the site?", content: "<p>It’s pretty simple, really.<br/>" +
            "What you do is check out the characters (their descriptions give a brief overview of what you’re dealing with, be it a geek or a party animal) and their timetables for the upcoming week. If you feel this is a persona you can relate to, and you’d want to keep updated on their schedule (to better plan your own time, of course), then you simply tick off the circle to the left of their name. You can tick off as many characters as you want, but keep in mind  that at the beginning of every week you’ll receive an email with the timetables for each character you have signed up to - so maybe you shouldn’t get too carried away (unless you’re that  mindblowingly diverse, and we salute you). When you’re done choosing, simply type in your email and hit “Sign Up”. Hereinafter you’ ll be able to control your sign-ups through the weekly emails.</p>"},
        {title: "Can I be a tiiipster in my town?", content: "<p>Sure. We plan to go global and it’d be super-cool for everyone to get involved.</p>" +
            "<p>Drop us a line at <a href='mailto:tiiipster@gmail.com'>tiiipster@gmail.com</a> if you feel you have what it takes. Include the following info:<br/>" +
            "Your city.<br/>" +
            "What character’s role you feel you’re most suited for.<br/>" +
            "Your sample timetable for the upcoming week with links (where possible).<br>A link to your Facebook account.</p>"},
        {title: "Contact us", content: "<p>Anything you’ve got to tell us, please send your enquiries to <a href='mailto:tiiipster@gmail.com'>tiiipster@gmail.com</a></p>"},
    ];
}
