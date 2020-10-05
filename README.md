## Add the vampire data that we gave you

There's an array of "vampire" JavaScript objects in `populateVampires.js`, and we need to add them add the vampires to a mongoDB vampires collection.

In class, you inserted one object using the `.create()` method on your model.

I wonder if you could insert an array of vampires using the `Vampire.create()` model method?  Maybe just by passing in an array?  Perhaps you already tried it.

Or!

### Fun fact: you can access native mongoDB methods in an object on the model: `.collection` 

Maybe you can do this simply by providing this array to insert method and it will create a document for each object in the array?  

If you're stuck, click below

<details>



</details>

# Part 1: 

### Add some new vampire data

Using the `Vampire.create()` method, create 4 new vampires with any qualities that you like two should be male and two should be female.

<hr>
&#x1F534; Commit. Suggested message: "added data into vampire collection"
<hr>


## Querying

### Select by comparison

Write a different query for each of the following:

1. Find all the vampires that that are females
2. have greater than 500 victims
3. have fewer than or equal to 150 victims
4. have a victim count is not equal to 210234
5. have greater than 150 AND fewer than 500 victims

<hr>
&#x1F534;  Commit. Suggested message: "queried for vampires"
<hr>

### Select by exists or does not exist
Select all the vampires that:

1. have a title property
2. do not have a victims property
3. have a title AND no victims
4. have victims AND the victims they have are greater than 1000

<hr>
&#x1F534;  Commit. Suggested message: "selected vampires"
<hr>

### Select with OR
Select all the vampires that:

1. are from New York, New York, US or New Orleans, Louisiana, US
2. love brooding or being tragic
3. have more than 1000 victims or love marshmallows
4. have red hair or green eyes

<hr>
&#x1F534;  Commit. Suggested message: "selected more vampires with OR"
<hr>

# Part 2

### Before you continue on to part two, you should know that Mongoose has some sweet helper functions that can make all this a little easier. See below.

Mongoose's default find gives you an array of objects.  But what if you know you only want one object?  These convenience methods just give you one object without the usual array surrounding it.

```javascript
Article.findById('5757191bce5579b805705900', (err, article)=>{
  console.log(article);
});
```
```javascript
Article.findOne({ author : 'Matt' }, (err, article)=>{
  console.log(article);
});
```
```javascript
Article.findByIdAndUpdate(
  '5757191bce5579b805705900', // id of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```
```javascript
Article.findOneAndUpdate(
  { author: 'Matt' }, // search criteria of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```
```javascript
Article.findByIdAndDelete('5757191bce5579b805705900', (err, article)=>{
  console.log(article); // log article that was removed
});
```
```javascript

Article.findOneAndDelete({ author : 'Matt' }, (err, article)=>{
  console.log(article); // log article that was removed
});
```


### 6\. Select objects that match one of several values
Select all the vampires that:

1. love either frilly shirtsleeves or frilly collars
2. love brooding
3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

<hr>
&#x1F534;  Commit. Suggested message: "selected even more vampires"
<hr>

### 7\. Negative Selection
Select all vampires that:

1. love ribbons but do not have brown eyes
2. are not from Rome
3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
5. have not killed more than 200 people

<hr>
&#x1F534;  Commit. Suggested message: "used negative selections on vampire data"
<hr>

## 8\. Replace

1. Replace the vampire called 'Claudia' with a vampire called 'Eve'. 
<hr>
&#x1F534;  Commit. Suggested message: "replaced vampire data"
<hr>

## 9\. Update

2. Update 'Eve' to have a gender of 'm'
5. Rename 'Eve's' name field to 'moniker'
6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".

<hr>
&#x1F534;  Commit. Suggested message: "updated vampire data"
<hr>

## 10\. Remove

1. Remove a single document wherein the hair_color is 'brown'
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.


<hr>
&#x1F534;  Commit. Suggested message: "remove vampire data"
<hr>

# Hungry for more

1. Make an index route that will `res.send()` (or even better--`res.json()`--look it up!) the json of all the data in our database.

2. If number 1 was easy, try to connect your database to your application and show a proper index page that displays your vampire data. If this is also easy, create a show page as well where you are showing individual vampire data.

3. Have extra time? Try out a few more problems on [CodeWars](https://www.codewars.com/)

<hr>
&#x1F534;  Commit. Suggested message: "tackled some Hungry for More"
<hr>
