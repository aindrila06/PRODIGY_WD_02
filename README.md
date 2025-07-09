# PRODIGY_WD_02
The Time Tracker is a responsive web application built using HTML5, CSS3 (custom + Tailwind CSS), and Vanilla JavaScript to measure, display, and manage elapsed time with Start, Pause, Stop, Lap, and Reset functionalities. It is designed with user interactivity and performance efficiency in mind, enhanced by modern UI practices and component-based styling.

* Tech Stack
HTML5 – Semantic layout and structured content

CSS3 – Custom styling and layout enhancements

Tailwind CSS CDN – Utility-first CSS framework for rapid UI development

JavaScript (ES6+) – Timer logic, DOM manipulation, and event handling

Google Fonts – Custom typography using Space Grotesk and Noto Sans

* Features
Live Stopwatch Display – Real-time dynamic update of the timer using setInterval and Date.now()

Lap Functionality – Records multiple lap times with dynamic DOM table rendering

Start/Pause/Reset/Stop Controls – Fully interactive and isolated control methods

Animated Hover Effects – Button and heading hover transitions via CSS and Tailwind

Responsive Layout – Flexbox-based layout with support for screen resizing

Persistent Timer State – Accurate handling of elapsed time across pauses

* File Structure
plaintext
Copy
Edit
├── index.html      # Main HTML structure and embedded TailwindCSS CDN
├── style.css       # Custom styles, typography, responsive layout, hover effects
└── script.js       # All timer logic and UI event binding
* Core Logic
Timer state is managed using Date.now(), setInterval(), and a custom elapsed tracker.

Time is formatted using a utility function that pads hours, minutes, and seconds.

DOM updates are throttled to 500ms intervals for performance.

Each lap entry appends a <tr> to a table dynamically using document.createElement.

* UI Highlights
Custom Banner Image – Background image for aesthetic enhancement

Tailwind Buttons – Styled buttons with smooth hover transitions

Animated Headers – Interactive hover text color transitions for better UX

* How to Use
Open index.html in any modern browser.

Click Start to begin the timer.

Use Lap to record current time.

Click Pause to temporarily halt, Stop to end, or Reset to clear all.

* Browser Compatibility
 Chrome
 Firefox
 Edge
 Safari

