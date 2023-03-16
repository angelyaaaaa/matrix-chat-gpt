const mockResponse = [
  'Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?',
  'You have to let it all go, Neo. Fear...doubt and disbelief. Free your mind.',
  'Welcome to the real world.',
  'What is "real"? How do you define "real"? If you are talking about what you can feel...what you can smell, what you can taste and see...then "real" is simply electrical signals interpreted by your brain.',
  'You have to understand, most of these people are not ready to be unplugged. And many of them are so inert, so hopelessly dependent on the system that they will fight to protect it.',
  'The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window...or when you turn on your television. You can feel it when you go to work...when you go to church...when you pay your taxes. It is the world that has been pulled over your eyes...to blind you from the truth.',
  'Follow the white rabbit',
  `Thank you. But as you well know, appearances can be deceiving, which brings me back to the reason why we're here.We're not here because we're free, we're here because we're not free.There's no escaping reason, no denying purpose - because as we both know, without purpose, we would not exist`,
  'It means know thy self.I wanna tell you a little secret, being the one is just like being in love.No one needs to tell you you are in love, you just know it, through and through.',
];

const useFetch = url => {
  // return () => fetch(`${url}/some/path/?query=123`)
  //   .then(resp => resp.json)
  //   .then(data => data);

  const mockFetch = () => new Promise(resolve => setTimeout(() => {
    const randomNum = Math.floor(Math.random() * mockResponse.length);
    resolve(mockResponse[randomNum]);
  }, 1000));
  return mockFetch;
}

export default useFetch;
