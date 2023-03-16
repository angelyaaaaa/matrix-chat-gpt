# matrix-chat-gpt

<img width="1213" alt="image" src="https://user-images.githubusercontent.com/6259696/225355287-ffd8caa6-a5b9-4d88-8b31-90b88ef75ba8.png">

## Description
Using Matrix theme to display the conversation between customize chatGPT

## Usage
```bash
npm install
npm start
```

### Animation Time
```js 
// ./App.js
const animationTime = 8000;
```

### Custom Response
uncomment the fetch syntax
```js
// ./ConsoleScene/useFetch.js
return () => fetch(`${url}/some/path/?query=123`)
   .then(resp => resp.json)
   .then(data => data);
```

## Structure
├── index.js
├── App.js
├── MatrixRainScene
|   └── MatrixRain.js
├── PillsScene
|   └── Pills.jsx
├── ConsoleScene
|   └── Console.js


## Demo
It first shows the classical matrix rain for **8 seconds**, then fade in the classical red and blue pills scen. 

After **a mouse click**, it turn into terminal mode, type words you'd like to

https://user-images.githubusercontent.com/6259696/225354914-2426a9c7-6659-4aa3-8255-1470370c88d4.mov




