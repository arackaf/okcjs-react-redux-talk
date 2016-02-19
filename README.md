# okcjs-react-redux-talk
okc.js talk on react and redux

## Slides
https://docs.google.com/presentation/d/1IOs0BIBAZvZJq1zWRo9PWtKln_ZTxLNz7Tg_gZp8El4/edit?usp=sharing

Some have asked me how to run this code.  Here are the steps:

Clone it (or just download the zip).

Install jspm globally if it's not already  (npm install -g jspm)

Navigate to the root directory (of my repo you cloned) and type jspm install

Open the project's solution file in Visual Studio and run it.  That should be all.

Play around with it and have fun.  The snapshots folder should have the state and component as they exist in various stages of the demo.  By default it should open to the very last stage (which I didn't quite get to because of time).  

As I said, everything was purposefully coded up to be as simple and straightforward as possible for a talk, with as much of the code in one place as possible.  A real Redux
application would likely use action names and action creators, and the action creators would likely be connected to the components, as opposed to manually dispatching actions 
like I did for simplicity.

Of course the book and subject data were dispatched directly from componentDidMount.  In real life they'd likely be fetched from an ajax action, dispatched through an
asynchronous action set up with the Thunk middleware (or similar).

Anyway - my point is there was lots and lots that I couldn't cover.  Don't be surprised if you come across things very different from what I presented.

AJR 2/16/16