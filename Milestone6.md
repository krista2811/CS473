### CS473 DP6
##### Team Random: 20150007 Jaeryoung Ka, 20150148 Sangho Kim, 20150691 Yujin Chung

### URL of the posted video
https://www.youtube.com/watch?v=YupE2DqNUMM

### Quality Arguments

When it comes to designing a Q&A service, it is important to make an appropriate system to help people overcome the hurdle of decay in providing an answer to a question. The solution to a question and motive to help people usually flashes into the mind and decays quickly. Since these things often run out before people finish writing, the approach to let people write down the answer is in danger of sacrificing many potential chances to harvest the goodwill of crowds. This is even worsened in a mobile environment.

#### Step 1
![image5.gif](https://github.com/krista2811/CS473/raw/master/imageDP6/image5.gif)
Our attempt to deal with this is to let people express their opinion on recommending courses by just a drag-and-drop. It is easy to use because both desktop and mobile-savvy users are already accustomed to it. It means that it has an advantage in the learnability side, too. This has decent accessibility because one can take in both desktop and mobile environments.

#### Step 2
![image4.gif](https://github.com/krista2811/CS473/raw/master/imageDP6/image4.gif)

After finishing recommending courses, casting upvotes and downvotes are made in just two clicks: clicking the course that one to cast a vote, and then click upvote or downvote. Accepting recommended courses can be done with clicks, too. We argue that its usability, accessibility, and learnability are decent because clicks have similar advantages to drag-and-drops we mentioned earlier.

#### Step 3
![image1.png](https://github.com/krista2811/CS473/raw/master/imageDP6/image1.png)

We realized that some part of useful information to make better coursework lies in the area of hands-on experience sharing, not in the area of many crowds. While our approach could harvest relatively many numbers of people’s knowledge, it had a limitation that there was no opportunity to ask and share a hands-on experience. To improve social interactions to satisfy both, we implemented a comment system.

To use it, one needs to take the traditional approach: write down what one wants to say using a keyboard (either physical or on-screen). You may wonder why we took this approach while denoting the limitations of it. We placed the comment system at the last step to deal with it.

We thought that (1) users who completed some steps 1 and 2 would be motivated to provide more help because they already overcame the hurdle to start helping that person, (2) the decay of motivation would be paused because a drag-and-drop and clicks are not that conscience-demanding, and (3) as writing is placed in the last task, people would more likely to do some bothersome work (writing something with keyboards.)

In other words, we were able to support meaningful interactions from steps 1 and 2 as well as making people’s participation in steps 1 and 2 as a fuel to do some burdensome writing in step 3. We argue that it is a decent design because if people are just asked to perform step 3, much fewer people would have volunteered to do it - resulting in fewer people, shallower depth of interactions.

### Evaluation

We advertised DraCS on Campuswire and personal connections. We gathered 56 users in total, 12 new questions, and 8 new signups as of Dec 23rd.
We made five hypotheses on how users would act and tried to identify them. Although we did not get enough data to identify all five hypotheses in a statistically meaningful way, we at least found some tendencies.

The followings are our five hypotheses and our corresponding findings.
H1. The fewer semesters one has taken, the more searches are made.
> We did not find any meaningful correlation between the two.

H2. The more semesters one has taken, the more comments are made.
> A slightly more comments were made, but we could not see any statistical meaning here.


H3. Juniors would make more questions and Seniors would make more answers, comparatively.
![image2.png](https://github.com/krista2811/CS473/raw/master/imageDP6/image2.png)
> Users with low semesters taken got a high number of recommendations. Whereas, users with high semesters taken got a low number of recommendations. 

H4. The similarity between interests submitted when sign-up and interests submitted as search queries would not be high.
> We had seven labels of interest, and we may say the result is yes. However, we need more queries to judge it with confidence.

H5. The similarity between majors submitted when sign-up and majors submitted as search queries would be high.
> It was high, as one can normally expect.

We found two more interesting patterns and analyses result from the data and statistics.
![image2.png](https://github.com/krista2811/CS473/raw/master/imageDP6/image6.png)

This chart shows that students received appropriate recommendations related to their own semesters taken. We identified that the reason why people with 10+ semester got 200-level recommendations is that they just wanted to take CS courses without pursuing any degree. From this, we can find that most of the users behaved well in interactions over DraCS.

![image2.png](https://github.com/krista2811/CS473/raw/master/imageDP6/image3.png)

We also analyzed individual recommended course data over the number of semesters users have taken. The chart above shows an example: we analyzed all recommended courses for those who have taken two semesters. As you can see, it is very reasonable that new CS students take such courses in the 3rd semester (first semester as a CS major.) We found that there were overall reasonable recommendations in these with other numbers of semesters taken.


### Discussion 

It is the most valuable lesson we learned from the project that the key to making a great computer-supported system is understanding people. In the past, we thought that if we made a technically great service, then we would outplay all opponents and become the dominant and most beloved service. However, what we learned from this experience is that even in the context of full of intangible online interactions happening in computing devices, the essence of what we were trying to do was helping people achieve (or get) what they want.

We designed a reputation system to incentivize users. We gave +1 to +4 reputation points to those who did a desirable job (e.g., recommending a course). However, theories were easy and reality was not: we don’t think that our incentive-design sufficiently motivated people. One feedback we got was there were no gamification components, such as a ranking and we think it’s a legit reason why it didn’t work satisfactorily. We would have shown a ranking (e.g, “You are the Computer Science angel with Rank #4”) on the toolbar, shown a small badge so that they can express themselves when writing comments, and provided a total “Hall of Fame” ranking page.

One more lesson is that we have more room to provide in-depth hands-on social interactions. Although DraCS focuses more on providing the crowds’ recommendations rather than hands-on experiences of small people, it alone didn’t work well to satisfy people’s needs. We recently realized that it would be great to provide a bridge to connect 2+ people who met in the comment section.
Let’s imagine that A asked a question, B contributed to coursework and write comments, and A really liked it. A may want to ask more questions to B, but people inherently tend to hesitate - and when a few days go by, A and B will forget that “possibly become precious” interaction. We could have made up the insufficiency of hands-on experience sharing by providing a button of “making a 1v1 conversation” and/or “request a contact sharing” so that these precious relationships can last longer.

The last lesson is that we could do more sophisticated quality control. There was a question on SE courses. However, the CS350 (Intro to SE) got 3 consecutive downvotes. One cast a downvote first, then two more people cast downvote.
It was similar to the broken window theory. We needed patrols, but introducing a reporting system to deal with such things does not scale. So, we would have modified the vote results algorithm so that people with a higher reputation can affect the result - heavily when the number of votes on the specific lecture is small and decays as the total number goes up. In other words, we could have put trusted people in charge of patrolling so that they can fix a broken window before it contaminates the others.


### Individual reflection - Yujin

What I did mainly on this project is FrontEnd implementation. I believe user’s experience is mainly based on the frontend, because it works like the foregate of our whole service. In this context, I put a lot of time on designing the whole project, from the low-fi to the final service. To enable the initial prototype design as much as possible, I chose the framework I could do best; Vue.js. Implementation itself was not that hard. Because the commands of fronten are totally handed I could build the part freely as designed, thanks to the team members. It was the first time dealing with the drag event, and I gained significant amount of skills of implementing an web service. Also, from aesthetic approach, it was fun to seek for reasons where to arrange the elements.


The hard part that was important is the design itself. Functional requirements are easy to resolve as implementation. The real harsh part is getting what user need. From the low-fi prototype feedbacks, I tried to enhance the appearance to lead the users what to do, not relying on manual tutorials. However, as the production came, I noticed that designing the user’s experience should be held no matter how much I have been thinking. Even if we have any fancy functions, that’s no use if the user don’t know how to use. Also, being a perfect service does not mean popular service. I could make functions our team suggested, but that didn’t mean the functions are needed by the users. It would be better if we focused more on the usability.


One thing that was regrettable was attracting the user part. We tried to advertise on class website, KAIST communities, and through our friends. It would be better if there are more effective approach.

I've seen an article before that a game called Pokemon Go made people run, which countless health apps couldn't do for decades. I think there will be some creative idea that we’ve never been thought to attract people, make people do something. To advertise more effectively, from the hi-fi prototype feedback, we seperated the advertisement into two steps(1: making the dummy questions and answer by seniors, 2: get questioner users), but that method is only for advertisement. It would have been better if we could think about the way to attract people a little longer, not restricting the method to ‘advertisement’ alone.


### Individual reflection - SangHo 


  How many functions we should implement is the hardest thing. At first, we thought we mainly implement 3 major tasks. But teammate suggested making reputation systems. I thought it is interesting but hard to implement in 10-days and minor tasks. Additionally, I had not experienced VueJS, I could not give many contributions to front-end which is labor-intensive part.  Both small or excessive tasks taken person is tough. So  I wanted to focus on major tasks. Through discussion, we postponed reputation system until we implemented other major tasks.

  Even though we have some problems with respect to implementation, we implemented more than what we thought at first. We implement many functions with 3 teammates such as 3 main tasks, chatting and reputation system. With excellent teammates we could implement many parts in short time.

 For a next team project, I need to prepare teammates. Although awkwardness can give strength like not disturbing concentration in meeting, to share ideas successfully, we need to break the awkwardness. But, it’s somewhat hard in this case. This awkwardness makes hesitation for suggesting opposite opinions. So, we need to break the ice or prepare already known teammates.


  I realized again the importance of user test. User test can give various aspects to our project. We are constrained in our view. So we don’t know what we don’t think. But user test can point out what we have not thought. Likewise in low-fi user test and high-fi user test,  we got many intuitions and improvements. We had thought our project were already enough, intuitive and gave many functions for users. But, user said they did not know how to interact with other users and how to use drag function.
However, even this strength of user test, we do not implement many user tests. If I do any project, from user test, gathering user’s opinions are essential. It’s like crowdsourcing. Many user tests can give many feedback.


### Individual reflection - Jaeryoung 

We initially are worried about what technical stacks we should choose to implement the service. This is because our previous experience of utilizing stacks (e.g., Server-side framework, Tool to collaborate with designers) did not converge. We did a lot of discussions to choose optimal stacks to satisfy technical needs while considering our realistic conditions. It worked well, and I think we three satisfactorily overcame the realistic barriers and had a great time together in implementing technical stuff and applying visual, UX designs to it.


I initially wanted to ship more complicated systems and features. For example, I planned a more complicated reputation system and a recommendation and search system combined with some machine learning techniques. However, it was only me who wanted such things. I tried to persuade many times because I thought that it would directly contribute to offering a better user experience - but finally, we agreed not to include such things. Looking backward from the end of the semester, what I needed was to understand people - not only users but also coworkers. I realized the strategy to try to let coworkers follow the most ideal (and demanding, when spoken differently) situation should be patched towards a more realistic, more human-friendly way. In other words, Rather than trying to pursue and elicit the best from the given coursework, I think I need to try a different approach: understand how willingly coworkers do that stuff, calculate how much resources would be available from the willingnesses, and then allocate resources or cut it down.


Through the team-based design project, I learned that understanding the target user is essential in making service. It sounds like a very trivial statement, but we are prone to think that if we make a service with deep technological depth, then everyone will love it. It turned out that everything we pondered on could be summed up as “understanding the human nature”. Other stuff, especially codes, are just a means to realize it.
For the web-based GUI, I learned that securing the great usability of both desktop and mobile users is important. I realized from user responses of our prototype that if people have any trouble using the UI, the service fails by default because people just close the app and never visit again. I’ve also inspected that people are very sensitive to just a subtle improvement in usability problems.


