const popularMovies = [
    { title: "Joker", description: "The origin of the iconic villain.", image: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
    { title: "The Matrix", description: "A hacker discovers reality.", image: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
    { title: "Interstellar", description: "Space-time and love.", image: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
    { title: "The Dark Knight", description: "Batman faces the Joker.", image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { title: "Extraction", description: "Mercenary in Bangladesh.", image: "https://image.tmdb.org/t/p/w300/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg" },
    { title: "The Irishman", description: "Mafia hitman's life story.", image: "https://image.tmdb.org/t/p/w300/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg" },
    { title: "Red Notice", description: "FBI agent chases art thief.", image: "https://image.tmdb.org/t/p/w300/lAXONuqg41NwUMuzMiFvicDET9Y.jpg" }
  ];

  const kdramas = [
    { title: "Crash Landing on You", description: "Love across the border.", image: "https://image.tmdb.org/t/p/w300/5cIUvCJQ2aNPXRCmXiOIuJJxIki.jpg" },
    { title: "Goblin", description: "A mystical story of life and death.", image: "https://image.tmdb.org/t/p/w300/mb3a3uR6wwctQfQx9dBFlixyXLf.jpg" },
    { title: "Vincenzo", description: "Mafia lawyer in Korea.", image: "https://image.tmdb.org/t/p/w300/ro9OHkIJQT37nJXU8Fyr69wsY6b.jpg" },
    { title: "Itaewon Class", description: "Revenge and success.", image: "https://image.tmdb.org/t/p/w300/hSRYgAvjQtkFW9J9JrYH8KzS4yY.jpg" },
    { title: "Hospital Playlist", description: "Life of doctors and friends.", image: "https://image.tmdb.org/t/p/w300/aWQ9lmE7PspKV6fFZlrLLxTzOdh.jpg" },
    { title: "Sweet Home", description: "Survival horror in an apartment.", image: "https://image.tmdb.org/t/p/w300/v3Ih60nUcpflshXytzFQ9ozuwyb.jpg" }
  ];

  const webseries = [
    { title: "Stranger Things", description: "Mystery in Hawkins.", image: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
    { title: "Breaking Bad", description: "A teacher becomes a kingpin.", image: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
    { title: "Money Heist", description: "The biggest heist in Spain.", image: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
    { title: "The Witcher", description: "Geralt slays monsters.", image: "https://image.tmdb.org/t/p/w300/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" },
    { title: "Squid Game", description: "Deadly games for money.", image: "https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
    { title: "Lucifer", description: "Devil runs a club in LA.", image: "https://image.tmdb.org/t/p/w300/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" },
    { title: "Narcos", description: "Pablo Escobar's empire.", image: "https://image.tmdb.org/t/p/w300/rTmal9fDbwh5F0waol2hq35U4ah.jpg" }
  ];

  function createMovieElement(movie) {
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML = `<img src="${movie.image}" alt="${movie.title}" loading="lazy" />`;
    div.addEventListener('click', () => showDetails(movie));
    return div;
  }

  function showDetails(movie) {
    document.getElementById('details-img').src = movie.image;
    document.getElementById('details-title').textContent = movie.title;
    document.getElementById('details-description').textContent = movie.description;
    document.getElementById('details-modal').style.display = 'flex';

    const playBtn = document.getElementById('play-btn');
    playBtn.onclick = () => playVideo(movie.title);
  }

  function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
  }

  function playVideo(title) {
    const videoPlayer = document.getElementById('video-player');
    const video = document.getElementById('video');
    // Simulate video URL - You can change this to real URLs if you want
    video.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    videoPlayer.style.display = 'flex';
    video.play();
  }

  function closeVideo() {
    const videoPlayer = document.getElementById('video-player');
    const video = document.getElementById('video');
    video.pause();
    video.src = "";
    videoPlayer.style.display = 'none';
  }

  function populateMovies() {
    const popularContainer = document.getElementById('popular-movies');
    popularMovies.forEach(movie => {
      popularContainer.appendChild(createMovieElement(movie));
    });

    const kdramasContainer = document.getElementById('kdramas');
    kdramas.forEach(movie => {
      kdramasContainer.appendChild(createMovieElement(movie));
    });

    const webseriesContainer = document.getElementById('webseries');
    webseries.forEach(movie => {
      webseriesContainer.appendChild(createMovieElement(movie));
    });
  }

  // Event listeners
  document.getElementById('close-btn').addEventListener('click', closeDetails);
  document.getElementById('video-close').addEventListener('click', closeVideo);

  // Initialize
  populateMovies();