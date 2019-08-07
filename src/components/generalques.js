let generalQuestions = [
    {
        question: "What genre of games to you like to play?",
        answers: [
            {
                type:"genre",
                content: "Action"

            },

            {
                type:"genre",
                content: "Adventure"
            },

            {
                type:"genre",
                content:"Role-playing"
            },

            {
                type:"genre",
                content:"Strategy"
            },

            {
                type:"genre",
                content:"Sports"
            }
        ]
    },

    {
        Question: "What age range do you want to play in?",
        answers: [

            {
                type:'esrb rating',
                content: "Everyone"
            },

            {
                type: "esrb rating",
                content: "Everyone 10+"
            },

            {
                type: "esrb rating",
                content: "Teen"
            },

            {
                type: "esrb rating",
                content: "Mature"
            },

            {
                type: "esrb rating",
                content: "Adults Only"
            }
        ]
    },

    {
        Question: "What release year would you like a game from?",
        answers: [

            {
                type: "release date",
                content: "2013"
            },

            {
                type: "release date",
                content: "2014"
            },

            {
                type: "release date",
                content: "2015"
            },

            {
                type: "release date",
                content: "2016"
            },

            {
                type: "release date",
                content: "2017"
            },

            {
                type: "release date",
                content: "2018"
            },

            {
                type: "release date",
                content: "2019"
            },
        ]
    }
]

export default generalQuestions; 