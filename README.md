# treehouse - allow kampong spirit to take root 
### building a community that will never leaf anybody behind

In the heart of Singapore's history lies a treasured concept - the kampong spirit. Imagine a time when tight-knit communities flourished, fostering unity and genuine connections within their "kampungs," or villages. But in today's fast-paced, modern world, this cherished essence faces a daunting challenge - urbanization, technology, and individualism are eroding the very fabric of community bonds.

Can we reclaim the kampong spirit and revive the sense of togetherness that once defined Singapore's cultural heritage?

## ✌🏼 The Solution.

[treehouse](https://dev.d1ykjigyeh5h3.amplifyapp.com/) offers a practical solution to address this challenge. Users can easily post and discover activities, encouraging communal interaction. By facilitating photo exchanges post-event, treehouse fosters a sense of togetherness.

Technology does not have to be the downfall of the kampong spirit. Instead, it can play a vital role in reviving the community.

### 🏃‍♂️ The Motivation

I longed for simpler times when I could easily meet friends at the [void deck](https://en.wikipedia.org/wiki/Void_deck) for a simple game of soccer. I wanted an easy way to coordinate events with others living in my apartment to ensure that busy schedules would never be the reason we missed a game ever again.

When I discovered the Hashnode AWS hackathon, I saw the perfect opportunity to bring my vision to life. (While creating my first-ever full-stack app!) Simultaneously, I wanted to gain more experience with [Amazon Web Service](https://aws.amazon.com) - the most popular cloud service worldwide.

### 🏡 About treehouse

**treehouse:** [https://dev.d1ykjigyeh5h3.amplifyapp.com/](https://dev.d1ykjigyeh5h3.amplifyapp.com/)  
**Github:** [https://github.com/duckyfuz/treehouse](https://github.com/duckyfuz/treehouse)  
**Figma**: [Link](https://www.figma.com/file/pByUaxkJpRDbwUOvTLBzzy/treehouseAmplifyAWS?type=design&node-id=861%3A3635&mode=design&t=4O4AVPnPuD4HL7m1-1) (Visit `MyComponents` page)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690284459412/6f0dae94-eb8d-4897-8b29-dc779ca688af.png align="center")

<div data-node-type="callout">
<div data-node-type="callout-emoji">🤔</div>
<div data-node-type="callout-text">Who created that oil painting on the right? Could it be... <a target="_blank" rel="noopener noreferrer nofollow" href="https://gencraft.com/generate" style="pointer-events: none">gencraft</a>?</div>
</div>

```markdown
technologies used: 
React (CRA) | JavaScript | Amplify Hosting
Amplify Authentication (Cognito) | AWS AppSync API (DataStore) 
Amplify Studio & UI Builder | Amplify Analytics
Amplify In-App Messaging | Amplify Storage (S3)
```

| Present Features. | Future Features. |
| --- | --- |
| Create a personal account | Display personal statistics |
| Host or join an event | Share events on social media |
| Delete self-hosted event | More personalisation in UI |
| Share photos (archived events) | In-app chat (with other participants) |
|  | Authentication with [Singpass](https://api.singpass.gov.sg/library/verify/developers/overview) |

**Trial Accounts:**  
testuser | Password (Blk 111 & 112)  
testuser2 | Password2 (Blk 111, 222 & 333)  
testuser3 | Password3 (Blk 112 & 223)

<div data-node-type="callout">
<div data-node-type="callout-emoji">😗</div>
<div data-node-type="callout-text">Feel free to use the trial accounts, but you can always create a new account for yourself! Experience smooth authentication with AWS Amplify. 😁</div>
</div>

## 🗺️ The Journey.

The initial plan was an app full of bells and whistles - imagine an AI that recommends activities in your community according to your unique interests... but that's a bit too much for a 19-year-old prospective software developer dipping his toes into the world of full-stack development. I cut down the scope of work until I arrived at an MUP that I could build in a month.

### 📀 Data Models

After many iterations, I settled on these 4 models.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690286602608/f4ba9e45-7425-4f36-a57b-334170714d1b.png align="center")

**NatActivity** is for nationwide activities added by administrators - think national holidays, community engagements, etc. Not much information is needed, just the name, date and location.

**Residence** is essentially a list of apartments (or groups of people). It’s an enum used in **UserDetails** to ensure that users are only shown events in their vicinity.

**UserDetails** is exactly what its name suggests. It stores information about each user such as their nicknames, profile pictures, and activities they took part in.

Finally, **ActivityItem** takes care of the attributes of each event - names, dates, participants, and most importantly, location. It also includes an array to store images! (or rather, the titles of the images on S3)

### 🧑🏼‍🦲 Amplify Authentication

Security is always important, especially when dealing with sensitive information such as user location. With AWS Amplify Authentication and AWS Cognito, implementing authentication in a new React app could not be easier. This was essentially all I had to add to my index.js file:

```javascript
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "@aws-amplify/ui-react/styles.css";

import config from "./aws-exports";
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AmplifyProvider>
    <StrictMode>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </StrictMode>
  </AmplifyProvider>
);
```

That's it! What used to take hours to create could now be done in minutes with the help of AWS Amplify. I even managed to [add OAuth](https://docs.amplify.aws/lib/auth/social/q/platform/js/) for users to create an account with Google without any prior knowledge of authorisation frameworks!

I opted to make a personalised login page with the `<Authenticator />` component - this way, I would have space to spruce up the login page in the future. ✨Fancy.✨

```javascript
const services = {
    async handleConfirmSignUp({ username, code }) {
      await Auth.confirmSignUp(username, code);
      from.current = "/onboarding";
    },
  };

<Authenticator services={services} />
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690370805736/722ee09a-b0e9-40b9-8476-ac2d8b00286c.png align="center")

### 🤖 Amplify UI Library

Next, I had to decide on the UI of treehouse. I wanted to create differentiated cards for each type of activity - national, future and archived.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690371277121/387250ca-b257-4d34-a00a-8f0066e5759b.png align="center")

[AWS Amplify's UI Builder](https://help.figma.com/hc/en-us/articles/6376798776343-AWS-Amplify-Studio-and-Figma) gives you the ability to create front-end components from Figma, and that was exactly what I did. Using Amplify Studio, I managed to create a [collection](https://docs.amplify.aws/console/tutorial/collections/) that was sorted and paginated. All without writing a single line of code!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690373704278/7ba2c2e6-f8a5-4d2a-b237-514db109074d.png align="center")

However, I was never able to figure out how to set dynamic component properties on Amplify Studio. After diving into the [documentation](https://docs.amplify.aws/console/), I learnt how to "[extend-via-code](https://docs.amplify.aws/console/uibuilder/override/#extend-generated-collections-via-overrideitems-prop)" to dynamically disable signup buttons for certain activities.

```javascript
<FutureActivityModal
  overrides={{
    Button39831748: {
      isDisabled:
        attendContact[0] || attendContact[1] ? true : false,
    },
    Button39831749: {
      isDisabled: attendContact[1] ? true : false,
    },
  }}
/>
```

For me, the most useful feature of the UI Builder was undoubtedly the automatically generated forms. Since my app leveraged on Amplify DataStore, I was able to seamlessly map my form to an existing data model - all without having to deal with pesky state management or validation logic. I didn't need a single line of code to write input data to Amazon DynamoDB!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690374750729/16fc4ca5-0d13-4365-bfa4-036cddc91d92.png align="center")

While I certainly faced some difficulties with complicated components, I must admit that the UI Builder is certainly a godsend when creating static components. I created most of the homepage with only components created from Figma!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690374373223/d0931206-769c-48c4-a978-1a181ba167ee.png align="center")

```javascript
<Flex>
  <HomePageIntro
    image={image}
    getStartedHandler={() => {
      navigate("/login");
    }}
  />
  <HomePageFeatures />
  <HomePageFinisher />
  <HomePageFooter />
</Flex>
```

### 🗄️ Amplify DataStore

I initially planned to use AWS AppSync GraphQL API. However, after realising the [benefits of Amplify DataStore](https://aws.amazon.com/amplify/datastore/) (and mostly because I wanted to map forms to my data models), I quickly made the switch to Amplify DataStore. The switch was extremely easy - the changes required were minimal as the code for querying and writing data was quite similar.

<div data-node-type="callout">
<div data-node-type="callout-emoji">👉</div>
<div data-node-type="callout-text">Amplify DataStore utilises the GraphQL query language as well!</div>
</div>

What I found most useful was the ability to [observe query results in real-time](https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/#observe-model-mutations-in-real-time). I created my own `useUser` Hook to easily get real-time updates for user properties within all of my routes.

```javascript
export const useUserObserver = () => {
  const [userDets, setUserDets] = useState(null);
  const { user, authStatus } = useAuthenticator((context) => [context.user]);

  const observeUser = () => {
    return DataStore.observeQuery(UserDetails, (c) =>
      c.name.eq(user.username)
    ).subscribe((snapshot) => {
      if (snapshot.items && snapshot.items.length) {
        setUserDets(snapshot.items[0]);
      }
    });
  };

  useEffect(() => {
    if (authStatus === "authenticated") {
      const userSubscription = observeUser();
      return () => {
        userSubscription.unsubscribe();
      };
    }
  }, [authStatus]);

  return userDets;
};
```

However, fetching data from the cloud turned out to be a little headache - I was unable to dynamically filter items before fetching them and finally had to resort to fetching every single item before filtering them by the current date and the user's selected residences.

```javascript
const sortedActivities = await DataStore.query(
  ActivityItem,
  Predicates.ALL,
  {
    sort: (s) => s.dateTime(SortDirection.DESCENDING),
  }
);
const pastActivities = filterDateTimeAfterToday(sortedActivities);
const filteredActivities = pastActivities.filter(
  (activity) =>
    userDets.residence.includes(activity.residence) &&
    (activity.participants.includes(userDets.name) ||
      activity.host === userDets.name)
);
setPastActivities(filteredActivities);
```

As you can see, it's not the cleanest code and will DEFINITELY not scale well... 🥴  
But hey, at least it works! (for now...)

### 🪣 Amplify Storage (with S3)

Adding a S3 bucket to my project was extremely easy with Amplify Studio. As my app did not require special permissions, it took minimal time to figure out the authorization rules I needed.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690377857536/11dd515e-758a-4471-8e62-387351034a6d.png align="center")

Fetching data from the S3 bucket was simple as well - especially after figuring out how to utilise the `public/`, `protected/` and `private/` folders of the bucket. For this project, I mainly used the `public/` folder - after all, the pictures are meant to be shared among everyone!

### 💬 Amplify In-App Messaging

I wanted to send encouraging messages to the user when they attended or hosted activities and I found Amplify's In-App Messaging component to be EXTREMELY useful for that.

To start, I created a simple campaign in AWS Pinpoint with the trigger event `Participation` and the attribute `participated: 1`.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690424446278/b8df6617-8e49-4eb4-a144-86a03816c38e.png align="center")

Then, I created a segment that would target every registered user.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690424533418/3d61926e-5b58-403c-9aca-b5e5c80913f9.png align="center")

Finally, I created the notification itself. Once again, I did not touch a single line of code and most of the work was already done!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690424664518/625f7a7c-3deb-4ca9-b3d0-618c1e2e1406.png align="center")

Following the documentation, I used the `useEffect` Hook in my entry file `App.js` to sync the campaign messages and then used a custom function `attendActivityHandler` to dispatch an In-App Messaging event whenever the user indicated their attendance for an event.

```javascript
useEffect(() => {
    InAppMessaging.syncMessages();
  }, []);
```

```javascript
const attendActivityHandler = async () => {
  InAppMessaging.dispatchEvent({
    name: "Participation",
    attributes: {
      participated: user.activitiesAttended.length.toString(),
      hosted: user.activitiesHosted.length.toString(),
    },
  });
};
```

You might now be wondering why I didn't just use a popular library like [react-toastify](https://www.npmjs.com/package/react-toastify) to display messages to the user...

Well, while these libraries are arguably easier to customise and simpler to use (I still have yet to figure out how to [use custom components and styles with In-App Messaging](https://ui.docs.amplify.aws/react/connected-components/in-app-messaging)), with Amplify's In-App Messaging, I can update, add and delete campaign messages on the AWS Console without making a single commit on my codebase. See for example:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690427034403/e0c041a3-75e6-4b9b-b3de-2d6bfc43753c.png align="center")

I've just created a few more campaign messages (with the same trigger event but different attributes) on the AWS console... within just 5 minutes!

### 📟 AWS Analytics

My usage of AWS Analytics is pretty basic. All I wanted to do was to gather data for the rate of user acquisition, retention and usage rates. Imagine my surprise when I found that all these were done pretty much automatically.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690427427042/f6e1f121-7d1a-4f63-98bb-ce8844b2cb01.png align="center")

By [recording custom events](https://docs.amplify.aws/lib/analytics/record/q/platform/js/#recording-custom-events), I was able to gather even more user data. With just one additional line of code `Analytics.record({ name: 'eventName' })` in the app's click handlers, I was able to easily record the user's actions. With AWS Analytics, I could find out how often users registered attendance for events, how often they hosted new events and how often they view their archived events.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690428403029/a8a20ffd-48e1-4a75-9ff7-bab07f86cde0.png align="center")

With how simple the entire process was, I certainly plan to implement analytics to a greater degree in the future.

### 🖥️ AWS Hosting

Hosting my React App with AWS Amplify was probably the easiest thing I've done in this entire project. All it took was three lines of code...

```bash
amplify add hosting
amplify configure hosting
amplify publish
```

And voila! After a month of hard work, my first full-stack app was finally live. 🥳

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690443522290/de558170-9cda-4cea-92be-adce05fa230c.png align="center")

## 🎬 Final Product.

Upon opening the app, you'll be greeted with a summary of what the app is all about. It focuses on 4 main themes: (1) Embracing Unity, (2) Celebrating Diversity, (3) Reviving Spirit, and (4) Creating Lasting Memories - what we will need for the kampong spirit to thrive again in the digital age.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690284459412/6f0dae94-eb8d-4897-8b29-dc779ca688af.png align="center")

Clicking on the Log In / Go to Dashboard button will bring you to the `/login` screen, where you can conveniently create a new account in less than a minute.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690444081316/329e108a-73fd-4d3f-8e09-9a83574d8089.png align="center")

After creating an account, the user would be redirected to `/onboarding`, where they would be able to supplement their account with additional details. Here, TESTER picked a cute little robot to be his avatar! (Do remember to "Add" after selecting a residence!)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690444494454/e687c19f-c2e5-43a8-8759-f333d2e1f3e9.png align="center")

The Dashboard consists of "National Events" (added by administrators) and "Future Events" (added by residents). Look at how many activities other residents have already added!

TESTER seems to be craving a game of [Mahjong](https://en.wikipedia.org/wiki/Mahjong)... Maybe he'll join the Mahjong Marathon hosted by 25USER!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690446840210/8f0f8934-f8e6-414e-b86f-0edb2fab704f.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690611513680/6fb41e07-0163-4bf6-8bb3-42f40a90cf3b.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690446935750/34fa4653-f4eb-4cd5-ab05-bc1759783e49.png align="center")

The day after the event, the activity card will be moved to the Archive tab, where it'll gain a delightful picture slot. Upon clicking on the card, users will be able to share photos they took, as well as view those added by others.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690611406747/c50ebdcd-7eae-4702-9cec-20f566657292.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690541728164/e7a01c1a-a77e-44cc-b561-8baecfe676f1.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690541760233/6ded2737-e38f-4c55-bf85-d547fff02225.png align="center")

### 🏋️‍♀️ Struggles...

When I first started the project, I was a total JavaScript newbie. I had next to no knowledge of how async functions worked and could not even create a simple loop. Frankly, I even had no idea what promises were.

As a result, when I was creating a `useEffect` function to fetch images from my S3 bucket, I mistakenly used a `forEach` loop, which does not wait for each iteration's async operation to complete before moving on to the next one. The pictures did not work as expected, and I ended up spending hours trying to fix this one issue.

It was a stroke of luck that Hashnode's email promoting their newly released [Rix](https://hashnode.com/rix) came when it did. I hopped on the platform and pasted my code into the chat together with the error message. To my surprise, it quickly diagnosed the issue and gave out possible solutions.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690543245321/0768ac79-de26-451f-ba20-49dcf6ad5408.png align="center")

```javascript
useEffect(() => {
  activity &&
    (async function () {
      const participantPromises = activity.participants.map(async function (participant) {
        const user = await DataStore.query(UserDetails, participant);
        const profilePicURL = await Storage.get(user.profilePicture);
        return [user.id, [user.preferedName, profilePicURL]];
      });
      await Promise.all(participantPromises)
        .then((results) => {
          const updatedDetails = Object.fromEntries(results);
          setUserCardDetails((prevDetails) => ({
            ...prevDetails,
            ...updatedDetails,
          }));
        })
        .catch((error) => {
          console.error("Error while querying user details:", error);
        });
    })();
}, [activity]);
```

And voila! The error plaguing me was finally dealt with. Imagine how many hours I could have saved if I just used Rix from the start...

And that's not all - whenever I faced an error I did not understand, all I needed to do was paste the error into Rix and I received a detailed explanation of why the error occurred and how I could fix it. All hail our AI overlords. 🤖

### 🦥 More Struggles...

I faced some limitations while learning to use AWS Amplify's UI Library as well. To my dismay, I was unable to set dynamic filters with Amplify Studio - I could not filter the items in the collections by the current date, much less by the user's residences.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690545956173/709dad63-5b92-4663-9f72-b691017777a3.png align="center")

As a result, I had to resort to fetching data directly with the DataStore API before sorting and filtering the data by date and residence. This time, I used ChatGPT to create the function for filtering by date.

```javascript
export function filterDateTimeBeforeToday(activities) {
  const currentDate = new Date();
  const filteredActivities = activities.filter((activity) => {
    const testDate = new Date(activity.dateTime);
    return testDate >= currentDate;
  });
  return filteredActivities;
}
```

In the end, I decided to use the [`<Collection/>`](https://ui.docs.amplify.aws/react/components/collection) component to display the event cards instead as it allowed for more control over the items displayed.

### 😅 Even More Struggles...

At this point, if you've already tried out the app (kudos to you!), you might notice that you're able to create events for residences that you are not part of. As a result, you can create events that won't even show up on your dashboard!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690547249142/c18aa697-924d-4f0d-903c-6222d195c870.png align="center")

This is because I used an automatically generated form component from the UI library - as of now, these forms [do not support dynamic dropdown fields](https://stackoverflow.com/questions/73151394/is-it-possible-to-create-a-dropdown-select-field-using-amplify-studio-ui-fig). The solution would be to create a custom form with React, but it seems that the deadline is fast approaching and there are so so many bugs I've yet to fix. So let's just pretend that those entries do not exist. 😴

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690547693788/6bcf80e2-597e-4b44-bcd9-88ba027e2a09.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690547730692/9a0fe0c4-6e4b-4ad4-9c61-4605e2f1b37c.png align="center")

As you can see, there is no way to create a dynamic list of dropdown items. Hopefully, there'll be one in the future!

### 🏁 Conclusion

And that concludes my month-long development journey! I started this journey knowing next to nothing about AWS Amplify, and I am certainly proud of the app I have created. Amplify is a powerful tool for front-end developers to quickly build and host full-stack applications, and certainly useful for most developers due to its ease of use.

However, AWS Amplify's simplicity limits its usefulness. Users might find that they require much deeper knowledge of AWS to bring their ideas to life, leading to a longer development time.

In my opinion, AWS Amplify strikes a good balance as it's suitable for both beginners and professionals. Beginners would likely not require workarounds to bypass Amplify's limitations for straightforward applications, while professionals would likely already have the know-how to delve deeper into AWS or develop custom solutions to fit their specialised and intricate use cases.

All in all, my journey with AWS Amplify has been a fruitful one and I am glad to add this versatile tool to my toolbox!