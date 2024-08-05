const testNFT = [
    {
      "name": "Flippando - the Game", // 1
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjE8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "1",
      "airdropYPos": "1"
    },
    {
      "name": "Flippando - the Game", // 2
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjI8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "2",
      "airdropYPos": "1"
    },
    {
      "name": "Flippando - the Game", // 3
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjM8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "3",
      "airdropYPos": "1"
    },
    {
      "name": "Flippando - the Game", // 4
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjQ8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "4",
      "airdropYPos": "1"
    },
    {
      "name": "Flippando - the Game", // 5
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjU8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "1",
      "airdropYPos": "2"
    },
    {
      "name": "Flippando - the Game", // 6
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjY8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "2",
      "airdropYPos": "2"
    },
    {
      "name": "Flippando - the Game", // 7
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjc8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "3",
      "airdropYPos": "2"
    },
    {
      "name": "Flippando - the Game", // 8
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjg8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "4",
      "airdropYPos": "2"
    },
    {
      "name": "Flippando - the Game", // 9
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjk8L3RleHQ+PC9zdmc+",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "1",
      "airdropYPos": "3"
    },
    {
      "name": "Flippando - the Game", // 10
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjEwPC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "2",
      "airdropYPos": "3"
    },
    {
      "name": "Flippando - the Game", // 11
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjExPC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "3",
      "airdropYPos": "3"
    },
    {
      "name": "Flippando - the Game", // 12
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjEyPC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "4",
      "airdropYPos": "3"
    },
    {
      "name": "Flippando - the Game", // 13
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjEzPC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "1",
      "airdropYPos": "4"
    },
    {
      "name": "Flippando - the Game", // 14
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjE0PC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "2",
      "airdropYPos": "4"
    },
    {
      "name": "Flippando - the Game", // 15
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjE1PC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "3",
      "airdropYPos": "4"
    },
    {
      "name": "Flippando - the Game", // 16
      "version": "1.0.0",
      "gameType": "airdrop",
      "gameLevel": "16",
      "svgData": "PHN2ZyBpZD0iZTJWMFFPVzhMbFgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmtpPSJodHRwOi8vd3d3Lnd3dy5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1IDI1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iMCIgcnk9IjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjEyIiB5PSIxMiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPjE2PC90ZXh0Pjwvc3ZnPg==",
      "airdropName": "hackerville",
      "airdropParentID": "1",
      "airdropXPos": "4",
      "airdropYPos": "4"
    }
  ]
  export default testNFT;
  