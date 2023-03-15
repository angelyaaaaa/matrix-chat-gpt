const mockResponse = [
  'Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?',
  'You have to let it all go, Neo. Fear...doubt and disbelief. Free your mind.',
  'Welcome to the real world.',
  // 'The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window...or when you turn on your television. You can feel it when you go to work...when you go to church...when you pay your taxes. It is the world that has been pulled over your eyes...to blind you from the truth. That you are a slave. Like everyone else, you were born into bondage...born into a prison that you cannot smell or taste or touch. A prison...for your mind.',
  'The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window...or when you turn on your television. You can feel it when you go to work...when you go to church...when you pay your taxes.',
  'It means know thy self.I wanna tell you a little secret, being the one is just like being in love.No one needs to tell you you are in love, you just know it, through and through.',
];

const useFetch = (url) => {
  const mockFetch = () => new Promise(resolve => setTimeout(() => {
    // resolve('follow the white rabbit');
    const randomNum = Math.floor(Math.random() * mockResponse.length);
    resolve(mockResponse[randomNum]);
  }, 1000));
  return mockFetch;
  // return fetch(`url/some/path/?query=123`).then(resp => resp.json).then(data => console.log(data));
}

export default useFetch;
