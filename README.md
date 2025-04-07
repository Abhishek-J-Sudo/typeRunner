# TypeRunner

A real-time multiplayer typing game built with React and Firebase Realtime Database where players compete in a series of challenging typing tasks.

## 🎮 Game Overview

TypeRunner is a fast-paced typing competition for 4-10 players with four increasingly difficult challenge stages:

1. **Stage 1:** Type a sentence exactly as shown
2. **Stage 2:** Fill in missing vowels in a sentence
3. **Stage 3:** Type words represented by emojis
4. **Stage 4:** Type a sentence in reverse order

All players participate in all stages, with times tracked cumulatively. The two players with the lowest total time win!

## ✨ Features

- **Real-time multiplayer** gameplay with Firebase Realtime Database
- **Four unique typing challenges** that test different typing skills
- **No registration required** - just enter your name and start or join a game
- **Game starter role** - one player can control game flow and progression
- **Real-time player status** showing typing progress and completion times
- **Automatic reconnection** if you get disconnected during gameplay
- **Responsive design** works on desktop and mobile devices
- **Leaderboards** tracking completion times across all stages

## 🎯 How to Play

1. **Create or Join a Room**
   - Enter your name and create a new room or join an existing one
   - Share the room code with friends to invite them to play

2. **Start the Game**
   - The game starter can begin the game once at least 4 players have joined
   - A 3-second countdown will begin before each stage

3. **Complete the Challenges**
   - Type quickly and accurately to complete each stage
   - Your total time across all stages determines your final ranking

4. **Final Results**
   - After the final stage, see the final rankings
   - The two players with the lowest total time win!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## © Copyright

All rights reserved. This project and associated code are fully copyrighted and may not be reproduced, distributed, or used without explicit permission.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)
- [Lodash](https://lodash.com/)
