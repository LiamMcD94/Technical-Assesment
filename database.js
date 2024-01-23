const data = [
{
    pollId: 1,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
    {
    optionId: 1,
    optionText: "Manchester City",
    },
    {
    optionId: 2,
    optionText: "Arsenal",
    },
    {
    optionId: 3,
    optionText: "Liverpool",
    },
    {
    optionId: 4,
    optionText: "Hull",
    },
    {
    optionId: 5,
    optionText: "London",
    },    
    ]
},
{
    pollId: 2,
    pollName: "fake",
    question: "fake",
    options: [
    {
    optionId: 1,
    optionText: "Manchester City",
    },
    {
    optionId: 2,
    optionText: "Arsenal",
    },
    {
    optionId: 3,
    optionText: "Liverpool",
    }   
    ]
}
];
  
const votes = [
{
    pollId: 1,
    votes: [
    {
    optionId: 1,
    resultText: "Manchester City",
    result: 35
    },
    {
        optionId: 2,
    resultText: "Arsenal",
    result: 23
    },
    {
        optionId: 3,
    resultText: "Liverpool",
    result: 68
    },
    {
        optionId: 4,
    resultText: "Hull",
    result: 31
    },
    {
    optionId: 5,
    resultText: "London",
    result: 42
    },    
    ]
},
{
pollId: 2,
votes: [
    {
    voteId: 1,
    resultText: "Manchester City",
    result: 35
    },
    {
    voteId: 2,
    resultText: "Arsenal",
    result: 23
    },
    {
    voteId: 3,
    resultText: "Liverpool",
    result: 68
    }  
    ]
},
];

function getData(id) {
    return data.find(data => data.pollId === id);
}
exports.getData = getData

function getVotes(id) {
    return votes.find(votes => votes.pollId === id);
}
exports.getVotes = getVotes