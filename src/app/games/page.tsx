import NavBar from '@/components/NavBar';

const games = [
  { name: 'Wordle Copy', path: '/games/wordle-copy/index.html' },
  { name: 'Grid Drawing', path: '/games/grid-drawing/index.html' },
   { name: 'Keyboard Player', path: '/games/keyboard-player/index.html' },
];

export default function GamesPage() {
  return (
    <div>
      <NavBar />
      <h1 className="postLI">Games</h1>
      <ul className="postTitle">
        {games.map((game, index) => (
          <li key={index}>
            <a
              href={game.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {game.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}