let generalQuestions = {
  genre: {
      question: "What genre of games to you like to play?",
      answers: [
          {
              type:"5",
              content: "Shooter"

          },

          {
              type:"31",
              content: "Adventure"
          },

          {
              type:"12",
              content:"Role-playing"
          },

          {
              type:"15",
              content:"Strategy"
          },

          {
              type:"14",
              content:"Sports"
          },

          {
              type:"8",
              content:"Platform"
          },

          {
              type:"13",
              content:"Simulator"
          }
      ]
  },

  age:{
      Question: "What age range do you want to play in?",
      answers: [

          {
              type:'8',
              content: "Everyone"
          },

          {
              type: "9",
              content: "Everyone 10+"
          },

          {
              type: "10",
              content: "Teen"
          },

          {
              type: "11",
              content: "Mature"
          },

          {
              type: "12",
              content: "Adults Only"
          }
      ]
  },

  year: {
      Question: "What release year would you like a game from?",
      answers: [

          {
              type: "29598",
              content: "2013"
          },

          {
              type: "61379",
              content: "2014"
          },

          {
              type: "44191",
              content: "2015"
          },

          {
              type: "44188",
              content: "2016"
          },

          {
              type: "113146",
              content: "2017"
          },

          {
              type: "1538129354",
              content: "2018"
          },

          {
              type: "165061",
              content: "2019"
          },
      ]
  }
}

let platformSelector = 
    {
        question: "what platform do you want to play on?",
        answers: [
            {
                type:"48",
                content: "Playstation"
            },

            {
                type:"49",
                content: "Xbox"
            },

            {
                type:"130",
                content:"Nintendo"
            }
        ]
    }


export {generalQuestions, platformSelector}