const mkdirFolder = [
    {
        code: `import turtle


wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.fd(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`,
        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We will create advanced functions now, where the size of the square keeps on increasing automatically</span></p>`, `import turtle

wn = turtle.Screen()`, ''),

            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s set the screen colour like light green and the turtle colour as blue</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.`, ''),

            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are defining a function to draw a square, the function takes in only the size as the argument</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size)`, ''),

            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are going to increase the size by 5 every time the loop is being run.</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.fd(size)
		t.left(90)
		size = size + 5`, ''),

            make_pred_guide('tut17', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now while calling the function, mention the size of the square to be in place of x</span></p>`, `import turtle


wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.fd(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.fd(size)
		t.left(90)
		size = size + 5

sqrfunc(6)
sqrfunc(26)
sqrfunc(46)
sqrfunc(66)
sqrfunc(86)
sqrfunc(106)
sqrfunc(126)
sqrfunc(146)`,

        guide: [
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s continue from the last lesson. but now we will add another argument y, which defines the width of the turtle that draws the square.</span></p>`, `import turtle

t = turtle.Turtle()
t.color('red')

def square`, ''),

            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We will take value from y and set it as width for the turtle.</span></p>`, `import turtle

t = turtle.Turtle()
t.color('red')

def square(x,y):
    t.width`, ''),
            make_pred_guide('tut7', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">While we call the function, set the first argument as the size of the square. the second argument will define the width of the square.</span></p>`, `import turtle

t = turtle.Turtle()
t.color('red')

def square(x,y):
    t.width(y)
    for i in range(4):
        t.forward(x)
        t.left(90)

square(`, ''),
        ]
    },
    {
        code: `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.forward(size)
		t.left(90)
		size = size-5

sqrfunc(146)
sqrfunc(126)
sqrfunc(106)
sqrfunc(86)
sqrfunc(66)
sqrfunc(46)
sqrfunc(26)`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">This lesson is similar to the last lesson, but instead of increasing from the inside and building the square, we are going to decrease from the outside and make a bigger circle into a smaller one.</span></p>`, `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")`, ''),

            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s create a function with a size argument, just like we did in the last lesson</span></p>`, `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size)`, ''),

            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Since in this program we are going to decrease the size, let&rsquo;s reduce the size by 5 every time the loop runs</span></p>`, `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.forward(size)
		t.left(90)
		size =`, ''),

            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">In the last lesson, we ended with size 146, therefore let&rsquo;s start with 146 here and slowly reduce from that.</span></p>`, `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.forward(size)
		t.left(90)
		size = size-5

sqrfunc(146)`, ''),

            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">When the function is called with value 146, at the first loop the value will be 146, after the second loop the value would be 141, after the third, it would be 136, the fourth time it would be 131after that the loop will end. so when we call the function for next time, we are calling it with the value 126</span></p>`, `import turtle
wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	for i in range(4):
		t.forward(size)
		t.left(90)
		size = size-5

sqrfunc(146)
sqrfunc(`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while True:
		t.forward(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`,

        guide: [

            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Before the 2 lessons, we saw how to expand a square from inside out using functions and for loop, now let us try doing it using a while loop</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")`, ''),

            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Just like we did in the past few lessons, we are defining a function with the size of a square as an argument.</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):`, ''),

            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Instead of a for loop, we are giving a while true loop, so that the loop will run infinitely</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while True:`, ''),

            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Since we are using an infinite loop, we can just call this function with 6 once and the size will be kept on increasing</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while True:
		t.forward(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while (size < 146):
		t.forward(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`,

        guide: [
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s continue from our last lesson, in the last lesson we used an infinite while loop. now we are creating a condition-based while loop</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")`, ''),

            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are setting the condition such that, if the size of our square increases more than 146 the while loop should stop</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while (size < 146)`, ''),

            make_pred_guide('tut8', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Finally, we are calling our function with 6 as the start size and it will increase in the while loop until 146</span></p>`, `import turtle

wn = turtle.Screen()
wn.bgcolor("light green")

t = turtle.Turtle()
t.color("blue")

def sqrfunc(size):
	while (size < 146):
		t.forward(size)
		t.left(90)
		size = size + 5

sqrfunc(6)`, ''),
        ]
    },
    {
        code: `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)
    
t = turtle.Turtle()
t.color("red")

draw_head(t)`,

        guide: [
            make_pred_guide('tut9', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">In the next set of lessons, we are going to draw a doll with all the functions we have learnt.</span></p>`, `import turtle`, ''),
            make_pred_guide('tut10', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s begin by creating a function to draw the head of the doll, this function takes in a turtle object as an argument</span></p>`, `import turtle

def draw_head(doll):`, ''),
            make_pred_guide('tut11', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are drawing a circle for the doll head and then turning it 60 degrees so that it can be fixed ready to draw the body</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.`, ''),
            make_pred_guide('tut12', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now we need to create a turtle object to pass inside the function</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)
    
t = turtle`, ''),
            make_pred_guide('tut13', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Finally, we are calling the function and passing the turtle object inside the function</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)
    
t = turtle.Turtle()
t.color("red")

draw_head(t)`, ''),
        ]
    },
    {
        code: `import turtle

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)

t = turtle.Turtle()
t.color("red")

draw_body(t)`,

        guide: [
            make_pred_guide('tut14', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s continue to build our doll, in the last lesson we built the head, now let&rsquo;s build the body</span></p>`, `import turtle`, ''),
            make_pred_guide('tut15', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are creating a function to draw a body, and passing the turtle object inside it</span></p>`, `import turtle

def draw_body`, ''),
            make_pred_guide('tut16', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">For the body of our doll, let&rsquo;s keep a triangle. so to draw a triangle we are running our for loop for 3 times, and giving the turn degrees as 120</span></p>`, `import turtle

def draw_body(doll):
    for i in range(3):`, ''),
            make_pred_guide('tut17', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We have to create a turtle object t, let&rsquo;s call our draw_body function and pass this object inside</span></p>`, `import turtle

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)

t = turtle.Turtle()
t.color("red")

draw_body`, ''),
        ]
    },
    {
        code: `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.forward(60)
    doll.right(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.left(60)
    doll.forward(90)

t = turtle.Turtle()
t.color("red")

draw_arm(t)`,

        guide: [
            make_pred_guide('tut18', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We have created functions for our head and body, its time to create a function for arms for our doll</span></p>`, `import turtle

def draw_arm(doll)`, ''),

            make_pred_guide('tut19', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We will be at the top of the triangle after drawing the body. so we have to continue from there.&nbsp;</span></p>
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">so let&rsquo;s move a little forward along our triangle and turn left 60 degrees so that we are ready for our arm</span></p>`, `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)`, ''),

            make_pred_guide('tut20', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">As for our arm, we are moving forward by 60 and coming back again by 60, thereby drawing the right hand</span></p>`, `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)`, ''),

            make_pred_guide('tut21', `
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now let&rsquo;s go back to the top of the triangle again, for that turn right by 60 and go backwards.</span></p>
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">then turn right to get ready for the next arm</span></p>`, `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)`, ''),
            make_pred_guide('tut22', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Repeat the same steps we did for the right hand here, to draw the left hand</span></p>`, `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.`, ''),
            make_pred_guide('tut23', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Call the function to draw the arm and pass our turtle object</span></p>`, `import turtle

def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.forward(60)
    doll.right(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.left(60)
    doll.forward(90)

t = turtle.Turtle()
t.color("red")

draw_arm(t)`, ''),
        ]
    },
    {
        code: `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)
    
    doll.forward(120)

t = turtle.Turtle()
t.color("red")

draw_legs(t)`,

        guide: [
            make_pred_guide('tut24', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Finally let&rsquo;s draw legs for our doll, create a function called draw_legs</span></p>`, `import turtle

def draw_legs(doll):`, ''),

            make_pred_guide('tut25', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are starting from the bottom of our triangle now, so we are moving a little forward and turning right before we start drawing the legs</span></p>`, `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)`, ''),

            make_pred_guide('tut26', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">We are ready to draw our leg, so we are making our turtle turn 120 and go forward and turn around by 180 and come back</span></p>`, `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)`, ''),

            make_pred_guide('tut27', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now we are turning right and moving a little space to start drawing the other leg</span></p>`, `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)`, ''),

            make_pred_guide('tut28', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Finally, to draw the other leg, we are moving our turtle forward</span></p>`, `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)
    
    doll.forward(120)`, ''),

            make_pred_guide('tut29', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now call the function and pass the turtle object inside</span></p>`, `import turtle

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)
    
    doll.forward(120)

t = turtle.Turtle()
t.color("red")

draw_legs(t)`, ''),
        ]
    },
    {
        code: `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)
        
def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.forward(60)
    doll.right(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.left(60)
    doll.forward(90)

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)
    
    doll.forward(120)

t = turtle.Turtle()
t.color("red")

draw_head(t)
draw_body(t)
draw_arm(t)
draw_legs(t)`,

        guide: [
            make_pred_guide('tut30', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Let&rsquo;s combine everything from the last 4 lessons and create a complete doll combining them all</span></p>`, `import turtle`, ''),
            make_pred_guide('tut31', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">First, create the function for the doll head</span></p>`, `import turtle

def draw_head`, ''),

            make_pred_guide('tut32', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Next, create the function for the doll body</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)

def draw_body`, ''),

            make_pred_guide('tut33', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now, the function to draw arms</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)
        
def draw_arm`, ''),
            make_pred_guide('tut34', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">And finally to draw legs</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)
        
def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.forward(60)
    doll.right(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.left(60)
    doll.forward(90)

def draw_legs`, ''),

            make_pred_guide('tut35', `
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">Now call all the functions in order.. head, body, arm, legs</span></p>
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="font-size:24px;color:#BFBFBF;background:black;">and our doll will be complete</span></p>`, `import turtle

def draw_head(doll):
    doll.circle(60)
    doll.right(60)

def draw_body(doll):
    for i in range(3):
        doll.forward(150)
        doll.right(120)
        
def draw_arm(doll):
    doll.forward(60)
    doll.left(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.right(60)
    doll.backward(60)
 
    doll.right(60)
 
    doll.forward(60)
    doll.right(60)
    
    doll.forward(60)
    doll.backward(60)
    
    doll.left(60)
    doll.forward(90)

def draw_legs(doll):
    doll.left(120)
    doll.forward(40)
    
    doll.right(120)
    doll.forward(120)
    doll.right(180)
    doll.forward(120)
    
    doll.right(60)
    doll.forward(70)
    doll.right(60)
    
    doll.forward(120)

t = turtle.Turtle()
t.color("red")

draw_head`, ''),
        ]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()

col = random.choice(['red','blue','green'])

player = turtle.Turtle()
player.color(col)

for i in range(4):
    player.forward(100)
    player.left(90)`,

        guide: [make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&apos;s learn about random library</span></p>
`, `import turtle
import random`, ''),
        make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The random library in python is mostly used to generate a random number or choose something at random</span></p>
`, `import turtle
import random

wn = turtle.Screen()`, ''),
        make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">random.choice() is a function that picks a value from the given list randomly. Here, It will pick one randomly from three colours in the list.</span></p>
`, `import turtle
import random

wn = turtle.Screen()

col = random.choice`, ''),
        make_pred_guide('tut5',
            `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Store this randomly picked colour in a variable col</span></p>
    `,
            `import turtle
import random

wn = turtle.Screen()

col = random.choice(['red','blue','green'])

player = turtle.Turtle()
player.color(col)`, ''),
        make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now draw a square, the colour of the pen will be a randomly chosen colour from the list</span></p>
`,
            `import turtle
import random

wn = turtle.Screen()

col = random.choice(['red','blue','green'])

player = turtle.Turtle()
player.color(col)

for i in range(4):`, ''),
        make_pred_guide('tut7', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Try running the code two or three more times, and watch how it picks random colours each time</span></p>
`, `import turtle
import random

wn = turtle.Screen()

col = random.choice(['red','blue','green'])

player = turtle.Turtle()
player.color(col)

for i in range(4):
    player.forward(100)
    player.left(90)`, '')]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)

    player.forward(100)
    player.left(90)`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In the last lesson we drew a square with a random colour, now Let&rsquo;s draw a square with random coloured edges</span></p>
`, `import turtle
import random`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Since the for loop draws one side of the square, its best to choose the colour randomly inside the loop</span></p>
`, `import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">This will choose 4 colours randomly for 4 sides of the square</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])`, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now set this colour as the turtle colour, so that the turtle changes colour whenever a random colour is picked</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s draw the multicoloured square now</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)

    player.forward(100)
    player.left(90)`, ''),
        ]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)

    player.forward(100)
    player.left(90)

    choice = random.randint(1,10)
    player.write(choice)`,

        guide: [
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In This Lesson, we will make our python choose a number at random within a given range</span></p>
`, `import turtle
import random`, ''),
            make_pred_guide('tut8', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">We will use the random library to pick colours at random, just like in the previous exercise</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()
choice = random.randint(1,10)

for i in range(4):
	col = random.choice(['red','blue','green'])
	player.color(col)`, ''),
            make_pred_guide('tut9', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">random.randint() function selects a value randomly from a given range</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)

    player.forward(100)
    player.left(90)

    choice = random.randint(1,10)`, ''),
            make_pred_guide('tut10', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now we are writing the random value after each side of the square using the write function</span></p>
`, `import turtle
import random

wn = turtle.Screen()

player = turtle.Turtle()

for i in range(4):
    col = random.choice(['red','blue','green'])
    player.color(col)

    player.forward(100)
    player.left(90)

    choice = random.randint(1,10)
    player.write(choice)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In the next set of lessons, we will be working on creating a simple game using everything we have learned so far</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s begin by creating a screen, and setting the screen colour like green for our game</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)`,

        guide: [
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">in this lesson, we will create a new turtle object to draw an outline for our game</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create a pen as a turtle object, and set &nbsp;the colour to while and speed to 0</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-140,140)`,

        guide: [
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s build a turtle race game. Draw a race track, to begin with</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s start drawing the race track at the top left of the screen, therefore moving the pen to (-140,140).. the x-axis being -140 and the y-axis being 140</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()`, ''),
            make_pred_guide('tut7', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now our pen is all set at the position to start drawing the race track</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-140,140)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)`,

        guide: [
            make_pred_guide('tut9', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s start drawing our race track in this lesson</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut10', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">We are making our pen write the number 0, and then turn right, and move forward by 10 pixels from there</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)

pen.pendown()
pen.forward(200)
pen.penup()
pen.backward(-210)`,

        guide: [
            make_pred_guide('tut11', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s continue drawing the race track in this lesson</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut12', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Put the pen down and move forward by 200 pixels, this will be the start of our race track</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)

pen.pendown()
pen.forward(200)`, ''),
            make_pred_guide('tut13', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now use penup again, and go back by 210 pixels, going back to the point where we start</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)

pen.pendown()
pen.forward(200)
pen.penup()
pen.backward(-210)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)

pen.pendown()
pen.forward(200)
pen.penup()
pen.backward(-210)

pen.left(90)
pen.forward(20)`,

        guide: [
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s continue building our race track for our game</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let it turn left and move forward by 20 pixels so that these steps can be repeated again</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

pen.write(0)
pen.right(90)
pen.forward(10)

pen.pendown()
pen.forward(200)
pen.penup()
pen.backward(-210)

pen.`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)`,

        guide: [
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s repeat what we did for the last three lessons 15 times, to get a race track</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s use a for loop and run the steps from the last three lessons, which will create a race track. The number of the pen that writes will be denoted by i, starting from 0, 1, 2... till 14.&nbsp;</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):`, ''),
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Try running the script now, and see the line repeating 15 times, thereby creating a race track</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')`,

        guide: [
            make_pred_guide('tut7', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The race track has been created successfully. Setting that aside, for now, Its time to begin creating our players</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut8', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s call the first player as p1, and create a turtle object for it</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()`, ''),
            make_pred_guide('tut9', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now, set the colour of the player as red, the shape as a turtle and run and see the changes</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()`,

        guide: [
            make_pred_guide('tut10', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s set the position for our player in this lesson</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut11', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">We need to set the player near the race track. In the previous lesson, the race track started at (-100,100), with x as -100 and y as 100.</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()`, ''),
            make_pred_guide('tut12', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The race track started at (-100,100), with x as -100 and y as 100. Now, set the position of p1&rsquo;s x as -120 and y as 80 (a little left and below the start line)</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)`, ''),
        ]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p2 = turtle.Turtle()
p2.color('blue')
p2.shape('turtle')
p2.penup()
p2.goto(-120,50)
p2.pendown()`,

        guide: [
            make_pred_guide('tut13', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">There are going to be 5 players in this game. Now that we have created the first player, Let&rsquo;s go ahead and create our next player with the same logic</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut14', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create a player p2, setting the colour to blue and shape as turtle</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p2`, ''),
            make_pred_guide('tut15', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Keeping the x as the same as player 1, which is -120. Let&rsquo;s just change the y to 50 since the y of the first player was 80. Therefore there will be a difference of 30 pixels between each player</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p2 = turtle.Turtle()
p2.color('blue')
p2.shape('turtle')
p2.penup()
p2.goto(-120,50)`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')
p3.penup()
p3.goto(-120,20)
p3.pendown()`,

        guide: [
            make_pred_guide('tut16', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now that we have created our second player, Let&rsquo;s go ahead and create our next player with the same logic</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut17', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create another player, and set its colour to black and shape to the turtle</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')`, ''),
            make_pred_guide('tut18', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Since the difference between each player is 30 pixels along the y axis, the x-axis will remain at -120, the y will be at 20</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')
p3.penup()
p3.goto(-120,20)`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')
p4.penup()
p4.goto(-120,-10)
p4.pendown()`,

        guide: [
            make_pred_guide('tut19', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now that we have created our third player, Let&rsquo;s go ahead and create the next player with the same logic</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut20', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create p4, set its colour to yellow and shape to a turtle</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')`, ''),
            make_pred_guide('tut21', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s set the position of p4 x to -120 as before, and reduce y by 30 pixels, therefore, setting it at -10</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')
p4.penup()
p4.goto(-120,-10)`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')
p5.penup()
p5.goto(-120,-40)
p5.pendown()`,

        guide: [make_pred_guide('tut19', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now that we have created our fourth player, Let&rsquo;s go ahead and create our next player with the same logic</span></p>
`, `import turtle`, ''),
        make_pred_guide('tut20', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create p5, set its colour to white and shape to a turtle</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')`, ''),
        make_pred_guide('tut21', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s set the position of p5 x to -120 like before, and reduce y by 30 pixels, therefore, setting it at -40</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("green")

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')
p5.penup()
p5.goto(-120,-40)`, ''),]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

p1.forward(random.randint(1,5))`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s use the random library in this lesson, to move the players randomly</span></p>
`, `import turtle
import random`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create the player 1 just like we did a few lessons before</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

p1`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">We are using the random.randint(1,5) to choose a number between 1 and 5 and move our player by that many pixels. You might notice the turtle barely moving since we are only using this once</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

p1.forward(random.randint(1,5))`, ''),]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

for i in range(100):
    p1.forward(random.randint(1,5))`,

        guide: [
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In the last lesson, we used the randint function to move the turtle once randomly. This time, Let&rsquo;s do it multiple times</span></p>
`, `import turtle
import random`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Last time we made the turtle move forward by choosing a value randomly value between 1 and 5 pixels. Now Let&rsquo;s loop it a 100 times</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

for i in range(100):`, ''),]
    },
    {
        code: `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

p2 = turtle.Turtle()
p2.color('blue')
p2.shape('turtle')
p2.penup()
p2.goto(-120,50)
p2.pendown()

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')
p3.penup()
p3.goto(-120,20)
p3.pendown()

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')
p4.penup()
p4.goto(-120,-10)
p4.pendown()

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')
p5.penup()
p5.goto(-120,-40)
p5.pendown()

for i in range(100):
    p1.forward(random.randint(1,5))
    p2.forward(random.randint(1,5))
    p3.forward(random.randint(1,5))
    p4.forward(random.randint(1,5))
    p5.forward(random.randint(1,5))`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Our Game is almost done, let&apos;s put all our code from the previous lessons together to complete our game</span></p>
`, `import turtle
import random`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The First task was to create a window and create a turtle object and set its position to start drawing our race track.</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Next, we drew a good race track for our turtles to race</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):`, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Then we created 5 players, setting a different colour and different position for all 5 of them&nbsp;</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)

p1`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Finally, we used a random library to move a player randomly repeating it 100 times. Now Let&rsquo;s apply the same loop for all the 5 players, making them move randomly</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

p2 = turtle.Turtle()
p2.color('blue')
p2.shape('turtle')
p2.penup()
p2.goto(-120,50)
p2.pendown()

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')
p3.penup()
p3.goto(-120,20)
p3.pendown()

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')
p4.penup()
p4.goto(-120,-10)
p4.pendown()

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')
p5.penup()
p5.goto(-120,-40)
p5.pendown()

for i in range(100):`, ''),
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Congratulations, You have completed coding your turtle race game. Since all the turtle moves randomly, every time a random turtle wins the race. You and your friends can choose a colour turtle for each of you, and see if the turtle you chose wins</span></p>
`, `import turtle
import random

wn = turtle.Screen()
wn.bgcolor("green")

pen = turtle.Turtle()
pen.color('white')
pen.speed(0)

pen.penup()
pen.goto(-100,100)

for i in range(15):
    pen.write(i)
    pen.right(90)
    pen.forward(10)

    pen.pendown()
    pen.forward(200)
    pen.penup()
    pen.backward(210)

    pen.left(90)
    pen.forward(20)

p1 = turtle.Turtle()
p1.color('red')
p1.shape('turtle')
p1.penup()
p1.goto(-120,80)
p1.pendown()

p2 = turtle.Turtle()
p2.color('blue')
p2.shape('turtle')
p2.penup()
p2.goto(-120,50)
p2.pendown()

p3 = turtle.Turtle()
p3.color('black')
p3.shape('turtle')
p3.penup()
p3.goto(-120,20)
p3.pendown()

p4 = turtle.Turtle()
p4.color('yellow')
p4.shape('turtle')
p4.penup()
p4.goto(-120,-10)
p4.pendown()

p5 = turtle.Turtle()
p5.color('white')
p5.shape('turtle')
p5.penup()
p5.goto(-120,-40)
p5.pendown()

for i in range(100):
    p1.forward(random.randint(1,5))
    p2.forward(random.randint(1,5))
    p3.forward(random.randint(1,5))
    p4.forward(random.randint(1,5))
    p5.forward(random.randint(1,5))`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In the next set of lessons, you will be learning to build a digital clock that shows time in real-time in the turtle.</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create a new turtle window and set the background colour as white&nbsp;</span></p>
`, `import turtle

wn`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()`,

        guide: [
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In this lesson, Let&rsquo;s create the turtle object that will display the clock</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create a new turtle object t1 to draw the clock, set the pen size to 3, colour to black, and lift the pen using penup()</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()`,

        guide: [
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In this lesson Let&rsquo;s create the turtle object that will display the clock</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create a new turtle object t1 to draw the clock, set the pen size to 3, colour to black, and lift the pen using penup()</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()`, ''),
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s set the initial position for our turtle object as -50 on the x-axis so that it slightly lays on the left of the screen, and the y axis remains 0</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
    t1.forward(250)
    t1.left(90)
    t1.forward(70)
    t1.left(90)

t1.hideturtle()`,

        guide: [
            make_pred_guide('tut7', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s draw the outline of the clock in this lesson</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut8', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Draw a rectangle box as an outline of the time display</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):`, ''),
            make_pred_guide('tut9', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Finally, hide the turtle so the box only remains on the screen</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
    t1.forward(250)
    t1.left(90)
    t1.forward(70)
    t1.left(90)

t1.`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)`,

        guide: [
            make_pred_guide('tut10', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create another turtle object to display the time</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut11', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">We are setting the position of the object to be 0 on the x-axis and 10 on the y-axis.</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
t.write(hr,font =("Arial Narrow", 35, "bold"))`,

        guide: [
            make_pred_guide('tut16', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s learn how to control the size and style of the font in the write function</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut17', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In the write function, you can change the font settings. Arial Narrow - here we are setting the font family to Arial narrow35 - Here we are setting the font size to 35bold - here we are setting the font style to bold</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
t.write`, ''),]
    },
    {
        code: `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
mn = 22
sec = 15

t.write(str(hr)+str(mn)+str(sec),font =("Arial Narrow", 35, "bold"))`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s set the minute and second variables and display them too</span></p>
`, `import turtle`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Create variables for a minute and second and store demo values inside them.</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
mn = 22
sec = 15`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now we are converting all of the variables to a string using the str() function and then putting them together using the + operator</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
mn = 22
sec = 15

t.write`, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The str(hr) function converts the value inside hr into a string, we are doing the same for minute and hour</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
mn = 22
sec = 15

t.write(str(hr)`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">The str(hr)+str(mn)+str(sec) statement attaches the values entered inside hr, mn and sec variables and displays them in the screenfor example : if hr = 20, mn = 10, sec = 32. the answer will be 20+10+32 = 201032</span></p>
`, `import turtle

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = 12
mn = 22
sec = 15

t.write(str(hr)+str(mn)+str(sec)`, ''),]
    },
    {
        code: `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

t.write(
str(hr).zfill(2)+":"
+str(mn).zfill(2)+":"
+str(sec).zfill(2),
font =("Arial Narrow", 35, "bold"))`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">To get the current hour, minute and second Let&rsquo;s use the DateTime library</span></p>
`, `import turtle
import datetime as dt`, ''),
            make_pred_guide('tut2', `
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">To get the current hour, use dt.datetime.now().hourfor current minute,&nbsp;</span></p>
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">use dt.datetime.now().minute&nbsp;</span></p>
<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">and for current second, use dt.datetime.now().second</span></p>`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour`, ''),]
    },
    {
        code: `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()
    t.write(str(hr).zfill(2)+":"
    +str(min).zfill(2)+":"
    +str(sec).zfill(2),
    font =("Arial Narrow", 35, "bold"))

    sec = dt.datetime.now().second
    min = dt.datetime.now().minute
    hr = dt.datetime.now().hour`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">In this lesson, you will learn to keep updating the time given on the screen</span></p>
`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s create a while loop, where we keep updating the time. Use the clear function to clear the screen so that the time does not get over-written on top of the other</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now call the hour, minute and second from the DateTime function so that it will run every time the loop is running, thereby updating it continuously</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()
    t.write(str(hr).zfill(2)+":"
    +str(min).zfill(2)+":"
    +str(sec).zfill(2),
    font =("Arial Narrow", 35, "bold"))

    sec`, ''),]
    },
    {
        code: `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
	t1.forward(250)
	t1.left(90)
	t1.forward(70)
	t1.left(90)

t1.hideturtle()

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()
    t.write(str(hr).zfill(2)+":"
    +str(min).zfill(2)+":"
    +str(sec).zfill(2),
    font =("Arial Narrow", 35, "bold"))

    sec = dt.datetime.now().second
    min = dt.datetime.now().minute
    hr = dt.datetime.now().hour`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Let&rsquo;s put together all the code we have done in the previous lessons, and complete our clock</span></p>
`, `import turtle
import datetime as dt`, ''),
            make_pred_guide('tut2', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">First, we created a turtle object to draw the boundary of our clock</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1`, ''),
            make_pred_guide('tut3', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Then we fixed an initial point for our turtle object and drew the boundary</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()`, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Then we created a turtle object to display our clock and called the hour, minute and second using the DateTime function</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
	t1.forward(250)
	t1.left(90)
	t1.forward(70)
	t1.left(90)

t1.hideturtle()

t = turtle.Turtle()
t.goto(0,10)`, ''),
            make_pred_guide('tut5', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Finally, we displayed the time &nbsp;and keep on updating it by calling the DateTime function again in the loop</span></p>
`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
	t1.forward(250)
	t1.left(90)
	t1.forward(70)
	t1.left(90)

t1.hideturtle()

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()
    t.write(str(hr).zfill(2)+":"
    +str(min).zfill(2)+":"
    +str(sec).zfill(2),
    font =("Arial Narrow", 35, "bold"))`, ''),
            make_pred_guide('tut6', `<p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0), font-size: 22px;">Now your digital clock is ready to be displayed and run forever</span></p>`, `import turtle
import datetime as dt

wn = turtle.Screen()
wn.bgcolor("white")

t1 = turtle.Turtle()
t1.pensize(3)
t1.color('black')
t1.penup()

t1.goto(-50, 0)
t1.pendown()

for i in range(2):
	t1.forward(250)
	t1.left(90)
	t1.forward(70)
	t1.left(90)

t1.hideturtle()

t = turtle.Turtle()
t.goto(0,10)

hr = dt.datetime.now().hour
mn = dt.datetime.now().minute
sec = dt.datetime.now().second

while True:
    t.hideturtle()
    t.clear()
    t.write(str(hr).zfill(2)+":"
    +str(min).zfill(2)+":"
    +str(sec).zfill(2),
    font =("Arial Narrow", 35, "bold"))

    sec = dt.datetime.now().second
    min = dt.datetime.now().minute
    hr = dt.datetime.now().hour`, ''),]
    },
    {
        code: `import turtle

t = turtle.Turtle()`,

        guide: [
            make_pred_guide('tut1', `<p style='margin:0cm;font-size:20px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0),">The <strong>Import</strong> Statement can be used to import libraries from python.</span></p>
<p style='margin:0cm;font-size:20px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0),">Python <strong>library</strong> is a collection of functions and methods that allows you to perform many actions without writing your code.</span></p>`,
                'import', ''),

            make_pred_guide('tut2', `<p style='margin:0cm;font-size:20px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0),">Turtle Library: the turtle is a pre-installed Python library that enables users to create pictures and shapes by providing them with a virtual canvas. The onscreen pen that you use for drawing is called the turtle and this is what gives the library its name.</span></p>`, 'import turtle', ''),

            make_pred_guide('tut3', `<p style='margin:0cm;font-size:20px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0),">Turtle Objects: To Start Using Turtle to draw shapes, patterns and create games, first you have to create a turtle object. To Create a turtle object you have to type turtle.Turtle().</span></p>`, `import turtle

t = `, ''),
            make_pred_guide('tut4', `<p style='margin:0cm;font-size:20px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239), background-color: rgb(0, 0, 0),">The Turtle object is used to draw stuff. It holds some data (eg its current position and colour), and it also has some functions attached to it (functions attached to objects are often called methods), you can call those functions to make the Turtle object do stuff, like move or draw.</span></p>`, `import turtle

t = turtle.Turtle()`, ''),]
    },
]
function make_pred_guide() {
    const arr = ["id", "img", "code", "audio"]
    const newArr = {} //({ [arg]: arguments[idx] })
    //arr.forEach((arg, idx) => idx === 3 ? newArr[arg] = arguments[idx] : newArr[arg] = arguments[idx].replace(/\n\s/g, '\n'))
    arr.forEach((arg, idx) => newArr[arg] = arguments[idx])
    return newArr
}
const arr = []

ind = 31;
mkdirFolder.forEach(dir => arr.push({ folder: ind++, ...dir }))

module.exports = arr;