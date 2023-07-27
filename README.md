In the heart of Singapore's history lies a treasured concept - the kampong spirit. Imagine a time when tight-knit communities flourished, fostering unity and genuine connections within their "kampungs," or villages. But in today's fast-paced, modern world, this cherished essence faces a daunting challenge - urbanization, technology, and individualism are eroding the very fabric of community bonds.

Can we reclaim the kampong spirit and revive the sense of togetherness that once defined Singapore's cultural heritage?

## ✌🏼 The Solution.

[treehouse](https://dev.d1ykjigyeh5h3.amplifyapp.com/) offers a practical solution to address this challenge. Users can easily post and discover activities, encouraging communal interaction. By facilitating photo exchanges post-event, treehouse fosters a sense of togetherness.

Technology does not have to be the downfall of the kampong spirit. Instead, it can play a vital role in reviving the community.

### 🏃‍♂️ The Motivation

I longed for simpler times when I could easily meet friends at the [void deck](https://en.wikipedia.org/wiki/Void_deck) for a simple game of soccer. I wanted an easy way to coordinate events with others living in my apartment to ensure that busy schedules would never be the reason we missed a game ever again.

When I discovered the Hashnode AWS hackathon, I saw the perfect opportunity to bring my vision to life. (while creating my first-ever full-stack app!) Simultaneously, I wanted to gain more experience in [AWS](https://aws.amazon.com) - the most popular cloud service in the world.

### 🏡 About treehouse

**Live link:** [https://dev.d1ykjigyeh5h3.amplifyapp.com/](https://dev.d1ykjigyeh5h3.amplifyapp.com/)  
**Github repo:** [https://github.com/duckyfuz/treehouse](https://github.com/duckyfuz/treehouse)  
**Trial Accounts (Public Use):**  
testuser | Password (Blk 111 & 112)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690284459412/6f0dae94-eb8d-4897-8b29-dc779ca688af.png align="center")

<div data-node-type="callout">
<div data-node-type="callout-emoji">🤔</div>
<div data-node-type="callout-text">Who created that amazing oil painting on the right? Could it be... <a target="_blank" rel="noopener noreferrer nofollow" href="https://gencraft.com/generate" style="pointer-events: none">gencraft</a>?</div>
</div>

```plaintext
technologies used: 
React (CRA) | JavaScript | Amplify Hosting
Amplify Authentication (Cognito) | AWS AppSync API (DataStore) 
Amplify Studio & UI Builder | Amplify Analytics
Amplify In-app Messaging | Amplify Storage (S3)
```

| Present Features. | Future Features. |
| --- | --- |
| Create a personal account | Display personal statistics |
| Host or join an event | Share events on social media |
| Delete self-hosted event | More personalisation in UI |
| Share photos (archived events) | In-app chat (with other participants) |
|  | Authentication with [Singpass](https://api.singpass.gov.sg/library/verify/developers/overview) |

## 🗺️ The Journey.

The initial plan was an app full of bells and whistles - imagine an AI that recommends activities in your community according to your unique interests... but that's a bit too much for a 19-year-old prospective software developer dipping his toes into the world of full-stack development. I cut down the scope of work until I arrived at an MUP that I could build in a month.

### 📀 The Data Model

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

That's it! What used to take hours to create could now be done in minutes with the help of AWS Amplify.

I opted to make a personalised login page with the `<Authenticator />` component:

```javascript
const services = {
    async handleConfirmSignUp({ username, code }) {
      await Auth.confirmSignUp(username, code);
      from.current = "/onboarding";
    },
  };

<Authenticator services={services} />
```

This way, I would have space to spruce up the login page in the future. ✨Fancy.✨

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

For me, the most useful feature of the UI Builder was undoubtedly the automatically generated forms. Since I used DataStore, I was able to seamlessly map my form to an existing data model - all without having to deal with pesky state management or validation logic. I didn't even need to write a single line of code to write input data to the cloud!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690374750729/16fc4ca5-0d13-4365-bfa4-036cddc91d92.png align="center")

While I certainly faced some difficulties with complicated components, I must admit that the UI Builder is certainly a godsend when creating static components. I created the bulk of the homepage with only components created from Figma!

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

Initially, I used AWS AppSync GraphQL API. However, after realising the benefits of DataStore (and mostly because I wanted to map forms to my data models), I quickly made the switch to Amplify DataStore. The switch was extremely easy - the changes required were minimal as the code for querying and writing data was quite similar.

What I found most useful was the ability to [observe query results in real-time](https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/#observe-model-mutations-in-real-time). I created a custom `useUser` Hook to easily get real-time updates for user properties within all of my routes.

```javascript
const observeUser = () => {
  return DataStore.observeQuery(UserDetails, (c) =>
    c.name.eq(user.username)
  ).subscribe((snapshot) => {
    if (snapshot.items && snapshot.items.length) {
      setUserDets(snapshot.items[0]);
    }
  });
};
```

However, fetching data from the cloud turned out to be a headache - I was unable to dynamically filter items before fetching them and had to resort to fetching every single item before filtering them by the current date and the user's selected residences.

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
But hey, at least it works!

### 🪣 Amplify Storage (with S3)

Adding a S3 bucket to my project was extremely easy with Amplify Studio. As my app did not require special permissions, it took minimal time to figure out the authorization rules I needed.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1690377857536/11dd515e-758a-4471-8e62-387351034a6d.png align="center")

Fetching data from the S3 bucket was simple as well - especially after figuring out how to utilise the `public/`, `protected/` and `private/` folders of the bucket.

### 💬 Amplify In-app Messaging (& Analytics)

I wanted to send encouraging messages to the user when they attended or hosted activities and I found Amplify's In-app Messaging component to be superrrrr useful for that.

### 🖥️ AWS Hosting

Hosting my React App with AWS Amplify was probably the simplest thing I've done in this entire project. All it took was three lines of code...

```bash
amplify add hosting
amplify configure hosting
amplify publish
```

And voila! After a month of work, my first full-stack app was finally live. 🥳

## 🎬 Final Product.

### 🏋️‍♀️ Struggles...

### 🏁 Conclusion

And that concludes my month-long journey!