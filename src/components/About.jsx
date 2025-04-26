import React from 'react'
import RecentlyPlayed from './RecentlyPlayed';

const sampleSongs = [
    {
      title: "BAILE INoLVIDABLE",
      artist: "Bad Bunny",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411"
    },
    {
        title: "Mirada",
        artist: "Ivan Cornejo",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2738f5be6be73a2742bbf0e4fef"
    },
    {
        title: "rookie of the year",
        artist: "Young Miko",
        albumArt: "https://i.scdn.co/image/ab67616d0000b27310dfb6ef442ace580aa5a2bf"
    },
    {
        //twitter image
        title: "Funny Papers",
        artist: "Mac Miller",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2739a9c4cd69a6f514dfbb7305a"
    },
    {
        title: "FUEGO",
        artist: "GANGGY",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273ce508549a22c5fd5c16e9322"
    },
  ];

function About() {
  return (
    <div className='text-lg '>
        <div className='text-xl/8 -indent-2 indnet-2 p-2'>
        <p className=''> Welcome... <br />to the portfolio of a passionate software engineer—dedicated to building, testing, and refining innovative digital experiences. 
            Whether it's solving complex problems or building beautiful solutions, I simply bridge curiosity, precision, and a hunger to keep learning. 
            <br />Oh—and when I’m not debugging, I make a <i>pretty mean </i>margarita, too. </p>
        </div>
        <br />
        <p className='font-semibold'>Every project has its theme song. Check out some songs currently on my rotation</p>
            <RecentlyPlayed songs={sampleSongs} />

    </div>
  )
}

export default About;